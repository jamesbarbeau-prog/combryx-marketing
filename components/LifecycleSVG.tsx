'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

/* ── SVG ILLUSTRATIONS ── */

const LandSVG = () => (
  <svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
    <defs>
      <linearGradient id="landGold" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FFB800" stopOpacity="0.9"/>
        <stop offset="100%" stopColor="#CC9200" stopOpacity="0.7"/>
      </linearGradient>
    </defs>
    {/* Ground plane isometric */}
    <polygon points="130,140 30,100 130,60 230,100" fill="#1a1a1a" stroke="#FFB800" strokeWidth="1" strokeOpacity="0.4"/>
    <polygon points="130,140 30,100 30,115 130,155" fill="#111" stroke="#FFB800" strokeWidth="0.8" strokeOpacity="0.3"/>
    <polygon points="130,140 230,100 230,115 130,155" fill="#0d0d0d" stroke="#FFB800" strokeWidth="0.8" strokeOpacity="0.2"/>
    {/* Grid lines on ground */}
    <line x1="80,100" y1="80,100" x2="180,80" stroke="#FFB800" strokeWidth="0.5" strokeOpacity="0.2"/>
    <line x1="55,110" x2="205,90" stroke="#FFB800" strokeWidth="0.5" strokeOpacity="0.15"/>
    <line x1="130,60" x2="130,140" stroke="#FFB800" strokeWidth="0.5" strokeOpacity="0.2"/>
    <line x1="100,75" x2="100,148" stroke="#FFB800" strokeWidth="0.5" strokeOpacity="0.12"/>
    <line x1="160,75" x2="160,148" stroke="#FFB800" strokeWidth="0.5" strokeOpacity="0.12"/>
    {/* Plot markers / dotted boundary */}
    <rect x="85" y="75" width="90" height="50" fill="none" stroke="#FFB800" strokeWidth="1.5" strokeDasharray="4 3" strokeOpacity="0.8" rx="1"/>
    {/* Corner stakes */}
    {[[85,75],[175,75],[85,125],[175,125]].map(([x,y],i) => (
      <circle key={i} cx={x} cy={y} r="3" fill="#FFB800"/>
    ))}
    {/* Survey drone */}
    <g transform="translate(130,40)">
      <rect x="-14" y="-5" width="28" height="10" rx="2" fill="#222" stroke="#FFB800" strokeWidth="1"/>
      <circle cx="0" cy="0" r="3" fill="#FFB800"/>
      {/* Rotors */}
      {[[-18,-2],[18,-2],[-18,2],[18,2]].map(([x,y],i) => (
        <ellipse key={i} cx={x} cy={y} rx="6" ry="2" fill="none" stroke="#FFB800" strokeWidth="0.8" strokeOpacity="0.6"/>
      ))}
      {/* Legs */}
      <line x1="-8" y1="5" x2="-10" y2="12" stroke="#FFB800" strokeWidth="0.8" strokeOpacity="0.5"/>
      <line x1="8" y1="5" x2="10" y2="12" stroke="#FFB800" strokeWidth="0.8" strokeOpacity="0.5"/>
      {/* Scan beam */}
      <line x1="0" y1="12" x2="0" y2="30" stroke="#FFB800" strokeWidth="1" strokeOpacity="0.6" strokeDasharray="2 2"/>
      <circle cx="0" cy="30" r="2" fill="#FFB800" strokeOpacity="0.8"/>
    </g>
    {/* Permit stamp */}
    <g transform="translate(188,55)">
      <rect x="-18" y="-12" width="36" height="24" rx="3" fill="#0d0d0d" stroke="#FFB800" strokeWidth="1"/>
      <text x="0" y="-2" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#FFB800" fontWeight="bold">PERMIT</text>
      <text x="0" y="7" textAnchor="middle" fontFamily="monospace" fontSize="6" fill="#FFB800" opacity="0.7">APPROVED</text>
      <circle cx="12" cy="-8" r="5" fill="none" stroke="#22c55e" strokeWidth="1.5"/>
      <text x="12" y="-5" textAnchor="middle" fontSize="6" fill="#22c55e">✓</text>
    </g>
    {/* Measurement lines */}
    <line x1="85" y1="130" x2="175" y2="130" stroke="#FFB800" strokeWidth="0.8" strokeOpacity="0.5"/>
    <text x="130" y="142" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#FFB800" opacity="0.7">90m × 50m</text>
  </svg>
)

