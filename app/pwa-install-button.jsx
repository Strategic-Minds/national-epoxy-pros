"use client";

import { useEffect, useState } from "react";

export default function PWAInstallButton({ variant = "desktop" }) {
  const [promptEvent, setPromptEvent] = useState(null);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => {});
    }

    const standalone = window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone;
    setInstalled(Boolean(standalone));

    const handleBeforeInstall = (event) => {
      event.preventDefault();
      setPromptEvent(event);
    };

    const handleInstalled = () => {
      setInstalled(true);
      setPromptEvent(null);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstall);
    window.addEventListener("appinstalled", handleInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstall);
      window.removeEventListener("appinstalled", handleInstalled);
    };
  }, []);

  const handleInstall = async () => {
    if (installed) return;
    if (promptEvent) {
      promptEvent.prompt();
      await promptEvent.userChoice.catch(() => null);
      setPromptEvent(null);
      return;
    }
    window.location.href = "/?download=national-epoxy-pros";
  };

  return (
    <button type="button" className={`installButton ${variant}`} onClick={handleInstall} aria-label="Download National Epoxy Pros app">
      <span className="downloadGlyph" aria-hidden="true" />
      <span>{variant === "mobile" ? "Download National App" : installed ? "App Installed" : "Download App"}</span>
    </button>
  );
}
