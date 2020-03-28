import * as React from "react"

export default function TechnologySummary():JSX.Element {
  return (
    <div className="homepage-block">
      <p>Technology summary:</p>
      <ul className="homepage-technology-list">
        <li className="homepage-technology-list__item">UNIX shell</li>
        <li className="homepage-technology-list__item">Ruby</li>
        <li className="homepage-technology-list__item">Ruby on Rails</li>
        <li className="homepage-technology-list__item">Elixir</li>
        <li className="homepage-technology-list__item">Phoenix</li>
        <li className="homepage-technology-list__item">JavaScript</li>
        <li className="homepage-technology-list__item">PostgreSQL</li>
        <li className="homepage-technology-list__item">MySQL</li>
        <li className="homepage-technology-list__item">MongoDB</li>
        <li className="homepage-technology-list__item">Redis</li>
        <li className="homepage-technology-list__item">RabbitMQ</li>
        <li className="homepage-technology-list__item">Git</li>
        <li className="homepage-technology-list__item">Docker</li>
      </ul>
    </div>
  )
}
