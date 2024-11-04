import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme-global'; // Importe o tema global primeiro
import './components/Header/Header.css'; // Importe o CSS personalizado depois
import Footer from './components/Footer/Footer'; 

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className='App'>
      <Header />
      <Body />
      <Footer />
    </div>
    </ThemeProvider>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//         className="App-link"
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

// export default App;/