import React, { useEffect, useState } from "react";
import App from "./App.jsx";
import Landing from "./Landing.jsx";
import EcAccess from "./EcAccess.jsx";
import { isEcMode } from "./ec.js";

const ACCESS_KEY = "tutores-tfg-access-v1";

/**
 * Códigos de acceso válidos.
 * Agrega o cambia códigos aquí cuando quieras — no distingue mayúsculas/minúsculas.
 */
const VALID_CODES = ["TUTORES-OCTUBRE2026", "EDUCON-METODOLOGIA"];

export default function Gate() {
  const [unlocked, setUnlocked] = useState(false);
  const [ready, setReady] = useState(false);
  const [ec] = useState(() => isEcMode());

  useEffect(() => {
    try {
      const saved = localStorage.getItem(ACCESS_KEY);
      if (saved && isValid(saved)) setUnlocked(true);
    } catch {
      // localStorage no disponible; se pedirá el código cada vez
    }
    setReady(true);
  }, []);

  function isValid(code) {
    const clean = code.trim().toUpperCase();
    return VALID_CODES.some((c) => c.toUpperCase() === clean);
  }

  function tryUnlock(code) {
    if (!code || !isValid(code)) return false;
    try {
      localStorage.setItem(ACCESS_KEY, code.trim());
    } catch {
      // si no se puede guardar, igual desbloqueamos para esta sesión
    }
    setUnlocked(true);
    return true;
  }

  function lockAgain() {
    try {
      localStorage.removeItem(ACCESS_KEY);
    } catch {}
    setUnlocked(false);
  }

  if (!ready) return null;

  return unlocked ? <App onLock={lockAgain} /> : ec ? <EcAccess onUnlock={tryUnlock} /> : <Landing onUnlock={tryUnlock} />;
}
