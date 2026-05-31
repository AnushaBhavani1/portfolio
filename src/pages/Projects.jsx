import medicare from '../assets/MediCare.png'
import quiz from '../assets/quiz.png'
import chrome from '../assets/chrome.png'
import whiteboard from '../assets/whiteboard.png'
import rhtn from '../assets/rhtn.png'
import sort from '../assets/sort.png'
const projects = [
  {
    title: 'MediCare – Healthcare Web Application',
    desc: 'A full-stack healthcare platform designed to streamline patient appointment booking and management. The system includes role-based access control for admin and users, secure authentication, and real-time appointment scheduling. Built with a scalable backend architecture and optimized REST APIs to handle high traffic efficiently.',
    tags: ['React', 'Node.js', 'JavaScript', 'MongoDB'],
    img: medicare,
    demo: 'https://medicare-frontend-swum.onrender.com',
    adminDemo: 'https://medicare-admin-yb5b.onrender.com',
    code: 'https://github.com/AnushaBhavani1/MediCare/tree/main',
  },
  {
    title: 'Intelligent Quiz Management System',
    desc: 'An AI-powered quiz platform that dynamically generates questions using OpenAI API. It provides intelligent evaluation, instant feedback, and detailed explanations for answers. The system is built with Django backend and optimized database design to support multiple users and quizzes efficiently.',
    tags: ['Python', 'Django', 'JavaScript', 'SQLite', 'OpenAI API'],
    img: quiz,
    code: 'https://github.com/AnushaBhavani1/automated-ai-quiz-management-system',
  },
  {
    title: 'AI Chrome Extension – Web Article Summarizer',
    desc: 'A productivity-focused Chrome extension that extracts and summarizes web articles using Gemini API. It supports multiple summary modes including brief, detailed, and bullet-point formats. It uses Chrome Content Scripts for DOM extraction and secure storage for API keys.',
    tags: ['JavaScript', 'Chrome Extension API', 'Gemini API'],
    img: chrome,
    code: 'https://github.com/AnushaBhavani1/ai-summarizer-chrome-extension',
  },
  {
    title: 'Collaborative Whiteboard Application',
    desc: 'A real-time collaborative drawing application that allows multiple users to work simultaneously on a shared canvas. Built using Socket.io for WebSocket communication, enabling low-latency updates and smooth synchronization of drawing events across clients.',
    tags: ['React', 'Node.js', 'Socket.io', 'WebSockets'],
    img: whiteboard,
    demo: 'https://white-board-collabcanvas.vercel.app/',
    code: 'https://github.com/AnushaBhavani1/WhiteBoard-Collabcanvas',
  },
  {
  title: 'Rhythm Pad – Interactive Drum Kit',
  desc: 'A browser-based rhythm pad that lets users create beats using keyboard keys or mouse clicks. Each pad triggers a unique drum sound with real-time visual feedback.',
  about: 'Built to demonstrate DOM events, audio handling, and interactive UI design.',
  tags: ['HTML', 'JavaScript', 'CSS'],
  img: rhtn, // or use a drum image if you have
  demo: 'https://rhythm-pad.vercel.app/',
  code: 'https://github.com/AnushaBhavani1/RhythmPad',
},
{
  title: 'Sorting Algorithm Visualizer',
  desc: 'A web-based visualization tool that demonstrates classic sorting algorithms like Bubble Sort, Insertion Sort, Selection Sort, Merge Sort, and Quick Sort using interactive animations.',
  about:
    'Built to help beginners understand how sorting algorithms work through real-time visual representation.',
  tags: ['HTML', 'CSS', 'JavaScript', 'Algorithms'],
  img: sort, // or use a custom sorting image if available
  demo: 'https://sort-visualizer-eight.vercel.app/', 
  code: 'https://github.com/AnushaBhavani1/sort-visualizer',
}
]
export default function Projects() {
  return (
   <div
  className="page"
  style={{
    background: 'var(--bg)',
    minHeight: '100vh'
  }}
>
      <div className="container">
        <h2 className="sec-title fade-up delay-1">My <span>Projects</span></h2>
        <p className="sec-sub fade-up delay-2">A selection of my recent work</p>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div key={p.title} className="project-card fade-up" style={{ animationDelay: `${0.1 + i * 0.08}s`, opacity: 0 }}>
              <div className="project-img">
                <img src={p.img} alt={p.title} loading="lazy" />
              </div>
              <div className="project-body">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map(t => <span key={t} className="tag" style={{ fontSize: '0.75rem', padding: '0.2rem 0.75rem' }}>{t}</span>)}
                </div>
                <div className="project-btns">
  {p.demo && (
    <a href={p.demo} className="pbtn pbtn-demo" target="_blank" rel="noreferrer">
      View Demo
    </a>
  )}

  {p.adminDemo && (
    <a href={p.adminDemo} className="pbtn pbtn-demo" target="_blank" rel="noreferrer">
      Admin Demo
    </a>
  )}

  {p.code && (
    <a href={p.code} className="pbtn pbtn-code" target="_blank" rel="noreferrer">
      Code
    </a>
  )}
</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
