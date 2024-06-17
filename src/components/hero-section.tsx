"use client";

import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="mb-14 lg:h-[50dvh] xl:my-28">
      <div className="grid grid-cols-1 lg:mt-12 lg:grid-cols-12">
        <div className="col-span-7 w-full place-self-center text-center sm:w-fit lg:self-center lg:justify-self-start lg:text-left">
          <h1 className="mb-4 text-4xl font-extrabold sm:text-5xl xl:text-6xl 2xl:text-7xl">
            <span className="bg-gradient-to-r from-violet-600 to-blue-700 bg-clip-text text-transparent">
              Hello, I&apos;m{" "}
            </span>

            <br />

            <div className="h-20 sm:h-auto">
              <TypeAnimation
                sequence={["Joaquin", 1000, "A Web Developer", 1000]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                speed={50}
              />
            </div>
          </h1>
          <p className="mb-6 text-base text-muted-foreground sm:text-lg lg:text-xl xl:text-2xl">
            I&apos;m a front-end web developer with experience building
            fullstack applications. I enjoy building web applications. My focus
            is React and Next.js
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Button
              className="rounded-2xl bg-gradient-to-r from-violet-600 to-blue-700 text-slate-50"
              asChild
            >
              <Link href="#contact">Hire Me &rarr;</Link>
            </Button>
            <Button className="rounded-2xl" variant="outline" asChild>
              <Link href="/Resume.pdf" download={true}>
                Download CV <ArrowDownTrayIcon className="ml-1 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="col-span-5 mt-10 place-self-center lg:mt-0 lg:max-xl:ml-5">
          <div className="flex h-[320px] w-[320px] items-center justify-center rounded-full bg-secondary lg:h-[400px] lg:w-[400px]">
            <Image
              src="/hero-image.png"
              alt="Picture of the developer"
              width={300}
              height={300}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
