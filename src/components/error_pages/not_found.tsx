import * as React from "react"

export default function NotFound(): JSX.Element {
  return (
    <div className="error-page">
      <main className="error-page-not-found">
        <svg height="200" width="200" className="error-page-not-found__circle">
          <circle
            cx="100"
            cy="100"
            r="80"
            stroke-width="2"
            stroke="red"
            stroke-dasharray="50"
            fill="none"
          />
        </svg>
        <h1 className="error-page-not-found__title">404</h1>
      </main>
    </div>
  )
}
