import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../styles.css";

export default function Footer({ handleClick }) {
  return (
    <div className="Footer footer-padding container-fluid">
      <section id="footer">
        <div className="">
          <div className="row">
            <div className="col-sm-4">
              <p>©2023 Vladimir WL Rodrigues</p>
            </div>
            <div className="col-sm-4">
              <a
                className="foot-link"
                href="https://www.linkedin.com/in/vladimir-rodrigues-92ab9123b/"
              >
                LinkedIn{" "}
                <FontAwesomeIcon className="brand-icon" icon={faLinkedin} />
              </a>
            </div>
            <div className="col-sm-4">
              <div className="row">
                <div class="col">
                  <button
                    className="navbar-button"
                    onClick={(event) => handleClick("en")}
                  >
                    EN
                  </button>
                </div>
                <div className="col">
                  <button
                    className="navbar-button"
                    onClick={(event) => handleClick("jp")}
                  >
                    JP
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
