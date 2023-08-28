import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import { useContext } from "react";
import { LanguageContext } from "./LanguageOptions";
import language from "../data/language.json";
import RECAPTCHA, { ReCAPTCHA } from "react-google-recaptcha";
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
        <form action="">
          <label className="form-label" htmlFor="nameInput">
            {pageText.nameInput}
          </label>
          <input
            className="form-control "
            type="text"
            name="nameInput"
            id="nameInput"
          />
          <label className="form-label " htmlFor="mailInput">
            {pageText.emailInput}
          </label>
          <input
            className="form-control "
            type="email"
            name="mainInput"
            id="mailInput"
          />
          <label className="form-label" htmlFor="subjectInput">
            {pageText.subjectInput}
          </label>
          <input
            className="form-control "
            type="text"
            name="subjectInput"
            id="subjectInput"
          />
          <label className="form-label " htmlFor="msgInput">
            {pageText.msgInput}
          </label>
          <textarea className="form-control" name="" id="" rows="5"></textarea>
          <button className="contact-btn green" type="submit">
            {pageText.btnText}
          </button>
        </form>
      </div>
    </div>
  );
}
