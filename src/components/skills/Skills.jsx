
import React, { useState, useEffect } from "react";
import "./skills.css";

const Skills = () => {
  const [skillsData, setSkillsData] = useState([]);

  useEffect(() => {
    // Fetch skills data from backend API
    fetch('https://mrityunjay6294.pythonanywhere.com/portfolio/skill-groups/?profile_id=1')
      .then(response => response.json())
      .then(data => setSkillsData(data))
      .catch(error => console.error('Error fetching skills data:', error));
  }, []);

  // const renderSkills = () => {
  //   return skillsData.map((skill, index) => (
  //     <div className="skills__content" key={index}>
  //       <h3 className="skills__title">{skill.title}</h3>
  //       <div className="skills__box">
  //         {skill.names.map((item, i) => (
  //           <div className="skills__group" key={i}>
  //             <div className="skills__data">
  //               <i className="bx bx-badge-check"></i>
  //               <div className="skills__info">
  //                 <h3 className="skills__name">{item.name}</h3>
  //                 <span className="skills__level">{item.level}</span>
  //               </div>
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   ));
  // };
// const renderSkills = () => {
//   return skillsData.map((skill, index) => (
//     <div className="skills__content" key={index}>
//       <h3 className="skills__title">{skill.title}</h3>
//       <div className="skills__box">
//         {skill.names.map((item, i) => (
//           <div className="skills__group" key={i}>
//             <div className="skills__data">
//               <i className="bx bx-badge-check"></i>
//               <div className="skills__info">
//                 <h3 className="skills__name">{item.name}</h3>
//                 <span className="skills__level">{item.level}</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   ));
// };

    const renderSkills = () => {
  return skillsData.map((skill, index) => (
    <div className="skills__content" key={index}>
      <h3 className="skills__title">{skill.title}</h3>
      <div className="skills__box">
        {skill.names
          .sort((a, b) => a.name.length - b.name.length) // Sort by length of skill names
          .map((item, i) => (
            <div className="skills__group" key={i}>
              <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div className="skills__info">
                  <h3 className="skills__name">{item.name}</h3>
                  <span className="skills__level">{item.level}</span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  ));
};

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>
      <div className="skills__container container grid">
        {renderSkills()}
      </div>
    </section>
  );
};

export default Skills;
