/**
 * IP API Type Definitions
 *
 * @author HMD Developments, Inc.
 * @license MIT
 */

/**
 * @typedef {Object} IPResponse
 * @property {string} ip - The client's public IP address
 * @property {string|null} country - ISO 3166-1 alpha-2 country code (e.g., "US", "DE", "JP") or null if unknown
 */

/**
 * @typedef {Object} ErrorResponse
 * @property {boolean} success - Always false for error responses
 * @property {ErrorDetails} error - Error details object
 */

/**
 * @typedef {Object} ErrorDetails
 * @property {string} code - Machine-readable error code
 * @property {string} message - Human-readable error message
 */

/**
 * @typedef {Object} GeoIPData
 * @property {string} [country] - Two-letter country code
 * @property {string} [region] - Region/state code
 * @property {string} [city] - City name
 * @property {number[]} [ll] - Latitude and longitude [lat, lon]
 * @property {number} [metro] - Metro code (US only)
 * @property {string} [area] - Area code
 * @property {string} [eu] - EU membership indicator ("1" if EU member)
 * @property {string} [timezone] - Timezone identifier
 */

/**
 * HTTP Request headers commonly used for IP detection
 * @typedef {Object} IPHeaders
 * @property {string} [x-forwarded-for] - Standard proxy header (may contain multiple IPs)
 * @property {string} [x-real-ip] - Real IP header (nginx)
 * @property {string} [x-client-ip] - Client IP header
 * @property {string} [cf-connecting-ip] - Cloudflare connecting IP
 * @property {string} [x-cluster-client-ip] - Cluster client IP
 * @property {string} [true-client-ip] - Akamai/Cloudflare Enterprise header
 */

module.exports = {};
