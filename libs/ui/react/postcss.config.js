import { join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, '..');

export default {
  plugins: {
    '@tailwindcss/postcss': {
      config: join(__dirname, 'tailwind.config.js'),
    },
    autoprefixer: {},
  },
};
