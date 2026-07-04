"use client";
import { useState } from "react";
const TABS = ["Flake","Metallic","Quartz","Solid"];
const SWS = {
  Flake:["#6B7280","#1E3A5F","#7C3AED","#B91C1C","#F59E0B","#065F46"],
  Metallic:["#9CA3AF","#C0C0C0","#7C3AED","#1E3A5F","#B45309","#374151"],
  Quartz:["#D1D5DB","#E5E7EB","#9CA3AF","#6B7280","#4B5563","#374151"],
  Solid:["#1a1a1a","#1E3A5F","#065F46","#B91C1C","#FFC107","#374151"],
};
const GLOSS = ["Matte","Satin","High Gloss"];
export function VisualizerSection() {
  const [tab, setTab] = useState("Flake");
  const [sw, setSw] = useState(0);
  const [gl, setGl] = useState("Satin");
  const tint = SWS[tab][sw];
  return (
    <section className="viz" id="visualizer">
      <div className="w">
        <div className="viz-copy">
          <div className="viz-lbl">Floor Visualizer</div>
          <h2 className="viz-h">See It <span className="g">Before</span><br/>You Build It</h2>
          <p className="viz-sub">Upload your space and visualize real epoxy floor styles in your own environment with our Visualizer.</p>
          <button className="btn btn-dark-out">Try The Visualizer →</button>
        </div>
        <div className="viz-scene">
          <img className="bg-img" src="/images/homepage-reference.png" alt="Floor preview" />
          <div className="viz-tint" style={{background:`linear-gradient(135deg,${tint}60 0%,${tint}25 100%)`}}/>
          <div className="viz-ctrl">
            <div className="vc-l">* Floor System</div>
            <div className="vc-tabs">{TABS.map(t=><div key={t} className={`vc-tab${tab===t?" on":""}`} onClick={()=>{setTab(t);setSw(0)}}>{t}</div>)}</div>
            <div className="vc-l">Flake Color</div>
            <div className="vc-sws">{SWS[tab].map((c,i)=><div key={c} className={`sw${sw===i?" on":""}`} style={{background:c}} onClick={()=>setSw(i)}/>)}</div>
            <div className="vc-l">Gloss Level</div>
            <div className="vc-gloss">{GLOSS.map(g=><div key={g} className={`gl${gl===g?" on":""}`} onClick={()=>setGl(g)}>{g}</div>)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}