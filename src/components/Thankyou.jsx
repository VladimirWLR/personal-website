import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import { useContext } from "react";
import { LanguageContext } from "./LanguageOptions";
import language from "../data/language.json";
import "../styles.css";

export default function Thankyou() {
    const lang = useContext(LanguageContext);
    let pageText = language.en.thankyouText;
    if (lang === "jp") {
        pageText = language.jp.thankyouText;
    }
    return (
        <div className="container-fluid">
            <h1>{pageText.headerText}</h1>
            <h3>{pageText.subheaderText}</h3>
        </div>
    )
}