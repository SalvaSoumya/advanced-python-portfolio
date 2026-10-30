
import React, { useState } from "react";
import {
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  ChefHat,
  GitBranch,
  Heart,
  Layers,
  LockKeyhole,
  Maximize2,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import "./storyboard.css";

const storyboardImage =
  "/storyboard/multithreading-storyboard.png";

const concepts = [
  {
    icon: ChefHat,
    title: "The Main Thread",
    subtitle: "Our Head Chef",
    description:
      "Sets up the shared priority queue, creates worker threads and coordinates the overall workflow.",
  },
  {
    icon: Users,
    title: "Worker Threads",
    subtitle: "Our Kitchen Team",
    description:
      "Multiple workers run concurrently, waiting for available tasks and processing the ones they receive.",
  },
  {
    icon: Layers,
    title: "Priority Queue",
    subtitle: "The Order Rail",
    description:
      "Organizes tasks by priority so workers retrieve the most important available work first.",
  },
  {
    icon: LockKeyhole,
    title: "Synchronization",
    subtitle: "Working Together Safely",
    description:
      "Thread-safe queue operations and appropriate locks help coordinate access to shared resources.",
  },
];

const steps = [
  "The main thread prepares the shared resources and priority queue.",
  "Worker threads are created and started.",
  "Workers wait for tasks while the queue is empty.",
  "The main thread adds prioritized tasks to the queue.",
  "Workers retrieve tasks safely and process them concurrently.",
  "The main thread and workers coordinate completion and shutdown.",
];

function Storyboard() {
  const [imageOpen, setImageOpen] = useState(false);

  return (
    <section className="storyboard-page page-enter">
      <div className="storyboard-intro">
        <span className="storyboard-eyebrow">
          <Sparkles size={16} />
          CREATIVE PYTHON LEARNING
        </span>

        <h1>
          Python Through
          <br />
          <em>Storytelling.</em>
        </h1>

        <p>
          For this classroom activity, we explored the
          concept of multithreading using a priority queue
          through a creative kitchen-themed storyboard.
          Instead of looking at code alone, we represented
          threads, tasks and synchronization as characters
          and activities in a busy restaurant.
        </p>
      </div>

      <div className="storyboard-image-card">
        <div className="storyboard-card-header">
          <div>
            <span className="storyboard-small-label">
              MY CLASSROOM STORYBOARD
            </span>
            <h2>Multithreading Using Priority Queue</h2>
          </div>
          <span className="storyboard-category">
            Python • Concurrency
          </span>
        </div>

        <button
          type="button"
          className="storyboard-image-button"
          onClick={() => setImageOpen(true)}
          aria-label="Enlarge storyboard"
        >
          <img
            src={storyboardImage}
            alt="Kitchen-themed flow diagram illustrating Python multithreading using a priority queue"
          />

          <span className="storyboard-zoom">
            <Maximize2 size={16} />
            View full storyboard
          </span>
        </button>

        <p className="storyboard-caption">
          A visual explanation of how the main thread,
          worker threads, a priority queue and shared
          resources work together.
        </p>
      </div>

      <div className="storyboard-section-heading">
        <span className="storyboard-small-label">
          UNDERSTANDING THE IDEA
        </span>
        <h2>Meet the Characters</h2>
        <p>
          Each character and object in the kitchen
          represents an important programming concept.
        </p>
      </div>

      <div className="storyboard-concepts">
        {concepts.map((concept) => {
          const Icon = concept.icon;

          return (
            <article
              className="storyboard-concept-card"
              key={concept.title}
            >
              <div className="storyboard-concept-icon">
                <Icon size={25} />
              </div>

              <span>{concept.subtitle}</span>
              <h3>{concept.title}</h3>
              <p>{concept.description}</p>
            </article>
          );
        })}
      </div>

      <div className="storyboard-explanation">
        <div className="storyboard-explanation-copy">
          <span className="storyboard-small-label">
            THE TECHNICAL CONCEPT
          </span>

          <h2>
            What is multithreading using
            a priority queue?
          </h2>

          <p>
            Multithreading allows a Python program to
            manage multiple threads of execution
            concurrently.
          </p>

          <p>
            A priority queue stores tasks along with
            their priorities. When worker threads request
            a task, the queue provides the available task
            with the highest priority according to its
            ordering rules.
          </p>

          <p>
            This approach can be useful for organizing
            background work, handling requests and
            processing tasks with different importance
            levels.
          </p>

          <div className="storyboard-note">
            <BookOpen size={19} />
            <p>
              <strong>Python connection:</strong> The
              concepts can be implemented using
              {" "}<code>threading</code> and
              {" "}<code>queue.PriorityQueue</code>.
            </p>
          </div>
        </div>

        <div className="storyboard-steps">
          <span className="storyboard-small-label">
            HOW THE WORKFLOW UNFOLDS
          </span>

          {steps.map((step, index) => (
            <div className="storyboard-step" key={index}>
              <span className="storyboard-step-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="storyboard-learning">
        <div className="storyboard-section-heading">
          <span className="storyboard-small-label">
            MY LEARNING OUTCOMES
          </span>
          <h2>What I Took Away</h2>
        </div>

        <div className="storyboard-learning-grid">
          {[
            "Understood the roles of main and worker threads.",
            "Explored priority-based task processing.",
            "Learned why synchronization matters.",
            "Connected Python concepts with a real-life analogy.",
          ].map((item) => (
            <div className="storyboard-learning-item" key={item}>
              <CheckCircle2 size={19} />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="storyboard-reflection">
        <Heart size={25} />
        <span>MY LITTLE REFLECTION</span>

        <h2>
          Complex concepts become simpler
          when we give them a story.
        </h2>

        <p>
          I enjoyed presenting a technical topic through
          a creative kitchen analogy. It helped me think
          about the flow of multithreading in a more
          visual and memorable way.
        </p>
      </div>

      {imageOpen && (
        <div
          className="storyboard-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Full storyboard"
          onClick={() => setImageOpen(false)}
        >
          <button
            type="button"
            className="storyboard-lightbox-close"
            onClick={() => setImageOpen(false)}
            aria-label="Close storyboard"
          >
            <X size={23} />
          </button>

          <img
            src={storyboardImage}
            alt="Full multithreading priority queue storyboard"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

export default Storyboard;