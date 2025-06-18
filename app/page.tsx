import AboutUsComponent from "@/_components/home-page/about-us-component";
import ContactComponent from "@/_components/home-page/contact/contact-component";
import HeroComponent from "@/_components/home-page/hero/hero-component";
import ServicesComponent from "@/_components/home-page/services-component";

export default function Home() {
  return (
    <div>
      <HeroComponent />
      <AboutUsComponent />
      <hr className="text-[#231f20]/25 h-px mx-7 my-15 desktop:hidden" />
      <div className="-translate-y-28" id="services"></div>
      <ServicesComponent />
      <hr className="text-[#231f20]/25 h-px mx-7 my-15 desktop:hidden" />
      <div
        className="-translate-y-28 desktop:-translate-y-13"
        id="contact"
      ></div>
      <ContactComponent />
    </div>
  );
}
