import { useState } from 'react'
import { appConfig } from '@/app.config'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function HomePage() {
  const [showTeeth, setShowTeeth] = useState(false)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">
          {appConfig.name}
        </h1>
        <p className="mt-2 text-muted-foreground">{appConfig.tagline}</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Hallo, wereld</CardTitle>
          <CardDescription>
            Klik op de knop om een boven- en onderkaak met een beugel te zien,
            met een mond die open en dicht gaat.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button onClick={() => setShowTeeth((visible) => !visible)}>
            Hallo, wereld
          </Button>

          {showTeeth && <BracesIllustration />}
        </CardContent>
      </Card>
    </div>
  )
}

function ToothRow() {
  return (
    <>
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const x = 20 + i * 50
        const tilt = i < 3 ? (3 - i) * 3 : (i - 2) * -3
        return (
          <g key={i} transform={`rotate(${tilt} ${x + 20} 30)`}>
            <rect
              x={x}
              y={0}
              width={40}
              height={60}
              rx={14}
              className="fill-background stroke-foreground/70"
              strokeWidth={2}
            />
            <rect
              x={x + 10}
              y={28}
              width={20}
              height={14}
              rx={3}
              className="fill-primary/80 stroke-primary"
              strokeWidth={1.5}
            />
          </g>
        )
      })}
      <path
        d="M 30 35 Q 160 20 290 35"
        className="fill-none stroke-muted-foreground"
        strokeWidth={2.5}
        strokeLinecap="round"
      />
    </>
  )
}

function BracesIllustration() {
  return (
    <svg
      role="img"
      aria-label="Boven- en onderkaak tanden met een beugel, mond gaat open en dicht"
      viewBox="0 0 320 200"
      className="mx-auto h-auto w-full max-w-sm"
    >
      <style>
        {`
          @media (prefers-reduced-motion: no-preference) {
            .jaw-upper { animation: bite-upper 1.6s ease-in-out infinite; }
            .jaw-lower { animation: bite-lower 1.6s ease-in-out infinite; }
          }
          @keyframes bite-upper {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(18px); }
          }
          @keyframes bite-lower {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-18px); }
          }
        `}
      </style>
      <g className="jaw-upper">
        <g transform="translate(0, 10)">
          <ToothRow />
        </g>
      </g>
      <g className="jaw-lower">
        <g transform="translate(0, 190) scale(1, -1)">
          <ToothRow />
        </g>
      </g>
    </svg>
  )
}
