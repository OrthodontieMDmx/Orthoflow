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
            Klik op de knop om te zien hoe tanden met een beugel rechtgezet
            worden.
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

function BracesIllustration() {
  return (
    <svg
      role="img"
      aria-label="Tanden met een beugel"
      viewBox="0 0 320 120"
      className="mx-auto h-auto w-full max-w-sm"
    >
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const x = 20 + i * 50
        const tilt = i < 3 ? (3 - i) * 3 : (i - 2) * -3
        return (
          <g key={i} transform={`rotate(${tilt} ${x + 20} 40)`}>
            <rect
              x={x}
              y={10}
              width={40}
              height={60}
              rx={14}
              className="fill-background stroke-foreground/70"
              strokeWidth={2}
            />
            <rect
              x={x + 10}
              y={38}
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
        d="M 30 45 Q 160 30 290 45"
        className="fill-none stroke-muted-foreground"
        strokeWidth={2.5}
        strokeLinecap="round"
      />
    </svg>
  )
}
