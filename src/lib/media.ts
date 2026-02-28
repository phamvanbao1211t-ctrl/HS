const UNSPLASH_HOST = 'images.unsplash.com';

function isUnsplashUrl(url: string): boolean {
  try {
    return new URL(url).hostname === UNSPLASH_HOST;
  } catch {
    return false;
  }
}

export function getOptimizedImageUrl(url: string, width: number, quality = 90): string {
  if (!isUnsplashUrl(url)) return url;

  const parsed = new URL(url);
  parsed.searchParams.set('auto', 'format');
  parsed.searchParams.set('fit', 'crop');
  parsed.searchParams.set('q', String(quality));
  parsed.searchParams.set('w', String(width));

  return parsed.toString();
}

export function getImageSrcSet(url: string, widths: number[]): string | undefined {
  if (!isUnsplashUrl(url) || widths.length === 0) return undefined;
  return widths.map((width) => `${getOptimizedImageUrl(url, width)} ${width}w`).join(', ');
}

export function toSketchfabEmbedUrl(url: string): string | null {
  if (!url) return null;

  if (url.includes('/models/embed')) {
    return url;
  }

  const modelMatch = url.match(/sketchfab\.com\/3d-models\/[^/]+-([a-f0-9]{32})/i);
  if (modelMatch?.[1]) {
    return `https://sketchfab.com/models/${modelMatch[1]}/embed`;
  }

  const directMatch = url.match(/sketchfab\.com\/models\/([a-f0-9]{32})/i);
  if (directMatch?.[1]) {
    return `https://sketchfab.com/models/${directMatch[1]}/embed`;
  }

  return null;
}
