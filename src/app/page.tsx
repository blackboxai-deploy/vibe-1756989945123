import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ComponentShowcase } from "@/components/component-showcase"
import { QuickStart } from "@/components/quick-start"

export default function HomePage() {
  const features = [
    {
      title: "50+ Components",
      description: "Comprehensive collection of shadcn/ui components with interactive examples",
      badge: "Complete"
    },
    {
      title: "Next.js 15 Ready",
      description: "Built with the latest Next.js App Router and React 19",
      badge: "Latest"
    },
    {
      title: "TypeScript First",
      description: "Full TypeScript support with proper type definitions",
      badge: "Type-Safe"
    },
    {
      title: "Dark Mode",
      description: "Beautiful dark and light themes with smooth transitions",
      badge: "Themeable"
    },
    {
      title: "Responsive Design",
      description: "Mobile-first responsive design that works on all devices",
      badge: "Mobile"
    },
    {
      title: "Copy & Paste",
      description: "Ready-to-use components with copy-paste functionality",
      badge: "Easy"
    }
  ]

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center space-y-8 py-12">
        <div className="space-y-4 max-w-4xl">
          <Badge variant="outline" className="mb-4">
            Built with Next.js 15 & React 19
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Beautiful UI Components
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            A comprehensive showcase of shadcn/ui components. Copy, paste, and customize 
            beautiful React components built with Tailwind CSS and Radix UI primitives.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg">
            <Link href="/components">
              Browse Components
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/examples">
              View Examples
            </Link>
          </Button>
        </div>

        <div className="w-full max-w-5xl">
          <img 
            src="https://placehold.co/1200x600?text=shadcn/ui+Components+Showcase+Dashboard+Interface+with+Modern+Dark+Theme+and+Beautiful+Typography" 
            alt="shadcn/ui Components Showcase Dashboard Interface with Modern Dark Theme and Beautiful Typography"
            className="rounded-lg shadow-2xl border"
          />
        </div>
      </section>

      <Separator />

      {/* Features Section */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Why Choose This Showcase?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build modern React applications with beautiful, 
            accessible, and customizable components.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <Badge variant="secondary">{feature.badge}</Badge>
                </div>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* Quick Start Section */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Quick Start</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started with shadcn/ui in minutes
          </p>
        </div>
        <QuickStart />
      </section>

      <Separator />

      {/* Component Preview Section */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Component Preview</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interactive examples of popular components
          </p>
        </div>
        <ComponentShowcase />
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-8 py-12 bg-muted/30 rounded-lg">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Ready to Build?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start building your next project with these beautiful, accessible components.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/components">
              Explore All Components
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/playground">
              Try the Playground
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}