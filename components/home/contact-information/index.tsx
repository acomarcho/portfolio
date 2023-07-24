import Image from "next/image";
import { Fade } from "react-awesome-reveal";

export default function ContactInformation() {
  return (
    <div className="decoration-wrapper">
      <div className="absolute h-[calc(100%-4rem)] w-[1rem] bg-secondary left-0 top-[2rem]"></div>
      <div className="wrapper flex flex-col gap-[0.5rem] lg:gap-[1rem]">
        <Fade>
          <h1 className="heading font-bold">Contact Information</h1>
          <div className="flex items-center gap-[1rem]">
            <Image src="/images/gmail.png" alt="Gmail" width={32} height={32} />
            <a href="mailto:acoxstpd@gmail.com" className="paragraph">
              acoxstpd@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-[1rem]">
            <Image
              src="/images/linkedin.png"
              alt="LinkedIn"
              width={32}
              height={32}
            />
            <a
              href="https://www.linkedin.com/in/marchotridyo/"
              target="_blank"
              rel="noreferrer"
              className="paragraph"
            >
              marchotridyo
            </a>
          </div>
          <div className="flex items-center gap-[1rem]">
            <Image
              src="/images/github.png"
              alt="GitHub"
              width={32}
              height={32}
            />
            <a
              href="https://github.com/acomarcho"
              target="_blank"
              rel="noreferrer"
              className="paragraph"
            >
              acomarcho
            </a>
          </div>
        </Fade>
      </div>
    </div>
  );
}
