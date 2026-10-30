import React, { useEffect, useState } from "react";
import {
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  ChefHat,
  Heart,
  Layers,
  LockKeyhole,
  Maximize2,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import "./storyboard.css";

const storyboardImage = "/storyboard/multithreading-storyboard.png";

const characters = [
  {
    icon: ChefHat,
    label: "THE HEAD CHEF",
    title: "Main Thread",
    description:
      "Prepares the kitchen: creates the shared queue, starts the workers and coordinates when work is finished.",
  },
  {
    icon: Users,
    label: "THE KITCHEN TEAM",
    title: "Worker Threads",
    description:
      "Like chefs handling different orders, workers take available tasks and work concurrently.",
  },
  {
    icon: Layers,
    label: "THE ORDER RAIL",
    title: "Priority Queue",
    description:
      "Keeps incoming orders organized by task priority, so workers can pick up the most urgent available order first.",
  },
  {
    icon: LockKeyhole,
    label: "KITCHEN COORDINATION",
    title: "Safe Sharing",
    description:
      "A thread-safe queue coordinates task handoffs; other shared data may still need locks to prevent conflicts.",
  },
];

const workflow = [
  { title: "Prepare the kitchen", text: "The main thread creates a shared priority queue and sets up the workers." },
  { title: "Start the team", text: "Worker threads begin running and wait for orders to arrive." },
  { title: "Add the orders", text: "Tasks are placed in the queue with assigned priorities." },
  { title: "Pick the next order", text: "An available worker retrieves the highest-priority waiting task according to the queue's ordering." },
  { title: "Work together", text: "Workers process tasks concurrently, while the queue manages safe retrieval." },
  { title: "Close the kitchen", text: "After the queued work is completed, the program signals workers to finish and joins them." },
];

const takeaways = [
  "I understood how the main thread and worker threads have different responsibilities.",
  "I learned how a priority queue organizes tasks without deciding which thread runs first.",
  "I saw why safe access to shared resources matters in concurrent programs.",
  "Turning code into a kitchen story made the workflow easier to explain and remember.",
];

export default function Storyboard() {
  const [imageOpen, setImageOpen] = useState(false);

  useEffect(() => {
    if (!imageOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setImageOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [imageOpen]);

  return (
    <section className="storyboard-page page-enter">
      <header className="storyboard-intro">
        <span className="storyboard-eyebrow">
          <Sparkles size={15} /> CREATIVE PYTHON LEARNING
        </span>
        <h1>
          Understanding Python <em>through a story.</em>
        </h1>
        <p>
          For a classroom activity, we were asked to explain <strong>multithreading using a priority queue</strong>
          in a creative way. I imagined a busy restaurant kitchen, where orders keep coming in and several
          chefs work together. That simple idea helped turn an abstract Python concept into something I
          could picture and explain.
        </p>
        <div className="storyboard-intro-tags" aria-label="Concepts covered">
          <span>Multithreading</span><span>Priority Queue</span><span>Synchronization</span>
        </div>
      </header>

      <section className="storyboard-image-card" aria-labelledby="storyboard-art-title">
        <div className="storyboard-card-header">
          <div>
            <span className="storyboard-small-label">MY ORIGINAL CLASSROOM WORK</span>
            <h2 id="storyboard-art-title">A Busy Kitchen, Many Threads</h2>
            <p>A visual analogy for how Python workers receive and process prioritized tasks.</p>
          </div>
          <span className="storyboard-category">Python · Concurrency</span>
        </div>
        <button
          className="storyboard-image-button"
          type="button"
          onClick={() => setImageOpen(true)}
          aria-label="Open the full-size multithreading storyboard"
        >
          <img src={storyboardImage} alt="Original kitchen-themed multithreading and priority queue storyboard" />
          <span className="storyboard-zoom"><Maximize2 size={16} /> View full storyboard</span>
        </button>
        <p className="storyboard-caption">Click the image to see the full storyboard and read its details.</p>
      </section>

      <section className="storyboard-concepts-section" aria-labelledby="storyboard-characters-title">
        <div className="storyboard-section-heading">
          <span className="storyboard-small-label">THE STORY BEHIND THE CODE</span>
          <h2 id="storyboard-characters-title">Meet the Kitchen Team</h2>
          <p>Each part of the restaurant has a matching role in our Python program.</p>
        </div>
        <div className="storyboard-concepts">
          {characters.map(({ icon: Icon, label, title, description }) => (
            <article className="storyboard-concept-card" key={title}>
              <div className="storyboard-concept-icon"><Icon size={22} /></div>
              <span>{label}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="storyboard-explanation" aria-label="Python concept and story workflow">
        <div className="storyboard-explanation-copy">
          <span className="storyboard-small-label">FROM THE KITCHEN TO PYTHON</span>
          <h2>What's happening behind the story?</h2>
          <p>
            <strong>Multithreading</strong> lets a program manage several threads of execution concurrently.
            In our restaurant, each worker is like a chef who can handle an assigned order.
          </p>
          <p>
            A <strong>priority queue</strong> stores tasks with their priorities. When a worker requests a task,
            it receives the highest-priority task that is <em>still waiting</em> in the queue.
            An order already being prepared isn't automatically interrupted when a more urgent one arrives.
          </p>
          <div className="storyboard-note">
            <BookOpen size={20} />
            <p><strong>Python connection:</strong> We can model the idea using <code>threading</code> and <code>queue.PriorityQueue</code>. The queue is thread-safe for putting and getting tasks; separate locks may be required for other shared data. Task priority does not control operating-system thread scheduling.</p>
          </div>
        </div>
        <div className="storyboard-steps">
          <span className="storyboard-small-label">HOW THE STORY UNFOLDS</span>
          {workflow.map((step, index) => (
            <div className="storyboard-step" key={step.title}>
              <span className="storyboard-step-number">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="storyboard-learning" aria-labelledby="storyboard-learning-title">
        <div className="storyboard-section-heading">
          <span className="storyboard-small-label">WHAT THIS ACTIVITY TAUGHT ME</span>
          <h2 id="storyboard-learning-title">What I Took Away</h2>
        </div>
        <div className="storyboard-learning-grid">
          {takeaways.map((item) => (
            <div className="storyboard-learning-item" key={item}>
              <CheckCircle2 size={18} /><p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="storyboard-reflection">
        <Heart size={24} aria-hidden="true" />
        <span>MY LITTLE REFLECTION</span>
        <h2>Sometimes a story makes the code click.</h2>
        <p>
          I enjoyed thinking of threads as chefs and queued tasks as restaurant orders.
          It was a fun way to connect a technical lesson with something familiar, and it
          reminded me that explaining an idea creatively can help me understand it better too.
        </p>
      </section>

      {imageOpen && (
        <div className="storyboard-lightbox" role="dialog" aria-modal="true" aria-label="Full storyboard" onClick={() => setImageOpen(false)}>
          <button type="button" className="storyboard-lightbox-close" onClick={() => setImageOpen(false)} aria-label="Close storyboard"><X size={22} /></button>
          <img src={storyboardImage} alt="Enlarged original kitchen-themed multithreading priority queue storyboard" onClick={(event) => event.stopPropagation()} />
        </div>
      )}
    </section>
  );
}
