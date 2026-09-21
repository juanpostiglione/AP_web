import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import type { APIRoute } from 'astro';

const projectRoot = process.cwd();
const legacyPages = (await readdir(projectRoot)).filter((file) => file.endsWith('.html'));

export async function getStaticPaths() {
  return legacyPages
    .filter((file) => file !== 'index.html')
    .map((file) => ({ params: { legacy: file.slice(0, -5) } }));
}

export const GET: APIRoute = async ({ params }) => {
  const file = `${params.legacy}.html`;

  if (!legacyPages.includes(file)) {
    return new Response('Not found', { status: 404 });
  }

  return new Response(await readFile(join(projectRoot, file)), {
    headers: { 'Content-Type': 'text/html; charset=utf-8' }
  });
};