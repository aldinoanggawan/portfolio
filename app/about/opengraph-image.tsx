import { ImageResponse } from 'next/og';
import { createOgImage, ogSize, ogContentType } from '@/lib/og';

export const alt = 'About';
export const size = ogSize;
export const contentType = ogContentType;

export default function Image(): ImageResponse {
  return createOgImage('About', 'Aldino Anggawan · Frontend Engineer');
}
