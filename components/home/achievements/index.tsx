import { IconTrophy } from "@tabler/icons-react";
import { Fade } from "react-awesome-reveal";

export default function Achievements() {
  return (
    <div className="decoration-wrapper" id="achievements">
      <div className="absolute h-[calc(100%-4rem)] w-[1rem] bg-primary left-0 top-[2rem]"></div>
      <div className="wrapper flex flex-col gap-[0.5rem] lg:gap-[1rem]">
        <Fade>
          <h1 className="heading font-bold">Achievements</h1>
          <div className="flex items-start gap-[1rem]">
            <IconTrophy />
            <div>
              <p className="paragraph font-bold">
                5th place at Compfest Senior Competitive Programming Contest
              </p>
              <p className="date">
                Automatically eligible for ICPC Asia Jakarta
              </p>
              <p className="date mt-[0.5rem]">Oct 2023</p>
            </div>
          </div>
          <div className="flex items-start gap-[1rem]">
            <IconTrophy />
            <div>
              <p className="paragraph font-bold">
                Runner up for youth track at GarudaHacks 4.0 Hackathon
              </p>
              <p className="date mt-[0.5rem]">July 2023</p>
            </div>
          </div>
          <div className="flex items-start gap-[1rem]">
            <IconTrophy />
            <div>
              <p className="paragraph font-bold">
                Finalist at Joints Competitive Programming Contest
              </p>
              <p className="date mt-[0.5rem]">May 2023</p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