const BuildSVG = () => (
  <svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
    {/* Building frame isometric */}
    {/* Foundation */}
    <polygon points="130,170 50,135 50,145 130,180 210,145 210,135" fill="#1a1200" stroke="#FFB800" strokeWidth="0.8" strokeOpacity="0.4"/>
    {/* Left wall */}
    <polygon points="50,135 50,70 130,35 130,100" fill="#161000" stroke="#FFB800" strokeWidth="1" strokeOpacity="0.5"/>
    {/* Right wall */}
    <polygon points="210,135 210,70 130,35 130,100" fill="#0f0c00" stroke="#FFB800" strokeWidth="1" strokeOpacity="0.5"/>
    {/* Top face (partially open - under construction) */}
    <polygon points="130,35 50,70 90,88 130,100 170,88 210,70" fill="#1a1400" stroke="#FFB800" strokeWidth="1" strokeOpacity="0.6"/>
    {/* Window frames left wall */}
    {[[60,90],[60,110],[75,90],[75,110]].map(([x,y],i) => (
      <rect key={i} x={x} y={y} width="10" height="12" fill="#FFB800" fillOpacity="0.15" stroke="#FFB800" strokeWidth="0.8"/>
    ))}
    {/* Scaffolding right side */}
    <line x1="170" y1="135" x2="170" y2="35" stroke="#FFB800" strokeWidth="1" strokeOpacity="0.6"/>
    <line x1="190" y1="125" x2="190" y2="42" stroke="#FFB800" strokeWidth="1" strokeOpacity="0.6"/>
    {[55,80,105].map((y,i) => (
      <line key={i} x1="170" y1={y} x2="190" y2={y-8} stroke="#FFB800" strokeWidth="0.8" strokeOpacity="0.5"/>
    ))}
    {/* Crane */}
    <line x1="215" y1="135" x2="215" y2="25" stroke="#FFB800" strokeWidth="1.5" strokeOpacity="0.8"/>
    <line x1="215" y1="25" x2="165" y2="25" stroke="#FFB800" strokeWidth="1.5" strokeOpacity="0.8"/>
    <line x1="215" y1="25" x2="230" y2="35" stroke="#FFB800" strokeWidth="1" strokeOpacity="0.5"/>
    {/* Crane cable and hook */}
    <line x1="185" y1="25" x2="185" y2="60" stroke="#FFB800" strokeWidth="0.8" strokeOpacity="0.6" strokeDasharray="2 1"/>
    <rect x="178" y="60" width="14" height="10" rx="1" fill="#222" stroke="#FFB800" strokeWidth="0.8"/>
    {/* Phase gate badge */}
    <g transform="translate(55,52)">
      <rect x="-20" y="-10" width="40" height="20" rx="3" fill="#0d0d0d" stroke="#FFB800" strokeWidth="1"/>
      <text x="0" y="-1" textAnchor="middle" fontFamily="monospace" fontSize="6" fill="#FFB800">PHASE 3</text>
      <text x="0" y="7" textAnchor="middle" fontFamily="monospace" fontSize="6" fill="#22c55e">SIGNED ✓</text>
    </g>
    {/* Workers silhouettes */}
    <g transform="translate(100,125)" opacity="0.6">
      <circle cx="0" cy="-8" r="4" fill="#FFB800"/>
      <line x1="0" y1="-4" x2="0" y2="5" stroke="#FFB800" strokeWidth="2"/>
      <line x1="0" y1="-1" x2="-5" y2="3" stroke="#FFB800" strokeWidth="1.5"/>
      <line x1="0" y1="-1" x2="5" y2="3" stroke="#FFB800" strokeWidth="1.5"/>
    </g>
  </svg>
)

