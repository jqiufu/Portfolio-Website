"use client";

import React, { useState } from "react";
import ProjectCard from "./project-card";
import ProjectTag from "./project-tag";

const projectsData = [
  {
    id: 1,
    title: "Digital Marketplace App",
    description:
      "A fullstack application for an online marketplace that sells digital assets.",
    stack: "Next.js, TypeScript, React, Tailwind CSS",
    image: "/Projects/1.png",
    tag: ["all", "fullstack"],
    gitUrl: "https://github.com/jqiufu/Digital-Market-App",
    previewUrl: "https://digital-market-app.up.railway.app/",
  },
  {
    id: 2,
    title: "Shoe Store Website",
    description: "A front-end only landing page for a shoe selling website.",
    stack: "React, TypeScript, Tailwind CSS",
    image: "/Projects/2.png",
    tag: ["all", "frontend"],
    gitUrl: "https://github.com/jqiufu/Shoe-Website",
    previewUrl: "https://allshoes-website.vercel.app/",
  },
  {
    id: 3,
    title: "Shortest Path Algorithm Visualizer",
    description:
      "A front-end only application that allows a user to visualize Dijkstra's shortest path algorithm.",
    stack: "React, CSS, JavaScript",
    image: "/Projects/3.png",
    tag: ["all", "frontend"],
    gitUrl: "https://github.com/jqiufu/shortest-path-visualizer-v2",
    previewUrl: "https://jqiufu.github.io/shortest-path-visualizer-v2/",
  },
];

type TagTypes = "all" | "fullstack" | "frontend";

const ProjectSection = () => {
  const [selectedTag, setSelectedTag] = useState<TagTypes>("all");

  const handleSelectedTagChange = (tag: TagTypes) => {
    setSelectedTag(tag);
  };

  const projectsShown = projectsData.filter((project) =>
    project.tag.includes(selectedTag),
  );

  return (
    <section id="projects" className="py-16">
      <h2 className="mb-8 mt-4 text-center text-4xl font-bold md:mb-12">
        My Projects
      </h2>

      <div className="flex w-full items-center justify-center gap-2 py-6">
        <ProjectTag
          name="All"
          onClick={() => handleSelectedTagChange("all")}
          isSelected={selectedTag === "all"}
        />
        <ProjectTag
          name="Fullstack"
          onClick={() => handleSelectedTagChange("fullstack")}
          isSelected={selectedTag === "fullstack"}
        />
        <ProjectTag
          name="Front-End"
          onClick={() => handleSelectedTagChange("frontend")}
          isSelected={selectedTag === "frontend"}
        />
      </div>

      <div className="grid gap-8 md:grid-cols-3 md:gap-12">
        {projectsShown.map(
          ({ id, title, description, stack, image, gitUrl, previewUrl }) => (
            <ProjectCard
              key={id}
              imgUrl={image}
              title={title}
              description={description}
              stack={stack}
              gitUrl={gitUrl}
              previewUrl={previewUrl}
            />
          ),
        )}
      </div>
    </section>
  );
};

export default ProjectSection;
