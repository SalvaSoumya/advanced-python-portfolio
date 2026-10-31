
import React, { useState } from "react";
import {
  ArrowUpRight,
  Table2,
  BookOpen,
  BrainCircuit,
  CheckCircle2,
  ClipboardList,
  Download,
  FileCode2,
  FileText,
  NotebookTabs,
  Search,
  X,
} from "lucide-react";

import "./extraLabPractice.css";

const BASE = "/extra-lab/";

const fileUrl = (name) =>
  BASE + encodeURIComponent(name);

// ------------------------------------
// QUESTION PAPERS
// ------------------------------------

const questionPapers = [
  {
    title: "Python Data Processing Question Paper",
    subtitle: "Data Processing & Python Practice",
    filename: "VL2026270103832_AST07 (1).pdf",
    type: "PDF",
    meta: "5 pages",
    tags: ["CSV", "JSON", "NumPy", "Pandas", "OpenPyXL"],
    points: [
      "Write and update CSV and JSON files using Python and Pandas.",
      "Work with Excel sheets, formulas and charts using OpenPyXL.",
      "Practise NumPy arrays, slicing, indexing, copies and views.",
      "Explore Pandas Series, DataFrames and data wrangling questions.",
    ],
  },
  {
    title: "Loan Eligibility Prediction Question Paper",
    subtitle: "Machine Learning & Model Evaluation",
    filename: "VL2026270103832_AST10.pdf",
    type: "PDF",
    meta: "1 page",
    tags: [
      "Machine Learning",
      "Preprocessing",
      "Model Evaluation",
    ],
    points: [
      "Investigate a loan dataset with 13 columns and over 600 records.",
      "Preprocess the data and train a loan eligibility prediction model.",
      "Save the trained model and evaluate its accuracy.",
      "Document improvements and ways to prevent overfitting.",
    ],
  },
];

// ------------------------------------
// EXTRA PRACTICE MATERIALS
// ------------------------------------

const practiceFiles = [
  {
    title: "Multithreading Lab",
    subtitle: "Threads & Concurrent Futures",
    filename: "Multithreading_Lab.pdf",
    type: "PDF",
    meta: "16 pages",
    tags: ["Threads", "ThreadPoolExecutor", "Timing"],
    description:
      "Classroom examples comparing sequential and threaded execution, start(), join(), multiple threads and concurrent futures.",
  },
  {
    title: "Multithreading Lab Practice",
    subtitle: "Jupyter Notebook",
    filename: "Multithreading_Lab_Practice (1).ipynb",
    type: "IPYNB",
    meta: "Notebook",
    tags: ["Jupyter", "Threads", "Futures"],
    description:
      "Practical Python experiments covering execution timing, threading, submit(), result() and as_completed().",
  },
  {
    title: "Practice Threads",
    subtitle: "Thread Creation & Execution",
    filename: "Practice Threads.pdf",
    type: "PDF",
    meta: "8 pages",
    tags: ["Threading", "Thread Names", "Execution"],
    description:
      "Examples of main and child threads, creating threads using functions or classes, and observing concurrent output.",
  },
  {
    title: "Python — Multithreading",
    subtitle: "Original Teaching Examples",
    filename: "Python - Multithreading.html",
    type: "HTML",
    meta: "Web document",
    tags: ["Multithreading", "Examples", "HTML"],
    description:
      "The original HTML study material containing Python threading examples and their outputs.",
  },
  {
    title: "CSV and JSON Tasks",
    subtitle: "File Handling Practice",
    filename: "CSV and JSON tasks_03.09.2026.pdf",
    type: "PDF",
    meta: "1 page",
    tags: ["CSV", "JSON", "Pandas"],
    description:
      "Exercises on writing CSV files, DictWriter, json.dump(), DataFrames, filtering and exporting structured data.",
  },
  {
    title: "OOP Lab Practice",
    subtitle: "Student & Gene Classes",
    filename: "Lab Practice (2).docx",
    type: "DOCX",
    meta: "2 problems",
    tags: ["Classes", "Methods", "DNA"],
    description:
      "Two Python class-design problems: tracking student marks and grades, and working with DNA sequences and GC content.",
  },
];

// ------------------------------------
// ADDITIONAL CLASSROOM ACTIVITIES
// ------------------------------------

