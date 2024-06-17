import { skillsData } from "@/lib/data";
import { Card, CardContent } from "./ui/card";

const SkillsTabContent = () => {
  return (
    <Card className="min-h-52">
      <CardContent className="p-4">
        <ul className="flex flex-wrap justify-start gap-3 text-xs lg:text-base xl:text-xl">
          {skillsData.map((skill) => (
            <li
              key={skill}
              className="rounded-xl border border-border bg-background p-2 transition delay-0 duration-300 ease-out hover:scale-110"
            >
              {skill}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default SkillsTabContent;
