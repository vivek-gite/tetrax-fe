/**
 * WebSocket configuration utility for handling development and production environments
 */

export interface WebSocketConfig {
  baseUrl: string;
  protocol: 'ws' | 'wss';
}

/**
 * Get the appropriate WebSocket configuration based on the current environment
 */
export function getWebSocketConfig(): WebSocketConfig {
    // In production, use the API subdomain or configured domain
    const apiDomain = 'api.termly.live';
    const apiProtocol = 'https';
    const wsProtocol = apiProtocol === 'https' ? 'wss' : 'ws';
    
    const config = {
      baseUrl: `${wsProtocol}://${apiDomain}`,
      protocol: wsProtocol as 'ws' | 'wss'
    };
    
    console.log('[WebSocket Config] Production mode:', config);
    return config;
}

/**
 * Construct a full WebSocket URL for a given path
 */
export function getWebSocketUrl(path: string): string {
  const config = getWebSocketConfig();
  
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  if (config.baseUrl) {
    return `${config.baseUrl}${normalizedPath}`;
  } else {
    // For development, return a relative URL that Vite can proxy
    return normalizedPath;
  }
}

/**
 * Get WebSocket URL specifically for session connections
 */
export function getSessionWebSocketUrl(sessionId: string): string {
  const url = getWebSocketUrl(`/api/s/${sessionId}`);
  console.log(`[WebSocket Config] Session URL for ${sessionId}:`, url);
  return url;
}
