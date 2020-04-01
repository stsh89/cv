import * as React from "react"

export default function Header():JSX.Element {
  const [currentTime, setcurrentTime] = React.useState(new Date().toUTCString())

  React.useEffect(() => {
      setTimeout(function() {
        setcurrentTime(new Date().toUTCString());
      }, 1000)
    }
  )

  return (
    <div className="header">
      <div className="header__text">{currentTime}</div>
    </div>
  )
}
