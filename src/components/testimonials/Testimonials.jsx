// // // // // import React from "react";
// // // // // import "./testimonial.css";
// // // // // import { Data } from "./Data";
// // // // // // Import Swiper React components
// // // // // import { Swiper, SwiperSlide } from "swiper/react";
// // // // //
// // // // // // Import Swiper styles
// // // // // import "swiper/css";
// // // // // import "swiper/css/pagination";
// // // // // import {Pagination} from "swiper/modules";
// // // // //
// // // // // // import required modules
// // // // //
// // // // //
// // // // // const Testimonials = () => {
// // // // //   return (
// // // // //     <section className="testimonial container section">
// // // // //       <h2 className="section__title">My clients say</h2>
// // // // //       <span className="section__subtitle">Testimonial</span>
// // // // //
// // // // //       <Swiper
// // // // //         className="testimonial__container"
// // // // //         loop={true}
// // // // //         grabCursor={true}
// // // // //         spaceBetween={24}
// // // // //         pagination={{
// // // // //           clickable: true,
// // // // //         }}
// // // // //         breakpoints={{
// // // // //           576: {
// // // // //             slidesPerView: 2,
// // // // //           },
// // // // //           768: {
// // // // //             slidesPerView: 2,
// // // // //             spaceBetween: 48,
// // // // //           },
// // // // //         }}
// // // // //         modules={[Pagination]}
// // // // //       >
// // // // //         {Data.map(({ id, image, title, description }) => {
// // // // //           return (
// // // // //             <SwiperSlide className="testimonial__card" key={id}>
// // // // //               <img src={image} alt="" className="testimonial__img" />
// // // // //
// // // // //               <h3 className="testimonial__name">{title}</h3>
// // // // //               <p className="testimonial__description">{description}</p>
// // // // //             </SwiperSlide>
// // // // //           );
// // // // //         })}
// // // // //       </Swiper>
// // // // //     </section>
// // // // //   );
// // // // // };
// // // // //
// // // // // export default Testimonials;
// // // // //
// // // // // import React, { useState, useEffect } from "react";
// // // // // import "./testimonial.css";
// // // // // import { Swiper, SwiperSlide } from "swiper/react";
// // // // // import "swiper/css";
// // // // // import "swiper/css/pagination";
// // // // // import {Pagination} from "swiper/modules";
// // // // //
// // // // //
// // // // // const Testimonials = () => {
// // // // //   const [testimonials, setTestimonials] = useState([]);
// // // // //   const [maxHeight, setMaxHeight] = useState("auto");
// // // // //
// // // // //   useEffect(() => {
// // // // //     const fetchTestimonials = async () => {
// // // // //       try {
// // // // //         const response = await fetch("https://mrityunjay6294.pythonanywhere.com/portfolio/certifications/?profile_id=1");
// // // // //         if (!response.ok) {
// // // // //           throw new Error("Failed to fetch testimonials");
// // // // //         }
// // // // //         const data = await response.json();
// // // // //         setTestimonials(data);
// // // // //       } catch (error) {
// // // // //         console.error("Error fetching testimonials:", error);
// // // // //       }
// // // // //     };
// // // // //
// // // // //     fetchTestimonials();
// // // // //   }, []);
// // // // //
// // // // //   useEffect(() => {
// // // // //     const calculateMaxHeight = () => {
// // // // //       const slides = document.querySelectorAll(".swiper-slide");
// // // // //       let maxHeightValue = 0;
// // // // //       slides.forEach(slide => {
// // // // //         maxHeightValue = Math.max(maxHeightValue, slide.clientHeight);
// // // // //       });
// // // // //       setMaxHeight(maxHeightValue + "px");
// // // // //     };
// // // // //
// // // // //     calculateMaxHeight();
// // // // //
// // // // //     // Recalculate height on window resize
// // // // //     window.addEventListener("resize", calculateMaxHeight);
// // // // //
// // // // //     return () => {
// // // // //       window.removeEventListener("resize", calculateMaxHeight);
// // // // //     };
// // // // //   }, [testimonials]);
// // // // //
// // // // //   return (
// // // // //     <section className="testimonial container section">
// // // // //       <h2 className="section__title">My clients say</h2>
// // // // //       <span className="section__subtitle">Testimonial</span>
// // // // //
// // // // //       <Swiper
// // // // //         className="testimonial__container"
// // // // //         loop={true}
// // // // //         grabCursor={true}
// // // // //         spaceBetween={24}
// // // // //         pagination={{
// // // // //           clickable: true,
// // // // //         }}
// // // // //         breakpoints={{
// // // // //           576: {
// // // // //             slidesPerView: 2,
// // // // //           },
// // // // //           768: {
// // // // //             slidesPerView: 2,
// // // // //             spaceBetween: 48,
// // // // //           },
// // // // //         }}
// // // // //         modules={[Pagination]}
// // // // //         style={{ maxHeight: maxHeight }}
// // // // //       >
// // // // //         {testimonials.map(({ date_completed, title, certification_link, certificate_icon_pic, skills }, index) => (
// // // // //           <SwiperSlide className="testimonial__card" key={index}>
// // // // //             <div className="testimonial__content">
// // // // //               <div className="testimonial__icon">
// // // // //                 <img src={certificate_icon_pic} alt="Certificate Icon" />
// // // // //               </div>
// // // // //               <div className="testimonial__text">
// // // // //                 <h3 className="testimonial__title">{title}</h3>
// // // // //                 <p className="testimonial__date">Date Completed: {date_completed}</p>
// // // // //                 <p className="testimonial__skills" dangerouslySetInnerHTML={{ __html: skills }}></p>
// // // // //                 <a href={certification_link} className="testimonial__link" target="_blank" rel="noopener noreferrer">View Certification</a>
// // // // //               </div>
// // // // //             </div>
// // // // //           </SwiperSlide>
// // // // //         ))}
// // // // //       </Swiper>
// // // // //     </section>
// // // // //   );
// // // // // };
// // // // //
// // // // // export default Testimonials;
// // // //
// // // // import React, { useState, useEffect } from "react";
// // // // import "./testimonial.css";
// // // // import { Swiper, SwiperSlide } from "swiper/react";
// // // // import "swiper/css";
// // // // import "swiper/css/pagination";
// // // // import { Pagination } from "swiper/modules";
// // // //
// // // // const Testimonials = () => {
// // // //   const [testimonials, setTestimonials] = useState([]);
// // // //
// // // //   useEffect(() => {
// // // //     const fetchTestimonials = async () => {
// // // //       try {
// // // //         const response = await fetch("https://mrityunjay6294.pythonanywhere.com/portfolio/certifications/?profile_id=1");
// // // //         if (!response.ok) {
// // // //           throw new Error("Failed to fetch testimonials");
// // // //         }
// // // //         const data = await response.json();
// // // //         setTestimonials(data);
// // // //       } catch (error) {
// // // //         console.error("Error fetching testimonials:", error);
// // // //       }
// // // //     };
// // // //
// // // //     fetchTestimonials();
// // // //   }, []);
// // // //
// // // //   return (
// // // //     <section className="testimonial container section">
// // // //       <h2 className="section__title">My clients say</h2>
// // // //       <span className="section__subtitle">Testimonial</span>
// // // //
// // // //       <Swiper
// // // //         className="testimonial__container"
// // // //         loop={true}
// // // //         grabCursor={true}
// // // //         spaceBetween={24}
// // // //         pagination={{
// // // //           clickable: true,
// // // //         }}
// // // //         breakpoints={{
// // // //           576: {
// // // //             slidesPerView: 2,
// // // //           },
// // // //           768: {
// // // //             slidesPerView: 2,
// // // //             spaceBetween: 48,
// // // //           },
// // // //         }}
// // // //         modules={[Pagination]}
// // // //       >
// // // //         {testimonials.map(({ date_completed, title, certification_link, certificate_icon_pic, skills }, index) => (
// // // //           <SwiperSlide className="testimonial__card" key={index}>
// // // //             <div className="testimonial__content">
// // // //               <img className="testimonial__img" src={certificate_icon_pic} alt="Certificate Icon" />
// // // //               <div className="testimonial__text">
// // // //                 <h3 className="testimonial__title">{title}</h3>
// // // //                 <p className="testimonial__date">Date Completed: {date_completed}</p>
// // // //                 <p className="testimonial__skills" dangerouslySetInnerHTML={{ __html: skills }}></p>
// // // //                 <a href={certification_link} className="testimonial__link" target="_blank" rel="noopener noreferrer">View Certification</a>
// // // //               </div>
// // // //             </div>
// // // //           </SwiperSlide>
// // // //         ))}
// // // //       </Swiper>
// // // //     </section>
// // // //   );
// // // // };
// // // //
// // // // export default Testimonials;
// // // //
// // // //
// // // // import React, { useState, useEffect } from "react";
// // // // import "./testimonial.css";
// // // //
// // // // const Testimonials = () => {
// // // //   const [testimonials, setTestimonials] = useState([]);
// // // //
// // // //   useEffect(() => {
// // // //     const fetchTestimonials = async () => {
// // // //       try {
// // // //         const response = await fetch("https://mrityunjay6294.pythonanywhere.com/portfolio/certifications/?profile_id=1");
// // // //         if (!response.ok) {
// // // //           throw new Error("Failed to fetch testimonials");
// // // //         }
// // // //         const data = await response.json();
// // // //         setTestimonials(data);
// // // //       } catch (error) {
// // // //         console.error("Error fetching testimonials:", error);
// // // //       }
// // // //     };
// // // //
// // // //     fetchTestimonials();
// // // //   }, []);
// // // //
// // // //   return (
// // // //     <section className="testimonial container section">
// // // //       <div className="testimonial__container">
// // // //         {testimonials.map((testimonial, index) => (
// // // //           <div className="testimonial__card" key={index}>
// // // //             <img className="testimonial__img" src={testimonial.certificate_icon_pic} alt="Certificate Icon" />
// // // //             <div className="testimonial__text">
// // // //               <h3 className="testimonial__title">{testimonial.title}</h3>
// // // //               <p className="testimonial__date">Date Completed: {testimonial.date_completed}</p>
// // // //               <p className="testimonial__skills" dangerouslySetInnerHTML={{ __html: testimonial.skills }}></p>
// // // //
// // // //             </div>
// // // //             <div  className="testimonial__link-container">
// // // //               <a href={testimonial.certification_link} className="testimonial__link" target="_blank"
// // // //                     rel="noopener noreferrer">View Certification</a></div>
// // // //           </div>
// // // //         ))}
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };
// // // //
// // // // export default Testimonials;
// // // //
// // //
// // // import React, { useState, useEffect } from "react";
// // // import "./testimonial.css";
// // //
// // // const Testimonials = () => {
// // //   const [testimonials, setTestimonials] = useState([]);
// // //   const [currentIndex, setCurrentIndex] = useState(0);
// // //
// // //   useEffect(() => {
// // //     const fetchTestimonials = async () => {
// // //       try {
// // //         const response = await fetch("https://mrityunjay6294.pythonanywhere.com/portfolio/certifications/?profile_id=1");
// // //         if (!response.ok) {
// // //           throw new Error("Failed to fetch testimonials");
// // //         }
// // //         const data = await response.json();
// // //         setTestimonials(data);
// // //       } catch (error) {
// // //         console.error("Error fetching testimonials:", error);
// // //       }
// // //     };
// // //
// // //     fetchTestimonials();
// // //   }, []);
// // //
// // //   const handlePrev = () => {
// // //     setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
// // //   };
// // //
// // //   const handleNext = () => {
// // //     setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
// // //   };
// // //
// // //   return (
// // //     <section className="testimonial container section">
// // //       <div className="testimonial__container">
// // //         {testimonials.map((testimonial, index) => (
// // //           <div className={`testimonial__card ${index === currentIndex ? "active" : ""}`} key={index}>
// // //             <img className="testimonial__img" src={testimonial.certificate_icon_pic} alt="Certificate Icon" />
// // //             <div className="testimonial__text">
// // //               <h3 className="testimonial__title">{testimonial.title}</h3>
// // //               <p className="testimonial__date">Date Completed: {testimonial.date_completed}</p>
// // //               <p className="testimonial__skills" dangerouslySetInnerHTML={{ __html: testimonial.skills }}></p>
// // //             </div>
// // //             <div className="testimonial__link-container">
// // //               <a href={testimonial.certification_link} className="testimonial__link" target="_blank" rel="noopener noreferrer">View Certification</a>
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </div>
// // //       <button className="prev" onClick={handlePrev}>&#10094;</button>
// // //       <button className="next" onClick={handleNext}>&#10095;</button>
// // //     </section>
// // //   );
// // // };
// // //
// // // export default Testimonials;
// //
// // import React, { useState, useEffect } from "react";
// // import "./testimonial.css";
// //
// // const Testimonials = () => {
// //   const [testimonials, setTestimonials] = useState([]);
// //   const [currentIndex, setCurrentIndex] = useState(0);
// //
// //   useEffect(() => {
// //     const fetchTestimonials = async () => {
// //       try {
// //         const response = await fetch("https://mrityunjay6294.pythonanywhere.com/portfolio/certifications/?profile_id=1");
// //         if (!response.ok) {
// //           throw new Error("Failed to fetch testimonials");
// //         }
// //         const data = await response.json();
// //         setTestimonials(data);
// //       } catch (error) {
// //         console.error("Error fetching testimonials:", error);
// //       }
// //     };
// //
// //     fetchTestimonials();
// //   }, []);
// //
// //   const handlePrev = () => {
// //     setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
// //   };
// //
// //   const handleNext = () => {
// //     setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
// //   };
// //
// //   return (
// //     <section className="testimonial container section">
// //       <div className="testimonial__container">
// //         {testimonials.map((testimonial, index) => (
// //           <div className={`testimonial__card ${index === currentIndex ? "active" : ""}`} key={index}>
// //             <div className="testimonial__content">
// //               <img className="testimonial__img" src={testimonial.certificate_icon_pic} alt="Certificate Icon" />
// //               <div className="testimonial__text">
// //                 <h3 className="testimonial__title">{testimonial.title}</h3>
// //                 <p className="testimonial__date">{testimonial.date_completed}</p>
// //                 <p className="testimonial__skills" dangerouslySetInnerHTML={{ __html: testimonial.skills }}></p>
// //               </div>
// //             </div>
// //             <div className="testimonial__link-container">
// //               <a href={testimonial.certification_link} className="testimonial__link" target="_blank" rel="noopener noreferrer">View Certification</a>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //       {/*<button className="prev" onClick={handlePrev}>&#10094;</button>*/}
// //       {/*<button className="next" onClick={handleNext}>&#10095;</button>*/}
// //     </section>
// //   );
// // };
// //
// // export default Testimonials;
//
// import React, { useState, useEffect } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import './testimonial.css'; // Import your custom CSS file
//
// const Testimonials = () => {
//   const [testimonials, setTestimonials] = useState([]);
//
//   useEffect(() => {
//     const fetchTestimonials = async () => {
//       try {
//         const response = await fetch("https://mrityunjay6294.pythonanywhere.com/portfolio/certifications/?profile_id=1");
//         if (!response.ok) {
//           throw new Error("Failed to fetch testimonials");
//         }
//         const data = await response.json();
//         setTestimonials(data);
//       } catch (error) {
//         console.error("Error fetching testimonials:", error);
//       }
//     };
//
//     fetchTestimonials();
//   }, []);
//
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         }
//       }
//     ]
//   };
//
//   return (
//     <section className="testimonial container section">
//       <h2 className="section__title">My clients say</h2>
//       <span className="section__subtitle">Testimonial</span>
//
//       <Slider {...settings}>
//         {testimonials.map((testimonial, index) => (
//           <div className="testimonial__card" key={index}>
//             <img className="testimonial__img" src={testimonial.certificate_icon_pic} alt="Certificate Icon" />
//             <div className="testimonial__text">
//               <h3 className="testimonial__title">{testimonial.title}</h3>
//               <p className="testimonial__date">Date Completed: {testimonial.date_completed}</p>
//               <p className="testimonial__skills" dangerouslySetInnerHTML={{ __html: testimonial.skills }}></p>
//             </div>
//             <div className="testimonial__link-container">
//               <a href={testimonial.certification_link} className="testimonial__link" target="_blank" rel="noopener noreferrer">View Certification</a>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </section>
//   );
// };
//
// export default Testimonials;

