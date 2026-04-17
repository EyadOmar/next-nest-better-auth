import { defineConfig } from 'drizzle-kit';

const dbUrl = process.env.DB_URL;

if (!dbUrl) {
  throw new Error('DB_URL is required to run Drizzle');
}

export default defineConfig({
  schema: './src/**/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: dbUrl,
  },
});
