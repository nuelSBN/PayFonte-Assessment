// Configuration constants
export const API_CONFIG = {
  BASE_URL: "https://api.payfonte.com/payfusion/public/v1",
  TIMEOUT: 10000,
  RETRY_ATTEMPTS: 2,
};

export const CACHE_CONFIG = {
  STALE_TIME: 5 * 60 * 1000, // 5 minutes
  GC_TIME: 10 * 60 * 1000, // 10 minutes
  DURATION: 5 * 60 * 1000, // 5 minutes
};

export const UI_CONFIG = {
  ANIMATION_DURATION: 300,
  DEBOUNCE_DELAY: 300,
  PAGE_SIZE: 50,
};

export const ERROR_MESSAGES = {
  FETCH_FAILED: "Failed to fetch countries. Please try again.",
  NETWORK_ERROR: "Network error. Please check your connection.",
  UNKNOWN_ERROR: "An unexpected error occurred.",
  EMPTY_RESPONSE: "No countries found in the response.",
};

export const SUCCESS_MESSAGES = {
  REFRESH_SUCCESS: "Countries list updated successfully.",
};
