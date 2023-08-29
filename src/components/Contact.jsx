import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import { useContext } from "react";
import { LanguageContext } from "./LanguageOptions";
import language from "../data/language.json";
import "../styles.css";

export default function Contact() {
  const lang = useContext(LanguageContext);
  let pageText = language.en.contactText;
  if (lang === "jp") {
    pageText = language.jp.contactText;
  }
  return (
    <div className="Contact">
      <h1>{pageText.headerText}</h1>
      <div className="contact-form container-fluid">
        <form action="https://usebasin.com/f/c8ce6d3db772" method="POST">
          <label className="form-label" htmlFor="nameInput">
            {pageText.nameInput}
          </label>
          <input
            className="form-control "
            type="text"
            name="name"
            id="nameInput"
            required
          />
          <label className="form-label " htmlFor="mailInput">
            {pageText.emailInput}
          </label>
          <input
            className="form-control "
            type="email"
            name="email"
            id="mailInput"
            required
          />
          <label className="form-label" htmlFor="subjectInput">
            {pageText.subjectInput}
          </label>
          <input
            className="form-control "
            type="text"
            name="subjectInput"
            id="subjectInput"
            required
          />
          <label className="form-label " htmlFor="msgInput">
            {pageText.msgInput}
          </label>
          <textarea className="form-control" name="message" id="" rows="5"></textarea>
          <button className="contact-btn green" type="submit">
            {pageText.btnText}
          </button>
        </form>
      </div>
    </div>
  );
}
