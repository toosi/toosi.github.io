import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Github, Mail, MapPin, School } from 'lucide-react'
import Link from "next/link"

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <nav className="flex justify-between items-center">
            <h1 className="text-xl font-semibold">Tahereh Toosi</h1>
            <div className="flex gap-4">
              <Link href="#about" className="text-gray-600 hover:text-gray-900">About</Link>
              <Link href="#research" className="text-gray-600 hover:text-gray-900">Research</Link>
              <Link href="#publications" className="text-gray-600 hover:text-gray-900">Publications</Link>
              <Link href="#code" className="text-gray-600 hover:text-gray-900">Code</Link>
            </div>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12 space-y-12">
        <section id="about" className="grid md:grid-cols-[2fr,1fr] gap-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">About Me</h2>
            <p className="text-gray-600 leading-relaxed">
              I am a researcher at the intersection of neuroscience and artificial intelligence. My work focuses on understanding
              neural mechanisms and developing brain-inspired AI systems. Currently, I am investigating flexible visual inference
              and neural network architectures that mirror biological learning processes.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <School className="w-4 h-4" />
                Columbia University
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                New York
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="sm" asChild>
                <a href="mailto:contact@example.com" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Contact
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://github.com/toosi" className="flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
          <Card>
            <CardContent className="p-6">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Profile"
                className="rounded-lg w-full"
                height={400}
                width={400}
              />
            </CardContent>
          </Card>
        </section>

        <section id="research" className="space-y-6">
          <h2 className="text-3xl font-bold">Research</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">Neural Mechanisms</h3>
                <p className="text-gray-600">
                  Investigating core object recognition and the neural mechanisms underlying visual processing in both biological
                  and artificial systems.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">AI Architecture</h3>
                <p className="text-gray-600">
                  Developing novel neural network architectures inspired by biological learning processes and brain-like
                  representations.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="code" className="space-y-6">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <div className="grid gap-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <h3 className="font-semibold">Feedback_Feedforward_Alignment</h3>
                    <p className="text-sm text-gray-600">
                      Code for NeurIPS 2023 paper: Brain-like Flexible Visual Inference By Harnessing Feedback Feedforward
                      Alignment
                    </p>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <a
                      href="https://github.com/toosi/Feedback_Feedforward_Alignment"
                      className="flex items-center gap-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <h3 className="font-semibold">CORnet-1</h3>
                    <p className="text-sm text-gray-600">
                      Modeling the Neural Mechanisms of Core Object Recognition
                    </p>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <a
                      href="https://github.com/toosi/CORnet-1"
                      className="flex items-center gap-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <h3 className="font-semibold">BrainLike_Straightening</h3>
                    <p className="text-sm text-gray-600">
                      Brain-like Representational Straightening of Natural Movies in Robust Feedforward Neural Networks
                    </p>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <a
                      href="https://github.com/toosi/BrainLike_Straightening"
                      className="flex items-center gap-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t bg-white">
        <div className="max-w-4xl mx-auto px-4 py-6 text-center text-gray-600">
          © 2024 Tahereh Toosi. All rights reserved.
        </div>
      </footer>
    </div>
  )
}


