import * as React from "react"
import Circulator from "../graphics/circulator"
import {Link} from "react-router-dom"

export default function NotFound(): JSX.Element {
  const [textValue, setTextValue] = React.useState(0)

  React.useEffect(() => {
      if (textValue != 404) {
        setTimeout(function() {
          setTextValue(textValue + 1);
        }, 1)
      }
    }
  )

  const description = `
    The HTTP 404, 404 Not Found, 404, Page Not Found, or Server Not Found error message is a
    Hypertext Transfer Protocol (HTTP) standard response code, in computer network communications,
    to indicate that the browser was able to communicate with a given server, but the server could
    not find what was requested. The error may also be used when a server does not wish to disclose
    whether it has the requested information or not.
  `

  return (
    <main className="not-found-page">
      <Circulator borderColor="#5afd5e" textColor="#d5d5d5" text={textValue.toString()} />
      <h1 className="not-found-page__title">Page Not Found</h1>
      <div className="not-found-page__body">
        <p className="not-found-page-text">
          {description}
        </p>
        <p className="not-found-page-text">
          Read more at <a className="not-found-page-link" href="https://en.wikipedia.org/wiki/HTTP_404">Wikipedia</a>
        </p>
        <p className="not-found-page-text">
          Go to <Link to="/" className="not-found-page-link">Homepage</Link>
        </p>
      </div>
    </main>
  )
}
