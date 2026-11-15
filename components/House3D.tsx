'use client'
/**
 * A made-up three-storey house you can walk through.
 * Basement, main floor and upper floor, every room, no furniture.
 * Four construction stages: framing, insulation, pre-drywall, at close.
 * Built from instanced boxes so it stays light on a phone.
 */
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

export type ViewInfo = {
  room: string
  floor: string
  heading: string
  snap?: () => string
}

/* ───────────────────────── house data ───────────────────────── */
type R4 = [number, number, number, number] // x0, z0, x1, z1
const FW = 12
const FD = 9
const Y = [0, 2.7, 5.4] // finished floor height of each level
const H = 2.4 // wall height
const FLOORS = ['Basement', 'Main floor', 'Upper floor']
const RISER = 2.7 / 15
const RUN = 4 / 15
const UP: R4 = [3.5, 6.1, 7.5, 7.15] // stair going up, main to upper
const DOWN: R4 = [3.5, 5.0, 7.5, 6.1] // stair going down, main to basement
const ridgeY = 7.8 + 4.5 * 0.48
const roofY = (z: number) => 7.8 + (4.5 - Math.abs(z - 4.5)) * 0.48

type Kind = 'door' | 'cased' | 'window' | 'ext'
interface Op { a: number; b: number; y0: number; y1: number; kind: Kind; sw: number }
const D = (a: number, b: number, sw = 1): Op => ({ a, b, y0: 0, y1: 2.05, kind: 'door', sw })
const CS = (a: number, b: number): Op => ({ a, b, y0: 0, y1: 2.15, kind: 'cased', sw: 1 })
const WN = (a: number, b: number, y0 = 0.9, y1 = 2.1): Op => ({ a, b, y0, y1, kind: 'window', sw: 1 })
const ED = (a: number, b: number): Op => ({ a, b, y0: 0, y1: 2.1, kind: 'ext', sw: 1 })

interface Wall { L: number; ax: 'x' | 'z'; c: number; a: number; b: number; ext?: 'N' | 'S' | 'E' | 'W'; ops: Op[]; rail?: boolean }
const wl = (L: number, ax: 'x' | 'z', c: number, a: number, b: number, ops: Op[] = [], extra: Partial<Wall> = {}): Wall => ({ L, ax, c, a, b, ops, ...extra })
const bw = (a: number, b: number) => WN(a, b, 1.5, 2.2)

const WALLS: Wall[] = [
  // ── basement
  wl(0, 'x', 0, 0, 12, [bw(2, 3), bw(4.5, 5.5), bw(9, 10)], { ext: 'N' }),
  wl(0, 'x', 9, 0, 12, [bw(9, 10)], { ext: 'S' }),
  wl(0, 'z', 0, 0, 9, [bw(2.2, 3.2)], { ext: 'W' }),
  wl(0, 'z', 12, 0, 9, [bw(1, 2), WN(6.3, 7.5, 1.4, 2.3)], { ext: 'E' }),
  wl(0, 'x', 5, 0, 12, [D(1.0, 1.9), D(9.0, 9.9)]),
  wl(0, 'z', 7, 0, 5, [D(1.5, 2.4)]),
  wl(0, 'z', 3.5, 5, 9, [CS(5.05, 6.05), D(7.6, 8.5, -1)]),
  wl(0, 'x', 6.1, 3.5, 7.5),
  wl(0, 'x', 7.15, 3.5, 7.5),
  wl(0, 'z', 5.5, 7.15, 9),
  wl(0, 'z', 7.5, 5, 9, [D(7.6, 8.5)]),
  // ── main floor
  wl(1, 'x', 0, 0, 12, [WN(1.3, 2.8), WN(3.3, 4.8), WN(7.0, 8.3), WN(10.0, 11.2, 1.1, 2.1)], { ext: 'N' }),
  wl(1, 'x', 9, 0, 12, [ED(1.3, 2.4), WN(4.3, 4.9, 1.4, 2.0), ED(6.0, 6.9), WN(9.0, 10.8)], { ext: 'S' }),
  wl(1, 'z', 0, 0, 9, [WN(2.0, 3.5)], { ext: 'W' }),
  wl(1, 'z', 12, 0, 9, [WN(1.0, 2.4, 1.1, 2.1), WN(6.2, 7.8)], { ext: 'E' }),
  wl(1, 'x', 5, 0, 12, [CS(0.6, 2.9), CS(8.2, 9.8)]),
  wl(1, 'z', 6, 0, 5, [CS(0.8, 4.2)]),
  wl(1, 'z', 9, 0, 5, [CS(0.8, 4.2)]),
  wl(1, 'z', 3.5, 5, 9, [CS(6.15, 7.1), D(7.6, 8.5, -1)]),
  wl(1, 'x', 6.1, 3.5, 7.5),
  wl(1, 'x', 7.15, 3.5, 7.5),
  wl(1, 'z', 5.5, 7.15, 9),
  wl(1, 'z', 7.5, 5, 9, [CS(5.05, 6.05), D(7.6, 8.5)]),
  // ── upper floor
  wl(2, 'x', 0, 0, 12, [WN(1.5, 3.0), WN(3.5, 5.0), WN(6.8, 8.2), WN(10.0, 11.4)], { ext: 'N' }),
  wl(2, 'x', 9, 0, 12, [WN(4.2, 5.4, 1.2, 2.0), WN(10.4, 11.6)], { ext: 'S' }),
  wl(2, 'z', 0, 0, 9, [WN(2.0, 3.5), WN(5.8, 6.8, 1.3, 2.0)], { ext: 'W' }),
  wl(2, 'z', 12, 0, 9, [WN(1.8, 3.2), WN(6.2, 7.8)], { ext: 'E' }),
  wl(2, 'x', 5, 0, 12, [D(1.0, 1.9, -1), D(4.0, 4.9, -1), D(6.5, 7.3, -1), D(9.1, 9.9, -1)]),
  wl(2, 'z', 6, 0, 5),
  wl(2, 'z', 9, 0, 5),
  wl(2, 'z', 3.5, 5, 9),
  wl(2, 'x', 7.15, 3.5, 7.5),
  wl(2, 'x', 6.1, 3.5, 7.5, [], { rail: true }),
  wl(2, 'z', 7.5, 7.15, 9, [D(7.6, 8.5)]),
  wl(2, 'z', 10, 5, 9, [D(6.2, 7.0)]),
  wl(2, 'x', 7.5, 0, 3.5, [D(1.4, 2.3)]),
]

