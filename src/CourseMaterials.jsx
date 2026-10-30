import React, { useMemo, useState } from "react";
import {
  BookOpen, Search, X, FileText, Presentation, ExternalLink,
  Download, ChevronRight, LibraryBig, Layers, Clock3
} from "lucide-react";
import "./courseMaterials.css";

// Keep the original uploaded filenames in public/course-materials/.
const ROOT = "/course-materials/";
const source = (name) => ROOT + encodeURIComponent(name);
const syllabusFile = "CSI3007_ADVANCED-PYTHON-PROGRAMMING_ETH_1.0_0_CSI3007_61 ACP.pdf";

const modules = [
  { id: 1, title: "Data Structures", hours: 4, description: "Python collections, functions, exceptions and functional programming.", topics: ["Lists, dictionaries, tuples & sets", "Functions & exceptions", "Lambda, map & filter", "Itertools & generators"], files: [
    { file: "MIL_Module_1_Data Structures in Python.pptx", title: "Data Structures in Python", description: "Collections, mutability, list operations, stack examples, dictionaries, sets and related programming ideas.", type: "PPTX", count: 84 }
  ] },
  { id: 2, title: "Classes and Objects", hours: 4, description: "A collection of lectures, worked class examples and practical exercises.", topics: ["Class and object basics", "Constructors, self & instance methods", "Object creation & passing values", "OOP practice activities"], files: [
    { file: "Module 2-Lect1-Class_intro.pptx", title: "Lecture 1 · Introduction to Classes", description: "OOP fundamentals, blueprint analogy, classes, instances, methods and classroom tasks.", type: "PPTX", count: 17 },
    { file: "Module2-Lect2-Class-creation-passing-types.pptx", title: "Lecture 2 · Creating Objects & Methods", description: "Creating instances, constructors, instance properties and methods, with Python examples.", type: "PPTX", count: 19 },
    { file: "Module2-Lab1-class.pptx", title: "Lab 1 · Class Activities", description: "Employee class exercises, UML diagrams, bank account and strong-number practice problems.", type: "PPTX", count: 16 },
    { file: "Module_2_Class and Objects_V3.0.pdf", title: "Classes and Objects · Study PDF", description: "Detailed faculty material on OOP concepts, class-object relationships and core principles.", type: "PDF", count: 64 }
  ] },
  { id: 3, title: "Multithreading in Python", hours: 4, description: "Processes, threads, multiprocessing basics and priority-queue workflows.", topics: ["Threads & threading module", "Processes & multiprocessing", "start() and join()", "Multithreaded priority queue"], files: [
    { file: "MODULE-3 (1).pptx", title: "Multithreading in Python", description: "Thread lifecycle, threading methods, multiprocessing examples and priority-queue concepts.", type: "PPTX", count: 26 }
  ] },
  { id: 4, title: "Data Processing", hours: 5, description: "Working with files, NumPy arrays and data preparation.", topics: ["CSV, Excel & JSON", "NumPy arrays & dimensions", "Indexing, slicing & shapes", "Views, copies & Matplotlib"], files: [
    { file: "Module_4_Data Processing_V3.0.pptx", title: "Data Processing", description: "Working with CSV and other formats, NumPy array operations, parsing and numerical data handling.", type: "PPTX", count: 110 }
  ] },
  { id: 5, title: "Data Science Perspectives", hours: 4, description: "Pandas structures, grouping, summarization and analysis.", topics: ["Series & DataFrames", "Multilevel indexing", "Grouping & aggregation", "Merging, dates & metrics"], files: [
    { file: "Module_5_Data Science Perpectives_V1.0.pptx", title: "Data Science Perspectives", description: "Pandas Series, alignment, vectorized operations, missing data and multi-index examples.", type: "PPTX", count: 23 }
  ] },
  { id: 6, title: "Data Handling Techniques", hours: 3, description: "Preparing, combining and cleaning real-world data.", topics: ["Data wrangling & munging", "Merging & joining", "Missing values & duplicates", "Loan prediction problem"], files: [
    { file: "Module_6_Data Handling Techniques_V 2.0.pptx", title: "Data Handling Techniques", description: "Cleaning, transformation, Pandas data-wrangling examples and handling missing or duplicate records.", type: "PPTX", count: 36 }
  ] },
  { id: 7, title: "Web Applications", hours: 4, description: "Python web frameworks, database programming and IoT-related applications.", topics: ["Django, Flask & Web2Py", "NoSQL databases", "IoT devices", "Predictive models & web programming"], files: [] },
  { id: 8, title: "Recent Trends", hours: 2, description: "Recent developments discussed as part of the course syllabus.", topics: ["Syllabus module", "Faculty material not uploaded yet"], files: [] }
];

const totalResources = modules.reduce((n, m) => n + m.files.length, 0);
const formatCount = (f) => `${f.count} ${f.type === "PDF" ? "pages" : "slides"}`;

