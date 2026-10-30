
import React, { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Code2,
  ClipboardList,
  FileText,
  GraduationCap,
  Heart,
  Home,
  Menu,
  Search,
  Sparkles,
  Star,
  Users,
  X,
} from "lucide-react";

import ClassroomActivities from "./ClassroomActivities";
import PadletPractice from "./PadletPractice";
import Storyboard from "./Storyboard";
import CourseProject from "./CourseProject";
import PythonClassNotes from "./PythonClassNotes";
import CourseMaterials from "./CourseMaterials";
import ExtraLabPractice from "./ExtraLabPractice";
import "./index.css";

// =============================================
// ADVANCED PYTHON PROGRAMMING - LAB ASSIGNMENTS
// =============================================

const assignments = [
  {
    id: 1,
    title: "Exploring Character Encoding",
    subtitle: "ANSI, Unicode & Text Processing",
    tags: ["Encoding", "Unicode", "Python Basics"],
    points: [
      "Explored how computers represent text and characters.",
      "Compared ANSI and Unicode using real examples.",
      "Observed what happens when an encoding cannot store a character.",
      "Learned why proper text encoding matters in programming.",
    ],
  },
  {
    id: 2,
    title: "Solving Coding Challenges",
    subtitle: "LeetCode & Problem-Solving Techniques",
    tags: ["Algorithms", "Strings", "Arrays"],
    points: [
      "Practised solving programming challenges from LeetCode.",
      "Worked with strings, arrays and Python data structures.",
      "Identified coding errors and improved solutions.",
      "Strengthened logical thinking and debugging skills.",
    ],
  },
  {
    id: 3,
    title: "Designing MedHUB",
    subtitle: "Patient–Doctor Monitoring Gateway",
    tags: ["Figma", "UI Design", "Healthcare"],
    points: [
      "Explored the design of a remote healthcare platform.",
      "Created a frontend design using Figma.",
      "Worked on an AI Symptom Checker interface.",
      "Learned to organize useful features into an intuitive design.",
    ],
  },
  {
    id: 4,
    title: "Python Classes & Objects",
    subtitle: "Object-Oriented Programming",
    tags: ["OOP", "Classes", "Methods"],
    points: [
      "Created Python classes for practical problems.",
      "Practised constructors, attributes and class methods.",
      "Worked on student performance and DNA sequence examples.",
      "Improved code organization using object-oriented concepts.",
    ],
  },
  {
    id: 5,
    title: "Working with CSV & JSON",
    subtitle: "File Handling and Pandas",
    tags: ["CSV", "JSON", "Pandas"],
    points: [
      "Explored reading and writing structured data files.",
      "Practised CSV operations and dictionary-based records.",
      "Used Pandas DataFrames to inspect student data.",
      "Learned to filter, update and export data.",
    ],
  },
  {
    id: 6,
    title: "Automating Excel with Python",
    subtitle: "OpenPyXL and Spreadsheet Operations",
    tags: ["OpenPyXL", "Excel", "Automation"],
    points: [
      "Created and managed Excel workbooks using Python.",
      "Practised accessing cells, rows and columns.",
      "Performed calculations using sales data.",
      "Explored worksheet operations and chart creation.",
    ],
  },
  {
    id: 7,
    title: "Discovering Patterns in Data",
    subtitle: "Summaries & Pivot Tables",
    tags: ["Pandas", "Data Analysis", "Pivot Tables"],
    points: [
      "Explored data inspired by Visual Capitalist.",
      "Organized information using Pandas.",
      "Worked with summaries and pivot-table operations.",
      "Learned how structured analysis reveals useful patterns.",
    ],
  },
  {
    id: 8,
    title: "Building a Disaster Response Platform",
    subtitle: "InteroperAI-ResQUE Project",
    tags: ["APIs", "React", "Data Integration"],
    points: [
      "Worked on integrating disaster data from multiple sources.",
      "Explored validation, schema mapping and transformation.",
      "Designed an interface for managing uploaded datasets.",
      "Connected the workflow to emergency response coordination.",
    ],
  },
  {
    id: 9,
    title: "Presenting Our Project",
    subtitle: "Project Review 2 & Audio Presentation",
    tags: ["Presentation", "Project Review", "Audio"],
    points: [
      "Explained the disaster response platform's purpose.",
      "Presented its data integration and assessment workflow.",
      "Documented the presentation through audio and transcription.",
      "Practised communicating technical ideas clearly.",
    ],
  },
  {
    id: 10,
    title: "Predicting Loan Eligibility",
    subtitle: "Machine Learning Model Pipeline",
    tags: ["Machine Learning", "Scikit-learn", "Prediction"],
    points: [
      "Explored a dataset containing 614 loan records.",
      "Prepared data for loan eligibility prediction.",
      "Worked with classification models and evaluation.",
      "Studied model accuracy and methods to reduce overfitting.",
    ],
  },
];

