// TikTok Pixel utility functions

// TikTok Pixel Configuration
export const TIKTOK_PIXEL_ID = 'D4IQ403C77UBQQ2RBCVG';
export const TIKTOK_API_TOKEN = import.meta.env.VITE_TIKTOK_PIXEL_API_TOKEN || 'f5379a926a1c0f3fc5c9af69aed5cf56e18715ea';

declare global {
  interface Window {
    ttq: {
      track: (eventName: string, params?: Record<string, any>) => void;
      page: () => void;
      identify: (params?: Record<string, any>) => void;
      instance: (id: string) => any;
    };
  }
}

/**
 * Track a Purchase event for TikTok Pixel
 * @param value - The purchase value (in USD)
 * @param currency - The currency code (default: 'USD')
 */
export function trackTikTokPurchase(value: number, currency: string = 'USD') {
  if (typeof window !== 'undefined' && window.ttq) {
    window.ttq.track('CompletePayment', {
      currency: currency,
      value: value,
    });
  }
}

/**
 * Track a custom event for TikTok Pixel
 * @param eventName - The name of the event
 * @param params - Optional parameters for the event
 */
export function trackTikTokEvent(eventName: string, params?: Record<string, any>) {
  if (typeof window !== 'undefined' && window.ttq) {
    window.ttq.track(eventName, params);
  }
}

/**
 * Track when user adds item to cart (TikTok Pixel)
 * @param planType - 'basic' or 'complete'
 * @param value - The purchase value in BRL
 */
export function trackTikTokAddToCart(planType: 'basic' | 'complete', value: number) {
  // Convert BRL to USD for TikTok Pixel (approximate conversion)
  // 1 BRL ≈ 0.20 USD (adjust as needed)
  const valueInUSD = value * 0.20;
  
  const contentName = planType === 'basic' ? 'Plano Básico' : 'Plano Completo';
  const eventParams = {
    content_name: contentName,
    content_category: 'Salmos Explicados',
    value: valueInUSD,
    currency: 'USD',
    quantity: 1,
  };
  
  // Dispara AddToCart quando o usuário clica no botão
  trackTikTokEvent('AddToCart', eventParams);
}

