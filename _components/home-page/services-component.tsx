import servicesData from "@/_data/general-data.json";
import classNames from "classnames";
import Image from "next/image";

const { services } = servicesData;

const ServicesComponent = () => {
  return (
    <section className="max-w-[1280px] mx-auto px-7 space-y-8">
      <div className="space-y-7">
        <h2>Services</h2>
        <p>
          Swift Tool Hire provides comprehensive tool & equipment rental
          including compaction machines, demolition machines, generators,
          ladders, high-pressure cleaners, and brushcutters. We also offer
          scaffolding hire, powertool repairs, and core drilling services,
          catering to all your project needs in the Plettenberg Bay area.
        </p>
      </div>
      <ul className="grid gap-8 tablet:grid-cols-2">
        {services.map(({ heading, images }, index) => (
          <li key={index}>
            <div className="space-y-7">
              <h3>{heading}</h3>
              <div
                className={classNames("grid gap-5", {
                  "min-[600px]:grid-cols-2": images.length > 1,
                  "min-[1000px]:grid-cols-3": images.length > 2,
                })}
              >
                {images.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt={heading}
                    width={600}
                    height={600}
                    className={classNames(
                      "h-[220px] object-cover object-center w-full min-[600px]:h-[200px]",
                      {
                        "hidden min-[1000px]:block": index >= 2,
                      }
                    )}
                  />
                ))}
              </div>
            </div>
            {index !== services.length - 1 && (
              <hr
                key={`${index}-line`}
                className="text-[#231f20]/25 h-px mt-12 mx-auto w-3/5 tablet:w-full desktop:hidden"
              />
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ServicesComponent;
