import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Sacha Access, accessibilité React, WCAG et RGAA';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const BLUE = '#0055cc';
const WHITE = '#ffffff';

const OpengraphImage = () =>
  new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: BLUE,
          color: WHITE,
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 260, fontWeight: 700, letterSpacing: '-14px', lineHeight: 1 }}>
          S.A
        </div>
        <div style={{ marginTop: 40, fontSize: 36, fontWeight: 500, opacity: 0.92 }}>
          Accessibilité React · WCAG & RGAA
        </div>
        <div style={{ marginTop: 20, fontSize: 24, fontWeight: 400, opacity: 0.7 }}>
          Sacha, ingénieur frontend
        </div>
      </div>
    ),
    { ...size },
  );

export default OpengraphImage;
