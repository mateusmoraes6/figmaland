import { Button } from "../Button";
import { Heading } from "../Heading";

import google from "../../assets/images/partners/google.png";
import amazon from "../../assets/images/partners/amazon.png";
import microsoft from "../../assets/images/partners/microsoft.png";
import uber from "../../assets/images/partners/uber.png";
import dropbox from "../../assets/images/partners/dropbox.png";

export const Partners = () => {
  return (
    <section className="bg-white">
      <div className="max-w-full md:max-w-[900px] mx-auto flex flex-col items-center justify-center gap-[60px] md:px-5 xl:px-0">
        <Heading type="h2" className="max-w-fit mb-[-35px]">
          Partners
        </Heading>
        <p className="text-center text-sm text-secondary-text font-bold max-w-[280px] md:max-w-none md:text-2xl md:font-normal mb-8">
          Most calendars are designed for teams.
          <br /> Slate is designed for freelancers
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-0">
          <img
            src={google}
            alt="google"
            className="w-[240px] h-[140px] border-2 border-[#D8D8D8]"
          />
          <img
            src={amazon}
            alt="amazon"
            className="w-[240px] h-[140px] border-2 border-[#D8D8D8]"
          />
          <img
            src={microsoft}
            alt="microsoft"
            className="w-[240px] h-[140px] border-2 border-[#D8D8D8]"
          />
          <img
            src={uber}
            alt="uber"
            className="w-[240px] h-[140px] border-2 border-[#D8D8D8] hidden md:block"
          />
          <img
            src={dropbox}
            alt="dropbox"
            className="w-[240px] h-[140px] border-2 border-[#D8D8D8] hidden md:block"
          />
          <img
            src={google}
            alt="google"
            className="w-[240px] h-[140px] border-2 border-[#D8D8D8] hidden md:block"
          />
          <img
            src={uber}
            alt="uber"
            className="w-[240px] h-[140px] border-2 border-[#D8D8D8] hidden md:block"
          />
          <img
            src={amazon}
            alt="amazon"
            className="w-[240px] h-[140px] border-2 border-[#D8D8D8] hidden md:block"
          />
        </div>

        <Button className="w-full max-w-[280px] mb-14">Try For Free</Button>
      </div>
    </section>
  );
};
