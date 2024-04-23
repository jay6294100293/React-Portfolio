// // // // import React from "react";
// // // // import "./work.css";
// // // // import Works from "./Works";
// // // //
// // // //  // Main Display
// // // // const Work = () => {
// // // //   return (
// // // //     <section class="work section" id="portfolio">
// // // //       <h2 class="section__title">Portfolio</h2>
// // // //       <span class="section__subtitle">Most recent work</span>
// // // //
// // // //       <Works />
// // // //     </section>
// // // //   );
// // // // };
// // // //
// // // // export default Work;
// // // import React, { useState, useEffect } from "react";
// // // import "./work.css";
// // //
// // // // import data
// // // import { projectsData, projectsNav } from "./Data";
// // //
// // // const Projects = () => {
// // //   const [item, setItem] = useState({ name: "all" });
// // //   const [projects, setProjects] = useState([]);
// // //   const [active, setActive] = useState(0);
// // //
// // //   useEffect(() => {
// // //     // get projects based on item
// // //     if (item.name === "all") {
// // //       setProjects(projectsData);
// // //     } else {
// // //       const newProjects = projectsData.filter((project) => {
// // //         return project.category.toLowerCase() === item.name;
// // //       });
// // //       setProjects(newProjects);
// // //     }
// // //   }, [item]);
// // //
// // //   const handleClick = (e, index) => {
// // //     setItem({ name: e.target.textContent.toLowerCase() });
// // //     setActive(index);
// // //   };
// // //
// // //   return (
// // //     <section id="portfolio" className="work section">
// // //       <h2 className="section__title">Portfolio</h2>
// // //       <span className="section__subtitle">Most recent work</span>
// // //
// // //       {/* projects nav */}
// // //       <div className="work__filters">
// // //         {projectsNav.map((item, index) => {
// // //           return (
// // //             <span
// // //               onClick={(e) => {
// // //                 handleClick(e, index);
// // //               }}
// // //               className={`${active === index ? "active-work" : ""} work__item`}
// // //               key={index}
// // //             >
// // //               {item.name}
// // //             </span>
// // //           );
// // //         })}
// // //       </div>
// // //       {/* projects */}
// // //       <div className="work__container container grid">
// // //         {projects.map((item) => {
// // //           return (
// // //             <div className="work__card" key={item.id}>
// // //               <img src={item.image} alt="" className="work__img" />
// // //               <h3 className="work__title">{item.title}</h3>
// // //               <a href="#" className="work__button">
// // //                 Demo
// // //                 <i className="bx bx-right-arrow-alt work__button-icon"></i>
// // //               </a>
// // //             </div>
// // //           );
// // //         })}
// // //       </div>
// // //     </section>
// // //   );
// // // };
// // //
// // // export default Projects;
// //
// //
// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import "./work.css";
// //
// // const Projects = () => {
// //   const [projects, setProjects] = useState([]);
// //
// //   useEffect(() => {
// //     // Fetch data from API
// //     const fetchData = async () => {
// //       try {
// //         const response = await axios.get("YOUR_API_ENDPOINT_HERE");
// //         setProjects(response.data);
// //       } catch (error) {
// //         console.error("Error fetching data:", error);
// //       }
// //     };
// //
// //     fetchData();
// //   }, []);
// //
// //   return (
// //     <section id="portfolio" className="work section">
// //       <h2 className="section__title">Portfolio</h2>
// //       <span className="section__subtitle">Most recent work</span>
// //
// //       <div className="work__container container grid">
// //         {projects.map((project) => (
// //           <div className="work__card" key={project.id}>
// //             {/* Fixed size image */}
// //             <img src={project.project_pic} alt={project.title} className="work__img" />
// //
// //             {/* Title */}
// //             <h3 className="work__title">{project.title}</h3>
// //
// //             {/* Short description (limited to 200 words) */}
// //             <p className="work__description">
// //               {project.short_description.split(" ").slice(0, 200).join(" ")}...
// //             </p>
// //
// //             {/* Read more with hover */}
// //             <div className="work__read-more">
// //               <a href="#" className="work__button">
// //                 Read More
// //                 <i className="bx bx-right-arrow-alt work__button-icon"></i>
// //               </a>
// //
// //               {/* Hidden content */}
// //               <div className="work__hidden-content">
// //                 <div dangerouslySetInnerHTML={{ __html: project.read_more }} />
// //               </div>
// //             </div>
// //
// //             {/* GitHub link */}
// //             <a href={project.github_link} className="work__button">
// //               GitHub
// //               <i className="bx bxl-github work__button-icon"></i>
// //             </a>
// //
// //             {/* Demo link */}
// //             <a href={project.project_link} className="work__button">
// //               Demo
// //               <i className="bx bx-right-arrow-alt work__button-icon"></i>
// //             </a>
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // };
// //
// // export default Projects;
//
// // import React, { useState, useEffect } from "react";
// // import "./work.css";
// //
// // const Projects = () => {
// //   const [projects, setProjects] = useState([]);
// //   const [selectedCategory, setSelectedCategory] = useState("All");
// //
// //   useEffect(() => {
// //     fetch("https://mrityunjay6294.pythonanywhere.com/portfolio/projects/")
// //       .then((response) => response.json())
// //       .then((data) => setProjects(data));
// //   }, []);
// //
// //   // Extract unique project topics from the fetched projects
// //   const projectTopics = [...new Set(projects.map(project => project.project_topic))];
// //   // Add "All" option to the project topics
// //   projectTopics.unshift("All");
// //
// //   const filterProjects = (category) => {
// //     setSelectedCategory(category);
// //   };
// //
// //   // Filter projects based on the selected category
// //   const filteredProjects = selectedCategory === "All" ? projects : projects.filter(project => project.project_topic === selectedCategory);
// //
// //   return (
// //     <section id="portfolio" className="work section">
// //       <h2 className="section__title">Portfolio</h2>
// //       <span className="section__subtitle">Most recent work</span>
// //
// //       {/* Navigation */}
// //       <div className="work__filters">
// //         {projectTopics.map((topic, index) => (
// //           <span
// //             key={index}
// //             className={`work__item ${selectedCategory === topic && "active-work"}`}
// //             onClick={() => filterProjects(topic)}
// //           >
// //             {topic}
// //           </span>
// //         ))}
// //       </div>
// //
// //       {/* Project cards */}
// //       <div className="work__container container grid">
// //         {filteredProjects.map((project) => (
// //           <div className="work__card" key={project.id}>
// //             <img src={project.project_pic} alt="" className="work__img" />
// //             <h3 className="work__title">{project.title}</h3>
// //             <p className="work__description">{project.short_description}</p>
// //             <div className="work__read-more">
// //               <div className="work__read-more-text">Read More</div>
// //               <div className="work__read-more-content" dangerouslySetInnerHTML={{ __html: project.read_more }}></div>
// //             </div>
// //             <div className="work__buttons">
// //               <a href={project.github_link} className="work__button">
// //                 <i className="bx bxl-github"></i>
// //               </a>
// //               <a href={project.project_link} className="work__button">
// //                 <i className="bx bx-link-alt"></i>
// //               </a>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // };
// //
// // export default Projects;
//
// import React, { useState, useEffect } from "react";
// import "./work.css";
//
// const Projects = () => {
//   const [projects, setProjects] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("All");
//
//   useEffect(() => {
//     fetch("https://mrityunjay6294.pythonanywhere.com/portfolio/projects/")
//       .then((response) => response.json())
//       .then((data) => setProjects(data));
//   }, []);
//
//   // Extract unique project topics from the fetched projects
//   const projectTopics = [...new Set(projects.map(project => project.project_topic))];
//   // Add "All" option to the project topics
//   projectTopics.unshift("All");
//
//   const filterProjects = (category) => {
//     setSelectedCategory(category);
//   };
//
//   // Filter projects based on the selected category
//   const filteredProjects = selectedCategory === "All" ? projects : projects.filter(project => project.project_topic === selectedCategory);
//
//   return (
//     <section id="portfolio" className="work section">
//       <h2 className="section__title">Portfolio</h2>
//       <span className="section__subtitle">Most recent work</span>
//
//       {/* Navigation */}
//       <div className="work__filters">
//         {projectTopics.map((topic, index) => (
//           <span
//             key={index}
//             className={`work__item ${selectedCategory === topic && "active-work"}`}
//             onClick={() => filterProjects(topic)}
//           >
//             {topic}
//           </span>
//         ))}
//       </div>
//
//       {/* Project cards */}
//       <div className="work__container container grid">
//         {filteredProjects.map((project) => (
//           <div className="work__card" key={project.id}>
//             <img src={project.project_pic} alt="" className="work__img" />
//             <h3 className="work__title">{project.title}</h3>
//             <p className="work__description">{project.short_description}</p>
//             <div className="work__read-more">
//               <div className="work__read-more-text">Read More</div>
//               <div className="work__read-more-content" dangerouslySetInnerHTML={{ __html: project.read_more }}></div>
//             </div>
//             <div className="work__buttons">
//               <a href={project.github_link} className="work__button">
//                 <i className="bx bxl-github"></i>
//               </a>
//               <a href={project.project_link} className="work__button">
//                 <i className="bx bx-link-alt"></i>
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };
//
// export default Projects;

