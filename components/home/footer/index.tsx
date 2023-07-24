import { Fade } from "react-awesome-reveal";

export default function Footer() {
  return (
    <div className="decoration-wrapper bg-lightgray">
      <div className="wrapper">
        <Fade>
          <h1 className="heading font-bold">Collaborate with Me!</h1>
          <a
            href="https://www.linkedin.com/in/marchotridyo/"
            target="_blank"
            rel="noreferrer"
            className="button-primary"
          >
            Contact me via LinkedIn
          </a>
        </Fade>
      </div>
    </div>
  );
}
