import { ImageResponse } from 'next/og'
import { readFile } from 'fs/promises'
import { join } from 'path'

export const alt = 'Mynzo Carbon – Precision Forest Monitoring'
export const size = { width: 2400, height: 1260 }
export const contentType = 'image/png'

export default async function Image() {
  const logoBuffer = await readFile(join(process.cwd(), 'public', 'mynzo_logo_dark.png'))
  const logoSrc = `data:image/png;base64,${logoBuffer.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #ffffff 0%, #eaf4f7 45%, #92d3e1 100%)',
          position: 'relative',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            background:
              'radial-gradient(circle at 78% 18%, rgba(89,132,147,0.16) 0%, rgba(89,132,147,0) 55%)',
          }}
        />
        <img
          src={logoSrc}
          width={560}
          style={{ marginBottom: 88, position: 'relative' }}
        />
        <div
          style={{
            display: 'flex',
            fontSize: 116,
            fontWeight: 700,
            color: '#061729',
            letterSpacing: '-3px',
            textAlign: 'center',
            position: 'relative',
          }}
        >
          Precision Forest Monitoring
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 52,
            fontWeight: 500,
            color: '#3D5A70',
            marginTop: 44,
            maxWidth: 1640,
            textAlign: 'center',
            position: 'relative',
          }}
        >
          AI-powered satellite intelligence for forests, carbon & biodiversity
        </div>
      </div>
    ),
    { ...size }
  )
}