const FinanceSVG = () => (
  <svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
    {/* Bar chart isometric */}
    {[
      {x:55,h:80,w:28,label:'Q1'},
      {x:95,h:110,w:28,label:'Q2'},
      {x:135,h:95,w:28,label:'Q3'},
      {x:175,h:130,w:28,label:'Q4'},
    ].map((b,i) => (
      <g key={i}>
        {/* Bar top */}
        <polygon points={`${b.x},${170-b.h} ${b.x+b.w/2},${165-b.h} ${b.x+b.w},${170-b.h} ${b.x+b.w/2},${175-b.h}`}
          fill="#FFB800" fillOpacity={0.15+i*0.05} stroke="#FFB800" strokeWidth="0.8"/>
        {/* Bar front */}
        <polygon points={`${b.x},${170-b.h} ${b.x},${170} ${b.x+b.w/2},${175} ${b.x+b.w/2},${175-b.h}`}
          fill="#FFB800" fillOpacity={0.25+i*0.05} stroke="#FFB800" strokeWidth="0.8"/>
        {/* Bar side */}
        <polygon points={`${b.x+b.w},${170-b.h} ${b.x+b.w},${170} ${b.x+b.w/2},${175} ${b.x+b.w/2},${175-b.h}`}
          fill="#FFB800" fillOpacity={0.1+i*0.03} stroke="#FFB800" strokeWidth="0.8"/>
        <text x={b.x+b.w/2} y="186" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#FFB800" opacity="0.6">{b.label}</text>
      </g>
    ))}
    {/* Lender draw document */}
    <g transform="translate(50,30)">
      <rect x="0" y="0" width="60" height="75" rx="2" fill="#0d0d0d" stroke="#FFB800" strokeWidth="1"/>
      <rect x="0" y="0" width="60" height="14" rx="2" fill="#FFB800" fillOpacity="0.15"/>
      <text x="30" y="10" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#FFB800" fontWeight="bold">DRAW REQUEST</text>
      {[22,32,42,52,62].map((y,i) => (
        <line key={i} x1="8" y1={y} x2={i===0?52:45} y2={y} stroke="#FFB800" strokeWidth="0.7" strokeOpacity="0.4"/>
      ))}
      <text x="30" y="68" textAnchor="middle" fontFamily="monospace" fontSize="6" fill="#22c55e">AUTO-ASSEMBLED ✓</text>
    </g>
    {/* Dollar coin stack */}
    <g transform="translate(175,25)">
      {[0,5,10,15].map((y,i) => (
        <ellipse key={i} cx="20" cy={50-y} rx="20" ry="6" fill="#FFB800" fillOpacity={0.3-i*0.04} stroke="#FFB800" strokeWidth="0.8"/>
      ))}
      <text x="20" y="34" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#FFB800" fontWeight="bold">$</text>
    </g>
    {/* Invoice AI scan lines */}
    <g transform="translate(120,30)" opacity="0.7">
      <rect x="-3" y="-3" width="36" height="46" rx="2" fill="#0d0d0d" stroke="#FFB800" strokeWidth="0.8" strokeDasharray="2 2"/>
      <line x1="0" y1="5" x2="30" y2="5" stroke="#FFB800" strokeWidth="5" strokeOpacity="0.15"/>
      <line x1="0" y1="14" x2="22" y2="14" stroke="#FFB800" strokeWidth="3" strokeOpacity="0.12"/>
      <line x1="0" y1="22" x2="30" y2="22" stroke="#FFB800" strokeWidth="3" strokeOpacity="0.12"/>
      <text x="15" y="35" textAnchor="middle" fontFamily="monospace" fontSize="6" fill="#FFB800">OCR ✓</text>
    </g>
  </svg>
)

