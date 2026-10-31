import React from "react";
import { ArrowUpRight, BookOpen, Feather, Search, Sparkles } from "lucide-react";
import "./BlogPage.css";

const BLOG_URL =
  "https://medium.com/@salva.soumya2023/python-found-five-priyas-i-only-wanted-one-2da0225f3d72";

export default function BlogPage() {
  return (
    <section className="content-page blog-page page-enter">
      <div className="blog-intro">
        <span className="section-kicker">
          <Feather size={16} /> MY PYTHON WRITING
        </span>
        <h1>Little stories, <em>big discoveries.</em></h1>
        <p>
          Sometimes, the easiest way to understand a difficult concept is
          to turn it into a story. Here's my first Medium article, where
          a small campus mystery helps explain Pandas MultiIndex.
        </p>
      </div>

      <article className="blog-feature">
        <div className="blog-artwork">
          <img
            src="/blog/priya-medium-cover.jpg"
            alt="Minimal illustrated campus detective case: five Priya record cards, a magnifying glass, and hierarchical data labels"
            loading="lazy"
          />
        </div>

        <div className="blog-story">
          <span className="blog-label">
            <BookOpen size={15} />
            FEATURED MEDIUM STORY
          </span>
          <h2>Python Found Five Priyas. I Only Wanted One.</h2>
          <p className="blog-subtitle">
            Five students. One name. A surprisingly simple explanation
            of multilevel indexing in Pandas.
          </p>
          <p className="blog-description">
            What happens when searching for one student returns five
            different results? In this playful campus detective story,
            I follow clues from department to year to student ID,
            discovering how Pandas MultiIndex helps organize and
            navigate complex information.
          </p>

          <div className="blog-tags" aria-label="Article topics">
            <span>Python</span>
            <span>Pandas</span>
            <span>MultiIndex</span>
            <span>Storytelling</span>
          </div>

          <a
            className="blog-read-link"
            href={BLOG_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read my blog on Medium <ArrowUpRight size={18} />
          </a>
          <p className="blog-note">Opens the full article on Medium in a new tab.</p>
        </div>
      </article>

      <div className="blog-closing">
        <Sparkles size={18} />
        <p>
          Writing about Python reminded me that learning isn't only
          about getting the right output — it's about finding a way
          to make the idea click.
        </p>
        <span>— Salva Soumya ♡</span>
      </div>
    </section>
  );
}
