
import React, { useState } from "react";
import {
  ArrowUpRight,
  BarChart3,
  BookOpen,
  CheckCircle2,
  Code2,
  Database,
  Download,
  ExternalLink,
  FileText,
  Github,
  Heart,
  Layers,
  Maximize2,
  Mic,
  Monitor,
  Presentation,
  Server,
  ShieldCheck,
  Sparkles,
  Users,
  Video,
  Workflow,
  X,
} from "lucide-react";
import "./courseProject.css";

// -----------------------------------------
// PROJECT FILES AND LINKS
// -----------------------------------------

const FILES = {
  diagram: "/course-project/python-execution-flow.png",
  ppt: "/course-project/INTEROPERAI-RESQUE_PPT_.pptx",
  audio: "/classroom/project_audio_recording.mpeg",
  video: "/course-project/demo-video.mp4",
  drive:
    "https://drive.google.com/drive/folders/1mUoFPbW0eibga5vsXeA8thc6HLmCenYr",
};

// Set to true after placing the MP4 file in public/course-project/
const VIDEO_AVAILABLE = true;

const members = [
  {
    id: "01",
    name: "Salva Soumya",
    register: "23MID0061",
    title: "Data Integration",
    responsibility:
      "CSV upload, validation, column mapping, standardization and data transfer.",
    frontend:
      "https://interoper-ai-res-que-member1.vercel.app/",
    backend:
      "https://interoperai-member1-api.onrender.com/docs",
    github:
      "https://github.com/SalvaSoumya/InteroperAI-ResQUE-Member1",
  },
  {
    id: "02",
    name: "Gilledi Santhosh",
    register: "23MID0233",
    title: "Intelligent Assessment",
    responsibility:
      "Dataset reception, processing, anomaly detection, assessment and dashboard results.",
    frontend:
      "https://interoper-ai-res-que-member2.vercel.app/",
    backend:
      "https://interoperai-member2-api.onrender.com/docs",
    github:
      "https://github.com/SalvaSoumya/InteroperAI-ResQUE-Member2/",
  },
];

const technologies = [
  {
    title: "Frontend",
    icon: Monitor,
    items: ["React", "Vite", "Tailwind CSS"],
    purpose: "User interfaces, dashboards and file upload.",
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Python", "FastAPI"],
    purpose: "Application logic, validation and API endpoints.",
  },
  {
    title: "Data Processing",
    icon: Database,
    items: ["Pandas", "NumPy", "CSV", "SQLite"],
    purpose: "Dataset processing and structured storage.",
  },
  {
    title: "Machine Learning",
    icon: BarChart3,
    items: ["scikit-learn", "joblib", "Isolation Forest"],
    purpose: "Anomaly signals and model evaluation.",
  },
  {
    title: "Integration",
    icon: Workflow,
    items: ["HTTPX", "HTTPS", "REST API", "JSON"],
    purpose: "Backend-to-backend data exchange.",
  },
  {
    title: "Deployment",
    icon: Layers,
    items: ["Vercel", "Render", "GitHub"],
    purpose: "Hosting and source code management.",
  },
];

const flow = [
  {
    title: "Upload",
    desc: "Member 1 accepts a disaster CSV file.",
  },
  {
    title: "Validate",
    desc: "Required fields and data structure are checked.",
  },
  {
    title: "Standardize",
    desc: "Source columns are mapped to a common schema.",
  },
  {
    title: "Transfer",
    desc: "The standardized CSV is sent using an HTTPS API.",
  },
  {
    title: "Assess",
    desc: "Member 2 processes records and produces review signals.",
  },
  {
    title: "Visualize",
    desc: "Dashboards display results and activity logs.",
  },
];

const apiSteps = [
  {
    title: "01. Data preparation",
    text: "The Member 1 backend validates and standardizes the CSV.",
  },
  {
    title: "02. API request",
    text: "HTTPX sends the file to Member 2 using POST /api/receive-file.",
  },
  {
    title: "03. Processing",
    text: "Member 2 parses records and prepares assessment outputs.",
  },
  {
    title: "04. Confirmation",
    text: "The receiver returns an HTTP status and message to Member 1.",
  },
];

