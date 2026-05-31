import profile from "../assets/profile.jpg";

export default function About() {
  return (
    <div
      className="page"
      style={{
        background: "var(--bg)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "70px 5%",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "50px",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {/* LEFT SIDE - IMAGE */}
          <div
            style={{
              flex: "1",
              minWidth: "280px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                background: "#1f1f3a",
                padding: "20px",
                borderRadius: "20px",
                border: "1px solid rgba(168,85,247,0.2)",
                boxShadow: "0 0 25px rgba(168,85,247,0.25)",
              }}
            >
              <img
                src={profile}
                alt="profile"
                style={{
                  width: "280px",
                  height: "340px",
                  objectFit: "cover",
                  borderRadius: "15px",
                  border: "3px solid #a855f7",
                }}
              />
            </div>
          </div>

          {/* RIGHT SIDE - CONTENT */}
          <div
            style={{
              flex: "2",
              minWidth: "320px",
              color: "white",
            }}
          >
            <h2
              style={{
                fontSize: "2.8rem",
                marginBottom: "25px",
                color: "white",
              }}
            >
              About <span style={{ color: "#a855f7" }}>Me</span>
            </h2>

            <p
              style={{
                color: "#c4b5fd",
                lineHeight: "1.8",
                fontSize: "1.05rem",
              }}
            >
              I am a passionate MERN Stack Developer with a strong interest in
              Java programming and problem-solving. My journey began with HTML,
              CSS, and JavaScript and has evolved into developing full-stack web
              applications using MongoDB, Express.js, React, and Node.js.
            </p>

            <p
              style={{
                color: "#c4b5fd",
                marginTop: "18px",
                lineHeight: "1.8",
                fontSize: "1.05rem",
              }}
            >
              Beyond web development, I have a strong interest in Java, Data
              Structures & Algorithms, and Artificial Intelligence. I enjoy
              exploring these fields to strengthen my problem-solving abilities,
              enhance my logical thinking, and stay updated with emerging
              technologies.
            </p>

            <p
              style={{
                color: "#c4b5fd",
                marginTop: "18px",
                lineHeight: "1.8",
                fontSize: "1.05rem",
              }}
            >
              I am aspiring to become a Software Engineer with a strong
              foundation in software development, continuously expanding my
              technical skills and building innovative, scalable, and impactful
              real-world applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}