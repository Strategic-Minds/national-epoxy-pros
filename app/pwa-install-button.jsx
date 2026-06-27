"use client";

import { useEffect, useState } from "react";

export default function PwaInstallButton({ className = "" }) {
  const [installPrompt, setInstallPrompt] = useState(null);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => {});
    }

    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setInstallPrompt(event);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  if (!installPrompt) return null;

  const installApp = async () => {
    installPrompt.prompt();
    await installPrompt.userChoice.catch(() => null);
    setInstallPrompt(null);
  };

  return (
    <button className={`installButton ${className}`.trim()} type="button" onClick={installApp}>
      Install App
    </button>
  );
}
