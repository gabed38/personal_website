import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">Hi, I'm Gabriel Darnell</h1>
      <p className="text-lg mb-6 text-center">AI-focused Software Engineer building production-grade LLM apps.</p>
      <div className="flex gap-4">
        <Link href="/resume" className="px-4 py-2 bg-blue-600 text-white rounded-xl shadow">View Resume</Link>
        <Link href="/projects" className="px-4 py-2 bg-gray-200 text-black rounded-xl">View Projects</Link>
      </div>
    </main>
  )
}