// =============================================
// NAVIGATION - ALL TEN PAGES
// =============================================

const navigation = [
  { id: "home", label: "Home", icon: Home },
  { id: "stars", label: "My STARS", icon: Star },
  { id: "assignments", label: "Assignments", icon: BookOpen },
  { id: "classroom", label: "Classroom", icon: Users },
  { id: "padlet", label: "Padlet", icon: FileText },
  { id: "storyboard", label: "Storyboard", icon: BookOpen },
  { id: "project", label: "Course Project", icon: Code2 },
  { id: "notes", label: "Class Notes", icon: BookOpen },
  { id: "materials", label: "Course Materials", icon: BookOpen },
  { id: "extra-lab", label: "Extra Lab", icon: ClipboardList },
];

// =============================================
// REUSABLE HOME EXPLORE CARD
// =============================================

function ExploreCard({
  icon: Icon,
  category,
  title,
  description,
  action,
  onClick,
}) {
  return (
    <button
      type="button"
      className="explore-card"
      onClick={onClick}
    >
      <div className="explore-icon">
        <Icon />
      </div>

      <span className="explore-label">
        {category}
      </span>

      <h3>{title}</h3>

      <p>{description}</p>

      <span className="explore-link">
        {action}
        <ArrowUpRight size={17} />
      </span>
    </button>
  );
}

// =============================================
// HOME PAGE
// =============================================

