import { Button } from "../Button";
import { Heading } from "../Heading";

import IbmLogo from "../../assets/images/brands/ibm-logo.png";
import TestimonialPerson from "../../assets/images/testimonials/testimonial-1.png";

export const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="w-full max-w-[360px] md:max-w-[900px] mx-auto flex flex-col items-center justify-center gap-[80px] md:px-5 xl:px-0">
        <Heading type="h2" className="w-fit mt-4">
          Testimonials
        </Heading>

        <div className="flex flex-col py-4 items-center justify-center gap-11 md:gap-12">
          <img src={IbmLogo} />

          <p className="text-center text-sm text-secondary-text font-bold w-full max-w-[280px] md:max-w-none md:text-2xl md:font-normal">
            Most calendars are designed for teams. Slate is designed for
            freelancers who want a simple way to plan their schedule.
          </p>

          <div className="flex gap-3 justify-center items-center">
            <img src={TestimonialPerson} />

            <div>
              <p className="text-xs font-bold text-secondary-text">
                Organize across
              </p>
              <p className="text-sm text-black">Ui designer</p>
            </div>
          </div>
        </div>

        <Button className="w-full max-w-[280px]">More Testimonials</Button>
      </div>
    </section>
  );
};
