import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "../styles.css";
import { useContext } from "react";
import { LanguageContext } from "./LanguageOptions";
import language from "../data/language.json";
import projects from "../data/projects.json";

export default function Projects() {
  const lang = useContext(LanguageContext);
  let pageText = language.en.projectsText;
  if (lang === "jp") {
    pageText = language.jp.projectsText;
  }
  return (
    <div className="Projects ">
      <h1>{pageText.headerText}</h1>
      <ProjectCards />
    </div>
  );
}

function ProjectCards() {
  const lang = useContext(LanguageContext);
  let projectText = projects.en.projectsArray;
  if (lang === "jp") {
    projectText = projects.jp.projectsArray;
  }
  const listItems = projectText.map((item) => (
    <ProjectCard
      img={item.projectImg}
      name={item.projectName}
      desc={item.projectDesc}
      url={item.projectLink}
    />
  ));
  return (
    <div className="ProjectCards">
      <div className="container-fluid row">{listItems}</div>
    </div>
  );
}

function ProjectCard({ img, name, desc, url }) {
  let button = "";
  if (url !== "") {
    button = (
      <a href={url} class="btn btn-outline-warning">
        Learn More
      </a>
    );
  }
  return (
    <div className="ProjectCard col-lg-4">
      <div className="card mx-auto">
        <img src={img} class="card-img-top" alt="..."></img>
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">{desc}</p>
          {button}
        </div>
      </div>
    </div>
  );
}