function HomePage({ navigate }) {
  return (
    <section className="hero page-enter">
      <div className="hero-content">
        <span className="eyebrow">
          <Sparkles size={15} />
          MY SEMESTER IN PYTHON
        </span>

        <h1>
          Learning.
          <br />
          Building.
          <br />
          <span className="accent-text">
            Growing.
          </span>
        </h1>

        <p className="hero-description">
          Hello, I'm <strong>Salva Soumya.</strong>{" "}
          Welcome to my Advanced Python Programming
          portfolio — a little space where I share my
          coding journey, classroom memories, creative
          projects and everything I learned along the way.
        </p>

        <div className="hero-actions">
          <button
            type="button"
            className="primary-btn"
            onClick={() => navigate("assignments")}
          >
            Explore my work
            <ArrowRight size={18} />
          </button>

          <button
            type="button"
            className="secondary-btn"
            onClick={() => navigate("stars")}
          >
            My special moments
            <Star size={17} />
          </button>
        </div>

        <div className="hero-meta">
          <span>CSI3007</span>
          <span className="meta-dot" />
          <span>Advanced Python Programming</span>
          <span className="meta-dot" />
          <span>VIT</span>
        </div>
      </div>

      <div className="hero-aside">
        <div className="hero-feature">
          <div className="feature-top">
            <span className="feature-number">
              MY LEARNING JOURNEY
            </span>
            <Sparkles size={22} />
          </div>

          <span className="feature-small">
            A SEMESTER OF DISCOVERY
          </span>

          <h2>
            More than just writing code.
          </h2>

          <p>
            A collection of ideas, experiments,
            mistakes, lessons, achievements and
            the small moments that made learning
            memorable.
          </p>

          <div className="feature-bottom">
            <span>Keep learning, keep creating.</span>
            <ArrowUpRight size={20} />
          </div>
        </div>
      </div>

      <div className="home-explore">
        <div className="section-intro compact">
          <span className="section-kicker">
            START EXPLORING
          </span>

          <h2>Pieces of my journey</h2>
        </div>

        <div className="explore-grid">
          <ExploreCard
            icon={Star}
            category="CLASSROOM MEMORIES"
            title="My STARS Moment"
            description="A little appreciation that brought a big smile."
            action="Explore memory"
            onClick={() => navigate("stars")}
          />

          <ExploreCard
            icon={FileText}
            category="PRACTICAL LEARNING"
            title="Lab Assignments"
            description="Ten assignments, many challenges and plenty of discoveries."
            action="View assignments"
            onClick={() => navigate("assignments")}
          />

          <ExploreCard
            icon={Users}
            category="LEARNING BEYOND BOOKS"
            title="Classroom Activities"
            description="Team discussions, Python quizzes, IoT ideas and memorable project challenges."
            action="Explore activities"
            onClick={() => navigate("classroom")}
          />

          <ExploreCard
            icon={BookOpen}
            category="CODING & PROBLEM SOLVING"
            title="Padlet & LeetCode"
            description="Six programming challenges across Easy, Medium and Hard levels, shared through Padlet."
            action="Explore my practice"
            onClick={() => navigate("padlet")}
          />

          <ExploreCard
            icon={BookOpen}
            category="CREATIVE PYTHON LEARNING"
            title="Multithreading Storyboard"
            description="A kitchen-themed visual journey through threads, priority queues and synchronization."
            action="View storyboard"
            onClick={() => navigate("storyboard")}
          />

          <ExploreCard
            icon={Code2}
            category="PYTHON COURSE PROJECT"
            title="InteroperAI-ResQUE"
            description="A two-part disaster data integration and intelligent assessment platform built with Python, FastAPI and React."
            action="Explore our project"
            onClick={() => navigate("project")}
          />

          <ExploreCard
            icon={BookOpen}
            category="MY CLASSROOM NOTEBOOK"
            title="Python Class Notes"
            description="My handwritten Python notes organized into eight chapters, with examples, takeaways and the original notebook."
            action="Explore my notes"
            onClick={() => navigate("notes")}
          />

          <ExploreCard
            icon={BookOpen}
            category="FACULTY LEARNING RESOURCES"
            title="Python Course Materials"
            description="Original lecture presentations and study PDFs shared during the semester, organized by syllabus module."
            action="Explore course materials"
            onClick={() => navigate("materials")}
          />

          <ExploreCard
            icon={ClipboardList}
            category="PRACTICE & ASSESSMENTS"
            title="Extra Lab Practice"
            description="Assessment question papers, multithreading experiments and extra Python practice sheets from our labs."
            action="Explore lab resources"
            onClick={() => navigate("extra-lab")}
          />
        </div>
      </div>
    </section>
  );
}

// =============================================
// MY STARS PAGE
// =============================================

