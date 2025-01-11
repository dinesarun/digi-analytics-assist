import * as amplitude from '@amplitude/analytics-browser';

/**
 * Initialize Amplitude
 * @param {string} apiKey - Your Amplitude API Key
 */
function initializeAmplitude(apiKey) {
  if (!apiKey) {
    console.warn('Amplitude API Key is missing');
    return;
  }
  amplitude.init(apiKey, {"autocapture":true});
  console.log('Amplitude initialized');
}

/**
 * Initialize Microsoft Clarity
 * @param {string} projectId - Your Clarity Project ID
 */
function initializeClarity(projectId) {
  if (!projectId) {
    console.warn('Clarity Project ID is missing');
    return;
  }
  (function (c, l, a, r, i, t, y) {
    c[a] =
      c[a] ||
      function () {
        (c[a].q = c[a].q || []).push(arguments);
      };
    t = l.createElement(r);
    t.async = 1;
    t.src = `https://www.clarity.ms/tag/${i}`;
    y = l.getElementsByTagName(r)[0];
    y.parentNode.insertBefore(t, y);
  })(window, document, 'clarity', 'script', projectId);
  console.log('Microsoft Clarity initialized');
}

/**
 * Common Function to Enable Analytics
 * @param {object} options - Configuration options
 * @param {string} options.tool - The tool to enable ('amplitude' or 'clarity')
 * @param {string} options.apiKey - The API Key for Amplitude (if using)
 * @param {string} options.projectId - The Project ID for Clarity (if using)
 */
function enableAnalytics({ tool, apiKey, projectId }) {
  if (tool === 'amplitude') {
    initializeAmplitude(apiKey);
  } else if (tool === 'clarity') {
    initializeClarity(projectId);
  } else {
    console.warn('Unknown analytics tool specified');
  }
}

export function initAnalytics() {
  const config = {
    tool: 'amplitude', // or 'clarity'
    apiKey: process.env.REACT_APP_AMPLITUDE_API_KEY,
    projectId: 'YOUR_CLARITY_PROJECT_ID',
  };

  enableAnalytics(config);
}

export function trackEvent(eventName, eventProperties = {}) {
  amplitude.track(eventName, eventProperties);
  console.log(`Event tracked: ${eventName}`, eventProperties);
}
