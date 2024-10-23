import { Button } from "../Button";
import NewsletterImage from "../../assets/images/features/left-container.png";

export const Newsletter = () => {
  return (
    <section className="flex flex-col items-center justify-center px-4 py-12 bg-white md:flex-row md:justify-between md:px-12 lg:px-24 overflow-x-hidden">
      <div className="text-center md:hidden mb-6">
        <h4 className="text-xs sm:text-sm font-bold text-gray-500 mb-2">
          At your fingertips
        </h4>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Newsletter</h2>
      </div>

      <div className="w-[260px] md:w-[400px] lg:w-[500px] flex justify-center md:justify-start mb-6 md:mb-0">
        <img
          src={NewsletterImage}
          alt="Person with mail"
          className="w-full h-auto"
        />
      </div>

      <div className="md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
        <h4 className="text-xs sm:text-sm font-bold text-gray-500 mb-2">
          At your fingertips
        </h4>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          Lightning fast prototyping
        </h2>
        <p className="text-xs sm:text-sm md:text-lg text-gray-500 font-bold mb-6 max-w-xs md:max-w-none">
          Subscribe to our Newsletter
          <br /> Available exclusively on Figmaland
        </p>

        <form className="flex flex-col md:flex-row items-center md:justify-start">
          <input
            type="email"
            placeholder="Your Email"
            className="w-full max-w-[300px] md:w-[273px] p-3 border-2 border-none rounded-[35px] bg-slate-200 placeholder-gray-500 font-graphik mb-4 md:mb-0 "
          />
          <Button className="w-full max-w-[300px] md:w-[172px] ml-0 md:ml-2 hover:bg-blue-600">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};
