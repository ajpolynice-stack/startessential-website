'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';

export default function ChatWidget() {
  const pathname = usePathname();

  // Keep the written intake form separate from the chat/SMS opt-in flow.
  if (pathname?.startsWith('/intake')) return null;

  return (
    <Script
      src="https://widgets.leadconnectorhq.com/loader.js"
      strategy="afterInteractive"
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      data-widget-id="6a06165e0d64440590cbbe03"
      data-source="WEB_USER"
    />
  );
}
