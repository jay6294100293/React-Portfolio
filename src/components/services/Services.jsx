// import React, { useState, useEffect } from "react";
// import "./services.css";
//
// const Services = () => {
//   const [services, setServices] = useState([]);
//   const [toggleState, setToggleState] = useState(null);
//
//   useEffect(() => {
//     // Fetch data from API
//     const fetchData = async () => {
//       try {
//         const response = await fetch("https://mrityunjay6294.pythonanywhere.com/portfolio/work-experiences/?profile_id=1");
//         const data = await response.json();
//         setServices(data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
//
//     fetchData();
//   }, []);
//
//   const toggleTab = (index) => {
//     setToggleState(index);
//   };
//
//   return (
//     <section className="services section" id="services">
//       <h2 className="section__title">Services</h2>
//       <span className="section__subtitle">What I offer</span>
//
//       <div className="services__container container grid">
//         {services.map((service, index) => (
//           <div className="services__content" key={service.id}>
//             <div className="services__data">
//               <img
//                 src={service.company_logo}
//                 alt={service.company}
//                 className="services__img"
//               />
//               <h3 className="services__title">{service.title}</h3>
//             </div>
//
//             <span
//               className="services__button"
//               onClick={() => toggleTab(index)}
//             >
//               View More
//               <i className="uil uil-arrow-right services__button-icon"></i>
//             </span>
//
//             <div
//               className={
//                 toggleState === index
//                   ? "services__modal active-modal"
//                   : "services__modal"
//               }
//             >
//               <div className="services__modal-content">
//                 <i
//                   onClick={() => toggleTab(null)}
//                   className="uil uil-times services__modal-close"
//                 ></i>
//
//                 <h3 className="services__modal-title">{service.title}</h3>
//                 <p
//                   className="services__modal-description"
//                   dangerouslySetInnerHTML={{ __html: service.responsibilities }}
//                 ></p>
//
//                 {/* You can render other details dynamically here */}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };
//
// export default Services;
//
// import React, { useState, useEffect } from "react";
// import "./services.css";
//
// const Services = () => {
//   const [services, setServices] = useState([]);
//   const [toggleState, setToggleState] = useState(null);
//
//   useEffect(() => {
//     // Fetch data from API
//     const fetchData = async () => {
//       try {
//         const response = await fetch("https://mrityunjay6294.pythonanywhere.com/portfolio/work-experiences/?profile_id=1");
//         const data = await response.json();
//         setServices(data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
//
//     fetchData();
//   }, []);
//
//   const toggleTab = (index) => {
//     setToggleState(index);
//   };
//
//   // Function to format date as "YYYY MMM"
//   const formatDate = (dateString) => {
//     const options = { year: "numeric", month: "short" };
//     return new Date(dateString).toLocaleDateString("en-US", options);
//   };
//
//   return (
//     <section className="services section" id="services">
//       <h2 className="section__title">Services</h2>
//       <span className="section__subtitle">What I offer</span>
//
//       <div className="services__container container grid">
//         {services.map((service, index) => (
//           <div className="services__content" key={service.id}>
//             <div className="services__data">
//               <img
//                 src={service.company_logo}
//                 alt={service.company}
//                 className="services__img"
//               />
//               <h3 className="services__title">{service.title}</h3>
//               <p className="services__dates">
//                 {formatDate(service.start_date)} - {formatDate(service.end_date)}
//               </p>
//             </div>
//
//             <span
//               className="services__button"
//               onClick={() => toggleTab(index)}
//             >
//               View More
//               <i className="uil uil-arrow-right services__button-icon"></i>
//             </span>
//
//             <div
//               className={
//                 toggleState === index
//                   ? "services__modal active-modal"
//                   : "services__modal"
//               }
//             >
//               <div className="services__modal-content">
//                 <i
//                   onClick={() => toggleTab(null)}
//                   className="uil uil-times services__modal-close"
//                 ></i>
//
//                 <h3 className="services__modal-title">{service.title}</h3>
//                 <p
//                   className="services__modal-description"
//                   dangerouslySetInnerHTML={{ __html: service.responsibilities }}
//                 ></p>
//
//                 {/* You can render other details dynamically here */}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };
//
// export default Services;


import React, { useState, useEffect } from "react";
import "./services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  const [toggleState, setToggleState] = useState(null);

  useEffect(() => {
    // Fetch data from API
    const fetchData = async () => {
      try {
        const response = await fetch("https://mrityunjay6294.pythonanywhere.com/portfolio/work-experiences/?profile_id=1");
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  // Function to format date as "YYYY MMM"
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Experience</h2>
      <span className="section__subtitle">click view more for more information</span>

      <div className="services__container container grid">
        {services.map((service, index) => (
          <div className="services__content" key={service.id}>
            <div className="services__data">
              <img
                src={service.company_logo}
                alt={service.company}
                className="services__img"
              />
              <h3 className="services__title">{service.title}</h3>
              <p className="services__dates">
                {formatDate(service.start_date)} - {formatDate(service.end_date)}
              </p>
            </div>

            <span
              className="services__button"
              onClick={() => toggleTab(index)}
            >
              View More
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div
              className={
                toggleState === index
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <i
                  onClick={() => toggleTab(null)}
                  className="uil uil-times services__modal-close"
                ></i>

                <h3 className="services__modal-title">{service.title}</h3>
                <p
                  className="services__modal-description"
                  dangerouslySetInnerHTML={{ __html: service.responsibilities }}
                ></p>

                {/* You can render other details dynamically here */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
