import { Button } from "../Button";
import backgroundcontent from "../../assets/images/features/backgroundcontent.png";

export const Main = () => {
  return (
    <section className="relative top-0 bg-white text-white text-center min-h-screen">
      <div className="absolute w-full h-full bg-no-repeat bg-center z-10">
        <img
          src={backgroundcontent}
          alt="backgroundcontent"
          className="w-full h-full max-w-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto py-20 flex flex-col items-center justify-center space-y-4">
        <h1 className="text-4xl sm:text-6xl font-bold mx-auto relative top-20">
          The best products <br /> start with Figma
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-xl mx-auto relative top-24">
          Most calendars are designed for teams. Slate is designed <br /> for
          freelancers.
        </p>
      </div>
      <div className="relative max-w-screen-xl mx-auto py-16 flex items-center justify-center z-10">
        <Button className="w-[236px] text-sm sm:text-base mt-10">
          Try For Free
        </Button>
      </div>
    </section>
  );
};