type Fl = 'wood' | 'tile' | 'carpet' | 'vinyl' | 'conc' | 'stair'
interface Room { n: string; L: number; r: R4; fl: Fl }
const ROOMS: Room[] = [
  { n: 'Recreation room', L: 0, r: [0, 0, 7, 5], fl: 'vinyl' },
  { n: 'Mechanical room', L: 0, r: [7, 0, 12, 5], fl: 'conc' },
  { n: 'Basement hall', L: 0, r: [0, 5, 3.5, 9], fl: 'vinyl' },
  { n: 'Basement bath', L: 0, r: [3.5, 7.15, 5.5, 9], fl: 'tile' },
  { n: 'Storage room', L: 0, r: [5.5, 7.15, 7.5, 9], fl: 'conc' },
  { n: 'Guest bedroom', L: 0, r: [7.5, 5, 12, 9], fl: 'vinyl' },
  { n: 'Stairs', L: 0, r: [3.5, 5, 7.5, 7.15], fl: 'stair' },
  { n: 'Great room', L: 1, r: [0, 0, 6, 5], fl: 'wood' },
  { n: 'Dining room', L: 1, r: [6, 0, 9, 5], fl: 'wood' },
  { n: 'Kitchen', L: 1, r: [9, 0, 12, 5], fl: 'tile' },
  { n: 'Foyer', L: 1, r: [0, 5, 3.5, 9], fl: 'tile' },
  { n: 'Powder room', L: 1, r: [3.5, 7.15, 5.5, 9], fl: 'tile' },
  { n: 'Mudroom', L: 1, r: [5.5, 7.15, 7.5, 9], fl: 'tile' },
  { n: 'Stairs', L: 1, r: [3.5, 5, 7.5, 7.15], fl: 'stair' },
  { n: 'Den', L: 1, r: [7.5, 5, 12, 9], fl: 'wood' },
  { n: 'Primary bedroom', L: 2, r: [0, 0, 6, 5], fl: 'carpet' },
  { n: 'Bedroom 2', L: 2, r: [6, 0, 9, 5], fl: 'carpet' },
  { n: 'Bedroom 3', L: 2, r: [9, 0, 12, 5], fl: 'carpet' },
  { n: 'Ensuite', L: 2, r: [0, 5, 3.5, 7.5], fl: 'tile' },
  { n: 'Walk-in closet', L: 2, r: [0, 7.5, 3.5, 9], fl: 'carpet' },
  { n: 'Upper hall', L: 2, r: [3.5, 5, 7.5, 6.1], fl: 'wood' },
  { n: 'Upper hall', L: 2, r: [7.5, 5, 10, 9], fl: 'wood' },
  { n: 'Stairs', L: 2, r: [3.5, 6.1, 7.5, 7.15], fl: 'stair' },
  { n: 'Main bath', L: 2, r: [3.5, 7.15, 7.5, 9], fl: 'tile' },
  { n: 'Study', L: 2, r: [10, 5, 12, 9], fl: 'carpet' },
]

const SPAWN = [
  { x: 1.75, z: 7.2, yaw: 0 },
  { x: 1.85, z: 8.3, yaw: 0 },
  { x: 8.7, z: 6.6, yaw: Math.PI / 2 },
]

/* wet walls: where supply lines run at the pre-drywall stage */
const WET = [
  { L: 1, ax: 'x', c: 7.15, off: 0.06, a: 3.6, b: 5.4 },
  { L: 1, ax: 'x', c: 0, off: 0.09, a: 9.2, b: 11.8 },
  { L: 1, ax: 'x', c: 9, off: -0.09, a: 5.6, b: 7.4 },
  { L: 2, ax: 'x', c: 9, off: -0.09, a: 3.6, b: 7.4 },
  { L: 2, ax: 'z', c: 0, off: 0.09, a: 5.1, b: 7.4 },
  { L: 0, ax: 'x', c: 7.15, off: 0.06, a: 3.6, b: 5.4 },
] as const

/* fixtures that belong to the house (not furniture) — added at close */
type Fx = [number, string, number, number, number, number, number, number]
const FIXTURES: Fx[] = [
  // kitchen cabinets and counters
  [1, 'cab', 9.1, 0, 0.085, 11.9, 0.88, 0.72], [1, 'counter', 9.1, 0.88, 0.085, 11.9, 0.92, 0.76],
  [1, 'cab', 11.28, 0, 0.72, 11.915, 0.88, 4.8], [1, 'counter', 11.24, 0.88, 0.72, 11.915, 0.92, 4.8],
  [1, 'cab', 9.1, 1.45, 0.085, 9.95, 2.15, 0.4], [1, 'cab', 11.3, 1.45, 0.085, 11.9, 2.15, 0.4],
  // powder room
  [1, 'fix', 4.3, 0, 8.35, 4.7, 0.4, 8.85], [1, 'fix', 4.32, 0.4, 8.75, 4.68, 0.8, 8.9],
  [1, 'cab', 3.6, 0, 7.21, 4.4, 0.82, 7.75], [1, 'counter', 3.6, 0.82, 7.21, 4.4, 0.86, 7.77],
  // main bath
  [2, 'fix', 3.6, 0, 8.22, 5.2, 0.55, 8.9], [2, 'fix', 6.0, 0, 8.4, 6.4, 0.4, 8.9], [2, 'fix', 6.02, 0.4, 8.78, 6.38, 0.8, 8.9],
  [2, 'cab', 5.8, 0, 7.21, 7.3, 0.82, 7.75], [2, 'counter', 5.8, 0.82, 7.21, 7.3, 0.86, 7.77],
  // ensuite
  [2, 'fix', 0.1, 0, 6.3, 1.15, 0.1, 7.4], [2, 'glass', 1.12, 0, 6.3, 1.14, 2.0, 7.4], [2, 'glass', 0.1, 0, 6.28, 1.14, 2.0, 6.3],
  [2, 'fix', 2.85, 0, 6.3, 3.4, 0.4, 6.7], [2, 'fix', 3.15, 0.4, 6.3, 3.42, 0.8, 6.7],
  [2, 'cab', 1.8, 0, 5.07, 3.2, 0.82, 5.6], [2, 'counter', 1.8, 0.82, 5.07, 3.2, 0.86, 5.62],
  // basement bath
  [0, 'fix', 4.3, 0, 8.35, 4.7, 0.4, 8.85], [0, 'fix', 4.32, 0.4, 8.75, 4.68, 0.8, 8.9],
  [0, 'cab', 3.6, 0, 7.21, 4.4, 0.82, 7.75], [0, 'counter', 3.6, 0.82, 7.21, 4.4, 0.86, 7.77],
]
/* mechanical equipment, set before drywall */
const MECH: Fx[] = [
  [0, 'mech', 10.9, 0, 3.8, 11.5, 1.35, 4.7], [0, 'heater', 10.1, 0, 4.1, 10.65, 1.5, 4.65], [0, 'panel', 10.4, 1.2, 0.085, 10.8, 1.8, 0.15],
]

/* ───────────────────────── geometry helpers ───────────────────────── */
const OUT = { N: -1, S: 1, W: -1, E: 1 } as const
const sgn = (w: Wall) => (w.ext ? OUT[w.ext] : 1)
const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v))

function rectMinus(r: R4, h: R4): R4[] {
  const [x0, z0, x1, z1] = r
  const [a0, b0, a1, b1] = h
  if (a1 <= x0 || a0 >= x1 || b1 <= z0 || b0 >= z1) return [r]
  const out: R4[] = []
  if (b0 > z0) out.push([x0, z0, x1, b0])
  if (b1 < z1) out.push([x0, b1, x1, z1])
  const m0 = Math.max(z0, b0)
  const m1 = Math.min(z1, b1)
  if (a0 > x0) out.push([x0, m0, a0, m1])
  if (a1 < x1) out.push([a1, m0, x1, m1])
  return out
}

/** wall rectangles with the openings cut out. ya/yb are heights above the floor. */
function spans(w: Wall, ya: number, yb: number): [number, number, number, number][] {
  const ops = [...w.ops].sort((p, q) => p.a - q.a)
  const out: [number, number, number, number][] = []
  let t = w.a
  for (const o of ops) {
    if (o.a > t) out.push([t, o.a, ya, yb])
    if (o.y0 > ya) out.push([o.a, o.b, ya, Math.min(o.y0, yb)])
    if (o.y1 < yb) out.push([o.a, o.b, Math.max(o.y1, ya), yb])
    t = o.b
  }
  if (w.b > t) out.push([t, w.b, ya, yb])
  return out
}

