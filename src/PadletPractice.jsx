
import React, { useState } from "react";
import {
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Code2,
  ExternalLink,
  FileText,
  Heart,
  Image,
  Lightbulb,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import "./padlet.css";

const PADLET_URL =
  "https://padlet.com/sharmilabanuk/object-oriented-python-question-sets-created-by-students-dmwur6hlhsjj013w";

const PDF_URL = "/padlet/leetcode-practice.pdf";

const screenshots = [
  {
    src: "/padlet/padlet-board.png",
    title: "Our Classroom Padlet",
    description:
      "Object Oriented Python Question Sets — Created by Students",
  },
  {
    src: "/padlet/my-padlet-submission.png",
    title: "My Padlet Submission",
    description:
      "My uploaded LeetCode questions and assignment evidence",
  },
];

const problems = [
  {
    number: 463,
    title: "Island Perimeter",
    difficulty: "Easy",
    topic: "2D Arrays & Grid Traversal",
    summary:
      "Finding the perimeter of an island by checking the neighbouring cells of a grid.",
    learned:
      "Practised working with 2D arrays, boundaries and adjacent cells.",
    url: "https://leetcode.com/problems/island-perimeter/description/",
  },
  {
    number: 13,
    title: "Roman to Integer",
    difficulty: "Easy",
    topic: "Strings & Hash Maps",
    summary:
      "Converting Roman numerals into integers using symbol values and comparison rules.",
    learned:
      "Explored string traversal, mappings and conditional logic.",
    url: "https://leetcode.com/problems/roman-to-integer/description/",
  },
  {
    number: 11,
    title: "Container With Most Water",
    difficulty: "Medium",
    topic: "Arrays & Two Pointers",
    summary:
      "Finding two lines that can hold the maximum amount of water.",
    learned:
      "Understood how the two-pointer approach can reduce unnecessary comparisons.",
    url: "https://leetcode.com/problems/container-with-most-water/description/",
  },
  {
    number: 56,
    title: "Merge Intervals",
    difficulty: "Medium",
    topic: "Sorting & Intervals",
    summary:
      "Combining overlapping intervals into a set of non-overlapping ranges.",
    learned:
      "Practised sorting intervals, comparing boundaries and updating results.",
    url: "https://leetcode.com/problems/merge-intervals/description/",
  },
  {
    number: 212,
    title: "Word Search II",
    difficulty: "Hard",
    topic: "Backtracking & Search",
    summary:
      "Searching a character grid for words formed through neighbouring cells.",
    learned:
      "Explored systematic searching, backtracking and avoiding repeated cell visits.",
    url: "https://leetcode.com/problems/word-search-ii/description/",
  },
  {
    number: 295,
    title: "Find Median from Data Stream",
    difficulty: "Hard",
    topic: "Data Streams & Heaps",
    summary:
      "Finding the median as new numbers are added to a changing collection.",
    learned:
      "Studied how to maintain data and calculate the median as new values arrive.",
    url: "https://leetcode.com/problems/find-median-from-data-stream/description/",
  },
];

const filters = ["All", "Easy", "Medium", "Hard"];

function PadletPractice() {
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredProblems =
    filter === "All"
      ? problems
      : problems.filter(
          (problem) => problem.difficulty === filter
        );

  return (
    <section className="padlet-page page-enter">
      <div className="padlet-hero">
        <span className="padlet-eyebrow">
          <Sparkles size={16} />
          LEARNING THROUGH PRACTICE
        </span>

        <h1>
          Practice. Solve.
          <br />
          <em>Share & Grow.</em>
        </h1>

        <p>
          As part of our Advanced Python Programming class,
          we explored LeetCode questions across three
          difficulty levels and shared our work through
          a collaborative Padlet board.
        </p>

        <div className="padlet-stat-grid">
          <div className="padlet-stat">
            <strong>06</strong>
            <span>Questions explored</span>
          </div>
          <div className="padlet-stat">
            <strong>03</strong>
            <span>Difficulty levels</span>
          </div>
          <div className="padlet-stat">
            <strong>01</strong>
            <span>Padlet submission</span>
          </div>
        </div>
      </div>

      {/* ACTIVITY INTRODUCTION */}

      <div className="padlet-section-heading">
        <span className="padlet-label">
          OUR COLLABORATIVE LEARNING SPACE
        </span>

        <h2>The Padlet Activity</h2>

        <p>
          A creative way to practise problem-solving,
          document our thinking and share what we learned.
        </p>
      </div>

      {/* SCREENSHOT GALLERY */}

      <div className="padlet-gallery">
        {screenshots.map((item, index) => (
          <button
            key={item.src}
            className="padlet-gallery-card"
            type="button"
            onClick={() => setSelectedImage(item)}
            aria-label={`View ${item.title}`}
          >
            <div className="padlet-gallery-image">
              <img
                src={item.src}
                alt={item.description}
                loading="lazy"
              />

              <span className="padlet-view-label">
                <Image size={16} />
                View screenshot
              </span>
            </div>

            <div className="padlet-gallery-info">
              <span>SCREENSHOT {String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </button>
        ))}
      </div>

      {/* EXPLANATION AND REFLECTION */}

      <div className="padlet-overview-grid">
        <div className="padlet-overview-card">
          <div className="padlet-overview-icon">
            <BookOpen size={24} />
          </div>

          <h3>What was the activity?</h3>

          <p>
            Under the guidance of Dr. Sharmila Banu K
            Ma'am, we explored LeetCode programming
            questions at Easy, Medium and Hard levels.
          </p>

          <p>
            We documented the questions, their logic
            and example test cases, then uploaded
            our work to the classroom Padlet.
          </p>
        </div>

        <div className="padlet-overview-card">
          <div className="padlet-overview-icon">
            <Lightbulb size={24} />
          </div>

          <h3>What did I learn?</h3>

          <ul className="padlet-learning-list">
            <li>
              <CheckCircle2 size={17} />
              Exploring problems at different difficulty levels.
            </li>
            <li>
              <CheckCircle2 size={17} />
              Understanding problem statements and test cases.
            </li>
            <li>
              <CheckCircle2 size={17} />
              Thinking about algorithms and Python class design.
            </li>
            <li>
              <CheckCircle2 size={17} />
              Documenting solutions and sharing academic work.
            </li>
          </ul>
        </div>
      </div>

      <div className="padlet-actions">
        <a
          className="padlet-primary-action"
          href={PADLET_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLink size={18} />
          Visit Our Padlet Board
          <ArrowUpRight size={17} />
        </a>

        <a
          className="padlet-secondary-action"
          href={PDF_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FileText size={18} />
          View My Submitted PDF
          <ArrowUpRight size={17} />
        </a>
      </div>

      {/* LEETCODE SECTION */}

      <div className="padlet-problems-section">
        <div className="padlet-section-heading">
          <span className="padlet-label">
            SIX PROBLEMS • THREE LEVELS
          </span>

          <h2>My LeetCode Exploration</h2>

          <p>
            Starting with basic programming logic and
            moving towards more challenging algorithms,
            each question introduced something new.
          </p>
        </div>

        <div className="padlet-filter-bar">
          <div className="padlet-filter-title">
            <Search size={18} />
            Explore by difficulty
          </div>

          <div className="padlet-filters">
            {filters.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                className={
                  filter === item ? "selected" : ""
                }
                aria-pressed={filter === item}
              >
                {item}
                <span>
                  {item === "All"
                    ? problems.length
                    : problems.filter(
                        (p) => p.difficulty === item
                      ).length}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="padlet-problem-grid">
          {filteredProblems.map((problem) => (
            <article
              className="padlet-problem-card"
              key={problem.number}
            >
              <div className="padlet-problem-top">
                <span className="padlet-problem-number">
                  #{problem.number}
                </span>

                <span
                  className={`padlet-difficulty ${problem.difficulty.toLowerCase()}`}
                >
                  {problem.difficulty}
                </span>
              </div>

              <h3>{problem.title}</h3>

              <span className="padlet-topic">
                <Code2 size={14} />
                {problem.topic}
              </span>

              <p className="padlet-summary">
                {problem.summary}
              </p>

              <div className="padlet-learned">
                <Lightbulb size={17} />
                <span>{problem.learned}</span>
              </div>

              <a
                href={problem.url}
                target="_blank"
                rel="noopener noreferrer"
                className="padlet-problem-link"
              >
                Explore LeetCode Problem
                <ArrowUpRight size={18} />
              </a>
            </article>
          ))}
        </div>
      </div>

      {/* IMAGE VIEWER */}

      {selectedImage && (
        <div
          className="padlet-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Padlet screenshot viewer"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            className="padlet-lightbox-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close screenshot"
          >
            <X size={22} />
          </button>

          <div
            className="padlet-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.description}
            />

            <p>{selectedImage.title}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default PadletPractice;