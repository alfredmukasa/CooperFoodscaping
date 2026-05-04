import { Link } from 'react-router-dom'
import { MAP_EMBED_SRC, SERVICE_AREA_TOWNS } from '../../content/serviceArea'
import './ServiceArea.css'

export function ServiceArea() {
  return (
    <section className="area-section" id="area">
      <div>
        <div className="section-label">Where we work</div>
        <h2 className="section-title">
          Serving the <em>GTA &</em>
          <br />
          <em>York Region</em>
        </h2>
        <p className="area-lead">
          Cooper&apos;s Foodscaping is happy to serve Georgina, East Gwillimbury,
          Uxbridge, and the GTA. If you are interested in in-person services
          outside this area, reach out — additional travel rates may apply.
        </p>
        <ul className="area-list">
          {SERVICE_AREA_TOWNS.map((town) => (
            <li key={town}>{town}</li>
          ))}
        </ul>
        <Link to="/contact" className="btn-primary">
          Contact us
        </Link>
      </div>
      <div className="area-map">
        <iframe
          src={MAP_EMBED_SRC}
          allowFullScreen
          loading="lazy"
          title={"Cooper's Foodscaping service area map"}
        />
      </div>
    </section>
  )
}
