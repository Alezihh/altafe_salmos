// Facebook Pixel utility functions

declare global {
  interface Window {
    fbq: (
      action: string,
      eventName: string,
      params?: Record<string, any>
    ) => void;
  }
}

/**
 * Track a Purchase event for Facebook Pixel
 * @param value - The purchase value (in USD)
 * @param currency - The currency code (default: 'USD')
 */
export function trackPurchase(value: number, currency: string = 'USD') {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Purchase', {
      currency: currency,
      value: value,
    });
  }
}

/**
 * Track a custom event for Facebook Pixel
 * @param eventName - The name of the event
 * @param params - Optional parameters for the event
 */
export function trackEvent(eventName: string, params?: Record<string, any>) {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, params);
  }
}

/**
 * Track when user clicks on a checkout button
 * @param planType - 'basic' or 'complete'
 * @param value - The purchase value in BRL
 */
export function trackCheckoutClick(planType: 'basic' | 'complete', value: number) {
  // Convert BRL to USD for Facebook Pixel (approximate conversion)
  // 1 BRL ≈ 0.20 USD (adjust as needed)
  const valueInUSD = value * 0.20;
  
  trackEvent('InitiateCheckout', {
    content_name: planType === 'basic' ? 'Plano Básico' : 'Plano Completo',
    content_category: 'Salmos Explicados',
    value: valueInUSD,
    currency: 'USD',
  });
}

