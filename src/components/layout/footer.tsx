import * as React from "react"

export default function Footer():JSX.Element {
  return (
    <footer className="footer">
      <p className="footer__text">
        This is free and unencumbered software released into the public domain.
        For more information, please refer to <a className="footer-link" href="https://unlicense.org">https://unlicense.org</a>
      </p>
      <ul className="footer-list">
        <li className="footer-list__item">CV 2020</li>
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
