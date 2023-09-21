import { ImageResponse } from 'next/server'
import { Inter } from 'next/font/google'

// Route segment config
export const runtime = 'edge'

const inter = Inter({ subsets: ['latin'] })

// Image metadata
export const alt = 'Hackathon Dev & Design'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image#generate-images-using-code-js-ts-tsx
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Hackathon Dev & Design
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    }
  )
}
