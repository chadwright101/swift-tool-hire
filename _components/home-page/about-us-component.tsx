import Image from "next/image";
import ButtonLink from "../ui/buttons/button-link";

const AboutUsComponent = () => {
  return (
    <main className="max-w-[1280px] mx-auto px-7 pt-10 space-y-8 min-[1000px]:grid grid-cols-2 gap-x-10 gap-y-8 desktop:px-10 desktop:py-15">
      <div className="space-y-7">
        <h3>About us</h3>
        <div className="space-y-4">
          <p>
            Founded in 2024 by Simon Ungerer, Swift Tool Hire is Plettenberg
            Bay's premier destination for reliable and affordable tool &
            equipment rental. We've quickly become a trusted name in the local
            community, known for our customer-first philosophy, honest business
            practices, and exceptional communication.
          </p>

          <p>
            We treat every customer as our best customer, offering personalised
            service and expert advice. Our friendly and knowledgeable team is
            always ready to assist you in finding the perfect tool hire
            solution, ensuring you have exactly what you need to get the job
            done.
          </p>
          <p>
            We pride ourselves on offering the most competitive tool hire prices
            in Plettenberg Bay. From heavy-duty demolition equipment to
            essential power tools, our extensive inventory is meticulously
            maintained to guarantee peak performance and safety.
          </p>
        </div>
        <ButtonLink
          href="/#contact"
          ariaLabel="Get in touch"
          cssClasses="hidden min-[1000px]:block"
        >
          Get In Touch
        </ButtonLink>
      </div>
      <ButtonLink
        href="/#contact"
        ariaLabel="Get in touch"
        cssClasses="min-[1000px]:hidden"
      >
        Get In Touch
      </ButtonLink>
      <Image
        src="/images/swift-tool-hire-2.jpeg"
        alt="Swift Tool Hire team"
        width={800}
        height={600}
        className="aspect-video w-full h-full object-cover object-right desktop:h-[474px]"
        sizes="(max-width: 800px) 100vw, 60vw"
      />
    </main>
  );
};

export default AboutUsComponent;
