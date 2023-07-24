import Image from "next/image";

export default function WorkExperience() {
  return (
    <div className="decoration-wrapper bg-lightgray">
      <div className="absolute h-[calc(100%-4rem)] w-[1rem] bg-secondary right-0 top-[2rem]"></div>
      <div className="wrapper flex flex-col gap-[0.5rem] lg:gap-[1rem]">
        <h1 className="heading font-bold">Work Experience</h1>
        <div className="flex items-center gap-[1rem]">
          <Image
            src="/images/pintarnya.png"
            width={128}
            height={128}
            alt="Pintarnya"
            className="w-[2rem] lg:w-[4rem]"
          />
          <p className="paragraph font-bold">Pintarnya</p>
        </div>
        <div>
          <p className="paragraph font-bold">
            Software Engineer Intern (Fullstack)
          </p>
          <p className="date">May 2023 - Present</p>
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
      </div>
    </div>
  );
}