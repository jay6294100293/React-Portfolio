// // // import React from 'react';
// // // import "./App.css";
// // //
// // // import Home from './components/home/Home';
// // // import About from './components/about/About';
// // // import Skills from './components/skills/Skills';
// // // import Services from './components/services/Services';
// // // import Qualification from './components/qualification/Qualification';
// // // import Work from './components/Portfolio/Work';
// // // import Testimonials from './components/testimonials/Testimonials';
// // // import Contact from './components/contact/Contact';
// // // import Footer from './components/footer/Footer';
// // // import ScrollUp from './components/scrollup/ScrollUp';
// // //
// // // import NavbarComponent from "./components/header/Header";
// // //
// // // const App = () => {
// // //   return (
// // //     <>
// // //     {/*<Header />*/}
// // //         <NavbarComponent />
// // //
// // //     <main className='main'>
// // //       <Home />
// // //       <About />
// // //       <Skills />
// // //       <Services />
// // //       <Qualification />
// // //       <Work />
// // //       <Testimonials />
// // //       <Contact />
// // //     </main>
// // //
// // //     <Footer />
// // //     <ScrollUp />
// // //     </>
// // //   )
// // // }
// // //
// // // export default App
// //
// // // src/App.js
// // import React from 'react';
// // import './App.css';
// // import { DataProvider } from './apidata';
// // import Home from './components/home/Home';
// // import About from './components/about/About';
// // import Skills from './components/skills/Skills';
// // import Services from './components/services/Services';
// // import Qualification from './components/qualification/Qualification';
// // import Work from './components/Portfolio/Work';
// // import Testimonials from './components/testimonials/Testimonials';
// // import Contact from './components/contact/Contact';
// // import Footer from './components/footer/Footer';
// // import ScrollUp from './components/scrollup/ScrollUp';
// // import NavbarComponent from './components/header/Header';
// //
// // const App = () => {
// //   return (
// //     <DataProvider>
// //       <>
// //         <NavbarComponent />
// //         <main className="main">
// //           <Home />
// //           <About />
// //           <Skills />
// //           <Services />
// //           <Qualification />
// //           <Work />
// //           <Testimonials />
// //           <Contact />
// //         </main>
// //         <Footer />
// //         <ScrollUp />
// //       </>
// //     </DataProvider>
// //   );
// // };
// //
// // export default App;
//
// // src/App.js
// import React from 'react';
// import './App.css';
// import { DataProvider, useData } from './apidata'; // Ensure useData is correctly imported
// import Home from './components/home/Home';
// import About from './components/about/About';
// import Skills from './components/skills/Skills';
// import Services from './components/services/Services';
// import Qualification from './components/qualification/Qualification';
// import Work from './components/Portfolio/Work';
// import Testimonials from './components/testimonials/Testimonials';
// import Contact from './components/contact/Contact';
// import Footer from './components/footer/Footer';
// import ScrollUp from './components/scrollup/ScrollUp';
// import NavbarComponent from './components/header/Header';
// import LoadingAnimation from './components/LoadingAnimation'; // Import the LoadingAnimation component
// import './components/LoadingAnimation.css'; // Import the CSS for loading animation
//
// const App = () => {
//   const { loading } = useData(); // Access loading state from the context
//
//   if (loading) {
//     return <LoadingAnimation />; // Show loading animation while data is being fetched
//   }
//
//   return (
//     <DataProvider>
//       <>
//         <NavbarComponent />
//         <main className="main">
//           <Home />
//           <About />
//           <Skills />
//           <Services />
//           <Qualification />
//           <Work />
//           <Testimonials />
//           <Contact />
//         </main>
//         <Footer />
//         <ScrollUp />
//       </>
//     </DataProvider>
//   );
// };
//
// export default App;

// src/App.js
import React from 'react';
import './App.css';
import { useData } from './apidata';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Work from './components/Portfolio/Work';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import NavbarComponent from './components/header/Header';
import LoadingAnimation from './components/LoadingAnimation'; // Import the LoadingAnimation component
import './components/LoadingAnimation.css'; // Import the CSS for loading animation

const App = () => {
  const { loading } = useData(); // Access loading state from the context

  if (loading) {
    return <LoadingAnimation />; // Show loading animation while data is being fetched
  }

  return (
    <>
      <NavbarComponent />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Work />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
};

export default App;
