"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface PlaceholderPageProps {
  title: string
  icon: React.ReactNode
}

export function PlaceholderPage({ title, icon }: PlaceholderPageProps) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
            {icon}
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="text-center text-gray-500">
            <div className="text-6xl mb-4">🚧</div>
            <h3 className="text-xl font-medium mb-2">Coming Soon</h3>
            <p>This module is currently under development.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
