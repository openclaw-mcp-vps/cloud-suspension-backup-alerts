import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CloudGuard Alerts — Backup Alerts When Cloud Providers Suspend Your Account',
  description: 'Multi-channel alert system that activates when your primary cloud provider suspends your account. Email, SMS, Slack, and webhooks — all from a distributed monitoring network.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ce59fab8-4ef8-45b0-b067-76aad874823c"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