const WarrantySVG = () => (
  <svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
    {/* Shield */}
    <path d="M130,25 L175,45 L175,100 Q175,145 130,165 Q85,145 85,100 L85,45 Z"
      fill="#0d0d0d" stroke="#FFB800" strokeWidth="1.5"/>
    <path d="M130,35 L167,52 L167,100 Q167,138 130,155 Q93,138 93,100 L93,52 Z"
      fill="#1a1200" stroke="#FFB800" strokeWidth="0.8" strokeOpacity="0.5"/>
    {/* Checkmark in shield */}
    <polyline points="108,95 122,112 152,80" fill="none" stroke="#FFB800" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Timeline labels around shield */}
    {/* Day 41 */}
    <g transform="translate(38,65)">
      <rect x="-20" y="-12" width="40" height="24" rx="3" fill="#0d0d0d" stroke="#FFB800" strokeWidth="1"/>
      <text x="0" y="-2" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#FFB800" fontWeight="bold">DAY 41</text>
      <text x="0" y="8" textAnchor="middle" fontFamily="monospace" fontSize="6" fill="#888">Initial Form</text>
      <line x1="20" y1="0" x2="33" y2="0" stroke="#FFB800" strokeWidth="0.8" strokeOpacity="0.5"/>
    </g>
    {/* 120 days */}
    <g transform="translate(38,100)">
      <rect x="-20" y="-12" width="40" height="24" rx="3" fill="#0d0d0d" stroke="#FFB800" strokeWidth="1"/>
      <text x="0" y="-2" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#FFB800" fontWeight="bold">120D</text>
      <text x="0" y="8" textAnchor="middle" fontFamily="monospace" fontSize="6" fill="#888">BRP</text>
      <line x1="20" y1="0" x2="33" y2="0" stroke="#FFB800" strokeWidth="0.8" strokeOpacity="0.5"/>
    </g>
    {/* Defence vault */}
    <g transform="translate(222,65)">
      <rect x="-20" y="-12" width="40" height="24" rx="3" fill="#0d0d0d" stroke="#22c55e" strokeWidth="1"/>
      <text x="0" y="-2" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#22c55e" fontWeight="bold">VAULT</text>
      <text x="0" y="8" textAnchor="middle" fontFamily="monospace" fontSize="6" fill="#888">Ready</text>
      <line x1="-20" y1="0" x2="-33" y2="0" stroke="#22c55e" strokeWidth="0.8" strokeOpacity="0.5"/>
    </g>
    {/* +30 */}
    <g transform="translate(222,100)">
      <rect x="-20" y="-12" width="40" height="24" rx="3" fill="#0d0d0d" stroke="#FFB800" strokeWidth="1"/>
      <text x="0" y="-2" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#FFB800" fontWeight="bold">+30D</text>
      <text x="0" y="8" textAnchor="middle" fontFamily="monospace" fontSize="6" fill="#888">Pre-RFC</text>
      <line x1="-20" y1="0" x2="-33" y2="0" stroke="#FFB800" strokeWidth="0.8" strokeOpacity="0.5"/>
    </g>
    {/* Home at bottom */}
    <g transform="translate(130,175)">
      <polygon points="-15,-12 0,-22 15,-12 15,0 -15,0" fill="#111" stroke="#FFB800" strokeWidth="1" strokeOpacity="0.6"/>
      <rect x="-5" y="-8" width="10" height="8" fill="#FFB800" fillOpacity="0.3"/>
    </g>
  </svg>
)

const CondoSVG = () => (
  <svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
    {/* High-rise building isometric */}
    {/* Main tower */}
    <polygon points="130,10 170,30 170,165 130,185 90,165 90,30" fill="none" stroke="#FFB800" strokeWidth="0" />
    {/* Front face */}
    <polygon points="90,30 90,165 130,185 130,50" fill="#111400" stroke="#FFB800" strokeWidth="1" strokeOpacity="0.5"/>
    {/* Right face */}
    <polygon points="170,30 170,165 130,185 130,50" fill="#0d1000" stroke="#FFB800" strokeWidth="1" strokeOpacity="0.4"/>
    {/* Top */}
    <polygon points="90,30 130,10 170,30 130,50" fill="#1a1800" stroke="#FFB800" strokeWidth="1" strokeOpacity="0.6"/>
    {/* Windows left face - grid */}
    {[0,1,2,3,4,5,6].map(row =>
      [0,1].map(col => (
        <rect key={`${row}-${col}`}
          x={96+col*16} y={40+row*18} width="11" height="12"
          fill="#FFB800" fillOpacity={Math.random()*0.3+0.05}
          stroke="#FFB800" strokeWidth="0.5" strokeOpacity="0.4"/>
      ))
    )}
    {/* Windows right face */}
    {[0,1,2,3,4,5,6].map(row =>
      [0,1].map(col => (
        <rect key={`r${row}-${col}`}
          x={134+col*14} y={42+row*18} width="10" height="12"
          fill="#FFB800" fillOpacity={Math.random()*0.2+0.03}
          stroke="#FFB800" strokeWidth="0.5" strokeOpacity="0.3"/>
      ))
    )}
    {/* Reserve fund meter */}
    <g transform="translate(42,60)">
      <rect x="0" y="0" width="16" height="80" rx="3" fill="#0d0d0d" stroke="#FFB800" strokeWidth="0.8"/>
      <rect x="2" y="30" width="12" height="48" rx="2" fill="#FFB800" fillOpacity="0.6"/>
      <text x="8" y="-5" textAnchor="middle" fontFamily="monospace" fontSize="6" fill="#FFB800">FUND</text>
      <text x="8" y="94" textAnchor="middle" fontFamily="monospace" fontSize="6" fill="#FFB800">60%</text>
    </g>
    {/* Amenity key badge */}
    <g transform="translate(212,90)">
      <rect x="-22" y="-15" width="44" height="30" rx="3" fill="#0d0d0d" stroke="#22c55e" strokeWidth="1"/>
      <text x="0" y="-4" textAnchor="middle" fontFamily="monospace" fontSize="6" fill="#22c55e">KEY ISSUED</text>
      <text x="0" y="6" textAnchor="middle" fontSize="12" fill="#22c55e">🔑</text>
    </g>
    {/* Rooftop amenity indicator */}
    <g transform="translate(130,10)">
      <circle cx="0" cy="-8" r="6" fill="#FFB800" fillOpacity="0.2" stroke="#FFB800" strokeWidth="0.8"/>
      <text x="0" y="-5" textAnchor="middle" fontSize="7" fill="#FFB800">★</text>
    </g>
  </svg>
)

