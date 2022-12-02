import Image from "next/image";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "../background-circles";

type Props = {};

function Hero({}: Props) {
  const [text] = useTypewriter({
    words: [
      "Hi, the name's Abhishek!",
      "Guy-who-loves-Juice.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-8 text-center">
      <BackgroundCircles />
      <Image
        alt="Photo"
        src="https://drive.google.com/uc?id=1lM1iXycblPtKq5O9yks-o1V0ar56FxxY"
        width={120}
        height={120}
        className="relative object-cover w-32 h-32 mx-auto rounded-full"
      />
      <div className="z-10">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="px-10 text-5xl font-semibold lg:text-6xl">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="hero-button">About</button>
          </Link>
          <Link href="#experience">
            <button className="hero-button">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="hero-button">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="hero-button">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
