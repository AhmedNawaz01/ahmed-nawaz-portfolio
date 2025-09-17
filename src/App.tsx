import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className="min-h-screen flex flex-col">
			<header className="border-b border-gray-200 dark:border-gray-800">
				<nav aria-label="Primary" className="mx-auto flex max-w-screen-lg items-center gap-4 p-4">
					<a href="/" className="inline-flex items-center gap-2 font-semibold">
						<img src={viteLogo} alt="Vite" className="h-6 w-6" />
						<span>Ahmed Nawaz</span>
					</a>
					<div className="ml-auto flex items-center gap-2">
						<a
							href="https://react.dev"
							target="_blank"
							rel="noreferrer"
							className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline focus:underline"
						>
							<img src={reactLogo} alt="React" className="h-6 w-6" />
							Docs
						</a>
					</div>
				</nav>
			</header>
			<main id="main" className="mx-auto w-full max-w-screen-lg flex-1 p-4">
				<section aria-labelledby="hero-heading" className="py-8">
					<h1 id="hero-heading" className="text-2xl font-bold sm:text-3xl">
						Ahmed Nawaz
					</h1>
					<p className="mt-2 max-w-prose text-pretty text-gray-600 dark:text-gray-300">
						Frontend Developer • React • TypeScript • Performance & Accessibility
					</p>
					<div className="mt-6 flex items-center gap-3">
						<button
							type="button"
							className="rounded bg-blue-600 px-4 py-2 text-white shadow hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
							aria-pressed={count % 2 === 1}
							onClick={() => setCount((c) => c + 1)}
						>
							Increment count ({count})
						</button>
						<span className="text-sm text-gray-500">Press Enter/Space to activate</span>
					</div>
				</section>
			</main>
			<footer className="border-t border-gray-200 p-4 text-center text-sm text-gray-500 dark:border-gray-800">
				© {new Date().getFullYear()} Ahmed Nawaz
			</footer>
		</div>
	)
}

export default App
