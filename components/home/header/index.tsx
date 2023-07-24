import Image from "next/image";

export default function Header() {
  return (
    <div className="wrapper flex flex-col gap-[0.5rem]">
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
        As a <span className="font-bold">passionate learner</span> and teacher,
        I have{" "}
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
  );
}
