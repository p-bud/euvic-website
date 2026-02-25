export function trackEvent(event: string, payload?: Record<string, string>) {
  if (typeof window === "undefined") return;

  const data = {
    event,
    ...payload
  };

  window.dispatchEvent(new CustomEvent("euvic:analytics", { detail: data }));

  const maybeDataLayer = (window as Window & { dataLayer?: Array<Record<string, string>> }).dataLayer;
  if (Array.isArray(maybeDataLayer)) {
    maybeDataLayer.push(data);
  }
}
