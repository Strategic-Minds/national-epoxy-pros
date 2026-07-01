"use client";
import { useState, useEffect } from "react";

export function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showBanner, setShowBanner] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const ios = /iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase());
    const inStandalone = window.matchMedia("(display-mode: standalone)").matches;
    const alreadyDismissed = localStorage.getItem("pwa-dismissed");
    if (ios && !inStandalone && !alreadyDismissed) {
      setIsIOS(true);
      setTimeout(() => setShowBanner(true), 3000);
    }
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      if (!alreadyDismissed) setTimeout(() => setShowBanner(true), 3000);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      setDeferredPrompt(null);
      setShowBanner(false);
    }
  };

  const handleDismiss = () => {
    setShowBanner(false);
    setDismissed(true);
    localStorage.setItem("pwa-dismissed", "1");
  };

  if (!showBanner || dismissed) return null;

  return (
    <div style={{position:"fixed",bottom:"20px",left:"50%",transform:"translateX(-50%)",zIndex:999,width:"calc(100% - 40px)",maxWidth:"440px",background:"#111",border:"1px solid rgba(246,184,0,0.4)",borderRadius:"16px",padding:"20px",boxShadow:"0 20px 60px rgba(0,0,0,0.5)",display:"flex",alignItems:"center",gap:"16px"}}>
      <div style={{width:"48px",height:"48px",background:"#F6B800",borderRadius:"12px",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontSize:"1.5rem"}}>⚡</div>
      <div style={{flex:1}}>
        <div style={{fontWeight:700,fontSize:"0.9rem",marginBottom:"4px"}}>Install National Epoxy Pros</div>
        {isIOS ? (
          <div style={{fontSize:"0.75rem",color:"#9CA3AF"}}>Tap <strong style={{color:"#fff"}}>Share</strong> then <strong style={{color:"#fff"}}>"Add to Home Screen"</strong> to install</div>
        ) : (
          <div style={{fontSize:"0.75rem",color:"#9CA3AF"}}>Add to your home screen for instant access</div>
        )}
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:"8px",flexShrink:0}}>
        {!isIOS && (
          <button onClick={handleInstall} style={{background:"#F6B800",color:"#0a0a0a",border:"none",borderRadius:"8px",padding:"8px 16px",fontWeight:800,fontSize:"0.75rem",textTransform:"uppercase",letterSpacing:"0.05em",cursor:"pointer",whiteSpace:"nowrap"}}>
            Install
          </button>
        )}
        <button onClick={handleDismiss} style={{background:"transparent",color:"#9CA3AF",border:"1px solid #404040",borderRadius:"8px",padding:"6px 12px",fontSize:"0.75rem",cursor:"pointer"}}>
          Later
        </button>
      </div>
    </div>
  );
}