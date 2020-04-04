import * as React from "react"

export default function AuthForm(): JSX.Element {
  return (
    <form action="/" method="GET">
      <input type="password" name="api-key" />
    </form>
  )
}
