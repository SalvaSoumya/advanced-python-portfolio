
import React, { useEffect, useState } from "react";
import {
  ArrowUpRight,
  BookOpen,
  Camera,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Cpu,
  Heart,
  Mic,
  Sparkles,
  Trophy,
  X,
} from "lucide-react";
import "./classroom.css";

const activities = [
  {
    id: "tutorial",
    number: "01",
    category: "TEAMWORK & WEB DEVELOPMENT",
    title: "Python Tutorial & Team Website",
    subtitle: "From learning Python to sharing it with others",
    icon: BookOpen,
    images: [
      {
        src: "/classroom/python_tutorial_project_initial_.png",
        caption: "Our Python tutorial website classroom discussion",
      },
    ],
    description:
      "Dr. Sharmila Banu K Ma'am gave us an interesting challenge: to create a Python tutorial website and work in teams to develop a Python-based website. It encouraged us to think beyond solving individual programs and explore how programming knowledge can be presented through a website.",
    highlights: [
      "Explored the idea of building a Python tutorial website.",
      "Formed teams and discussed website ideas.",
      "Thought about making programming concepts easy to understand.",
      "Experienced the importance of teamwork and planning.",
    ],
    reflection:
      "I enjoyed how this activity brought coding, creativity and teamwork together. It made me excited about creating useful websites rather than just writing programs.",
  },
  {
    id: "iot",
    number: "02",
    category: "IoT & ASSISTIVE TECHNOLOGY",
    title: "IoT-Based Personalized Support for Autism",
    subtitle: "Technology designed to support everyday independence",
    icon: Cpu,
    images: [
      {
        src: "/classroom/autism_iot.jpeg",
        caption: "Architecture of the IoT-based autism support system",
      },
    ],
    description:
      "This application concept was designed to support individuals with Autism Spectrum Disorder (ASD). It combines wearable devices, environmental sensors, cloud communication and a mobile or web application to offer personalized daily assistance.",
    highlights: [
      "ESP32, wearable bands and sensors collect environmental information.",
      "MQTT and Firebase enable communication and data exchange.",
      "Data processing supports personalized reminders and sensory alerts.",
      "The application includes visual schedules, AAC communication and calm support.",
      "A caregiver dashboard provides activity updates and SOS notifications.",
    ],
    reflection:
      "This concept helped me see how IoT, cloud technology and software can come together to support people in their everyday lives.",
  },
  {
    id: "quiz",
    number: "03",
    category: "GAMIFIED CLASSROOM LEARNING",
    title: "Python Data Structures Quiz",
    subtitle: "Team spirit, a countdown and a leaderboard!",
    icon: Trophy,
    images: [
      {
        src: "/classroom/python_class_quiz.png",
        caption: "Getting ready for the classroom quiz",
      },
      {
        src: "/classroom/python_class_quiz_picture2.jpeg",
        caption: "Discussing answers during the timed quiz",
      },
      {
        src: "/classroom/python_class_quiz_picture3.jpeg",
        caption: "Quiz questions displayed on the classroom screen",
      },
    ],
    description:
      "One of the most exciting classroom activities was our Python data structures quiz! We played in groups, answered questions under a time limit and followed a leaderboard. The friendly competition made revision interesting and encouraged everyone to participate.",
    highlights: [
      "Revised copy operations, shallow copy and deep copy.",
      "Answered questions about list unpacking and sorted().",
      "Discussed answers and made decisions within our teams.",
      "Worked against the clock during each question.",
      "The leaderboard added excitement and motivation.",
    ],
    reflection:
      "The time limit made us think quickly, while the leaderboard made everything more exciting! I loved how we could revise Python topics while having fun with classmates.",
  },
  {
    id: "audio",
    number: "04",
    category: "COMMUNICATION & PROJECT PRESENTATION",
    title: "Project Audio Recording Challenge",
    subtitle: "Explain your project before the lab ends!",
    icon: Mic,
    images: [
      {
        src: "/classroom/business_tesis_audio_record.png",
        caption: "A classroom moment from the audio recording activity",
      },
    ],
    audio: "/classroom/project_audio_recording.mpeg",
    description:
      "Dr. Sharmila Banu K Ma'am asked us to record an audio explanation of the project we had worked on and upload the recording within the lab timings. It was a fun and challenging task because we had to organize our thoughts, explain the project clearly and finish on time.",
    highlights: [
      "Prepared a clear explanation of our project.",
      "Practised presenting technical ideas through audio.",
      "Recorded and submitted the explanation during the lab.",
      "Learned to organize information under a time limit.",
      "Gained confidence in technical communication.",
    ],
    reflection:
      "Recording an explanation within the lab time was both fun and challenging. It reminded me how important it is to understand a project well enough to explain it simply.",
  },
];

