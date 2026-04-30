import { ImageResponse } from 'next/og';
import { createOgImage, ogSize, ogContentType } from '@/lib/og';

export const alt = 'Contact';
export const size = ogSize;
export const contentType = ogContentType;

export default function Image(): ImageResponse {
  return createOgImage('Contact', 'Aldino Anggawan · Frontend Engineer');
}