import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './testimonial.css';
import './testimonial_support.css'// Import your custom CSS file

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("https://mrityunjay6294.pythonanywhere.com/portfolio/certifications/?profile_id=1");
        if (!response.ok) {
          throw new Error("Failed to fetch testimonials");
        }
        const data = await response.json();
        setTestimonials(data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  useEffect(() => {
    const calculateMaxHeight = () => {
      const testimonialCards = document.querySelectorAll('.testimonial__card');
      let maxHeight = 0;
      testimonialCards.forEach(card => {
        maxHeight = Math.max(maxHeight, card.offsetHeight);
      });
      testimonialCards.forEach(card => {
        card.style.height = `${maxHeight}px`;
      });
    };

    // Call the function initially and on testimonials change
    calculateMaxHeight();
    window.addEventListener('resize', calculateMaxHeight);
    return () => window.removeEventListener('resize', calculateMaxHeight);
  }, [testimonials]);

  const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4500,
  responsive: [
       {
      breakpoint: 1400,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
};


  return (
    <section className="testimonial container section" id="certifications">
      <h2 className="section__title">Certification and Badges</h2>
      <span className="section__subtitle"></span>

      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
            <div className="testimonial__card" key={index}>
              <div className="testimonial__content">
                <div className="testimonial__img-container">
                  <img className="testimonial__img" src={testimonial.certificate_icon_pic} alt="Certificate Icon"/>
                </div>
                <div className="testimonial__text">
                  <h3 className="testimonial__title">{testimonial.title}</h3>


                </div>

              </div>
              <div className="new_div">
                <p className="testimonial__date">Date Completed: {testimonial.date_completed}</p>
                <div className="skiil_tag">
                  <p>Skills : </p>
                </div>

                <p className="testimonial__skills" dangerouslySetInnerHTML= {{__html: testimonial.skills}}></p>
              </div>
              <div className="testimonial__link-container">
                <a href={testimonial.certification_link} className="testimonial__link" target="_blank"
                   rel="noopener noreferrer">View Certification</a>
              </div>
            </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
