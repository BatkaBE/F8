'use client';

import { useEffect, useRef } from 'react';
import React from 'react';
export default function UnhruushGamePage() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Example: focus iframe on mount, or add postMessage logic if needed
    if (iframeRef.current) {
      iframeRef.current.focus();
    }
    // You can add more logic here if you want to communicate with the iframe
  }, []);

  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <iframe
        ref={iframeRef}
        src="/game/unhruush/index.html"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
        title="Өнхрүүш тоглоом"
        allow="camera *; microphone *"
      />
    </div>
  );
}