const PMSvg = () => (
  <svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
    {/* Connected buildings network */}
    {/* Building 1 - left */}
    <g transform="translate(55,80)">
      <polygon points="-20,60 -20,0 0,-10 20,0 20,60" fill="#111" stroke="#FFB800" strokeWidth="0.8" strokeOpacity="0.5"/>
      <polygon points="-20,0 0,-10 20,0 0,10" fill="#1a1a00" stroke="#FFB800" strokeWidth="0.8" strokeOpacity="0.5"/>
      {[10,25,40].map(y => (
        <rect key={y} x="-10" y={y} width="8" height="8" fill="#FFB800" fillOpacity="0.2" stroke="#FFB800" strokeWidth="0.5"/>
      ))}
    </g>
    {/* Building 2 - center large */}
    <g transform="translate(130,50)">
      <polygon points="-28,110 -28,0 0,-15 28,0 28,110" fill="#111" stroke="#FFB800" strokeWidth="1" strokeOpacity="0.7"/>
      <polygon points="-28,0 0,-15 28,0 0,15" fill="#1a1800" stroke="#FFB800" strokeWidth="1" strokeOpacity="0.6"/>
      {[0,1,2,3,4].map(row => [0,1].map(col => (
        <rect key={`${row}${col}`} x={-20+col*16} y={22+row*18} width="10" height="11"
          fill="#FFB800" fillOpacity={row===0&&col===0?0.5:0.15} stroke="#FFB800" strokeWidth="0.4"/>
      )))}
    </g>
    {/* Building 3 - right */}
    <g transform="translate(205,95)">
      <polygon points="-20,55 -20,0 0,-10 20,0 20,55" fill="#111" stroke="#FFB800" strokeWidth="0.8" strokeOpacity="0.5"/>
      <polygon points="-20,0 0,-10 20,0 0,10" fill="#1a1a00" stroke="#FFB800" strokeWidth="0.8" strokeOpacity="0.5"/>
      {[10,25,40].map(y => (
        <rect key={y} x="-10" y={y} width="8" height="8" fill="#FFB800" fillOpacity="0.12" stroke="#FFB800" strokeWidth="0.5"/>
      ))}
    </g>
    {/* Connection lines */}
    <line x1="75" y1="120" x2="102" y2="115" stroke="#FFB800" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="3 2"/>
    <line x1="158" y1="115" x2="185" y2="120" stroke="#FFB800" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="3 2"/>
    {/* IoT sensor alert */}
    <g transform="translate(55,60)">
      <circle cx="0" cy="0" r="12" fill="#0d0d0d" stroke="#ef4444" strokeWidth="1.5"/>
      <text x="0" y="4" textAnchor="middle" fontSize="12">💧</text>
    </g>
    {/* Alert label */}
    <g transform="translate(30,35)">
      <rect x="-22" y="-10" width="54" height="20" rx="3" fill="#0d0d0d" stroke="#ef4444" strokeWidth="1"/>
      <text x="5" y="4" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#ef4444">SENSOR ALERT</text>
      <line x1="27" y1="0" x2="36" y2="18" stroke="#ef4444" strokeWidth="0.8" strokeOpacity="0.5"/>
    </g>
    {/* Ticket auto-created badge */}
    <g transform="translate(205,60)">
      <rect x="-25" y="-12" width="50" height="24" rx="3" fill="#0d0d0d" stroke="#22c55e" strokeWidth="1"/>
      <text x="0" y="-2" textAnchor="middle" fontFamily="monospace" fontSize="6" fill="#22c55e">TICKET CREATED</text>
      <text x="0" y="8" textAnchor="middle" fontFamily="monospace" fontSize="6" fill="#888">Auto-dispatch</text>
    </g>
  </svg>
)

