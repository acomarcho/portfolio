import Image from "next/image";
import { Fade } from "react-awesome-reveal";

export default function Education() {
  return (
    <div className="decoration-wrapper bg-lightgray">
      <div className="absolute h-[calc(100%-4rem)] w-[1rem] bg-primary right-0 top-[2rem]"></div>
      <div className="wrapper flex flex-col gap-[0.5rem] lg:gap-[1rem]">
        <Fade>
          <h1 className="heading font-bold">Education</h1>
          <div className="flex items-center gap-[1rem]">
            <Image src="/images/itb.png" alt="ITB" width={32} height={32} />
            <p className="paragraph font-bold">
              Bandung Institute of Technology
            </p>
          </div>
          <div>
            <p className="paragraph font-bold">Information Technology</p>
            <p className="date">2020 - 2024</p>
            <p className="date">GPA: 3.98/4.00</p>
          </div>
        </Fade>
      </div>
    </div>
  );
}
