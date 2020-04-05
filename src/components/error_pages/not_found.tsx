import * as React from "react"
import Circulator from "../graphics/circulator"

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

  return (
    <div className="error-page">
      <main className="error-page-not-found">
        <Circulator borderColor="#5afd5e" textColor="#d5d5d5" text={textValue.toString()} />
        <h1 className="error-page-not-found__title hidden">Not Found</h1>
      </main>
    </div>
  )
}
