import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "../styles.css";
import { useContext } from "react";
import { LanguageContext } from "./LanguageOptions";
import language from "../data/language.json";
import resume from "../data/resume.json";

export default function Resume() {
  const lang = useContext(LanguageContext);
  let pageText = language.en.resumeText;
  if (lang === "jp") {
    pageText = pageText = language.en.resumeText;
  }
  return (
    <div className="Resume container-fluid">
      <h1 className="resume-heading">{pageText.headerText}</h1>
      <hr />
      <div class="accordion accordion-flush" id="resumeItems">
        <ResumeItems />
      </div>
    </div>
  );
}

function ResumeItems() {
  const lang = useContext(LanguageContext);
  let pageText = language.en.resumeText;
  let resumeArray = resume.en;
  if (lang === "jp") {
    pageText = pageText = language.jp.resumeText;
    resumeArray = resume.jp;
  }
  const listItems = resumeArray.map((item) =>
    resumeArray.indexOf(item) === 0 ? (
      <div className="accordion-item" key={item.id}>
        <h2 className="accordion-header" id={"heading" + item.id}>
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={"#collapse" + item.id}
            aria-expanded="true"
            aria-controls={"collapse" + item.id}
          >
            ・{item.period}
          </button>
        </h2>
        <div
          id={"collapse" + item.id}
          className="accordion-collapse collapse show"
          aria-labelledby={"heading" + item.id}
          data-bs-parent="#resumeItems"
        >
          <div className="accordion-body">
            <h5>{pageText.companyText + item.title}</h5>
            <h5>{pageText.roleText + item.role}</h5>
            <ResumeText text={item.text} />
          </div>
        </div>
      </div>
    ) : (
      <div className="accordion-item" key={item.id}>
        <h2 className="accordion-header" id={"heading" + item.id}>
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={"#collapse" + item.id}
            aria-expanded="false"
            aria-controls={"collapse" + item.id}
          >
            ・{item.period}
          </button>
        </h2>
        <div
          id={"collapse" + item.id}
          className="accordion-collapse collapse"
          aria-labelledby={"heading" + item.id}
          data-bs-parent="#resumeItems"
        >
          <div className="accordion-body">
            <h5>{pageText.companyText + item.title}</h5>
            <h5>{pageText.roleText + item.role}</h5>
            <ResumeText text={item.text} />
          </div>
        </div>
      </div>
    )
  );
  return <div className="ResumeItems">{listItems}</div>;
}

function ResumeText({ text }) {
  const listText = text.map((element) => (
    <p className="resume-item" key={element}>
      {element}
    </p>
  ));
  return <div className="ResumeText">{listText}</div>;
}