function StarsPage() {
  return (
    <section className="content-page stars-page page-enter">
      {/* Introduction */}
      <div className="section-intro stars-intro">
        <span className="section-kicker">
          <Star size={15} />
          A SPECIAL PART OF MY PYTHON JOURNEY
        </span>
        <h1>
          Little stars, <em>big confidence.</em>
        </h1>
        <p>
          Sometimes the smallest moments of appreciation create the
          biggest changes in us. These stars became a beautiful part
          of my Advanced Python Programming journey.
        </p>
      </div>

      {/* Original photograph and personal experience */}
      <div className="stars-layout">
        <div className="photo-panel">
          <a
            href="/images/stars-photo.png"
            target="_blank"
            rel="noopener noreferrer"
            className="photo-link"
            aria-label="Open my STARS photograph"
          >
            <img
              src="/images/stars-photo.png"
              alt="Notebook page with handwritten classroom STARS appreciation"
              className="stars-photo"
            />
            <span className="photo-open">
              View full photograph <ArrowUpRight size={16} />
            </span>
          </a>
          <p className="photo-caption">
            A page filled with appreciation, happy memories and
            motivation to keep learning.
          </p>
        </div>

        <div className="stars-story">
          <span className="eyebrow">
            <Heart size={15} /> MORE THAN JUST STARS
          </span>
          <h2>
            A little appreciation.
            <br />
            A lot of encouragement.
          </h2>
          <p>
            Receiving stars in our Advanced Python Programming class
            always brought a smile to my face. What made them truly
            special was the encouragement behind them.
          </p>
          <p>
            Ma’am constantly motivated us to speak up, volunteer,
            answer questions and participate in classroom activities.
            She encouraged us to come to the dais, write and explain
            code on the laptop, and step up to the board to share
            our understanding.
          </p>
          <p>
            What initially felt a little challenging gradually became
            something I looked forward to. Every star reminded me to
            try again, participate more and become a little more
            confident each day.
          </p>
          <div className="quote-panel">
            <Sparkles size={22} />
            <blockquote>
              “Those little stars encouraged me to raise my hand,
              speak up and believe in myself.”
            </blockquote>
            <span>MY CLASSROOM EXPERIENCE</span>
          </div>
        </div>
      </div>

      {/* Comments visible in the photograph */}
      <div className="highlights-section">
        <div className="section-intro compact">
          <span className="section-kicker">WORDS THAT MADE ME SMILE</span>
          <h2>Little Words, Lasting Memories</h2>
          <p>
            Every encouraging word made classroom participation
            feel even more rewarding.
          </p>
        </div>
        <div className="highlight-grid">
          <div className="highlight-card">
            <span className="highlight-icon">✦</span>
            <h3>Super Star</h3>
            <p>
              “Super Star of My Advanced Python Class” — a compliment
              that made me feel happy, appreciated and motivated.
            </p>
          </div>
          <div className="highlight-card">
            <span className="highlight-icon">✳</span>
            <h3>Excellent!</h3>
            <p>
              Such a simple word, yet it brought so much
              encouragement to keep trying and improving.
            </p>
          </div>
          <div className="highlight-card">
            <span className="highlight-icon">♡</span>
            <h3>Thank U!</h3>
            <p>
              A sweet message that made this classroom memory
              even more special.
            </p>
          </div>
        </div>
      </div>

      {/* Growth reflection */}
      <div className="reflection-banner stars-growth">
        <CheckCircle2 size={23} />
        <div>
          <h3>From hesitation to participation</h3>
          <p>
            These activities encouraged me to answer questions more
            actively, volunteer for demonstrations, explain my ideas
            and build the confidence to participate without being
            afraid of making mistakes.
          </p>
        </div>
      </div>

      {/* Heartfelt thank-you */}
      <div className="stars-gratitude">
        <span className="stars-gratitude-icon">
          <Heart size={24} />
        </span>
        <span className="section-kicker">A HEARTFELT THANK YOU</span>
        <h2>Thank you for making learning feel special, Ma’am.</h2>
        <p>Dear Dr. Sharmila Banu K Ma’am,</p>
        <p>
          Thank you for encouraging us to come forward, answer
          questions, volunteer and express our ideas confidently.
          You pushed us beyond simply listening in class and helped
          us become active participants in our own learning.
        </p>
        <p>
          Whether it was coming to the dais to write code,
          explaining something on the board or trying to answer a
          question, your encouragement made every attempt feel valuable.
        </p>
        <p>
          The stars brought out the childlike excitement in us and
          made us look forward to participating every day. More than
          rewards, they became a source of motivation and confidence.
        </p>
        <p>
          I’m truly grateful for your patience, guidance and the
          wonderful learning environment you created. Thank you for
          making Advanced Python Programming such a memorable journey!
        </p>
        <div className="stars-signature">
          With gratitude and happiness,
          <strong>Salva Soumya ♡</strong>
        </div>
      </div>
    </section>
  );
}

// =============================================
// LAB ASSIGNMENTS PAGE
// =============================================