const UNIT = new THREE.BoxGeometry(1, 1, 1)
type Batch = ReturnType<typeof makeBatch>
function makeBatch(parent: THREE.Object3D) {
  const map = new Map<THREE.Material, THREE.Matrix4[]>()
  const o = new THREE.Object3D()
  const push = (m: THREE.Material) => {
    o.updateMatrix()
    let l = map.get(m)
    if (!l) { l = []; map.set(m, l) }
    l.push(o.matrix.clone())
  }
  return {
    box(m: THREE.Material, x0: number, y0: number, z0: number, x1: number, y1: number, z1: number) {
      const sx = x1 - x0, sy = y1 - y0, sz = z1 - z0
      if (sx <= 1e-4 || sy <= 1e-4 || sz <= 1e-4) return
      o.position.set((x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2)
      o.rotation.set(0, 0, 0)
      o.scale.set(sx, sy, sz)
      push(m)
    },
    rbox(m: THREE.Material, cx: number, cy: number, cz: number, sx: number, sy: number, sz: number, rx: number) {
      o.position.set(cx, cy, cz)
      o.rotation.set(rx, 0, 0)
      o.scale.set(sx, sy, sz)
      push(m)
    },
    flush() {
      map.forEach((list, m) => {
        const im = new THREE.InstancedMesh(UNIT, m, list.length)
        list.forEach((mx, i) => im.setMatrixAt(i, mx))
        im.instanceMatrix.needsUpdate = true
        parent.add(im)
      })
      map.clear()
    },
  }
}

/** a box in wall space: t along the wall, s across it (outward for exterior walls), y above the floor */
function put(B: Batch, m: THREE.Material, w: Wall, t0: number, t1: number, y0: number, y1: number, s0: number, s1: number) {
  const g = sgn(w)
  const lo = Math.min(g * s0, g * s1), hi = Math.max(g * s0, g * s1)
  const Yb = Y[w.L]
  if (w.ax === 'x') B.box(m, t0, Yb + y0, w.c + lo, t1, Yb + y1, w.c + hi)
  else B.box(m, w.c + lo, Yb + y0, t0, w.c + hi, Yb + y1, t1)
}
/** a full-length layer on a wall, with openings cut out */
function slab(B: Batch, m: THREE.Material, w: Wall, s0: number, s1: number, ya: number, yb: number, grow = 0) {
  for (const [t0, t1, r0, r1] of spans(w, ya, yb)) {
    const a = grow && t0 === w.a ? t0 - grow : t0
    const b = grow && t1 === w.b ? t1 + grow : t1
    put(B, m, w, a, b, r0, r1, s0, s1)
  }
}

/* ───────────────────────── collision ───────────────────────── */
interface Coll { x0: number; z0: number; x1: number; z1: number; ya: number; yb: number }
const COLL: Coll[] = []
for (const w of WALLS) {
  const hs = w.ext ? 0.13 : 0.07
  const pass = w.ext ? [] : w.ops.filter(o => o.kind === 'door' || o.kind === 'cased').sort((p, q) => p.a - q.a)
  const solid: [number, number][] = []
  let t = w.a
  for (const o of pass) { if (o.a > t) solid.push([t, o.a]); t = o.b }
  if (w.b > t) solid.push([t, w.b])
  for (const [a, b] of solid) {
    COLL.push(w.ax === 'x'
      ? { x0: a, x1: b, z0: w.c - hs, z1: w.c + hs, ya: Y[w.L], yb: Y[w.L] + H }
      : { z0: a, z1: b, x0: w.c - hs, x1: w.c + hs, ya: Y[w.L], yb: Y[w.L] + H })
  }
}
const RAD = 0.2
function blocked(x: number, z: number, fy: number) {
  for (const c of COLL) {
    if (fy < c.ya - 0.6 || fy > c.yb - 0.3) continue
    const dx = x - clamp(x, c.x0, c.x1), dz = z - clamp(z, c.z0, c.z1)
    if (dx * dx + dz * dz < RAD * RAD) return true
  }
  return false
}
const inR = (x: number, z: number, r: R4) => x >= r[0] && x <= r[2] && z >= r[1] && z <= r[3]
function targetY(x: number, z: number, fy: number) {
  const c: number[] = []
  const inside = x > 0 && x < FW && z > 0 && z < FD
  if (inside) {
    c.push(0)
    const inDown = inR(x, z, DOWN), inUp = inR(x, z, UP)
    if (!inDown && !inUp) c.push(Y[1]) // main deck, except where the stairs are
    if (!inUp) c.push(Y[2]) // upper deck, except over the stair opening
    if (inR(x, z, DOWN)) c.push(RISER * (clamp(Math.floor((x - 3.5) / RUN), 0, 14) + 1))
    if (inR(x, z, UP)) c.push(Y[1] + RISER * (clamp(Math.floor((x - 3.5) / RUN), 0, 14) + 1))
  }
  let best = -1
  for (const v of c) if (v <= fy + 0.6 && v > best) best = v
  return best < 0 ? fy : best
}
function roomAt(x: number, z: number, fy: number) {
  const L = clamp(Math.round(fy / 2.7), 0, 2)
  for (const r of ROOMS) if (r.L === L && inR(x, z, r.r)) return { room: r.n, L }
  return { room: 'Outside', L }
}

/* ───────────────────────── materials ───────────────────────── */
function makeMats() {
  const L = (hex: string, opacity = 1, side: THREE.Side = THREE.FrontSide) =>
    new THREE.MeshLambertMaterial({ color: hex, transparent: opacity < 1, opacity, side, depthWrite: opacity >= 1 })
  return {
    lum1: L('#D9B27B'), lum2: L('#C99D63'), osb: L('#C9A56E'), pink: L('#F0A3B5'), poly: L('#EAF2F8', 0.4),
    conc: L('#AEB2B7'), dry: L('#EDE8DC'), ceil: L('#F4F2EC'), trim: L('#FFFFFF'),
    wireY: L('#F2C230'), wireW: L('#F8FAFC'), boxB: L('#2563EB'), red: L('#DC2626'), blue: L('#2563EB'),
    abs: L('#E5E7EB'), duct: L('#B4BEC9'), brick: L('#A3573F'), siding: L('#D9D5C9'), wrap: L('#DCE6EE'),
    shingle: L('#454D5A'), glass: L('#9CC9EC', 0.35), frame: L('#F8FAFC'), door: L('#1E3A8A'), knob: L('#D97706'),
    wood: L('#C4A072'), tile: L('#C7CCD2'), carpet: L('#C8C0B4'), vinyl: L('#B5AFA6'), fconc: L('#A6AAAF'),
    tread: L('#B58A5B'), riser: L('#F8F8F6'), steps: L('#D3B07C'), cab: L('#F1F1EE'), counter: L('#E4E2DD'),
    fix: L('#FFFFFF'), ground: L('#C9D6BC'), mech: L('#CBD5E1'), heater: L('#F1F5F9'), panel: L('#9CA3AF'),
    gOsb: L('#C9A56E', 1, THREE.DoubleSide), gWrap: L('#DCE6EE', 1, THREE.DoubleSide), gSid: L('#D9D5C9', 1, THREE.DoubleSide),
  }
}
type Mats = ReturnType<typeof makeMats>

/* ───────────────────────── model builder ───────────────────────── */
interface Model { levels: THREE.Group[]; ceils: THREE.Group[]; roof: THREE.Group; shell: THREE.Group }


function frame(B: Batch, M: Mats, w: Wall, hf: number) {
  const lum = (i: number) => (i % 2 ? M.lum1 : M.lum2)
    slab(B, M.lum1, w, -hf, hf, 0, 0.04)
    slab(B, M.lum2, w, -hf, hf, H - 0.08, H)
  const ops = [...w.ops].sort((p, q) => p.a - q.a)
    let i = 0
    for (let p = w.a + 0.02; p <= w.b - 0.01; p += 0.4, i++) {
      const o = ops.find(q => p > q.a - 0.1 && p < q.b + 0.1)
      if (o) {
        if (p > o.a && p < o.b) {
          if (o.kind === 'window') put(B, lum(i), w, p - 0.02, p + 0.02, 0.04, o.y0, -hf, hf)
          put(B, lum(i), w, p - 0.02, p + 0.02, o.y1 + 0.2, H - 0.08, -hf, hf)
        }
        continue
      }
      put(B, lum(i), w, p - 0.02, p + 0.02, 0.04, H - 0.08, -hf, hf)
    }
    put(B, M.lum1, w, w.b - 0.04, w.b, 0.04, H - 0.08, -hf, hf)
    for (const o of ops) {
      put(B, M.lum1, w, o.a - 0.08, o.a - 0.04, 0.04, H - 0.08, -hf, hf)
      put(B, M.lum1, w, o.b + 0.04, o.b + 0.08, 0.04, H - 0.08, -hf, hf)
      put(B, M.lum2, w, o.a - 0.04, o.a, 0.04, o.y1, -hf, hf)
      put(B, M.lum2, w, o.b, o.b + 0.04, 0.04, o.y1, -hf, hf)
      put(B, M.lum1, w, o.a - 0.04, o.b + 0.04, o.y1, o.y1 + 0.2, -hf, hf)
      if (o.kind === 'window') put(B, M.lum2, w, o.a, o.b, o.y0 - 0.04, o.y0, -hf, hf)
    }

}

function buildHouse(stage: number, M: Mats): Model {
  const levels = [0, 1, 2].map(() => new THREE.Group())
  const ceils = [0, 1, 2].map(() => new THREE.Group())
  const roof = new THREE.Group()
  const shell = new THREE.Group()
  const BL = levels.map(g => makeBatch(g))
  const BC = ceils.map(g => makeBatch(g))
  const BR = makeBatch(roof)
  const BS = makeBatch(shell)
  const lum = (i: number) => (i % 2 ? M.lum1 : M.lum2)
  const floorMat: Record<Fl, THREE.Material> = { wood: M.wood, tile: M.tile, carpet: M.carpet, vinyl: M.vinyl, conc: M.fconc, stair: M.steps }

  /* ground, with a pit around the house so the basement can be seen from above */
  const pit: R4 = [-0.27, -0.27, FW + 0.27, FD + 0.27]
  for (const r of rectMinus([-40, -40, 52, 49], pit)) BS.box(M.ground, r[0], -0.6, r[1], r[2], 1.2, r[3])
  // front stoop
  BS.box(M.conc, 1.0, 1.2, 9.13, 2.7, 2.7, 10.1)
  BS.box(M.conc, 1.0, 1.2, 10.1, 2.7, 2.2, 10.5)
  BS.box(M.conc, 1.0, 1.2, 10.5, 2.7, 1.7, 10.9)
  // basement slab
  BL[0].box(M.fconc, -0.07, -0.2, -0.07, FW + 0.07, 0, FD + 0.07)

  /* floor decks for main and upper */
  for (const L of [1, 2]) {
    const y = Y[L]
    const hole = L === 1 ? DOWN : UP
    for (let x = 0.2; x < FW; x += 0.4) {
      for (const r of rectMinus([x - 0.02, 0, x + 0.02, FD], hole)) BL[L].box(lum(Math.round(x / 0.4)), r[0], y - 0.3, r[1], r[2], y - 0.025, r[3])
    }
    BL[L].box(M.lum1, -0.07, y - 0.3, -0.07, FW + 0.07, y - 0.025, 0.07)
    BL[L].box(M.lum1, -0.07, y - 0.3, FD - 0.07, FW + 0.07, y - 0.025, FD + 0.07)
    BL[L].box(M.lum1, -0.07, y - 0.3, 0.07, 0.07, y - 0.025, FD - 0.07)
    BL[L].box(M.lum1, FW - 0.07, y - 0.3, 0.07, FW + 0.07, y - 0.025, FD - 0.07)
    for (const r of rectMinus([-0.07, -0.07, FW + 0.07, FD + 0.07], hole)) BL[L].box(M.osb, r[0], y - 0.025, r[1], r[2], y, r[3])
  }

  /* walls */
  for (const w of WALLS) {
    const B = BL[w.L]
    const Yb = Y[w.L]
    const ext = !!w.ext
    if (w.rail) {
      const m = stage === 3 ? M.trim : M.lum1
      const n = Math.ceil((w.b - w.a) / 0.8)
      for (let i = 0; i <= n; i++) {
        const t = w.a + ((w.b - w.a) * i) / n
        B.box(m, t - 0.03, Yb, w.c - 0.03, t + 0.03, Yb + 0.95, w.c + 0.03)
      }
      B.box(m, w.a, Yb + 0.93, w.c - 0.04, w.b, Yb + 0.99, w.c + 0.04)
      B.box(m, w.a, Yb + 0.45, w.c - 0.02, w.b, Yb + 0.49, w.c + 0.02)
      continue
    }
    const hf = ext ? 0.07 : 0.045
    const grow = ext && w.ax === 'x' ? 0.13 : 0

    const ops = [...w.ops].sort((p, q) => p.a - q.a)
    if (stage < 3) frame(B, M, w, hf)

    /* exterior skin */
    if (ext) {
      const ya = w.L === 0 ? 0 : -0.3
      if (w.L === 0) slab(B, M.conc, w, 0.07, 0.27, 0, H, grow)
      else {
        slab(B, M.osb, w, 0.07, 0.09, ya, H, grow)
        if (stage < 3) { if (stage >= 1) slab(B, M.wrap, w, 0.09, 0.0925, ya, H, grow) }
        else slab(B, w.L === 1 ? M.brick : M.siding, w, 0.09, 0.13, ya, H, grow)
      }
    }

    /* insulation and vapour barrier on exterior walls */
    if (ext && stage >= 1) slab(B, M.pink, w, -0.055, 0.07, 0.04, H - 0.08)
    if (ext && stage === 2) slab(B, M.poly, w, -0.0765, -0.0745, 0.0, H)

    /* rough-in: boxes, cables */
    if (stage === 2) {
      const face = ext ? -0.075 : hf
      const sides = ext ? [-1] : [-1, 1]
      for (const sd of sides) {
        const f0 = ext ? -0.0905 : sd * hf
        const f1 = ext ? -0.0765 : sd * (hf + 0.012)
        slab(B, M.wireW, w, Math.min(f0, f1), Math.max(f0, f1), 0.31, 0.325)
        slab(B, M.wireY, w, Math.min(f0, f1), Math.max(f0, f1), 2.18, 2.2)
        for (let t = w.a + 0.7; t < w.b - 0.3; t += 2.6) {
          if (ops.some(q => t > q.a - 0.2 && t < q.b + 0.2)) continue
          const s0 = ext ? -0.115 : sd * hf
          const s1 = ext ? face : sd * (hf + 0.045)
          put(B, M.boxB, w, t - 0.04, t + 0.04, 0.3, 0.42, Math.min(s0, s1), Math.max(s0, s1))
        }
        for (const o of ops) {
          if (o.kind === 'window' || o.kind === 'ext') continue
          const t = o.b + 0.22
          if (t > w.b) continue
          const s0 = ext ? -0.115 : sd * hf
          const s1 = ext ? face : sd * (hf + 0.045)
          put(B, M.boxB, w, t - 0.04, t + 0.04, 1.1, 1.22, Math.min(s0, s1), Math.max(s0, s1))
          const c0 = ext ? -0.0905 : sd * hf
          const c1 = ext ? -0.0765 : sd * (hf + 0.012)
          put(B, M.wireY, w, t - 0.01, t + 0.01, 1.2, 2.2, Math.min(c0, c1), Math.max(c0, c1))
        }
      }
    }

    /* drywall, baseboards, windows, doors */
    if (stage === 3) {
      if (ext) {
        slab(B, M.dry, w, -0.085, -0.07, 0.0, H)
        slab(B, M.trim, w, -0.097, -0.085, 0, 0.11)
      } else {
        slab(B, M.dry, w, 0.045, 0.06, 0, H)
        slab(B, M.dry, w, -0.06, -0.045, 0, H)
        slab(B, M.trim, w, 0.06, 0.072, 0, 0.11)
        slab(B, M.trim, w, -0.072, -0.06, 0, 0.11)
      }
    }
    if (stage === 3) {
      const e0 = ext ? -0.085 : -0.06, e1 = ext ? 0.07 : 0.06
      put(B, M.trim, w, w.a, w.a + 0.012, 0, H, e0, e1)
      put(B, M.trim, w, w.b - 0.012, w.b, 0, H, e0, e1)
    }
    for (const o of ops) {
      const wide = o.b - o.a
      if (o.kind === 'window' && stage >= 1) {
        put(B, M.glass, w, o.a, o.b, o.y0, o.y1, -0.005, 0.005)
        put(B, M.frame, w, o.a, o.a + 0.05, o.y0, o.y1, -0.035, 0.035)
        put(B, M.frame, w, o.b - 0.05, o.b, o.y0, o.y1, -0.035, 0.035)
        put(B, M.frame, w, o.a, o.b, o.y0, o.y0 + 0.05, -0.035, 0.035)
        put(B, M.frame, w, o.a, o.b, o.y1 - 0.05, o.y1, -0.035, 0.035)
        if (wide > 1.1) put(B, M.frame, w, (o.a + o.b) / 2 - 0.02, (o.a + o.b) / 2 + 0.02, o.y0, o.y1, -0.03, 0.03)
      }
      if (stage === 3) {
        const sides = ext ? [-1] : [-1, 1]
        for (const sd of sides) {
          const f = ext ? 0.085 : 0.06
          const s0 = sd * f, s1 = sd * (f + 0.014)
          const lo = Math.min(s0, s1), hi = Math.max(s0, s1)
          const ss = ext ? [-f, -(f + 0.014)] : [lo, hi]
          const a0 = Math.min(ss[0], ss[1]), a1 = Math.max(ss[0], ss[1])
          put(B, M.trim, w, o.a - 0.07, o.a, o.y0 > 0 ? o.y0 - 0.03 : 0, o.y1 + 0.07, a0, a1)
          put(B, M.trim, w, o.b, o.b + 0.07, o.y0 > 0 ? o.y0 - 0.03 : 0, o.y1 + 0.07, a0, a1)
          put(B, M.trim, w, o.a, o.b, o.y1, o.y1 + 0.07, a0, a1)
          if (o.kind === 'window') put(B, M.trim, w, o.a - 0.04, o.b + 0.04, o.y0 - 0.03, o.y0, a0, a1)
        }
        const j0 = ext ? -0.085 : -0.06, j1 = ext ? 0.13 : 0.06, jt = 0.014
        const jb = o.y0 > 0 ? o.y0 : 0
        put(B, M.trim, w, o.a, o.a + jt, jb, o.y1, j0, j1)
        put(B, M.trim, w, o.b - jt, o.b, jb, o.y1, j0, j1)
        put(B, M.trim, w, o.a, o.b, o.y1 - jt, o.y1, j0, j1)
        if (o.kind === 'window') put(B, M.trim, w, o.a, o.b, o.y0, o.y0 + jt, j0, j1)
        if (o.kind === 'door') {
          const lw = wide - 0.04
          const h0 = o.sw > 0 ? 0.06 : -0.06
          const h1 = o.sw > 0 ? 0.06 + lw : -(0.06 + lw)
          put(B, M.trim, w, o.a + 0.005, o.a + 0.05, 0, 2.03, Math.min(h0, h1), Math.max(h0, h1))
        }
        if (o.kind === 'ext') {
          put(B, M.door, w, o.a + 0.03, o.b - 0.03, 0, 2.07, -0.02, 0.02)
          put(B, M.knob, w, o.b - 0.15, o.b - 0.1, 0.95, 1.05, 0.02, 0.06)
        }
      }
    }
  }

  /* gables */
  {
    const studs = stage <= 2
    for (const [x, sg] of [[0, -1], [FW, 1]] as const) {
      if (studs) {
        for (let z = 0.2; z < FD; z += 0.4) {
          const h = roofY(z) - 7.8 - 0.05
          BR.box(M.lum1, x - 0.07, Y[2] + H, z - 0.02, x + 0.07, Y[2] + H + h, z + 0.02)
        }
      }
      const tri = new THREE.Shape()
      tri.moveTo(0, 7.8); tri.lineTo(FD, 7.8); tri.lineTo(4.5, ridgeY); tri.closePath()
      const g = new THREE.ShapeGeometry(tri)
      const mk = (m: THREE.Material, off: number) => {
        const mesh = new THREE.Mesh(g, m)
        mesh.rotation.y = -Math.PI / 2
        mesh.position.x = x + sg * off
        roof.add(mesh)
      }
      mk(M.gOsb, 0.09)
      if (stage >= 1 && stage < 3) mk(M.gWrap, 0.0925)
      if (stage === 3) mk(M.gSid, 0.13)
    }
  }

  /* roof */
  {
    const ang = Math.atan(0.48)
    for (let x = 0.3; x < FW; x += 0.6) trusses(BR, M, x, ang)
    const cx = FW / 2
    const sheet = (dirSign: 1 | -1, mat: THREE.Material, lift: number, thick: number) => {
      const zEave = 4.5 + dirSign * 5
      const yEave = 7.8 - 0.5 * 0.48
      const zc = (4.5 + zEave) / 2
      const yc = (ridgeY + yEave) / 2
      const L2 = Math.hypot(5, ridgeY - yEave)
      const nz = dirSign * Math.sin(ang) * lift
      const ny = Math.cos(ang) * lift
      BR.rbox(mat, cx, yc + ny, zc + nz, FW + 1, thick, L2, dirSign * ang)
    }
    sheet(1, M.osb, 0.02, 0.03)
    sheet(-1, M.osb, 0.02, 0.03)
    if (stage === 3) { sheet(1, M.shingle, 0.055, 0.04); sheet(-1, M.shingle, 0.055, 0.04) }
  }

  /* floor finishes, ceilings */
  if (stage === 3) {
    for (const r of ROOMS) {
      if (r.fl === 'stair') continue
      const hole = r.L === 1 ? DOWN : r.L === 2 ? UP : null
      const rs = hole ? rectMinus(r.r, hole) : [r.r]
      for (const q of rs) BL[r.L].box(floorMat[r.fl], q[0], Y[r.L], q[1], q[2], Y[r.L] + 0.012, q[3])
    }
    for (const L of [0, 1, 2]) {
      const hole = L === 0 ? DOWN : L === 1 ? UP : null
      const rs = hole ? rectMinus([0, 0, FW, FD], hole) : [[0, 0, FW, FD] as R4]
      for (const q of rs) BC[L].box(M.ceil, q[0], Y[L] + H - 0.015, q[1], q[2], Y[L] + H, q[3])
    }
    for (const f of FIXTURES) {
      const m = (M as unknown as Record<string, THREE.Material>)[f[1]]
      BL[f[0]].box(m, f[2], Y[f[0]] + f[3], f[4], f[5], Y[f[0]] + f[6], f[7])
    }
  }
  if (stage >= 2) {
    for (const f of MECH) {
      const m = (M as unknown as Record<string, THREE.Material>)[f[1]]
      BL[f[0]].box(m, f[2], Y[f[0]] + f[3], f[4], f[5], Y[f[0]] + f[6], f[7])
    }
  }

  /* stairs */
  for (let k = 0; k < 15; k++) {
    const x0 = 3.5 + k * RUN, x1 = x0 + RUN
    const top = RISER * (k + 1)
    const solidMat = stage === 3 ? M.riser : M.steps
    BL[0].box(solidMat, x0, 0, 5.06, x1, top, 6.04)
    BL[1].box(solidMat, x0, Y[1], 6.16, x1, Y[1] + top, 7.09)
    if (stage === 3) {
      BL[0].box(M.tread, x0 - 0.0, top - 0.03, 5.06, x1 + 0.0, top, 6.04)
      BL[1].box(M.tread, x0 - 0.0, Y[1] + top - 0.03, 6.16, x1 + 0.0, Y[1] + top, 7.09)
    }
  }

  /* services, pre-drywall only */
  if (stage === 2) {
    for (let L = 0; L < 3; L++) {
      services(BL[L], M, L)
    }
    for (const wt of WET) {
      const Bb = BL[wt.L]
      const base = Y[wt.L]
      const line = (mat: THREE.Material, y: number) => {
        const p = wt.c + wt.off
        if (wt.ax === 'x') Bb.box(mat, wt.a, base + y, p - 0.012, wt.b, base + y + 0.024, p + 0.012)
        else Bb.box(mat, p - 0.012, base + y, wt.a, p + 0.012, base + y + 0.024, wt.b)
      }
      line(M.blue, 0.55)
      line(M.red, 0.64)
      for (const [dt, mat] of [[0.3, M.blue], [0.8, M.red]] as const) {
        const t = wt.a + dt
        const p = wt.c + wt.off
        if (wt.ax === 'x') Bb.box(mat, t - 0.012, base + 0.55, p - 0.012, t + 0.012, base + 1.1, p + 0.012)
        else Bb.box(mat, p - 0.012, base + 0.55, t - 0.012, p + 0.012, base + 1.1, t + 0.012)
      }
    }
  }

  BL.forEach(b => b.flush())
  BC.forEach(b => b.flush())
  BR.flush()
  BS.flush()
  return { levels, ceils, roof, shell }
}

/** trusses */
function trusses(B: Batch, M: Mats, x: number, ang: number) {
  const eaveY = 7.8 - 0.5 * 0.48
  const half = Math.hypot(5, ridgeY - eaveY)
  const yc = (ridgeY + eaveY) / 2 - 0.09
  B.rbox(M.lum1, x, yc, 4.5 + 2.5, 0.04, 0.14, half, ang)
  B.rbox(M.lum1, x, yc, 4.5 - 2.5, 0.04, 0.14, half, -ang)
  B.box(M.lum2, x - 0.02, 7.8, -0.0, x + 0.02, 7.95, FD)
  B.box(M.lum2, x - 0.02, 7.95, 4.45, x + 0.02, ridgeY - 0.15, 4.55)
  const strut = (z1: number, y1: number, z2: number, y2: number) => {
    const dz = z2 - z1, dy = y2 - y1
    B.rbox(M.lum1, x, (y1 + y2) / 2, (z1 + z2) / 2, 0.04, 0.09, Math.hypot(dz, dy), Math.atan2(-dy, dz))
  }
  strut(1.6, 7.95, 4.5, ridgeY - 0.35)
  strut(7.4, 7.95, 4.5, ridgeY - 0.35)
}

/** ducts and the waste stack */
function services(B: Batch, M: Mats, L: number) {
  const y = Y[L]
  if (L < 2) B.box(M.duct, 0.3, y + H + 0.04, 2.35, 11.7, y + H + 0.28, 2.85)
  if (L === 0) B.box(M.duct, 7.1, y + H - 0.4, 2.35, 7.5, y + H + 0.28, 2.85)
  B.box(M.abs, 4.45, y, 8.77, 4.56, y + H + 0.3, 8.88)
}

/* ───────────────────────── component ───────────────────────── */
const DIRS = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']
const mono = "'Fira Code',monospace"

export default function House3D({ stage, viewRef }: { stage: number; viewRef?: { current: ViewInfo } }) {
  const wrap = useRef<HTMLDivElement>(null)
  const cvs = useRef<HTMLCanvasElement>(null)
  const mini = useRef<HTMLCanvasElement>(null)
  const api = useRef<{ build: (s: number) => void; tp: (x: number, z: number, yaw: number, L: number) => void; setMode: (m: 'walk' | 'doll') => void; setCut: (c: number) => void; zoom: (d: number) => void } | null>(null)
  const stageRef = useRef(stage)
  const joy = useRef({ x: 0, y: 0 })
  const keys = useRef<Record<string, boolean>>({})
  const [mode, setModeS] = useState<'walk' | 'doll'>('walk')
  const [cut, setCutS] = useState(3)
  const [hud, setHud] = useState('')
  const [knob, setKnob] = useState({ x: 0, y: 0 })
  const [ready, setReady] = useState(false)
  const [fail, setFail] = useState(false)

  useEffect(() => {
    stageRef.current = stage
    api.current?.build(stage)
  }, [stage])

  useEffect(() => {
    const canvas = cvs.current!
    const holder = wrap.current!
    let renderer: THREE.WebGLRenderer
    try {
      renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' })
    } catch {
      window.setTimeout(() => setFail(true), 0)
      return
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    const scene = new THREE.Scene()
    scene.background = new THREE.Color('#CFE0F1')
    const camera = new THREE.PerspectiveCamera(72, 1, 0.05, 200)
    camera.rotation.order = 'YXZ'
    scene.add(new THREE.AmbientLight(0xffffff, 0.95))
    scene.add(new THREE.HemisphereLight(0xffffff, 0xd9d3c8, 0.9))
    const sun = new THREE.DirectionalLight(0xffffff, 1.7); sun.position.set(-6, 14, 9); scene.add(sun)
    const fill = new THREE.DirectionalLight(0xffffff, 0.6); fill.position.set(8, 6, -7); scene.add(fill)
    const below = new THREE.DirectionalLight(0xffffff, 0.55); below.position.set(1, -10, 2); scene.add(below)

    const M = makeMats()
    const root = new THREE.Group()
    scene.add(root)
    let model: Model | null = null

    const S = { x: SPAWN[1].x, z: SPAWN[1].z, fy: Y[1], yaw: SPAWN[1].yaw, pitch: -0.02, mode: 'walk' as 'walk' | 'doll', cut: 3, oa: -0.55, op: 0.85, od: 26 }

    const applyVis = () => {
      if (!model) return
      const top = S.cut === 3 ? 2 : S.cut
      const all = S.mode === 'walk' || S.cut === 3
      model.levels.forEach((g, L) => { g.visible = all || L <= top })
      model.ceils.forEach((g, L) => { g.visible = all || L < top })
      model.roof.visible = all
    }
    const disposeModel = () => {
      if (!model) return
      root.remove(model.shell, model.roof, ...model.levels, ...model.ceils)
      const free = (o: THREE.Object3D) => o.traverse(n => {
        const mm = n as THREE.InstancedMesh
        if (mm.isInstancedMesh) mm.dispose()
        else if ((n as THREE.Mesh).isMesh) (n as THREE.Mesh).geometry.dispose()
      })
      free(model.shell); free(model.roof); model.levels.forEach(free); model.ceils.forEach(free)
      model = null
    }
    const build = (st: number) => {
      disposeModel()
      model = buildHouse(st, M)
      root.add(model.shell, model.roof, ...model.levels, ...model.ceils)
      applyVis()
    }
    build(stageRef.current)
    window.setTimeout(() => setReady(true), 0)

    const size = () => {
      const w = holder.clientWidth || 320
      const h = canvas.clientHeight || 320
      renderer.setSize(w, h, false)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    size()
    const ro = new ResizeObserver(size)
    ro.observe(holder)

    let visible = true
    const io = new IntersectionObserver(es => { visible = es[0].isIntersecting }, { threshold: 0.01 })
    io.observe(holder)

    const place = () => {
      if (S.mode === 'walk') {
        camera.position.set(S.x, S.fy + 1.55, S.z)
        camera.rotation.set(S.pitch, S.yaw, 0)
        camera.fov = 72
      } else {
        const cp = Math.cos(S.op)
        camera.position.set(6 + S.od * cp * Math.sin(S.oa), 2.8 + S.od * Math.sin(S.op), 4.5 + S.od * cp * Math.cos(S.oa))
        camera.lookAt(6, 2.8, 4.5)
        camera.fov = 38
      }
      camera.updateProjectionMatrix()
    }

    /* look and orbit by dragging */
    let drag: { id: number; x: number; y: number } | null = null
    const down = (e: PointerEvent) => {
      drag = { id: e.pointerId, x: e.clientX, y: e.clientY }
      canvas.setPointerCapture(e.pointerId)
      holder.focus({ preventScroll: true })
    }
    const move = (e: PointerEvent) => {
      if (!drag || drag.id !== e.pointerId) return
      const dx = e.clientX - drag.x, dy = e.clientY - drag.y
      drag.x = e.clientX; drag.y = e.clientY
      if (S.mode === 'walk') {
        S.yaw += dx * 0.006
        S.pitch = clamp(S.pitch + dy * 0.004, -1.2, 1.2)
      } else {
        S.oa -= dx * 0.008
        S.op = clamp(S.op + dy * 0.006, 0.15, 1.45)
      }
    }
    const up = (e: PointerEvent) => { if (drag && drag.id === e.pointerId) drag = null }
    canvas.addEventListener('pointerdown', down)
    canvas.addEventListener('pointermove', move)
    canvas.addEventListener('pointerup', up)
    canvas.addEventListener('pointercancel', up)

    api.current = {
      build,
      tp: (x, z, yaw, L) => { S.x = x; S.z = z; S.yaw = yaw; S.pitch = -0.02; S.fy = Y[L] },
      setMode: m => { S.mode = m; applyVis() },
      setCut: c => { S.cut = c; applyVis() },
      zoom: d => { S.od = clamp(S.od + d, 10, 48) },
    }

    const map = mini.current!
    const mctx = map.getContext('2d')!
    let lastMap = 0
    let lastHud = ''
    const drawMap = (L: number) => {
      const sc = 8
      mctx.clearRect(0, 0, map.width, map.height)
      mctx.fillStyle = 'rgba(255,255,255,0.92)'
      mctx.fillRect(0, 0, map.width, map.height)
      mctx.strokeStyle = '#94A3B8'; mctx.lineWidth = 1
      for (const r of ROOMS) if (r.L === L) {
        mctx.fillStyle = r.fl === 'stair' ? '#E2E8F0' : '#F8FAFC'
        mctx.fillRect(r.r[0] * sc, r.r[1] * sc, (r.r[2] - r.r[0]) * sc, (r.r[3] - r.r[1]) * sc)
        mctx.strokeRect(r.r[0] * sc, r.r[1] * sc, (r.r[2] - r.r[0]) * sc, (r.r[3] - r.r[1]) * sc)
      }
      mctx.strokeStyle = '#1E3A8A'; mctx.lineWidth = 2
      mctx.strokeRect(1, 1, FW * sc - 2, FD * sc - 2)
      const px = S.x * sc, pz = S.z * sc
      mctx.fillStyle = '#D97706'
      mctx.beginPath(); mctx.arc(px, pz, 3.5, 0, Math.PI * 2); mctx.fill()
      mctx.strokeStyle = '#D97706'; mctx.lineWidth = 2
      mctx.beginPath(); mctx.moveTo(px, pz); mctx.lineTo(px - Math.sin(S.yaw) * 11, pz - Math.cos(S.yaw) * 11); mctx.stroke()
    }

    let last = performance.now()
    let raf = 0
    const tick = (now: number) => {
      raf = requestAnimationFrame(tick)
      if (!visible || document.hidden) { last = now; return }
      const dt = Math.min(0.05, (now - last) / 1000)
      last = now
      const k = keys.current
      if (S.mode === 'walk') {
        if (k.q || k.arrowleft) S.yaw += 1.8 * dt
        if (k.e || k.arrowright) S.yaw -= 1.8 * dt
        let fwd = -joy.current.y + ((k.w || k.arrowup) ? 1 : 0) - ((k.s || k.arrowdown) ? 1 : 0)
        let str = joy.current.x + (k.d ? 1 : 0) - (k.a ? 1 : 0)
        const len = Math.hypot(fwd, str)
        if (len > 1) { fwd /= len; str /= len }
        if (len > 0.02) {
          const sp = 1.9 * dt
          const vx = (-Math.sin(S.yaw) * fwd + Math.cos(S.yaw) * str) * sp
          const vz = (-Math.cos(S.yaw) * fwd - Math.sin(S.yaw) * str) * sp
          if (!blocked(S.x + vx, S.z, S.fy)) S.x += vx
          if (!blocked(S.x, S.z + vz, S.fy)) S.z += vz
        }
        S.fy += (targetY(S.x, S.z, S.fy) - S.fy) * (1 - Math.exp(-14 * dt))
      }
      place()
      renderer.render(scene, camera)
      if (now - lastMap > 100) {
        lastMap = now
        const { room, L } = roomAt(S.x, S.z, S.fy)
        const bearing = ((-S.yaw % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2)
        const heading = DIRS[Math.round(bearing / (Math.PI / 4)) % 8]
        drawMap(L)
        const txt = `${FLOORS[L]} · ${room}`
        if (viewRef) viewRef.current = { ...viewRef.current, room, floor: FLOORS[L], heading }
        if (txt !== lastHud) { lastHud = txt; setHud(txt) }
      }
    }
    raf = requestAnimationFrame(tick)

    if (viewRef) {
      viewRef.current = {
        room: 'Foyer', floor: FLOORS[1], heading: 'N',
        snap: () => { place(); renderer.render(scene, camera); return canvas.toDataURL('image/jpeg', 0.72) },
      }
    }
    if (typeof window !== 'undefined' && new URLSearchParams(window.location.search).has('h3d-debug')) {
      ;(window as unknown as { __h3d: unknown }).__h3d = {
        tp: (x: number, z: number, yaw: number, L: number, pitch = -0.02) => { api.current!.tp(x, z, yaw, L); S.pitch = pitch },
        mode: (m: 'walk' | 'doll', cutL = 3, a = -0.55, p = 0.85) => { S.oa = a; S.op = p; api.current!.setMode(m); api.current!.setCut(cutL) },
        state: () => ({ x: S.x, z: S.z, fy: S.fy, yaw: S.yaw }),
        key: (kk: string, on: boolean) => { keys.current[kk] = on },
      }
    }

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect(); io.disconnect()
      canvas.removeEventListener('pointerdown', down)
      canvas.removeEventListener('pointermove', move)
      canvas.removeEventListener('pointerup', up)
      canvas.removeEventListener('pointercancel', up)
      disposeModel()
      Object.values(M).forEach(m => m.dispose())
      renderer.dispose()
      api.current = null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const setMode = (m: 'walk' | 'doll') => { setModeS(m); api.current?.setMode(m) }
  const setCut = (c: number) => { setCutS(c); api.current?.setCut(c) }
  const jump = (v: string) => {
    if (!v) return
    const [L, i] = v.split(':').map(Number)
    const r = ROOMS.filter(q => q.L === L && q.fl !== 'stair')[i]
    if (!r) return
    setMode('walk')
    // stand in the room, looking toward its middle from just inside the nearest corner
    const cx = (r.r[0] + r.r[2]) / 2, cz = (r.r[1] + r.r[3]) / 2
    const sx = r.r[0] + (r.r[2] - r.r[0]) * 0.2, sz = r.r[1] + (r.r[3] - r.r[1]) * 0.2
    const yaw = Math.atan2(-(cx - sx), -(cz - sz))
    api.current?.tp(sx, sz, yaw, L)
  }
  const roomOptions = [0, 1, 2].map(L => ROOMS.filter(q => q.L === L && q.fl !== 'stair').map((q, i) => ({ v: `${L}:${i}`, n: q.n })))

  /* joystick */
  const joyMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    let dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2 - 14)
    let dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2 - 14)
    const l = Math.hypot(dx, dy)
    if (l > 1) { dx /= l; dy /= l }
    joy.current = { x: dx, y: dy }
    setKnob({ x: dx * 22, y: dy * 22 })
  }
  const joyEnd = () => { joy.current = { x: 0, y: 0 }; setKnob({ x: 0, y: 0 }) }

  const pill = (on: boolean): React.CSSProperties => ({
    fontFamily: mono, fontSize: 9, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '8px 6px',
    borderRadius: 6, cursor: 'pointer', background: on ? '#1E3A8A' : '#FFFFFF', color: on ? '#FFFFFF' : '#475569',
    border: `1px solid ${on ? '#1E3A8A' : '#CBD5E1'}`, flex: 1,
  })

  return (
    <div>
      <div
        ref={wrap}
        tabIndex={0}
        aria-label="Walkable 3D sample home. Drag to look, use the joystick or W A S D to walk."
        onKeyDown={e => {
          const k = e.key.toLowerCase()
          if (['w', 'a', 's', 'd', 'q', 'e', 'arrowup', 'arrowdown', 'arrowleft', 'arrowright'].includes(k)) { keys.current[k] = true; e.preventDefault() }
        }}
        onKeyUp={e => { keys.current[e.key.toLowerCase()] = false }}
        onBlur={() => { keys.current = {} }}
        style={{ position: 'relative', borderRadius: 10, overflow: 'hidden', border: '1px solid #CBD5E1', outline: 'none', background: '#CFE0F1' }}
      >
        <canvas ref={cvs} style={{ width: '100%', height: 320, display: 'block', touchAction: 'none', cursor: 'grab' }} />
        {fail && (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, textAlign: 'center', fontSize: 12, color: '#475569', background: '#F1F5F9' }}>
            3D view needs WebGL, which this browser has turned off.
          </div>
        )}
        <canvas ref={mini} width={96} height={72} style={{ position: 'absolute', right: 8, top: 8, borderRadius: 6, border: '1px solid #CBD5E1', width: 96, height: 72, opacity: ready && mode === 'walk' ? 1 : 0, pointerEvents: 'none' }} />
        {ready && !fail && (
          <>
            <div style={{ position: 'absolute', left: 8, top: 8, maxWidth: 'calc(100% - 128px)', fontFamily: mono, fontSize: 9, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '4px 8px', borderRadius: 5, background: 'rgba(255,255,255,0.92)', color: '#1E3A8A' }}>
              {mode === 'walk' ? hud : 'Dollhouse view'}
            </div>
            {mode === 'walk' ? (
              <div
                onPointerDown={e => { e.currentTarget.setPointerCapture(e.pointerId); joyMove(e) }}
                onPointerMove={e => { if (e.buttons || e.pointerType === 'touch') joyMove(e) }}
                onPointerUp={joyEnd}
                onPointerCancel={joyEnd}
                style={{ position: 'absolute', left: 10, bottom: 10, width: 84, height: 84, borderRadius: '50%', background: 'rgba(255,255,255,0.55)', border: '1.5px solid rgba(30,58,138,0.45)', touchAction: 'none' }}
                aria-label="Walk joystick"
              >
                <div style={{ position: 'absolute', left: 42 - 18 + knob.x, top: 42 - 18 + knob.y, width: 36, height: 36, borderRadius: '50%', background: '#1E3A8A', opacity: 0.85 }} />
              </div>
            ) : (
              <div style={{ position: 'absolute', right: 10, bottom: 10, display: 'flex', gap: 6 }}>
                {[['+', -4], ['−', 4]].map(([l, d]) => (
                  <button key={l} onClick={() => api.current?.zoom(d as number)} aria-label={l === '+' ? 'Zoom in' : 'Zoom out'} style={{ width: 34, height: 34, borderRadius: 8, border: '1px solid #CBD5E1', background: '#FFFFFF', color: '#1E3A8A', fontSize: 18, fontWeight: 700, cursor: 'pointer' }}>{l}</button>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      <div style={{ display: 'flex', gap: 6, marginTop: 8 }}>
        <button style={pill(mode === 'walk')} onClick={() => setMode('walk')}>Walk</button>
        <button style={pill(mode === 'doll')} onClick={() => setMode('doll')}>Dollhouse</button>
      </div>
      {mode === 'walk' ? (
        <select
          aria-label="Jump to a room"
          defaultValue=""
          onChange={e => { jump(e.target.value); e.target.value = '' }}
          style={{ width: '100%', marginTop: 6, padding: '9px 8px', borderRadius: 6, border: '1px solid #CBD5E1', background: '#FFFFFF', fontFamily: mono, fontSize: 10, color: '#475569' }}
        >
          <option value="">Jump to a room…</option>
          {roomOptions.map((opts, L) => (
            <optgroup key={L} label={FLOORS[L]}>
              {opts.map(o => <option key={o.v} value={o.v}>{o.n}</option>)}
            </optgroup>
          ))}
        </select>
      ) : (
        <div style={{ display: 'flex', gap: 6, marginTop: 6 }}>
          {([['Whole house', 3], ['Upper', 2], ['Main', 1], ['Basement', 0]] as const).map(([l, c]) => (
            <button key={l} style={pill(cut === c)} onClick={() => setCut(c)}>{l}</button>
          ))}
        </div>
      )}
    </div>
  )
}
