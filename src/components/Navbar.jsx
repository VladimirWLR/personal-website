import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "./LanguageOptions";
import "../styles.css";

import language from "../data/language.json";

export default function Navbar() {
  const lang = useContext(LanguageContext);
  let linksText = language.en.linksText;
  if (lang === "jp") {
    linksText = language.jp.linksText;
  }
  return (
    <div className="Navbar">
      {/* #Navbar */}
      <nav class="navbar navbar-expand-md navbar-dark">
        <button className="navbar-button" type="button">
          <Link className="navbar-brand" to="/">
            VR
          </Link>
        </button>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <Link className="nav-link" to="/">
                {linksText.homeLink}
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/resume">
                {linksText.resumeLink}
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/projects">
                {linksText.projectsLink}
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/contact">
                {linksText.contactLink}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
