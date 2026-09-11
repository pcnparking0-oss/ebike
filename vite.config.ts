import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, type Plugin} from 'vite';

function apiDevPlugin(): Plugin {
  return {
    name: 'api-dev-server',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url ? req.url.split('?')[0] : '';
        if (url.startsWith('/api/')) {
          const endpoint = url.replace('/api/', '');
          try {
            let handlerModule: any;
            if (endpoint === 'contact') {
              handlerModule = await import('./api/contact.ts');
            } else if (endpoint === 'order') {
              handlerModule = await import('./api/order.ts');
            } else if (endpoint === 'quote') {
              handlerModule = await import('./api/quote.ts');
            } else if (endpoint === 'subscribe') {
              handlerModule = await import('./api/subscribe.ts');
            } else if (endpoint === 'send-email') {
              handlerModule = await import('./api/send-email.ts');
            }

            if (handlerModule && handlerModule.default) {
              await handlerModule.default(req, res);
              return;
            }
          } catch (err) {
            console.error('API Dev Server error:', err);
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: 'Internal server error in dev API route' }));
            return;
          }
        }
        next();
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), apiDevPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