import React, { useState, useEffect } from "react";
import "./work.css";
import "./navigation.css"

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("https://mrityunjay6294.pythonanywhere.com/portfolio/projects/")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  const projectTopics = [...new Set(projects.map(project => project.project_topic))];
  projectTopics.unshift("All");

  const filterProjects = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects = selectedCategory === "All" ? projects : projects.filter(project => project.project_topic === selectedCategory);

  return (
    <section id="portfolio" className="work section">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Most recent work</span>

      <div className="work__filters">
        {projectTopics.map((topic, index) => (
          <span
            key={index}
            className={`work__item ${selectedCategory === topic && "active-work"}`}
            onClick={() => filterProjects(topic)}
          >
            {topic}
          </span>
        ))}
      </div>

      <div className="work__container container grid">
        {filteredProjects.map((project) => (
          <div className="work__card" key={project.id}>
            <img src={project.project_pic} alt="" className="work__img" />
            <h3 className="work__title">{project.title}</h3>
            <p className="work__description">{project.short_description}</p>
            <div className="work__read-more">
              <div className="work__read-more-text">Read More</div>
              <div className="work__read-more-content" dangerouslySetInnerHTML={{ __html: project.read_more }}></div>
            </div>
            <div className="work__buttons">
              <a href={project.github_link} className="work__button" target="_blank" rel="noopener noreferrer">
                <i className="bx bxl-github"></i>
              </a>
              <a href={project.project_link} className="work__button" target="_blank" rel="noopener noreferrer">
                <i className="bx bx-link-alt"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
