import { NextResponse } from "next/server";
const systems = [
  { id:1, name:"Flake Systems", slug:"flake-systems", description:"Durable. Decorative. Slip-resistant.", featured:true },
  { id:2, name:"Metallic Epoxy", slug:"metallic-epoxy", description:"High-gloss. Stunning 3D finishes.", featured:true },
  { id:3, name:"Quartz Systems", slug:"quartz-systems", description:"Textured. Tough. Natural elegance.", featured:true },
  { id:4, name:"Solid Colors", slug:"solid-colors", description:"Clean. Seamless. Modern. Minimal.", featured:true },
  { id:5, name:"Stained Concrete", slug:"stained-concrete", description:"Rich. Natural. Timeless beauty.", featured:false },
  { id:6, name:"Polished Concrete", slug:"polished-concrete", description:"Industrial grade. Effortlessly sleek.", featured:false },
];
export async function GET() { return NextResponse.json({ systems }); }