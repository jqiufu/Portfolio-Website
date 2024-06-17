import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import type { UrlObject } from "url";

interface ProjectCardProps {
  imgUrl: string | UrlObject;
  title: string;
  description: string;
  stack: string;
  gitUrl: string | UrlObject;
  previewUrl: string | UrlObject;
}

const ProjectCard = ({
  imgUrl,
  title,
  description,
  stack,
  gitUrl,
  previewUrl,
}: ProjectCardProps) => {
  return (
    <div>
      <div
        className="group relative h-52 rounded-t-xl border border-border md:h-72"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="absolute inset-0 flex items-center justify-center gap-2 rounded-t-xl bg-slate-700 bg-opacity-0 transition duration-75 group-hover:bg-opacity-80">
          <Link
            href={gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link hidden h-14 w-14 rounded-full border-2 border-slate-400 hover:border-slate-50 group-hover:flex group-hover:items-center group-hover:justify-center"
          >
            <CodeBracketIcon className="m-2 h-10 w-10 cursor-pointer text-slate-400 group-hover/link:text-slate-50" />
          </Link>
          <Link
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link hidden h-14 w-14 rounded-full border-2 border-slate-400 hover:border-slate-50 group-hover:flex group-hover:items-center group-hover:justify-center"
          >
            <EyeIcon className="m-2 h-10 w-10 cursor-pointer text-slate-400 group-hover/link:text-slate-50" />
          </Link>
        </div>
      </div>
      <div className="rounded-b-xl bg-secondary px-4 py-6">
        <h5 className="mb-2 text-xl font-semibold">{title}</h5>
        <p className="mb-2 text-muted-foreground">{description}</p>
        <p className="text-muted-foreground">
          <span className="font-semibold">Stack: </span>
          {stack}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
