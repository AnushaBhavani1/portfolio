import { Link } from 'react-router-dom'
import profile from "../assets/profile.jpg"

export default function Home() {
  return (
    <div
      className="page"
      style={{
        background: 'var(--bg)',
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: "700px" }}>

        {/* PROFILE IMAGE */}
        <div style={{ marginBottom: "20px" }}>
          <img
            src={profile}
            alt="profile"
            style={{
              width: "160px",
              height: "160px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "4px solid #a855f7",
              boxShadow: "0 0 25px rgba(168, 85, 247, 0.5)"
            }}
          />
        </div>

        {/* NAME */}
        <h1 style={{ color: "white", fontSize: "2.5rem" }}>
          Hi, I'm <span style={{ color: "#a855f7" }}>Anusha Bhavani Addala</span>
        </h1>

        {/* DESCRIPTION */}
        <p style={{ color: "#c4b5fd", marginTop: "15px", fontSize: "1.1rem" }}>
          A passionate Information Technology student focused on building impactful and scalable software solutions using modern web technologies.
        </p>

        {/* BUTTONS */}
        <div style={{ marginTop: "25px", display: "flex", justifyContent: "center", gap: "15px", flexWrap: "wrap" }}>

          <Link to="/projects" className="btn-primary">
            View Work
          </Link>

          <Link to="/contact" className="btn-outline">
            Contact Me
          </Link>

          <a
            href="https://drive.google.com/file/d/1WWwCo3vyeXJX9vBNhJfEukph6pGJ-iuI/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Download Resume
          </a>

        </div>

      </div>
    </div>
  )
}