const activities = [
  {
    id: "gvi",
    title: "Visual Capitalist — Pivot Table Practice",
    subtitle: "Pandas · GroupBy · Pivot Tables",
    icon: Table2,
    tags: [
      "Pandas",
      "DataFrame",
      "Pivot Tables",
      "GroupBy",
      "Visual Capitalist",
    ],
    description:
      "We used a Visual Capitalist dataset about tree coverage in 30 cities to practise creating DataFrames, grouping records and summarizing information with Pandas pivot tables. The focus of this activity was data analysis, not the Green View Index itself.",
    steps: [
      "Worked with a 30-city dataset containing rank, city, country and GVI columns.",
      "Created a Python dictionary and converted it into a Pandas DataFrame.",
      "Inspected the dataset and organized its columns for analysis.",
      "Grouped cities by country to compare counts and GVI values.",
      "Practised pivot_table() for country-wise city counts and average GVI.",
    ],
    source:
      "https://www.visualcapitalist.com/ranked-the-worlds-cities-with-the-most-tree-coverage/",
    sourceLabel: "View Data Source",
  },
  {
    id: "semantic",
    title: "Semantic Document Search",
    subtitle: "Sentence Transformers & FAISS",
    icon: BrainCircuit,
    tags: [
      "Python",
      "FAISS",
      "Embeddings",
      "Sentence Transformers",
    ],
    description:
      "We explored how a document-search system can find relevant text based on the meaning of a user's question, rather than simply matching keywords.",
    steps: [
      "Upload a PDF, DOCX or TXT document.",
      "Extract text and split it into smaller chunks.",
      "Generate 384-dimensional embeddings using all-MiniLM-L6-v2.",
      "Store document embeddings in FAISS.",
      "Convert the user's question into an embedding.",
      "Perform vector similarity search.",
      "Retrieve and display the most relevant text chunk.",
    ],
  },
];

// ------------------------------------
// REUSABLE FILE ACTIONS
// ------------------------------------

function FileActions({ item }) {
  const url = fileUrl(item.filename);

  return (
    <div className="elp-actions">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="elp-open"
      >
        <ArrowUpRight size={16} />
        Open Original
      </a>

      <a
        href={url}
        download={item.filename}
        className="elp-download"
      >
        <Download size={16} />
        Download
      </a>
    </div>
  );
}

// ------------------------------------
// REUSABLE TAGS
// ------------------------------------

