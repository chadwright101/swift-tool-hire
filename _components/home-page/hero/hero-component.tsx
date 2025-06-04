import HeroSlider from "@/_components/home-page/hero/hero-slider";

import data from "@/_data/general-data.json";

const { heroSlider } = data;

const HeroComponent = () => {
  return (
    <section className="relative max-w-[1280px] mx-auto">
      <div className="overflow-hidden mb-8 desktop:mb-0">
        <HeroSlider
          data={heroSlider}
          cssClasses="h-[500px] tablet:h-[550px] desktop:h-[650px]"
        />
      </div>
      <div>
        <section className="grid gap-8 px-7 desktop:bg-white/[90%] z-10 desktop:py-8 desktop:rounded-[12px] desktop:absolute desktop:top-[250px] desktop:left-[500px] desktop:px-10">
          <div className="grid gap-0.5 tablet:place-items-center">
            <h1 className="text-[32px] tracking-[0.045rem] tablet:text-[38px] tablet:tracking-[0.055rem]">
              Swift Tool Hire
            </h1>
            <hr className="h-1 bg-dark-green w-[218px]" />
            <h2 className="text-[20px] font-light track-[0.025rem]">
              Plettenberg Bay
            </h2>
          </div>
        </section>
      </div>
    </section>
  );
};

export default HeroComponent;
