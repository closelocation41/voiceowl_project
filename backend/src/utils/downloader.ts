import axios from 'axios';

function wait(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Mock downloading a URL. If URL contains 'fail' we'll simulate failures.
 */
export async function downloadOnce(url: string): Promise<Buffer> {
  console.log('Downloading (mock) ', url);
  // Simulate network delay
  await wait(200);

  if (url.includes('fail')) {
    const err: any = new Error('Simulated download failure');
    err.code = 'E_DOWNLOAD_FAIL';
    throw err;
  }

  // Return a dummy buffer
  return Buffer.from('fake-audio-bytes');
}

export async function downloadWithRetry(url: string, maxAttempts = 3) {
  let attempt = 0;
  let lastErr: any;
  while (attempt < maxAttempts) {
    try {
      attempt++;
      return await downloadOnce(url);
    } catch (err: any) {
      lastErr = err;
      const backoff = 200 * Math.pow(2, attempt); // exponential backoff
      console.warn(`Download failed (attempt ${attempt}). Retrying in ${backoff}ms`);
      await wait(backoff);
    }
  }
  throw lastErr;
}
