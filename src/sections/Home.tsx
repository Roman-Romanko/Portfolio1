import { SocialItems } from "../components";
import { Button } from "../components/Button";
import { Photo } from "../components/Photo";

export const HomePage = () => {
  return (
    <div className="grid grid-cols-2 items-center justify-between w-full my-38 max-lg:my-10 max-lg:grid-rows-1 max-xl:grid-rows-2 max-xl:grid-cols-1 max-lg:max-w-2xl xl:max-w-6xl max-md:max-w-xl" id="home">
      {/* Left part */}
      <div className="w-auto text-left grid auto-rows-auto gap-10">
        {/* Welcome */}
        <div>
          <p className="text-2xl">Hi</p>
          <h2 className="text-4xl font-bold leading-snug">
            I’m Mohammad Reza.
            <br />
            a Frontend developer.
          </h2>
        </div>

        {/* Description */}
        <div className="max-w-md sm:max-w-sm md:max-w-lg">
          <p className="text-lg leading-relaxed">
            Frontend developer based in Paris, France.
            <br />
            I am coding with a clean and beautiful problem solving in mind.
          </p>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          <p className="font-medium">Follow me</p>
          <div className="flex gap-3">
            {SocialItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Button
                  key={index}
                  variant="icon"
                  size="icon"
                  rounded="rounded-full"
                  color={`${item.color}`}
                >
                  <Icon className="w-5 h-5" />
                </Button>
              );
            })}
          </div>
        </div>

        {/* Button action */}
        <div className="grid grid-cols-2 gap-4">
          <Button variant="request" size="lg" rounded="rounded-md">
            Send Request
          </Button>
          <Button variant="cv" size="lg" rounded="rounded-md">
            Download CV
          </Button>
        </div>
      </div>

      {/* Right part */}
      <div className="lg:flex justify-end mt-0 hidden">
        <Photo />
      </div>
    </div>
  );
};