function ClassroomActivities() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  function changePhoto(direction) {
    setSelectedPhoto((current) => {
      if (!current) return null;

      return {
        ...current,
        index:
          (current.index + direction + current.images.length) %
          current.images.length,
      };
    });
  }

  useEffect(() => {
    if (!selectedPhoto) return;

    function handleKeyDown(event) {
      if (event.key === "Escape") setSelectedPhoto(null);
      if (event.key === "ArrowLeft") changePhoto(-1);
      if (event.key === "ArrowRight") changePhoto(1);
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedPhoto]);

  return (
    <section className="classroom-page page-enter">
      <div className="classroom-heading">
        <span className="classroom-eyebrow">
          <Sparkles size={15} />
          BEYOND THE TEXTBOOK
        </span>

        <h1>
          Our Classroom,
          <br />
          <em>Our Memories.</em>
        </h1>

        <p>
          From building websites to participating in timed quizzes,
          our Advanced Python Programming classes were filled with
          creativity, teamwork and memorable learning experiences.
        </p>

        <div className="classroom-stats">
          <span><strong>04</strong> Featured activities</span>
          <span><strong>06</strong> Photos & diagrams</span>
          <span><Heart size={16} /> Learning together</span>
        </div>
      </div>

      <div className="classroom-activity-list">
        {activities.map((activity) => {
          const Icon = activity.icon;

          return (
            <article
              className="classroom-activity"
              key={activity.id}
              id={`activity-${activity.id}`}
            >
              <div className="activity-header">
                <div className="activity-number">
                  {activity.number}
                </div>

                <div className="activity-heading-text">
                  <span className="activity-category">
                    <Icon size={15} />
                    {activity.category}
                  </span>

                  <h2>{activity.title}</h2>
                  <p>{activity.subtitle}</p>
                </div>
              </div>

              <div
                className={
                  activity.images.length === 1
                    ? "activity-gallery single-photo"
                    : "activity-gallery"
                }
              >
                {activity.images.map((photo, index) => (
                  <button
                    type="button"
                    className="activity-photo-button"
                    key={photo.src}
                    onClick={() =>
                      setSelectedPhoto({
                        images: activity.images,
                        index,
                      })
                    }
                    aria-label={`View photograph: ${photo.caption}`}
                  >
                    <img
                      src={photo.src}
                      alt={photo.caption}
                      loading="lazy"
                    />

                    <span className="photo-overlay">
                      <Camera size={16} />
                      View photo
                    </span>
                  </button>
                ))}
              </div>

              <div className="activity-information">
                <div className="activity-description">
                  <h3>A little about this activity</h3>
                  <p>{activity.description}</p>
                </div>

                <div className="activity-highlights">
                  <span className="activity-small-label">
                    WHAT I EXPLORED
                  </span>

                  <ul>
                    {activity.highlights.map((point) => (
                      <li key={point}>
                        <CheckCircle2 size={16} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {activity.id === "iot" && (
                <div className="iot-workflow">
                  <span className="activity-small-label">
                    HOW THE PROPOSED SYSTEM WORKS
                  </span>

                  <div className="workflow-steps">
                    <span>IoT Devices</span>
                    <ArrowUpRight size={15} />
                    <span>MQTT / Firebase</span>
                    <ArrowUpRight size={15} />
                    <span>Data Analysis</span>
                    <ArrowUpRight size={15} />
                    <span>Personalized Support</span>
                    <ArrowUpRight size={15} />
                    <span>App & Caregiver Dashboard</span>
                  </div>

                  <p>
                    Expected benefits include better routine support,
                    accessible communication, sensory awareness and
                    improved assistance for caregivers.
                  </p>
                </div>
              )}

              {activity.id === "quiz" && (
                <div className="quiz-topic-strip">
                  <span className="activity-small-label">
                    PYTHON TOPICS WE REVISED
                  </span>
                  <div className="quiz-topic-tags">
                    {[
                      "Copy",
                      "Shallow Copy",
                      "Deep Copy",
                      "List Unpacking",
                      "sorted()",
                    ].map((topic) => (
                      <span key={topic}>{topic}</span>
                    ))}
                  </div>
                </div>
              )}

              {activity.audio && (
                <div className="recording-section">
                  <div className="recording-heading">
                    <span className="recording-icon">
                      <Mic size={23} />
                    </span>
                    <div>
                      <h3>Listen to my project explanation</h3>
                      <p>
                        The original classroom audio recording
                      </p>
                    </div>
                  </div>

                  <audio
                    className="project-audio-player"
                    controls
                    preload="metadata"
                  >
                    <source
                      src={activity.audio}
                      type="audio/mpeg"
                    />
                    Your browser does not support audio playback.
                  </audio>

                  <a
                    href={activity.audio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="recording-open-link"
                  >
                    Open original audio
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              )}

              <div className="activity-reflection">
                <Heart size={19} />

                <div>
                  <strong>My little takeaway</strong>
                  <p>{activity.reflection}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="classroom-ending">
        <Sparkles size={24} />

        <h2>
          Learning feels better when we learn together.
        </h2>

        <p>
          Every activity brought something different to my semester:
          new ideas, teamwork, confidence and happy memories.
        </p>
      </div>

      {selectedPhoto && (
        <div
          className="classroom-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Classroom photograph viewer"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="lightbox-close"
            onClick={() => setSelectedPhoto(null)}
            aria-label="Close viewer"
          >
            <X />
          </button>

          <div
            className="lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedPhoto.images[selectedPhoto.index].src}
              alt={
                selectedPhoto.images[selectedPhoto.index].caption
              }
            />

            <p>
              {selectedPhoto.images[selectedPhoto.index].caption}
            </p>

            {selectedPhoto.images.length > 1 && (
              <div className="lightbox-controls">
                <button
                  onClick={() => changePhoto(-1)}
                  aria-label="Previous photograph"
                >
                  <ChevronLeft />
                </button>

                <span>
                  {selectedPhoto.index + 1} /{" "}
                  {selectedPhoto.images.length}
                </span>

                <button
                  onClick={() => changePhoto(1)}
                  aria-label="Next photograph"
                >
                  <ChevronRight />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default ClassroomActivities;