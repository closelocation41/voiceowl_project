"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadOnce = downloadOnce;
exports.downloadWithRetry = downloadWithRetry;
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
/**
 * Mock downloading a URL. If URL contains 'fail' we'll simulate failures.
 */
async function downloadOnce(url) {
    console.log('Downloading (mock) ', url);
    // Simulate network delay
    await wait(200);
    if (url.includes('fail')) {
        const err = new Error('Simulated download failure');
        err.code = 'E_DOWNLOAD_FAIL';
        throw err;
    }
    // Return a dummy buffer
    return Buffer.from('fake-audio-bytes');
}
async function downloadWithRetry(url, maxAttempts = 3) {
    let attempt = 0;
    let lastErr;
    while (attempt < maxAttempts) {
        try {
            attempt++;
            return await downloadOnce(url);
        }
        catch (err) {
            lastErr = err;
            const backoff = 200 * Math.pow(2, attempt); // exponential backoff
            console.warn(`Download failed (attempt ${attempt}). Retrying in ${backoff}ms`);
            await wait(backoff);
        }
    }
    throw lastErr;
}
