export const assignments = [
 {number:1,title:'Character Encoding & File Processing',description:'Comparing ANSI and Unicode, exploring PDF and structured-data processing, and analyzing video files.',tags:['Encoding','File formats'],pages:19},
 {number:2,title:'LeetCode Problem Solving',description:'Practicing algorithmic problem-solving with strings, arrays, sorting, and debugging exercises.',tags:['Algorithms','Problem solving'],pages:15},
 {number:3,title:'MedHUB — Figma UI Design',description:'Designing the frontend of a remote patient–doctor health monitoring gateway, including an AI symptom checker.',tags:['Figma','UI design'],pages:3},
 {number:4,title:'Object-Oriented Python & Multithreading',description:'Implementing Python classes, object methods, test cases, threads, and concurrent execution patterns.',tags:['OOP','Concurrency'],pages:24},
 {number:5,title:'Working with CSV, JSON & Pandas',description:'Reading and writing structured files, updating datasets, and exploring DataFrames with Pandas.',tags:['Pandas','Data handling'],pages:5},
 {number:6,title:'Excel Automation with OpenPyXL',description:'Creating and editing workbooks, computing spreadsheet summaries, and generating Excel charts programmatically.',tags:['OpenPyXL','Automation'],pages:19},
 {number:7,title:'Data Summaries & Pivot Tables',description:'Using Pandas to summarize geographic data, compute aggregate statistics, and construct pivot tables.',tags:['Pandas','Analytics'],pages:9},
 {number:8,title:'Intelligent Disaster Response Platform',description:'Documenting a disaster-data interoperability platform for validation, schema mapping, APIs, and emergency coordination.',tags:['Project','APIs'],pages:14},
 {number:9,title:'Project Review & Audio Presentation',description:'Presenting the disaster response platform through a recorded project review and supporting transcript.',tags:['Presentation','Project'],pages:4},
 {number:10,title:'Machine Learning — Loan Prediction',description:'Building a preprocessing and classification pipeline for loan eligibility prediction and evaluating model performance.',tags:['ML','Scikit-learn'],pages:8},
].map(a=>({...a,href:`/assignments/assignment-${String(a.number).padStart(2,'0')}.pdf`}))
export const evidence=[
 {title:'STARS Activity',format:'Photograph'}, {title:'Storyboard',format:'Document / image'},
 {title:'Python Tutorial Discussion',format:'Photograph'}, {title:'IoT Impairment Assessment',format:'Project evidence'},
 {title:'Class Quiz',format:'Screenshot / document'}, {title:'Medium Blog',format:'Article link'},
 {title:'Audio Recording Website',format:'Website / audio'}, {title:'Website Presentation',format:'PPT'},
 {title:'Website Demo Video',format:'Video'}, {title:'Padlet Questions',format:'Screenshots'}]
