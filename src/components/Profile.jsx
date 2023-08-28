import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "./LanguageOptions";
import language from "../data/language.json";
import "../styles.css";

export default function Profile() {
  const lang = useContext(LanguageContext);
  let pageText = language.en.profileText;
  let linksText = language.en.linksText;
  if (lang === "jp") {
    pageText = language.jp.profileText;
    linksText = language.jp.linksText;
  }
  return (
    <div className="Profile">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6">
            <img
              class="profile-img"
              src="images/profilepic.jpeg"
              alt="It's supposed to be my face."
            ></img>
          </div>
          <div class="col-lg-6">
            <h1 class="big-heading">{pageText.helloText}</h1>
            <h2 className="small-heading">{pageText.smallHeadingText}</h2>
            <p className="profile-text">{pageText.bodyText}</p>
            <div className="row">
              <div class="col-sm-4">
                <button type="button" class="round-button orange">
                  <Link to="/resume">{linksText.resumeLink}</Link>
                </button>
              </div>
              <div class="col-sm-4">
                <button type="button" class="round-button green">
                  <Link to="/projects">{linksText.projectsLink}</Link>
                </button>
              </div>
              <div class="col-sm-4">
                <button type="button" class="round-button purple">
                  <Link to="/contact">{linksText.contactLink}</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
