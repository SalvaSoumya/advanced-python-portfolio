
import React, { useState } from "react";
import {
  ArrowUpRight,
  BookOpen,
  Check,
  ChevronDown,
  ChevronRight,
  Clipboard,
  Code2,
  FileText,
  Lightbulb,
  Search,
  X,
} from "lucide-react";
import { notesChapters } from "./pythonNotesData";
import "./pythonNotes.css";

const NOTEBOOK_URL = "/notes/python-class-notes.pdf";

function CodeExample({ lesson }) {
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(lesson.code);
      setCopied(true);
    } catch (error) {
      console.error("Could not copy code:", error);
    }
  }

  if (!lesson.code) return null;

  return (
    <div className="pn-code-section">
      <div className="pn-code-header">
        <span><Code2 size={15} /> Python Example</span>
        <button type="button" onClick={copyCode}>
          {copied ? <Check size={15} /> : <Clipboard size={15} />}
          {copied ? "Copied" : "Copy code"}
        </button>
      </div>

      <pre className="pn-code"><code>{lesson.code}</code></pre>

      <div className="pn-code-label">{lesson.codeLabel}</div>

      {lesson.output && (
        <div className="pn-output">
          <span>EXPECTED OUTPUT</span>
          <pre>{lesson.output}</pre>
        </div>
      )}
    </div>
  );
}

function Lesson({ lesson, chapterId, index }) {
  const [expanded, setExpanded] = useState(false);
  const lessonId = `${chapterId}-lesson-${index}`;

  return (
    <article className="pn-lesson">
      <button
        type="button"
        className="pn-lesson-trigger"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
        aria-controls={lessonId}
      >
        <div>
          <span className="pn-page-label">
            ORIGINAL NOTEBOOK · PAGE {lesson.pages}
          </span>
          <h3>{lesson.title}</h3>
        </div>
        {expanded ? <ChevronDown size={19} /> : <ChevronRight size={19} />}
      </button>

      {expanded && (
        <div className="pn-lesson-body" id={lessonId}>
          <p className="pn-explanation">{lesson.description}</p>

          <ul className="pn-points">
            {lesson.points.map((point) => (
              <li key={point}>
                <Check size={15} />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <CodeExample lesson={lesson} />

          <div className="pn-takeaway">
            <Lightbulb size={18} />
            <div>
              <strong>What I understood</strong>
              <p>{lesson.takeaway}</p>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}

export default function PythonClassNotes() {
  const [selected, setSelected] = useState("collections");
  const [search, setSearch] = useState("");

  const query = search.trim().toLowerCase();

  const filteredChapters = notesChapters
    .map((chapter) => ({
      ...chapter,
      lessons: chapter.lessons.filter((lesson) => {
        if (!query) return true;

        const content = [
          chapter.title,
          chapter.summary,
          lesson.title,
          lesson.description,
          ...lesson.points,
          lesson.takeaway,
          lesson.code || "",
        ].join(" ").toLowerCase();

        return content.includes(query);
      }),
    }))
    .filter((chapter) => chapter.lessons.length > 0);

  const activeChapter = query
    ? filteredChapters.find((c) => c.id === selected) ||
      filteredChapters[0]
    : notesChapters.find((c) => c.id === selected);

  const lessonCount = notesChapters.reduce(
    (total, chapter) => total + chapter.lessons.length,
    0
  );

  function chooseChapter(id) {
    setSelected(id);
    document.getElementById("pn-content")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <section className="pn-page page-enter">
      <div className="pn-hero">
        <span className="pn-eyebrow">
          <BookOpen size={16} />
          MY CLASSROOM LEARNING JOURNAL
        </span>

        <h1>
          Python Class <em>Notes.</em>
        </h1>

        <p>
          These notes began as quick points, code snippets
          and little observations from our Advanced Python
          Programming classes. I've organized them here
          to revisit what we explored throughout the semester.
        </p>

        <div className="pn-hero-bottom">
          <div className="pn-stat">
            <strong>08</strong>
            <span>Chapters</span>
          </div>
          <div className="pn-stat">
            <strong>{lessonCount}</strong>
            <span>Learning topics</span>
          </div>
          <div className="pn-stat">
            <strong>24</strong>
            <span>Notebook pages</span>
          </div>

          <a
            href={NOTEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="pn-notebook-link"
          >
            <FileText size={17} />
            View Original Notebook
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      <div className="pn-search">
        <Search size={19} />
        <input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search concepts, functions or code..."
          aria-label="Search Python class notes"
        />
        {search && (
          <button
            type="button"
            aria-label="Clear search"
            onClick={() => setSearch("")}
          >
            <X size={17} />
          </button>
        )}
      </div>

      <div className="pn-layout">
        <aside className="pn-sidebar">
          <div className="pn-sidebar-heading">
            <span>CONTENTS</span>
            <strong>Learning Chapters</strong>
          </div>

          <nav aria-label="Python notes chapters">
            {filteredChapters.map((chapter) => (
              <button
                type="button"
                key={chapter.id}
                className={`pn-chapter-tab ${
                  activeChapter?.id === chapter.id ? "active" : ""
                }`}
                onClick={() => chooseChapter(chapter.id)}
              >
                <span className="pn-chapter-number">
                  {chapter.number}
                </span>
                <span>{chapter.title}</span>
                <ChevronRight size={16} />
              </button>
            ))}
          </nav>

          <p className="pn-sidebar-hint">
            Select a chapter, then expand a topic to view
            its explanation and Python example.
          </p>
        </aside>

        <div className="pn-main" id="pn-content">
          {activeChapter ? (
            <>
              <div className="pn-chapter-heading">
                <span className="pn-eyebrow">
                  CHAPTER {activeChapter.number}
                </span>

                <h2>{activeChapter.title}</h2>
                <p>{activeChapter.summary}</p>

                <span className="pn-source">
                  <FileText size={15} />
                  Notebook pages: {activeChapter.pages}
                </span>
              </div>

              <div className="pn-lessons">
                {activeChapter.lessons.map((lesson, index) => (
                  <Lesson
                    key={`${activeChapter.id}-${lesson.title}`}
                    chapterId={activeChapter.id}
                    index={index}
                    lesson={lesson}
                  />
                ))}
              </div>

              <div className="pn-chapter-note">
                <BookOpen size={19} />
                <p>
                  These are organized classroom notes, not
                  a verbatim transcription. Reconstructed,
                  corrected and supplementary programs are
                  labeled beside their code blocks.
                </p>
              </div>
            </>
          ) : (
            <div className="pn-empty">
              <Search size={30} />
              <h3>No matching topics</h3>
              <p>Try another Python keyword.</p>
              <button type="button" onClick={() => setSearch("")}>
                Clear Search
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
