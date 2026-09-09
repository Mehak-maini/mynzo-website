export function trackLead() {
  // Never send local/preview QA traffic or personal form values to GA4.
  if (typeof window === 'undefined' || !['www.mynzocarbon.com', 'mynzocarbon.com'].includes(window.location.hostname)) return;
  try {
    const analytics = window as Window & { dataLayer?: unknown[] };
    analytics.dataLayer = analytics.dataLayer || [];
    function enqueue(..._args: unknown[]) { analytics.dataLayer!.push(arguments); }
    enqueue('event', 'generate_lead', { form_id: 'get_started', method: 'website_form' });
  } catch {
    // Analytics must never turn an accepted enquiry into a form error.
  }
}