function AssignmentsPage({
  search,
  setSearch,
  filteredAssignments,
}) {
  return (
    <section className="content-page page-enter">
      <div className="section-intro">
        <span className="section-kicker">
          <GraduationCap size={16} />
          HANDS-ON LEARNING
        </span>

        <h1>
          My Python <em>Lab Journal.</em>
        </h1>

        <p>
          From solving coding problems to exploring
          data science, every assignment helped me
          learn something new. Here's a collection
          of my semester lab work.
        </p>
      </div>

      <div className="assignments-toolbar">
        <div>
          <span className="toolbar-eyebrow">
            MY LAB COLLECTION
          </span>

          <h2>Explore the assignments</h2>

          <p>
            Click any card to open its original PDF.
          </p>
        </div>

        <label className="search-box">
          <Search size={18} />

          <input
            type="search"
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
            placeholder="Search topics..."
            aria-label="Search assignments"
          />
        </label>
      </div>

      <div className="assignments-grid">
        {filteredAssignments.map((assignment) => {
          const pdfPath =
            `/assignments/assignment-${String(
              assignment.id
            ).padStart(2, "0")}.pdf`;

          return (
            <a
              key={assignment.id}
              href={pdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="assignment-card"
              aria-label={
                `Open Assignment ${assignment.id} PDF`
              }
            >
              <div className="assignment-card-top">
                <span className="assignment-number">
                  {String(assignment.id).padStart(2, "0")}
                </span>

                <span className="pdf-indicator">
                  <FileText size={14} />
                  PDF
                </span>
              </div>

              <h3>{assignment.title}</h3>

              <p className="assignment-subtitle">
                {assignment.subtitle}
              </p>

              <div className="tags">
                {assignment.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="assignment-divider" />

              <span className="overview-label">
                A LITTLE ABOUT THIS LAB
              </span>

              <ul className="assignment-points">
                {assignment.points.map((point, index) => (
                  <li key={index}>
                    <CheckCircle2 size={16} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <span className="open-pdf">
                Open Assignment{" "}
                {String(assignment.id).padStart(2, "0")}

                <ArrowUpRight size={19} />
              </span>
            </a>
          );
        })}
      </div>

      {filteredAssignments.length === 0 && (
        <div className="no-results">
          <Search size={28} />

          <h3>No matching assignments</h3>

          <p>
            Try searching with another topic or keyword.
          </p>
        </div>
      )}
    </section>
  );
}

// =============================================
// MAIN APPLICATION
// =============================================

function App() {
  const [page, setPage] = useState("home");
  const [search, setSearch] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  function navigate(destination) {
    setPage(destination);
    setMobileOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const filteredAssignments = assignments.filter(
    (assignment) => {
      const content = [
        assignment.title,
        assignment.subtitle,
        ...assignment.tags,
        ...assignment.points,
      ]
        .join(" ")
        .toLowerCase();

      return content.includes(
        search.trim().toLowerCase()
      );
    }
  );

  return (
    <div className="site-shell">
      {/* BACKGROUND ELEMENTS */}
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      {/* HEADER */}
      <header className="site-header">
        <button
          type="button"
          className="brand"
          onClick={() => navigate("home")}
        >
          <span className="brand-mark">S.</span>
          <span>Salva Soumya</span>
        </button>

        {/* FLOATING DESKTOP NAVIGATION */}
        <nav
          className="floating-nav"
          aria-label="Main navigation"
        >
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                type="button"
                className={`nav-item ${
                  page === item.id ? "active" : ""
                }`}
                onClick={() => navigate(item.id)}
                aria-current={
                  page === item.id ? "page" : undefined
                }
              >
                <Icon size={16} />
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* MOBILE NAVIGATION TOGGLE */}
        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          onClick={() =>
            setMobileOpen(!mobileOpen)
          }
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </header>

      {/* MOBILE NAVIGATION */}
      {mobileOpen && (
        <nav
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          {navigation.map((item) => (
            <button
              type="button"
              key={item.id}
              onClick={() => navigate(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}

      {/* MAIN CONTENT */}
      <main id="main-content">
        {page === "home" && (
          <HomePage navigate={navigate} />
        )}

        {page === "stars" && (
          <StarsPage />
        )}

        {page === "assignments" && (
          <AssignmentsPage
            search={search}
            setSearch={setSearch}
            filteredAssignments={filteredAssignments}
          />
        )}

        {page === "classroom" && (
          <ClassroomActivities />
        )}

        {page === "padlet" && (
          <PadletPractice />
        )}

        {page === "storyboard" && (
          <Storyboard />
        )}

        {page === "project" && (
          <CourseProject />
        )}

        {page === "notes" && (
          <PythonClassNotes />
        )}

        {page === "materials" && (
          <CourseMaterials />
        )}

        {page === "extra-lab" && (
          <ExtraLabPractice />
        )}
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-brand">
          <span className="brand-mark">
            S.
          </span>

          <div>
            <strong>Salva Soumya</strong>
            <span>
              Advanced Python Programming Portfolio
            </span>
          </div>
        </div>

        <span className="footer-message">
          Made with curiosity, code & a little bit of joy.
        </span>

        <span className="footer-course">
          CSI3007 · VIT
        </span>
      </footer>
    </div>
  );
}

export default App;