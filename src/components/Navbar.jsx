import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { label: 'Home',       to: '/' },
  { label: 'About',      to: '/about' },
  { label: 'Skills',     to: '/skills' },
  { label: 'Projects',   to: '/projects' },
  { label: 'Internship', to: '/internship' },
  { label: 'Contact',    to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">
          <NavLink to="/" className="logo" onClick={close}>
            <span>Anusha Bhavani</span>
            
          </NavLink>

          <ul className="nav-links">
            {links.map(l => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) => isActive ? 'active' : ''}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <button className="hamburger" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${open ? ' open' : ''}`}>
        <ul>
          {links.map(l => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) => isActive ? 'active' : ''}
                onClick={close}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
