import { ImageResponse } from 'next/og';
import { createOgImage, ogSize, ogContentType } from '@/lib/og';
import { siteConfig } from '@/lib/site';

export const alt = 'Contact';
export const size = ogSize;
export const contentType = ogContentType;

export default function Image(): ImageResponse {
  return createOgImage('Contact', `${siteConfig.name} · Frontend Engineer`);
}
