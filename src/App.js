import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { createBrowserHistory } from 'history';
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { LanguageProvider } from "./components/LanguageProvider";

export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
});

function App() {
  const [lang, setLang] = useState("en");

  const handleClick = (e) => {
    setLang((current) => e);
  };

  return (
    <LanguageProvider lang={lang}>
      <div className="App">
        <div class="flex-wrapper">
          <Navbar />
          <Routes>
            <Route path="./" element={<Profile />} />
            <Route path="./resume" element={<Resume />} />
            <Route path="./projects" element={<Projects />} />
            <Route path="./contact" element={<Contact />} />
          </Routes>
          <Footer handleClick={handleClick} />
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;
