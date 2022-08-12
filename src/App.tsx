import { MantineProvider, Paper, Text } from '@mantine/core';
import AppShellNested from './components/AppShell';
import { Hero_Landing } from './components/hero_landing';

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS
      theme={{ colorScheme: 'dark' }}>
      {/* <Text>Welcome to Mantine!</Text> */}
      {/* <Hero_Landing /> */}
      <AppShellNested/>
        {/* <Hero_Landing/> */}
      {/* Not sure what wrapping does lol */}
      
    </MantineProvider>
  );
}

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
