"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export function QuickStart() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const installCommands = [
    {
      title: "Initialize shadcn/ui",
      code: "npx shadcn@latest init",
      description: "Set up shadcn/ui in your Next.js project"
    },
    {
      title: "Add a component",
      code: "npx shadcn@latest add button",
      description: "Add your first component"
    },
    {
      title: "Use in your app",
      code: `import { Button } from "@/components/ui/button"

export function MyComponent() {
  return <Button>Click me</Button>
}`,
      description: "Import and use the component"
    }
  ]

  const packageManagers = [
    { name: "npm", install: "npm create next-app@latest my-app" },
    { name: "pnpm", install: "pnpm create next-app@latest my-app" },
    { name: "yarn", install: "yarn create next-app my-app" },
    { name: "bun", install: "bunx create-next-app@latest my-app" }
  ]

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(index)
      setTimeout(() => setCopiedIndex(null), 2000)
    })
  }

  return (
    <div className="space-y-6">
      <Tabs defaultValue="setup" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="setup">Setup</TabsTrigger>
          <TabsTrigger value="install">Installation</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
        </TabsList>

        <TabsContent value="setup" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Create a New Next.js Project</CardTitle>
              <CardDescription>
                Choose your preferred package manager to get started
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {packageManagers.map((pm, index) => (
                  <div key={pm.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{pm.name}</Badge>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard(pm.install, index)}
                      >
                        {copiedIndex === index ? "Copied!" : "Copy"}
                      </Button>
                    </div>
                    <div className="bg-muted p-3 rounded-md">
                      <code className="text-sm font-mono">{pm.install}</code>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Follow the prompts to configure your project with TypeScript, Tailwind CSS, and App Router.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="install" className="space-y-4">
          <div className="space-y-6">
            {installCommands.map((command, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">
                      Step {index + 1}: {command.title}
                    </CardTitle>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => copyToClipboard(command.code, index + 10)}
                    >
                      {copiedIndex === index + 10 ? "Copied!" : "Copy"}
                    </Button>
                  </div>
                  <CardDescription>{command.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted p-4 rounded-md">
                    <pre className="text-sm font-mono whitespace-pre-wrap">
                      <code>{command.code}</code>
                    </pre>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="usage" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Available Components</CardTitle>
              <CardDescription>
                All components are ready to use in your project
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {[
                  "Button", "Card", "Input", "Select", "Checkbox", "Radio",
                  "Switch", "Slider", "Progress", "Avatar", "Badge", "Alert",
                  "Dialog", "Sheet", "Tabs", "Accordion", "Calendar", "Table"
                ].map((component) => (
                  <Badge key={component} variant="outline" className="justify-center py-2">
                    {component}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Next Steps</CardTitle>
              <CardDescription>
                What to do after installation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium">Explore Components</p>
                    <p className="text-sm text-muted-foreground">
                      Browse through all available components and their variations
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium">Customize Themes</p>
                    <p className="text-sm text-muted-foreground">
                      Modify the CSS variables to match your brand colors
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium">Build Your App</p>
                    <p className="text-sm text-muted-foreground">
                      Start building your application with these components
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}