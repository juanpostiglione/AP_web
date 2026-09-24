import { readdir, readFile } from 'fs/promises';
import { join } from 'path';
import { notFound } from 'next/navigation';

const projectRoot = process.cwd();

// Only pre-generate common routes, allow on-demand generation for others
export async function generateStaticParams() {
  return [
    { legacy: 'chesterton' },
    { legacy: 'orange-technologies' },
    { legacy: 'worldfluid' },
  ];
}

// Allow on-demand ISR for other dynamic routes
export const dynamicParams = true;

interface PageProps {
  params: Promise<{
    legacy: string;
  }>;
}

export default async function LegacyPage({ params }: PageProps) {
  const { legacy } = await params;
  
  // Remove .html if it's already included in the param
  const basename = legacy.endsWith('.html') ? legacy : `${legacy}.html`;
  const file = basename;

  try {
    const filePath = join(projectRoot, file);
    let content = await readFile(filePath, 'utf-8');
    
    // Extract only the body content (remove html, head, body tags)
    const bodyMatch = content.match(/<body[^>]*>([\s\S]*)<\/body>/i);
    const bodyContent = bodyMatch ? bodyMatch[1] : content;
    
    return (
      <div 
        dangerouslySetInnerHTML={{ __html: bodyContent }}
        suppressHydrationWarning
      />
    );
  } catch (error) {
    console.error(`Error loading ${file}:`, error);
    notFound();
  }
}
