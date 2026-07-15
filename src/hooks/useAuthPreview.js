import { useEffect, useState } from "react";

const PREVIEW_KEY = "daily_piece_preview_member";
const PREVIEW_EVENT = "daily-piece-auth-preview";

function getPreviewState() {
  return import.meta.env.DEV && window.localStorage.getItem(PREVIEW_KEY) === "true";
}

export function setAuthPreview(isAuthenticated) {
  if (!import.meta.env.DEV) return;

  window.localStorage.setItem(PREVIEW_KEY, String(isAuthenticated));
  window.dispatchEvent(new CustomEvent(PREVIEW_EVENT, { detail: isAuthenticated }));
}

export function useAuthPreview() {
  const [isAuthenticated, setIsAuthenticated] = useState(getPreviewState);

  useEffect(() => {
    const syncPreviewState = (event) => {
      setIsAuthenticated(event.type === PREVIEW_EVENT ? event.detail : getPreviewState());
    };

    window.addEventListener(PREVIEW_EVENT, syncPreviewState);
    window.addEventListener("storage", syncPreviewState);

    return () => {
      window.removeEventListener(PREVIEW_EVENT, syncPreviewState);
      window.removeEventListener("storage", syncPreviewState);
    };
  }, []);

  return isAuthenticated;
}
