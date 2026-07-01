"use client";
import { useState } from "react";

const TABS = ["Flake","Metallic","Quartz","Solid"];
const SWATCHES = {
  Flake: ["#6B7280","#1E3A5F","#7C3AED","#B91C1C","#F59E0B","#065F46"],
  Metallic: ["#9CA3AF","#C0C0C0","#7C3AED","#1E3A5F","#B45309","#374151"],
  Quartz: ["#D1D5DB","#E5E7EB","#9CA3AF","#6B7280","#4B5563","#374151"],
  Solid: ["#1a1a1a","#1E3A5F","#065F46","#B91C1C","#F5A900","#374151"],
};
const GLOSS = ["Matte","Satin","High Gloss"];

export function VisualizerSection() {
  const [tab, setTab] = useState("Flake");
  const [swatch, setSwatch] = useState(0);
  const [gloss, setGloss] = useState("Satin");

  const tintColor = SWATCHES[tab][swatch];

  return (
    <section className="viz-section" id="visualizer">
      <div className="viz-inner">
        <div className="viz-copy">
          <div className="viz-eyebrow">Floor Visualizer</div>
          <h2 className="viz-h2">See It <span className="gold">Before</span><br/>You Build It</h2>
          <p className="viz-sub">Upload your space and visualize real epoxy floor styles in your own environment with our Visualizer.</p>
          <button className="btn-outline-dark">Try The Visualizer →</button>
        </div>
        <div className="viz-preview">
          <img className="viz-preview-img" src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=75" alt="Floor preview"/>
          <div className="viz-tint" style={{background:`linear-gradient(135deg,${tintColor}55 0%,${tintColor}22 100%)`}}/>
          <div className="viz-panel">
            <div className="viz-panel-lbl">* Floor System</div>
            <div className="viz-tabs">
              {TABS.map(t=>(
                <div key={t} className={`viz-tab${tab===t?" active":""}`} onClick={()=>{setTab(t);setSwatch(0)}}>{t}</div>
              ))}
            </div>
            <div className="viz-panel-lbl">{tab} Color</div>
            <div className="viz-swatches">
              {SWATCHES[tab].map((c,i)=>(
                <div key={c} className={`viz-swatch${swatch===i?" active":""}`} style={{background:c}} onClick={()=>setSwatch(i)}/>
              ))}
            </div>
            <div className="viz-panel-lbl">Gloss Level</div>
            <div className="gloss-opts">
              {GLOSS.map(g=>(
                <div key={g} className={`gloss-opt${gloss===g?" active":""}`} onClick={()=>setGloss(g)}>{g}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}