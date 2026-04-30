import React from 'react';
import { ImageResponse } from 'next/og';
import { readFileSync } from 'fs';
import { join } from 'path';
import { siteConfig } from '@/lib/site';

interface OgLayoutProps {
  title: string;
  subtitle: string;
}

export const OgLayout = ({
  title,
  subtitle,
}: OgLayoutProps): React.ReactElement => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        backgroundColor: '#222831',
        fontFamily: 'Inter',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '4px',
          backgroundColor: '#E07B00',
        }}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          flex: 1,
          paddingLeft: '72px',
          paddingRight: '72px',
          paddingBottom: '48px',
        }}
      >
        <div
          style={{
            fontSize: '64px',
            fontWeight: 'bold',
            color: '#FFFFFF',
            lineHeight: 1.1,
            marginBottom: '16px',
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: '28px',
            color: '#9CA3AF',
            lineHeight: 1.4,
          }}
        >
          {subtitle}
        </div>
      </div>
      <div
        style={{
          paddingLeft: '72px',
          paddingBottom: '48px',
          fontSize: '22px',
          color: '#E07B00',
        }}
      >
        {siteConfig.host}
      </div>
    </div>
  );
};

export const ogSize = { width: 1200, height: 630 };

export const ogContentType = 'image/png';

export const createOgImage = (
  title: string,
  subtitle: string,
): ImageResponse => {
  const fontData = readFileSync(
    join(process.cwd(), 'public/fonts/Inter-Regular.ttf'),
  );

  return new ImageResponse(<OgLayout title={title} subtitle={subtitle} />, {
    ...ogSize,
    fonts: [{ name: 'Inter', data: fontData, weight: 400 }],
  });
};
