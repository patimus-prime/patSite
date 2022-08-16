import { MantineProvider, Paper, Text, Space } from "@mantine/core";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppShellNested from "./components/AppShell";
import { HeaderMiddle } from "./components/dependencies/Header";
import { HeaderSimple } from "./components/HeaderSimple";
import { Hero_Landing } from "./components/Hero_landing";
import { About } from "./pages/about";
import { AppCardsSection } from "./components/AppCards";
import { FeatureSmiles } from "./components/FeatureSmiles";
import { FeatureHeme } from "./components/FeatureHeme";
import { FeatureDockTool } from "./components/FeatureDockTool";
import { SherlockGrid } from "./components/SherlockGrid";
import { Pat } from "./components/Pat";
import { FooterSimple } from "./components/Footer";
// import { CarouselCards } from "./components/CarouselCards";

export default function App() {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ colorScheme: "dark" }}
    >
      {/* <AppShellNested></AppShellNested> */}
      {/* <Text>Welcome to Mantine!</Text> */}
      {/* <HeaderSimple links= {[
          { label: 'Home', link: '/' },
        ]}/> */}

      <Hero_Landing />
      <AppCardsSection />
      <FeatureHeme />
      <FeatureSmiles />
      <FeatureDockTool />
      <SherlockGrid />
      <Pat />
      <FooterSimple />
      {/* <Hero_Landing/> */}
      {/* Not sure what wrapping does lol */}
    </MantineProvider>
  );
}

// attempt to have folders etc.:
{
  /* <Router> */
}

// <Routes>
{
  /* <Route exact path='/' exact element={<Home />} /> */
}
// <Route path='/about' element={<About/>} />
// </Routes>
// </Router>

// og stuff from create-react-app, in case of fault:

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
