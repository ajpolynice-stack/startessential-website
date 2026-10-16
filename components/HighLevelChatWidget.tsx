import Script from "next/script";

/**
 * HighLevel's floating chat widget loads only after a real widget ID is supplied
 * AND it has been intentionally enabled in Vercel. No dummy launcher is shown.
 * Visit HighLevel > Sites > Chat Widget > Get Code to obtain the right widget ID.
 */
export default function HighLevelChatWidget() {
  const widgetId = process.env.NEXT_PUBLIC_GHL_CHAT_WIDGET_ID?.trim();
  const enabled = process.env.NEXT_PUBLIC_GHL_CHAT_ENABLED === "true";
  if (!enabled || !widgetId || !/^[a-zA-Z0-9_-]{8,100}$/.test(widgetId)) return null;
  return (
    <Script
      id="essential-ghl-chat-widget"
      strategy="afterInteractive"
      src="https://widgets.leadconnectorhq.com/loader.js"
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      data-widget-id={widgetId}
    />
  );
}
