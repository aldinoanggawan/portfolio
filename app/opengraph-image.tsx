import { ImageResponse } from 'next/og';
import { createOgImage, ogSize, ogContentType } from '@/lib/og';

export const alt = 'Aldino Anggawan';
export const size = ogSize;
export const contentType = ogContentType;

export default function Image(): ImageResponse {
  return createOgImage(
    'Aldino Anggawan',
    'Frontend Engineer · Petaling Jaya, MY · Open to Remote',
  );
}
