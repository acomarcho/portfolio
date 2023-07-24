import Image from "next/image";

const HeaderVectors = () => {
  return (
    <>
      <Image
        src="/vectors/header-1.svg"
        alt=""
        width={154}
        height={152}
        className="absolute right-0 -z-10"
      />
      <Image
        src="/vectors/header-2.svg"
        alt=""
        width={20}
        height={116}
        className="absolute left-0 top-[9.375rem] -z-10"
      />
      <Image
        src="/vectors/header-3.svg"
        alt=""
        width={44}
        height={73}
        className="absolute right-0 top-[12.5rem] -z-10"
      />
      <Image
        src="/vectors/header-4.svg"
        alt=""
        width={23}
        height={100}
        className="absolute left-0 bottom-[5.25rem] -z-10"
      />
      <Image
        src="/vectors/header-5.svg"
        alt=""
        width={33}
        height={91}
        className="absolute right-0 bottom-[1rem] -z-10"
      />
    </>
  );
};

export default function Header() {
  return (
    <div className="decoration-wrapper">
      <HeaderVectors />
      <div className="wrapper flex flex-col gap-[0.5rem] lg:gap-[1rem]">
        <Image
          src="/images/profile-picture.png"
          alt="Profile picture"
          width={148}
          height={136}
        />
        <h1 className="heading">
          Hi, I am <span className="font-bold">Marcho</span>!
        </h1>
        <p className="paragraph">
          I am a <span className="font-bold">full-stack developer</span> with a
          good sense in <span className="font-bold">design</span> and{" "}
          <span className="font-bold">product management</span>.
        </p>
        <p className="paragraph">
          I create <span className="font-bold">sleek</span> and{" "}
          <span className="font-bold">functional</span> applications{" "}
          <span className="font-bold">blazingly fast</span> using{" "}
          <span className="font-bold">cutting-edge technology</span>.
        </p>
        <p className="paragraph">
          As a <span className="font-bold">passionate learner</span> and
          teacher, I have{" "}
          <span className="font-bold">
            tutored many computer science related subjects
          </span>{" "}
          including database,{" "}
          <span className="font-bold">artificial intelligence</span>,{" "}
          <span className="font-bold">algorithm and data structures</span>,{" "}
          <span className="font-bold">object-oriented programming</span>, and{" "}
          <span className="font-bold">software engineering</span>.
        </p>
      </div>
    </div>
  );
}
