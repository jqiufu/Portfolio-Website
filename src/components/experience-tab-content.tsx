import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const ExperienceTabContent = () => {
  return (
    <Card className="min-h-52">
      <CardHeader>
        <CardDescription className="font-semibold lg:text-base">
          2021 - 2022
        </CardDescription>
        <CardTitle className="md:text-xl lg:text-2xl">
          Software Developer Co-op
        </CardTitle>
      </CardHeader>
      <CardFooter>
        <p className="text-base">Adara Systems</p>
      </CardFooter>
    </Card>
  );
};

export default ExperienceTabContent;
