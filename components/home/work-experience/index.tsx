import Image from "next/image";
import { Fade } from "react-awesome-reveal";

export default function WorkExperience() {
  return (
    <div className="decoration-wrapper bg-lightgray" id="work-experience">
      <div className="absolute h-[calc(100%-4rem)] w-[1rem] bg-secondary right-0 top-[2rem]"></div>
      <div className="wrapper flex flex-col gap-[0.5rem] lg:gap-[1rem]">
        <Fade>
          <h1 className="heading font-bold">Work Experience</h1>
          <div className="flex items-center gap-[1rem]">
            <Image
              src="/images/marinachain.png"
              width={128}
              height={128}
              alt="MarinaChain"
              className="w-[2rem] lg:w-[4rem]"
              quality={100}
            />
            <p className="paragraph font-bold">MarinaChain</p>
          </div>
          <div>
            <p className="paragraph font-bold">Frontend Engineer</p>
            <p className="date">April 2024 - Present</p>
          </div>
          <div className="mt-4" />
          <div className="flex items-center gap-[1rem]">
            <Image
              src="/images/pintarnya.png"
              width={128}
              height={128}
              alt="Pintarnya"
              className="w-[2rem] lg:w-[4rem]"
              quality={100}
            />
            <p className="paragraph font-bold">Pintarnya</p>
          </div>
          <div>
            <p className="paragraph font-bold">Software Engineer (Fullstack)</p>
            <p className="date">January 2024 - Present</p>
          </div>
          <div>
            <p className="paragraph font-bold">
              Software Engineer Intern (Fullstack)
            </p>
            <p className="date">May 2023 - January 2024</p>
          </div>
          <div>
            <p className="paragraph font-bold">
              Software Engineer Intern (Backend)
            </p>
            <p className="date">Sep 2022 - May 2023</p>
          </div>
          <div>
            <p className="paragraph font-bold">Quality Assurance Intern</p>
            <p className="date">Jun 2022 - Sep 2022</p>
          </div>
        </Fade>
      </div>
    </div>
  );
}
