import profile from '../assets/profile.jpg'

export default function Contact() {
  return (
    <>
      <style>{`
        .contact-page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--bg);
  color: white;
  padding: 20px;
}

        .contact-center {
  text-align: center;
  background: rgba(255,255,255,0.03);
  padding: 50px;
  border-radius: 24px;
  border: 1px solid rgba(168,85,247,0.2);
  backdrop-filter: blur(10px);
  box-shadow: 0 0 30px rgba(168,85,247,0.15);
  max-width: 700px;
}
        .avatar-wrapper {
          display: flex;
          justify-content: center;
          margin-bottom: 20px;
        }

        .avatar {
          width: 140px;
          height: 140px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid #a855f7;
          box-shadow: 0 0 25px rgba(168, 85, 247, 0.5);
        }

        .contact-title {
          font-size: 2.5rem;
          margin-bottom: 10px;
        }

        .contact-subtitle {
          color: #c4b5fd;
          margin-bottom: 25px;
        }

        .social-icons {
          display: flex;
          justify-content: center;
          gap: 18px;
        }

        .social-icons a {
          width: 55px;
          height: 55px;
          background: white;
          color: #6d28d9;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          transition: 0.3s ease;
          text-decoration: none;
        }

        .social-icons a:hover {
          transform: translateY(-5px);
          background: #a855f7;
          color: white;
        }
      `}</style>

      <div className="contact-page">
        <div className="contact-center">

          <div className="avatar-wrapper">
            <img
              src={profile}
              alt="profile"
              className="avatar"
            />
          </div>

          <h1 className="contact-title">Get in Touch</h1>

          <p className="contact-subtitle">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>

          <div className="social-icons">

            <a href="https://github.com/AnushaBhavani1" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>

            <a href="https://www.linkedin.com/in/anusha-bhavani-addala-11a629323" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=anushaaddala15@gmail.com"
  target="_blank"
  rel="noreferrer"
  title="Send Email"
>
  <i className="fa-solid fa-envelope"></i>
</a>

      <a href="tel:+916305579699">
              <i className="fa-solid fa-phone"></i>
            </a>

          </div>

        </div>
      </div>
    </>
  );
}