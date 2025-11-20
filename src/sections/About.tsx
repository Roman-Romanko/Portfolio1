import PhotoAbout from "../assets/PhotoAbout.svg";
import { Stars } from "../components/Stars";

export const About = () => {
  return (
    <section
      id="about"
      className="bg-amber-600 rounded-4xl p-5 sm:p-10 md:p-16 flex flex-col xl:flex-row items-center md:items-start gap-10"
    >
      {/* Left part with photo */}
      <div className="flex justify-center w-full">
        <img
          src={PhotoAbout}
          alt="PhotoAbout"
          className="object-fit rounded-2xl"
        />
      </div>

      {/* Right part with text */}
      <div className="flex flex-col w-full gap-6 min-md:text-left">
        {/* Top row with numbers and rating */}
        <div className="flex flex-col sm:flex-row justify-between gap-6 max-sm:flex-row">
          <div className="flex flex-col space-y-2 items-start max-sm:text-left">
            <h1 className="font-[poppins-semibold] text-3xl sm:text-4xl md:text-6xl">120+</h1>
            <p className="font-[poppins-regular] text-base sm:text-xl md:text-2xl">
              Completed Projects
            </p>
          </div>
          <div className="flex flex-col space-y-5 items-start my-4 max-md:my-0">
            <Stars value={4.5} size={30} color="green" />
            <p className="font-[poppins-regular] text-base sm:text-xl md:text-2xl">
              Positive Reviews
            </p>
          </div>
        </div>

        {/* Bottom row with description */}
        <div className="flex flex-col text-left">
          <h2 className="font-[poppins-semibold] text-2xl sm:text-3xl md:text-4xl mb-2">
            Glad to Help You!
          </h2>
          <p className="font-[poppins-regular] text-base sm:text-lg md:text-2xl leading-relaxed">
            As a web developer, I'm very keen on learning new and pioneering technologies,
            programming languages, and development techniques.
          </p>
        </div>
      </div>
    </section>
  );
};
