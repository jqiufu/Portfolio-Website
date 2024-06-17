"use client";

import Image from "next/image";
import EducationTabContent from "./education-tab-content";
import ExperienceTabContent from "./experience-tab-content";
import SkillsTabContent from "./skills-tab-content";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const AboutSection = () => {
  return (
    <section id="about" className="pt-16 xl:pt-10">
      <div className="flex flex-col items-center px-4 py-8 sm:py-16 md:grid md:grid-cols-2 md:gap-8 xl:gap-12">
        <div className="relative aspect-square h-[320px] w-[320px] md:h-full md:w-full">
          <Image
            src="/about-image.png"
            fill
            sizes="(max-width: 768px) 80vw, 50vw"
            alt="Picture of a computer"
            className="shadow-2xl"
          />
        </div>

        <div className="mt-4 flex h-full w-full flex-col text-left">
          <h2 className="mb-4 text-4xl font-bold">About Me</h2>
          <p className="text-base lg:text-lg">
            Based in Vancouver, I am a web developer focused mostly on front-end
            development. My favorite parts of front-end development are the
            ability to immediately see your work as you develop UIs and the
            problem-solving aspect of designing web applications. I am a quick
            learner, and I am always eager to learn about new technologies.
          </p>

          <div className="mt-8">
            <Tabs defaultValue="skills" className="h-80 w-full md:h-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
              </TabsList>
              <TabsContent value="skills">
                <SkillsTabContent />
              </TabsContent>
              <TabsContent value="education">
                <EducationTabContent />
              </TabsContent>
              <TabsContent value="experience">
                <ExperienceTabContent />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
