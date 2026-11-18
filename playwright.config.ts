import { defineConfig } from '@playwright/test';

const baseURL = 'http://127.0.0.1:4322';
const astro = process.platform === 'win32' ? '.\\node_modules\\.bin\\astro.cmd' : './node_modules/.bin/astro';

export default defineConfig({
  testDir: './tests/e2e',
  use: { baseURL },
  webServer: {
    command: `${astro} preview --host 127.0.0.1 --port 4322`,
    url: baseURL,
    timeout: 120_000,
    reuseExistingServer: true,
  },
});