const references = [
  {
    name: "Python Documentation",
    url: "https://docs.python.org/3/",
    detail: "Python language and standard library",
  },
  {
    name: "FastAPI Documentation",
    url: "https://fastapi.tiangolo.com/",
    detail: "Python API development",
  },
  {
    name: "React Documentation",
    url: "https://react.dev/",
    detail: "Frontend development",
  },
  {
    name: "Pandas Documentation",
    url: "https://pandas.pydata.org/docs/",
    detail: "Data manipulation and analysis",
  },
  {
    name: "scikit-learn Documentation",
    url: "https://scikit-learn.org/stable/",
    detail: "Machine learning and anomaly detection",
  },
  {
    name: "HTTPX Documentation",
    url: "https://www.python-httpx.org/",
    detail: "HTTP client for API integration",
  },
  {
    name: "NOAA Storm Events Database",
    url: "https://www.ncei.noaa.gov/stormevents/",
    detail: "Reference for the disaster-data domain",
  },
];

function SectionTitle({ number, title, subtitle }) {
  return (
    <div className="cp-heading">
      <span className="cp-eyebrow">
        {number} / PYTHON COURSE PROJECT
      </span>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}

function LinkButton({ href, icon: Icon, children, secondary }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`cp-link ${secondary ? "cp-link-outline" : ""}`}
    >
      <Icon size={16} />
      {children}
      <ArrowUpRight size={15} />
    </a>
  );
}