const RentalSVG = () => (
  <svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
    {/* Row houses isometric */}
    {[0,1,2,3].map(i => (
      <g key={i} transform={`translate(${45+i*50},${90-i*8})`}>
        {/* House body */}
        <polygon points="-20,55 -20,0 0,-8 20,0 20,55" fill="#111" stroke="#FFB800" strokeWidth={i===1?1.5:0.8} strokeOpacity={i===1?0.8:0.4}/>
        {/* Roof */}
        <polygon points="-22,-2 0,-15 22,-2 0,5" fill="#1a1600" stroke="#FFB800" strokeWidth={i===1?1.2:0.7} strokeOpacity={i===1?0.7:0.4}/>
        {/* Door */}
        <rect x="-5" y="32" width="10" height="14" rx="1" fill="#FFB800" fillOpacity="0.2" stroke="#FFB800" strokeWidth="0.6"/>
        {/* Windows */}
        <rect x="-16" y="12" width="10" height="10" fill="#FFB800" fillOpacity={i===1?0.3:0.1} stroke="#FFB800" strokeWidth="0.5"/>
        <rect x="6" y="12" width="10" height="10" fill="#FFB800" fillOpacity={i===1?0.3:0.1} stroke="#FFB800" strokeWidth="0.5"/>
        {/* Occupied indicator for house 1 */}
        {i===1 && <circle cx="0" cy="-20" r="5" fill="#22c55e" fillOpacity="0.8"/>}
        {i===1 && <text x="0" y="-16" textAnchor="middle" fontSize="6" fill="#000" fontWeight="bold">✓</text>}
        {i===0 && <circle cx="0" cy="-18" r="5" fill="#ef4444" fillOpacity="0.8"/>}
        {i===0 && <text x="0" y="-14" textAnchor="middle" fontSize="7" fill="#fff">!</text>}
      </g>
    ))}
    {/* Lease document */}
    <g transform="translate(30,30)">
      <rect x="0" y="0" width="48" height="60" rx="2" fill="#0d0d0d" stroke="#FFB800" strokeWidth="0.8"/>
      <rect x="0" y="0" width="48" height="12" rx="2" fill="#FFB800" fillOpacity="0.12"/>
      <text x="24" y="9" textAnchor="middle" fontFamily="monospace" fontSize="6" fill="#FFB800">LEASE</text>
      {[18,26,34,42,50].map(y => (
        <line key={y} x1="6" y1={y} x2="42" y2={y} stroke="#FFB800" strokeWidth="0.6" strokeOpacity="0.3"/>
      ))}
      <text x="24" y="56" textAnchor="middle" fontFamily="monospace" fontSize="5" fill="#22c55e">RTA ✓</text>
    </g>
    {/* Vacancy stats */}
    <g transform="translate(215,40)">
      <rect x="-25" y="-15" width="50" height="35" rx="3" fill="#0d0d0d" stroke="#FFB800" strokeWidth="0.8"/>
      <text x="0" y="-4" textAnchor="middle" fontFamily="monospace" fontSize="6" fill="#888">VACANCY</text>
      <text x="0" y="10" textAnchor="middle" fontFamily="monospace" fontSize="14" fill="#FFB800" fontWeight="bold">3%</text>
    </g>
  </svg>
)

