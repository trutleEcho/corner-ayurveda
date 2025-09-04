import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Corner Ayurveda - Ayurvedic Heritage & Natural Wellness',
    short_name: 'Corner Ayurveda',
    description: 'Discover authentic Ayurvedic products and natural wellness solutions rooted in 5000 years of traditional wisdom.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F5F3F0',
    theme_color: '#6B8E5A',
    orientation: 'portrait-primary',
    categories: ['health', 'wellness', 'lifestyle', 'shopping'],
    lang: 'en',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png'
      }
    ],
    screenshots: [
      {
        src: '/screenshot-wide.png',
        sizes: '1280x720',
        type: 'image/png',
        form_factor: 'wide'
      },
      {
        src: '/screenshot-narrow.png',
        sizes: '750x1334',
        type: 'image/png',
        form_factor: 'narrow'
      }
    ]
  }
}

