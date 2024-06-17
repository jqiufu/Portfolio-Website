import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const EducationTabContent = () => {
  return (
    <Card className="min-h-52">
      <CardHeader>
        <CardDescription className="font-semibold lg:text-base">
          2023
        </CardDescription>
        <CardTitle className="md:text-xl lg:text-2xl">
          Bachelor of Applied Science, Computer Engineering
        </CardTitle>
      </CardHeader>
      <CardFooter>
        <p className="text-base">University of British Columbia</p>
      </CardFooter>
    </Card>
  );
};

export default EducationTabContent;
