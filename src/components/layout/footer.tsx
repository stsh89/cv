import * as React from "react"

export default function Footer():JSX.Element {
  return (
    <div className="footer">
      <p className="footer__text">
        This is free and unencumbered software released into the public domain.
        For more information, please refer to <a className="footer-link" href="https://unlicense.org">https://unlicense.org</a>
      </p>
      <p className="footer__text">
        2020
        / CV
        / <a className="footer-link" href="https://github.com/stsh89/cv">https://github.com/stsh89/cv/</a>
        &nbsp;/ <a className="footer-link" href="https://stsh89.github.io/cv/">https://stsh89.github.io/cv/</a>
      </p>
    </div>
  )
}