function Tags({ tags }) {
  return (
    <div className="elp-tags">
      {tags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
    </div>
  );
}

// ------------------------------------
// RESOURCE CARD
// ------------------------------------

function ResourceCard({ item, paper = false }) {
  const Icon = paper
    ? ClipboardList
    : item.type === "IPYNB"
    ? NotebookTabs
    : item.type === "HTML"
    ? FileCode2
    : FileText;

  return (
    <article className="elp-card">
      <div className="elp-card-top">
        <span className="elp-icon">
          <Icon size={22} />
        </span>

        <span className="elp-format">
          {item.type} · {item.meta}
        </span>
      </div>

      {paper && (
        <span className="elp-number">
          ORIGINAL QUESTION PAPER
        </span>
      )}

      <h3>{item.title}</h3>

      <p className="elp-subtitle">
        {item.subtitle}
      </p>

      <Tags tags={item.tags} />

      {paper ? (
        <ul className="elp-points">
          {item.points.map((point) => (
            <li key={point}>
              <CheckCircle2 size={16} />
              {point}
            </li>
          ))}
        </ul>
      ) : (
        <p className="elp-description">
          {item.description}
        </p>
      )}

      <FileActions item={item} />
    </article>
  );
}

// ------------------------------------
// CLASSROOM ACTIVITY CARD
// ------------------------------------

function ActivityCard({ activity }) {
  const Icon = activity.icon;

  return (
    <article className="elp-card elp-activity-card">
      <div className="elp-card-top">
        <span className="elp-icon">
          <Icon size={23} />
        </span>

        <span className="elp-format">
          CLASSROOM PRACTICE
        </span>
      </div>

      <h3>{activity.title}</h3>

      <p className="elp-subtitle">
        {activity.subtitle}
      </p>

      <p className="elp-description">
        {activity.description}
      </p>

      <Tags tags={activity.tags} />

      <div className="elp-activity-steps">
        {activity.steps.map((step, index) => (
          <div className="elp-activity-step" key={step}>
            <span>
              {String(index + 1).padStart(2, "0")}
            </span>
            <p>{step}</p>
          </div>
        ))}
      </div>

      {activity.source && (
        <div className="elp-actions">
          <a
            href={activity.source}
            target="_blank"
            rel="noopener noreferrer"
            className="elp-open"
          >
            <ArrowUpRight size={16} />
            {activity.sourceLabel}
          </a>
        </div>
      )}
    </article>
  );
}

// ------------------------------------
// MAIN EXTRA LAB PAGE
// ------------------------------------

export default function ExtraLabPractice() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");

  const term = query.trim().toLowerCase();

  function matches(item) {
    return [
      item.title,
      item.subtitle,
      item.description || "",
      ...(item.points || []),
      ...(item.steps || []),
      ...item.tags,
    ]
      .join(" ")
      .toLowerCase()
      .includes(term);
  }

  const visiblePapers = questionPapers.filter(matches);
  const visiblePractice = practiceFiles.filter(matches);
  const visibleActivities = activities.filter(matches);

  const showPapers = filter !== "practice";
  const showPractice = filter !== "papers";

  const total =
    (showPapers ? visiblePapers.length : 0) +
    (showPractice
      ? visiblePractice.length + visibleActivities.length
      : 0);

  return (
    <section className="elp-page page-enter">

      {/* INTRODUCTION */}

      <header className="elp-hero">
        <span className="elp-kicker">
          <BookOpen size={16} />
          CSI3007 · ADVANCED PYTHON PROGRAMMING
        </span>

        <h1>
          Lab Practice
          <em> & Question Papers.</em>
        </h1>

        <p>
          A collection of the question papers, additional coding exercises,
          and hands-on Python activities I worked through during the semester.
          My submitted VTOP assignments are kept separately.
        </p>

        <div className="elp-stats">
          <span>
            <strong>02</strong> Question Papers
          </span>
          <span>
            <strong>06</strong> Practice Files
          </span>
          <span>
            <strong>02</strong> Hands-on Activities
          </span>
        </div>
      </header>

      {/* SEARCH AND FILTER */}

      <div className="elp-toolbar">
        <label className="elp-search">
          <Search size={18} />

          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search a topic or resource..."
            aria-label="Search lab resources"
          />

          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
            >
              <X size={16} />
            </button>
          )}
        </label>

        <div className="elp-filters">
          {[
            ["all", "All"],
            ["papers", "Question Papers"],
            ["practice", "Practice"],
          ].map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => setFilter(id)}
              className={filter === id ? "active" : ""}
              aria-pressed={filter === id}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {total === 0 && (
        <div className="elp-empty">
          No matching resources. Try another search.
        </div>
      )}

      {/* QUESTION PAPERS */}

      {showPapers && visiblePapers.length > 0 && (
        <section className="elp-section">
          <div className="elp-section-heading">
            <span>01 / LAB QUESTION PAPERS</span>
            <h2>Question Papers</h2>
            <p>
              The original question papers, kept
              separately from my submitted answers.
            </p>
          </div>

          <div className="elp-assessment-grid">
            {visiblePapers.map((item) => (
              <ResourceCard
                key={item.filename}
                item={item}
                paper
              />
            ))}
          </div>
        </section>
      )}

      {/* PRACTICE FILES */}

      {showPractice && visiblePractice.length > 0 && (
        <section className="elp-section">
          <div className="elp-section-heading">
            <span>02 / FACULTY PRACTICE RESOURCES</span>
            <h2>Practice & Preparation</h2>
            <p>
              Extra exercises, notebooks and study
              files shared during our Python labs.
            </p>
          </div>

          <div className="elp-practice-grid">
            {visiblePractice.map((item) => (
              <ResourceCard
                key={item.filename}
                item={item}
              />
            ))}
          </div>
        </section>
      )}

      {/* EXTRA HANDS-ON ACTIVITIES */}

      {showPractice && visibleActivities.length > 0 && (
        <section className="elp-section">
          <div className="elp-section-heading">
            <span>03 / CLASSROOM EXPLORATIONS</span>
            <h2>Hands-on Explorations</h2>
            <p>
              A few interesting activities where we
              explored real-world data and AI concepts
              using Python.
            </p>
          </div>

          <div className="elp-activities-grid">
            {visibleActivities.map((activity) => (
              <ActivityCard
                key={activity.id}
                activity={activity}
              />
            ))}
          </div>
        </section>
      )}

      {/* FOOTNOTE */}

      <p className="elp-footnote">
        <FileText size={17} />
        My completed and VTOP-submitted work is
        available under Lab Assignments.
        FTP-only submissions are not included,
        as those files are currently inaccessible.
      </p>
    </section>
  );
}