/* ── STAGE DATA ── */
const stages = [
  { n:'01', color:'#ef4444', label:'Land Acquisition',  title:'FIND THE LAND.\nMODEL THE DEAL.\nGET THE PERMIT.', desc:'AI pro-forma from your own comparable projects. Live municipal zoning API — permitted uses, density, setbacks. Permit approved → build phase unlocks automatically.', SVG: LandSVG,    connection:'Permit approved → Build phase unlocks in Stage 02' },
  { n:'02', color:'#f97316', label:'Build & Field Ops',  title:'BUILD IT.\nTRACK EVERY PHASE.\nDRIVE THE DRAWS.', desc:'CPM scheduling per lot. Phase gate sign-offs from the field app — photo required. Phase signed on site → lender draw assembled in the office automatically.', SVG: BuildSVG,   connection:'Phase signed → draw auto-assembled in Stage 03' },
  { n:'03', color:'#3b82f6', label:'Financial Ledger',   title:'TRACK THE DOLLARS.\nFORECAST\nTHE CASH FLOW.', desc:'Job costing, invoice OCR, lender draw packages. AI extracts invoices, matches to POs, flags anomalies. Budget vs actual alerts at 80% and 95%.', SVG: FinanceSVG, connection:'Unit sold → revenue recorded, Tarion clock triggered' },
  { n:'04', color:'#FFB800', label:'Warranty & PDI',     title:'HANDLE THE PDI.\nTRACK THE WARRANTY.\nAUTOMATE TARION.', desc:'CPP/PDI signature starts the Tarion clock. Day 41, 183, 366 auto-submissions tracked. 120-day BRP + 30-day pre-conciliation. Defence Vault ready from day one.', SVG: WarrantySVG, connection:'Unit closed → keys revoked, homeowner provisioned' },
  { n:'05', color:'#a855f7', label:'Condo Corporation',  title:'MANAGE THE BUILDING.\nORCHESTRATE\nHANDOVER.', desc:'Common element tracking, reserve fund AI forecasting, owner portal, amenity booking with IoT key issuance. Board packages auto-generated from live data.', SVG: CondoSVG,   connection:'Sensor spike → warranty case created automatically' },
  { n:'06', color:'#22c55e', label:'Rental & Prop Mgmt', title:'MANAGE THE ASSETS.\nOPTIMIZE\nRENTAL USE.', desc:'RTA-compliant lease management, tenant portal, maintenance dispatch, vacancy tracking. IoT sensors create warranty cases before the tenant calls.', SVG: RentalSVG,  connection:'Portfolio AI learns from every building, every year' },
]

