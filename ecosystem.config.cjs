/** @type {import('pm2').StartOptions} */
module.exports = {
  apps: [
    {
      name: 'alamostudio-docs',
      cwd: './docs',
      script: '.output/server/index.mjs',
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env_file: '.env',
      env: {
        NODE_ENV: 'production',
        HOST: '0.0.0.0',
        PORT: 3000,
        NITRO_HOST: '0.0.0.0',
        NITRO_PORT: 3000,
        NUXT_PUBLIC_SITE_URL: 'https://docs.alamostudio.dev',
      },
    },
  ],
}
