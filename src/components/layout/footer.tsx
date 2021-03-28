import * as React from "react"

export default function Footer(): JSX.Element {
  const year = new Date().getUTCFullYear()

  return (
    <footer className="footer">
      <ul className="footer-list">
        <li className="footer-list__item">CV / {year}</li>
        <li className="footer-list__item">
          Source: <a className="footer-link" href="https://github.com/stsh89/cv">https://github.com/stsh89/cv/</a>
        </li>
        <li className="footer-list__item">
          Live version: <a className="footer-link" href="https://stsh89.github.io/cv/">https://stsh89.github.io/cv/</a>
        </li>
      </ul>
    </footer>
  )
}