function CourseProject() {
  const [diagramOpen, setDiagramOpen] = useState(false);

  return (
    <div className="cp-page page-enter">

      {/* HERO AND TITLE */}
      <section className="cp-hero">
        <span className="cp-eyebrow">
          <Sparkles size={15} />
          CSI3007 · ADVANCED PYTHON PROGRAMMING
        </span>

        <h1>
          Python Course <em>Project.</em>
        </h1>

        <div className="cp-project-title">
          <span>OUR PROJECT</span>
          <h2>InteroperAI-ResQUE</h2>
          <p>
            Intelligent Disaster Data Interoperability
            and Emergency Response Coordination Platform
          </p>
        </div>

        <p className="cp-intro">
          A two-module web platform that standardizes disaster
          information from different sources and supports
          structured assessment, traceable data exchange
          and emergency-response review.
        </p>

        <div className="cp-hero-actions">
          <a href="#cp-architecture" className="cp-link">
            <Workflow size={16} />
            Explore Architecture
          </a>
          <a href="#cp-resources" className="cp-link cp-link-outline">
            <Presentation size={16} />
            View Project Evidence
          </a>
        </div>

        <div className="cp-quick-stats">
          <div><strong>02</strong><span>Connected modules</span></div>
          <div><strong>02</strong><span>Team members</span></div>
          <div><strong>API</strong><span>Data exchange</span></div>
        </div>
      </section>

      {/* TEAM */}
      <section className="cp-team">
        <div className="cp-team-heading">
          <span className="cp-eyebrow">PROJECT TEAM</span>
          <h2>Meet the team</h2>
        </div>

        <div className="cp-team-grid">
          {members.map((member) => (
            <div className="cp-member" key={member.id}>
              <span className="cp-avatar">
                {member.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
              </span>
              <div>
                <strong>{member.name}</strong>
                <span>{member.register} · Member {member.id}</span>
                <p>{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MOTIVATION, GAP, USP */}
      <section className="cp-section">
        <SectionTitle
          number="01"
          title="Motivation, Gap & Innovation"
          subtitle="Understanding the problem before building the solution."
        />

        <div className="cp-three-grid">
          <article className="cp-card">
            <span className="cp-card-icon"><Heart size={22} /></span>
            <h3>Motivation</h3>
            <p>
              During disasters, information may come from
              several organizations in different formats.
              Inconsistent records make it difficult to
              combine and assess the data quickly.
            </p>
            <p>
              We wanted to explore how Python-based
              automation and connected applications
              could make this process easier.
            </p>
          </article>

          <article className="cp-card">
            <span className="cp-card-icon"><ShieldCheck size={22} /></span>
            <h3>Existing Gap</h3>
            <ul className="cp-checks">
              <li><CheckCircle2 size={16} />Different field names and schemas.</li>
              <li><CheckCircle2 size={16} />Incomplete and inconsistent records.</li>
              <li><CheckCircle2 size={16} />Difficulty tracing data transfers.</li>
              <li><CheckCircle2 size={16} />Need for structured assessment outputs.</li>
            </ul>
          </article>

          <article className="cp-card">
            <span className="cp-card-icon"><Sparkles size={22} /></span>
            <h3>Our USP</h3>
            <ul className="cp-checks">
              <li><CheckCircle2 size={16} />Two independently hosted modules.</li>
              <li><CheckCircle2 size={16} />Common-schema data standardization.</li>
              <li><CheckCircle2 size={16} />Traceable HTTPS API transfers.</li>
              <li><CheckCircle2 size={16} />Anomaly signals with human-review context.</li>
            </ul>
          </article>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="cp-section" id="cp-architecture">
        <SectionTitle
          number="02"
          title="System Architecture"
          subtitle="The end-to-end Python processing and integration flow."
        />

        <div className="cp-diagram-card">
          <button
            type="button"
            className="cp-diagram-button"
            onClick={() => setDiagramOpen(true)}
          >
            <img
              src={FILES.diagram}
              alt="InteroperAI-ResQUE Python execution flow"
            />
            <span><Maximize2 size={16} /> Enlarge Diagram</span>
          </button>
          <p>
            Member 1 validates, transforms and sends a standardized
            CSV through a REST API. Member 2 receives the data,
            prepares assessment results and makes them available
            through its dashboard.
          </p>
        </div>

        <div className="cp-flow-grid">
          {flow.map((step, index) => (
            <div className="cp-flow-step" key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step.title}</strong>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="cp-module-summary">
          {members.map((member) => (
            <article className="cp-card" key={member.id}>
              <span className="cp-eyebrow">MEMBER {member.id}</span>
              <h3>{member.title}</h3>
              <p>{member.responsibility}</p>
            </article>
          ))}
        </div>
      </section>

      {/* TECHSTACK */}
      <section className="cp-section">
        <SectionTitle
          number="03"
          title="Complete Technology Stack"
          subtitle="Technologies selected for each part of the application."
        />

        <div className="cp-tech-grid">
          {technologies.map((tech) => {
            const Icon = tech.icon;
            return (
              <article className="cp-tech-card" key={tech.title}>
                <div className="cp-tech-title">
                  <Icon size={19} />
                  <h3>{tech.title}</h3>
                </div>
                <div className="cp-tags">
                  {tech.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <p>{tech.purpose}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* DATASETS */}
      <section className="cp-section">
        <SectionTitle
          number="04"
          title="Datasets & Data Handling"
          subtitle="How disaster records are prepared for integration and assessment."
        />

        <div className="cp-two-grid">
          <article className="cp-card">
            <span className="cp-eyebrow">DATA SOURCE AND FORMAT</span>
            <h3>Disaster Event Records</h3>
            <p>
              The project uses structured disaster-event
              records, with NOAA-related fields discussed
              in the project documentation.
            </p>
            <ul className="cp-checks">
              <li><CheckCircle2 size={16} />CSV files as the input format.</li>
              <li><CheckCircle2 size={16} />Source columns mapped to a canonical schema.</li>
              <li><CheckCircle2 size={16} />Missing values retained as missing.</li>
              <li><CheckCircle2 size={16} />Validated records forwarded for analysis.</li>
            </ul>
            <p className="cp-note">
              Exact source dataset version and download path
              should be confirmed from the project repository.
            </p>
          </article>

          <article className="cp-card">
            <span className="cp-eyebrow">MACHINE LEARNING EVALUATION</span>
            <h3>Experimental Dataset</h3>
            <p>
              A supervised comparison was documented using
              a project-defined impact label and
              11,495 held-out test records.
            </p>

            <div className="cp-metric">
              <strong>81.57%</strong>
              <span>Highest test accuracy</span>
              <small>HistGradientBoosting</small>
            </div>

            <p className="cp-note">
              This result belongs to the supervised model
              comparison, not to Isolation Forest anomaly
              detection. It does not establish official
              emergency-priority accuracy.
            </p>
          </article>
        </div>
      </section>

      {/* API INTEGRATION */}
      <section className="cp-section">
        <SectionTitle
          number="05"
          title="API Integration"
          subtitle="How our two Python backends communicate securely."
        />

        <div className="cp-api-card">
          <div className="cp-api-top">
            <div>
              <span className="cp-eyebrow">SENDER</span>
              <h3>Member 1 · FastAPI</h3>
            </div>
            <span className="cp-api-method">POST</span>
            <div>
              <span className="cp-eyebrow">RECEIVER</span>
              <h3>Member 2 · FastAPI</h3>
            </div>
          </div>

          <code className="cp-endpoint">/api/receive-file</code>

          <div className="cp-api-details">
            <div>
              <strong>Request format</strong>
              <p>HTTPS · multipart/form-data · file field</p>
            </div>
            <div>
              <strong>Integration library</strong>
              <p>HTTPX Python client</p>
            </div>
            <div>
              <strong>Metadata</strong>
              <p>X-Source-System, X-Client-Id, X-Correlation-Id</p>
            </div>
            <div>
              <strong>Response</strong>
              <p>HTTP status, message and transfer confirmation</p>
            </div>
          </div>
        </div>

        <div className="cp-api-steps">
          {apiSteps.map((step) => (
            <div key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* USERS / INPUTS / OUTPUTS */}
      <section className="cp-section">
        <SectionTitle
          number="06"
          title="Users, Inputs & Outputs"
          subtitle="Understanding who uses the system and what happens to the data."
        />

        <div className="cp-three-grid">
          <article className="cp-card">
            <span className="cp-card-icon"><Users size={22} /></span>
            <h3>Target Users</h3>
            <p>
              The platform is designed for disaster-data
              operators, analysts and emergency-response
              teams who need consistent information
              for review and coordination.
            </p>
          </article>

          <article className="cp-card">
            <span className="cp-card-icon"><FileText size={22} /></span>
            <h3>Inputs</h3>
            <ul className="cp-checks">
              <li><CheckCircle2 size={16} />Disaster data in .csv format.</li>
              <li><CheckCircle2 size={16} />File upload and metadata.</li>
              <li><CheckCircle2 size={16} />Source-column mappings.</li>
              <li><CheckCircle2 size={16} />Requests through REST endpoints.</li>
            </ul>
          </article>

          <article className="cp-card">
            <span className="cp-card-icon"><BarChart3 size={22} /></span>
            <h3>Outputs</h3>
            <ul className="cp-checks">
              <li><CheckCircle2 size={16} />Standardized CSV dataset.</li>
              <li><CheckCircle2 size={16} />Validation and transfer status.</li>
              <li><CheckCircle2 size={16} />JSON API responses.</li>
              <li><CheckCircle2 size={16} />Anomaly signals and assessment results.</li>
              <li><CheckCircle2 size={16} />Dashboard views and activity logs.</li>
            </ul>
          </article>
        </div>
      </section>

      {/* DEPLOYED APPLICATIONS */}
      <section className="cp-section">
        <SectionTitle
          number="07"
          title="Explore the Live Applications"
          subtitle="Frontend websites, backend documentation and GitHub source code."
        />

        <div className="cp-two-grid">
          {members.map((member) => (
            <article className="cp-app-card" key={member.id}>
              <span className="cp-eyebrow">
                MEMBER {member.id}
              </span>
              <h3>{member.title}</h3>
              <p>{member.responsibility}</p>

              <div className="cp-app-links">
                <LinkButton href={member.frontend} icon={Monitor}>
                  Visit Website
                </LinkButton>
                <LinkButton href={member.backend} icon={Server} secondary>
                  Backend API
                </LinkButton>
                <LinkButton href={member.github} icon={Github} secondary>
                  GitHub Code
                </LinkButton>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PPT, DEMO, AUDIO */}
      <section className="cp-section" id="cp-resources">
        <SectionTitle
          number="08"
          title="Project Presentation & Demonstration"
          subtitle="Explore our presentation, website walkthrough and recorded explanation."
        />

        <div className="cp-two-grid">
          <article className="cp-card cp-resource">
            <span className="cp-card-icon"><Presentation size={22} /></span>
            <h3>Project PowerPoint</h3>
            <p>
              Our 16-slide presentation covers the problem,
              architecture, API integration, machine learning,
              evaluation, deployment and future scope.
            </p>
            <div className="cp-app-links">
              <LinkButton href={FILES.ppt} icon={FileText}>
                Open Presentation
              </LinkButton>
              <a className="cp-link cp-link-outline"
                 href={FILES.ppt} download>
                <Download size={16} /> Download PPT
              </a>
            </div>
          </article>

          <article className="cp-card cp-resource">
            <span className="cp-card-icon"><Video size={22} /></span>
            <h3>Website Demo Video</h3>
            <p>
              A walkthrough of the two applications,
              including CSV processing, integration and
              assessment workflow.
            </p>

            {VIDEO_AVAILABLE ? (
              <video controls preload="metadata"
                     className="cp-video" playsInline>
                <source src={FILES.video} type="video/mp4" />
                Video playback is not supported.
              </video>
            ) : (
              <div className="cp-video-placeholder">
                <Video size={28} />
                <span>Demo video to be uploaded</span>
              </div>
            )}

            <LinkButton href={FILES.drive} icon={ExternalLink} secondary>
              View Project Drive
            </LinkButton>
          </article>
        </div>

        <div className="cp-audio-card">
          <div>
            <Mic size={24} />
            <h3>Project Audio Explanation</h3>
            <p>
              Our classroom challenge was to record and
              submit a project explanation during lab hours.
            </p>
          </div>
          <audio controls preload="metadata">
            <source src={FILES.audio} type="audio/mpeg" />
            Your browser does not support audio.
          </audio>
        </div>
      </section>

      {/* REFERENCES */}
      <section className="cp-section">
        <SectionTitle
          number="09"
          title="References & Documentation"
          subtitle="Technical documentation and project background resources."
        />

        <div className="cp-references">
          {references.map((ref, index) => (
            <a
              key={ref.url}
              href={ref.url}
              target="_blank"
              rel="noopener noreferrer"
              className="cp-reference"
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <strong>{ref.name}</strong>
                <small>{ref.detail}</small>
              </div>
              <ArrowUpRight size={17} />
            </a>
          ))}
        </div>
        <p className="cp-note">
          References include official technical documentation
          and domain background. Exact dataset citations can
          be added when the source files are confirmed.
        </p>
      </section>

      {/* REFLECTION */}
      <section className="cp-reflection">
        <Heart size={25} />
        <span>MY LEARNING EXPERIENCE</span>
        <h2>From Python code to a connected application.</h2>
        <p>
          InteroperAI-ResQUE helped me explore how Python
          backends, data processing, APIs and web interfaces
          work together. Building and connecting two modules
          made the project both challenging and rewarding.
        </p>
        <LinkButton href={FILES.drive} icon={BookOpen}>
          Explore Project Materials
        </LinkButton>
      </section>

      {/* FULL-SIZE DIAGRAM */}
      {diagramOpen && (
        <div
          className="cp-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Project architecture viewer"
          onClick={() => setDiagramOpen(false)}
        >
          <button
            type="button"
            aria-label="Close diagram"
            onClick={() => setDiagramOpen(false)}
          >
            <X size={22} />
          </button>
          <img
            src={FILES.diagram}
            alt="Full Python execution flow diagram"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

export default CourseProject;