export default function CourseMaterials() {
  const [selected, setSelected] = useState(1);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const visibleModules = useMemo(() => modules.map((m) => ({
    ...m,
    files: m.files.filter((f) => {
      const matchesType = filter === "All" || f.type === filter;
      const q = search.trim().toLowerCase();
      const matchesText = !q || [m.title, m.description, ...m.topics, f.title, f.description, f.file].join(" ").toLowerCase().includes(q);
      return matchesType && matchesText;
    })
  })), [search, filter]);
  const current = visibleModules.find((m) => m.id === selected);
  const hasSearch = Boolean(search.trim()) || filter !== "All";
  const matchingFiles = visibleModules.reduce((n, m) => n + m.files.length, 0);

  return (
    <section className="cm-page page-enter">
      <div className="cm-hero">
        <span className="cm-eyebrow"><LibraryBig size={16} /> FACULTY-SHARED LEARNING RESOURCES</span>
        <h1>Python Course <em>Materials.</em></h1>
        <p>A dedicated space for the original presentations and study PDFs shared during Advanced Python Programming. Organized module-wise, so it's easy to find a topic and open the material.</p>
        <div className="cm-summary">
          <div><strong>08</strong><span>Syllabus modules</span></div>
          <div><strong>{totalResources.toString().padStart(2, "0")}</strong><span>Teaching resources</span></div>
          <div><strong>30</strong><span>Theory hours</span></div>
          <a className="cm-syllabus" href={source(syllabusFile)} target="_blank" rel="noopener noreferrer"><FileText size={16}/> View Official Syllabus <ExternalLink size={15}/></a>
        </div>
      </div>

      <div className="cm-toolbar">
        <label className="cm-search"><Search size={17}/><input type="search" placeholder="Search slides, topics or modules..." aria-label="Search course materials" value={search} onChange={(e) => setSearch(e.target.value)}/>{search && <button type="button" aria-label="Clear search" onClick={() => setSearch("")}><X size={16}/></button>}</label>
        <div className="cm-filters" aria-label="Filter file types">
          {["All", "PPTX", "PDF"].map((t) => <button type="button" key={t} aria-pressed={filter === t} className={filter === t ? "active" : ""} onClick={() => setFilter(t)}>{t === "All" ? "All files" : t}</button>)}
        </div>
      </div>

      <div className="cm-layout">
        <aside className="cm-sidebar" aria-label="Course modules">
          <div className="cm-side-heading"><span>COURSE CONTENTS</span><strong>Browse modules</strong></div>
          <nav aria-label="Select syllabus module">
            {modules.map((m) => <button type="button" key={m.id} className={`cm-module-tab ${selected === m.id ? "active" : ""}`} aria-current={selected === m.id ? "true" : undefined} onClick={() => setSelected(m.id)}><span className="cm-module-num">{String(m.id).padStart(2,"0")}</span><span className="cm-tab-name">{m.title}<small>{m.files.length ? `${m.files.length} file${m.files.length > 1 ? "s" : ""}` : "Not uploaded yet"}</small></span><ChevronRight size={16}/></button>)}
          </nav>
        </aside>

        <div className="cm-main">
          <div className="cm-module-head">
            <div className="cm-heading-top"><span>MODULE {String(current.id).padStart(2,"0")}</span><span><Clock3 size={14}/> {current.hours} hours</span></div>
            <h2>{current.title}</h2><p>{current.description}</p>
            <div className="cm-topic-tags">{current.topics.map((t) => <span key={t}>{t}</span>)}</div>
          </div>
          <div className="cm-resource-heading"><div><h3>Study resources</h3><p>{hasSearch ? `${current.files.length} matching file(s) in this module · ${matchingFiles} across all modules` : `${current.files.length} faculty resource${current.files.length === 1 ? "" : "s"} available`}</p></div><BookOpen size={20}/></div>
          {current.files.length > 0 ? (
            <div className="cm-resource-list">{current.files.map((f) => {
              const Icon = f.type === "PDF" ? FileText : Presentation;
              return <article className="cm-resource" key={f.file}>
                <div className={`cm-file-icon ${f.type.toLowerCase()}`}><Icon size={23}/></div>
                <div className="cm-file-info"><div className="cm-file-meta"><span>{f.type}</span><span>{formatCount(f)}</span></div><h4>{f.title}</h4><p>{f.description}</p><small title={f.file}>{f.file}</small></div>
                <div className="cm-file-actions"><a href={source(f.file)} target="_blank" rel="noopener noreferrer" className="cm-open">Open file <ExternalLink size={14}/></a><a href={source(f.file)} download={f.file} className="cm-download" aria-label={`Download ${f.title}`}><Download size={17}/></a></div>
              </article>;
            })}</div>
          ) : (
            <div className="cm-empty"><Layers size={28}/><h3>{hasSearch ? "No matching files in this module" : "Materials not uploaded yet"}</h3><p>{hasSearch ? "Try another search or select a different module." : "This module is part of the syllabus, but its faculty slides or PDF have not been added yet."}</p></div>
          )}
          <p className="cm-footnote">These are the original uploaded teaching materials. PPTX files may download instead of opening in the browser; PDFs usually open in a new tab.</p>
        </div>
      </div>
    </section>
  );
}