export default function LifecycleSVG() {
  const [visible, setVisible] = useState<number[]>([])
  const refs = useRef<(HTMLDivElement|null)[]>([])

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const i = Number((e.target as HTMLElement).dataset.index)
          setVisible(v => v.includes(i) ? v : [...v, i])
        }
      })
    }, { threshold: 0.15 })
    refs.current.forEach(el => el && obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section style={{ background:'#080808', padding:'96px 0' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 48px' }}>

        {/* header */}
        <div style={{ textAlign:'center', marginBottom:64 }}>
          <div style={{ fontFamily:"'Fira Code',monospace", fontSize:10, textTransform:'uppercase', letterSpacing:'0.22em', color:'#FFB800', marginBottom:12, display:'flex', alignItems:'center', justifyContent:'center', gap:12 }}>
            <span style={{ width:32, height:1, background:'#FFB800', opacity:0.6, display:'inline-block' }}/>
            The Full Lifecycle
            <span style={{ width:32, height:1, background:'#FFB800', opacity:0.6, display:'inline-block' }}/>
          </div>
          <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'clamp(36px,5vw,64px)', letterSpacing:'0.04em', lineHeight:0.97, color:'#F5F5F5', marginBottom:16 }}>
            From the land deal to <span style={{ color:'#FFB800' }}>year seven.</span><br/>One connected system.
          </h2>
          <p style={{ fontSize:15, color:'#888', lineHeight:1.75, maxWidth:520, margin:'0 auto' }}>
            Every stage feeds the next automatically. Scroll to see how each part of your operation connects — and what fires without anyone touching it.
          </p>
        </div>

        {/* stages */}
        <div style={{ display:'flex', flexDirection:'column', gap:3 }}>
          {stages.map((s, i) => {
            const vis = visible.includes(i)
            const flip = i % 2 !== 0
            return (
              <div key={s.n}>
                <div
                  ref={el => { refs.current[i] = el }}
                  data-index={i}
                  style={{
                    display:'grid',
                    gridTemplateColumns: flip ? '1fr 1fr' : '1fr 1fr',
                    gap:3,
                    opacity: vis ? 1 : 0,
                    transform: vis ? 'translateY(0)' : 'translateY(28px)',
                    transition:'opacity 0.7s ease, transform 0.7s ease',
                    borderRadius:12,
                    overflow:'hidden',
                    border:`1px solid ${vis ? s.color+'33' : 'rgba(255,255,255,0.05)'}`,
                  }}>

                  {/* SVG illustration side */}
                  <div style={{
                    order: flip ? 1 : 0,
                    background:'#0d0d0d',
                    padding:'40px 32px',
                    display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
                    position:'relative', minHeight:280,
                    borderRight: flip ? 'none' : `1px solid rgba(255,255,255,0.05)`,
                    borderLeft: flip ? `1px solid rgba(255,255,255,0.05)` : 'none',
                  }}>
                    {/* Stage number hex */}
                    <div style={{
                      position:'absolute', top:20, left:20,
                      width:44, height:44, background:s.color,
                      clipPath:'polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)',
                      display:'flex', alignItems:'center', justifyContent:'center',
                      boxShadow:`0 0 20px ${s.color}55`,
                    }}>
                      <span style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:15, letterSpacing:'0.06em', color:'#000', fontWeight:'bold' }}>{s.n}</span>
                    </div>
                    {/* Module label */}
                    <div style={{ position:'absolute', top:22, right:16, fontFamily:"'Fira Code',monospace", fontSize:9, textTransform:'uppercase', letterSpacing:'0.14em', color:s.color, opacity:0.8 }}>{s.label}</div>
                    {/* SVG */}
                    <div style={{ width:'100%', maxWidth:260, height:180 }}>
                      <s.SVG />
                    </div>
                  </div>

                  {/* Content side */}
                  <div style={{
                    order: flip ? 0 : 1,
                    background:'#0a0a0a',
                    padding:'40px 36px',
                    display:'flex', flexDirection:'column', justifyContent:'center',
                  }}>
                    <h3 style={{
                      fontFamily:"'Bebas Neue',sans-serif",
                      fontSize:'clamp(26px,2.8vw,38px)',
                      letterSpacing:'0.04em', lineHeight:1.05,
                      color:'#F5F5F5', marginBottom:16,
                      whiteSpace:'pre-line',
                    }}>{s.title}</h3>
                    <p style={{ fontSize:13, color:'#777', lineHeight:1.75, marginBottom:20 }}>{s.desc}</p>
                    {/* outcome stat */}
                    <div style={{
                      display:'inline-flex', alignItems:'center', gap:8,
                      fontFamily:"'Fira Code',monospace", fontSize:9,
                      textTransform:'uppercase', letterSpacing:'0.1em',
                      color:s.color, background:`${s.color}12`,
                      border:`1px solid ${s.color}30`,
                      padding:'6px 12px', borderRadius:5, width:'fit-content',
                    }}>
                      <span style={{ fontSize:12 }}>→</span>
                      {s.connection}
                    </div>
                  </div>
                </div>

                {/* connector between stages */}
                {i < stages.length - 1 && (
                  <div style={{ display:'flex', flexDirection:'column', alignItems:'center', padding:'0', position:'relative', zIndex:2 }}>
                    <div style={{ width:2, height:32, background:`linear-gradient(to bottom, ${s.color}, ${stages[i+1].color})`, opacity: vis ? 0.6 : 0.15, transition:'opacity 0.5s' }}/>
                    <div style={{ width:40, height:40, background:'#0a0a0a', border:`2px solid ${vis ? s.color : 'rgba(255,255,255,0.08)'}`, clipPath:'polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)', display:'flex', alignItems:'center', justifyContent:'center', transition:'all 0.5s', boxShadow: vis ? `0 0 14px ${s.color}44` : 'none' }}>
                      <span style={{ fontFamily:"'Fira Code',monospace", fontSize:10, color: vis ? s.color : '#333' }}>↓</span>
                    </div>
                    <div style={{ width:2, height:32, background:`linear-gradient(to bottom, ${s.color}, ${stages[i+1].color})`, opacity: vis ? 0.6 : 0.15, transition:'opacity 0.5s' }}/>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* bottom CTA */}
        <div style={{ textAlign:'center', marginTop:56 }}>
          <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'clamp(24px,3.5vw,44px)', letterSpacing:'0.04em', color:'#F5F5F5', marginBottom:20 }}>
            One event. Every connected stage <span style={{ color:'#FFB800' }}>reacts.</span>
          </div>
          <Link href="/platform" style={{
            display:'inline-flex', alignItems:'center', gap:8,
            background:'#FFB800', color:'#000',
            fontFamily:"'Fira Code',monospace", fontSize:11, fontWeight:600,
            letterSpacing:'0.12em', textTransform:'uppercase',
            padding:'16px 32px', borderRadius:7, textDecoration:'none',
            boxShadow:'0 0 24px rgba(255,184,0,0.3)',
          }}>
            Explore the Full Platform →
          </Link>
        </div>
      </div>
    </section>
  )
}
