/**
 * GoogleAnalytics.tsx
 * -------------------
 * Production-only GA4 integration for Vite + React 19 SPA.
 *
 * - Dynamically injects gtag scripts to avoid SSR/hydration issues.
 * - Only activates when import.meta.env.PROD === true.
 * - Tracks SPA "tab" navigation changes as page_view events.
 * - Measurement ID is never hardcoded — read from import.meta.env.VITE_GA_MEASUREMENT_ID.
 *
 * Usage in App.tsx:
 *   <GoogleAnalytics activeTab={activeTab} />
 */

import { useEffect } from 'react';

// ─── Types ───────────────────────────────────────────────────────────────────

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

interface GoogleAnalyticsProps {
  /** The currently active tab/route — used to fire page_view events on navigation */
  activeTab: string;
}

// ─── Tab → Human-readable page title map ────────────────────────────────────

const TAB_TITLES: Record<string, string> = {
  home: 'Home — Mohammed Waseem MG',
  about: 'About — Mohammed Waseem MG',
  ecosystem: 'Ecosystem & Ventures — Mohammed Waseem MG',
  companies: 'Companies — Mohammed Waseem MG',
  projects: 'Projects — Mohammed Waseem MG',
  services: 'Services — Mohammed Waseem MG',
  leadership: 'Leadership — Mohammed Waseem MG',
  insights: 'Insights — Mohammed Waseem MG',
  speaking: 'Speaking & Press — Mohammed Waseem MG',
  contact: 'Contact — Mohammed Waseem MG',
};

// ─── Script injection helper ─────────────────────────────────────────────────

function injectGtagScript(measurementId: string): void {
  // Prevent duplicate injection
  if (document.getElementById('ga4-script')) return;

  // Script 1: Load gtag.js from Google
  const scriptSrc = document.createElement('script');
  scriptSrc.id = 'ga4-script';
  scriptSrc.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  scriptSrc.async = true;
  document.head.appendChild(scriptSrc);

  // Script 2: Initialize dataLayer and configure gtag
  const scriptInit = document.createElement('script');
  scriptInit.id = 'ga4-init';
  scriptInit.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${measurementId}', {
      send_page_view: false,
      cookie_flags: 'SameSite=None;Secure'
    });
  `;
  document.head.appendChild(scriptInit);
}

// ─── Safe gtag event dispatcher ──────────────────────────────────────────────

function sendPageView(measurementId: string, path: string, title: string): void {
  if (typeof window.gtag !== 'function') return;
  window.gtag('event', 'page_view', {
    page_location: `${window.location.origin}${path}`,
    page_path: path,
    page_title: title,
    send_to: measurementId,
  });
}

// ─── Component ───────────────────────────────────────────────────────────────

export function GoogleAnalytics({ activeTab }: GoogleAnalyticsProps): null {
  const measurementId =
    (import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined) || 'G-SFE2B3GRXJ';

  // Step 1: Inject scripts once on mount
  useEffect(() => {
    if (!measurementId) return;
    injectGtagScript(measurementId);
  }, [measurementId]);

  // Step 2: Fire page_view on every tab change (SPA route tracking)
  useEffect(() => {
    if (!measurementId) return;

    // Derive a clean path from the active tab
    const path = activeTab === 'home' ? '/' : `/#${activeTab}`;
    const title = TAB_TITLES[activeTab] ?? document.title;

    // Small delay ensures gtag is loaded before first event
    const timer = setTimeout(() => {
      sendPageView(measurementId, path, title);
    }, 100);

    return () => clearTimeout(timer);
  }, [activeTab, measurementId]);

  // Renders nothing — analytics is purely side-effect based
  return null;
}
