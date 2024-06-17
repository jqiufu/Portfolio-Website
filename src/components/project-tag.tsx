import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface ProjecTagProps {
  name: string;
  onClick: () => void;
  isSelected: boolean;
}

const ProjectTag = ({ name, onClick, isSelected }: ProjecTagProps) => {
  return (
    <Button
      className={cn("rounded-full border-2 text-xl", {
        "border-primary text-primary": isSelected,
      })}
      variant="outline"
      onClick={onClick}
    >
      {name}
    </Button>
  );
};

export default ProjectTag;
