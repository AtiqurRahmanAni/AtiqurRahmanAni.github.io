import ClickableLink from "@/components/ClickableLink";
import Section from "@/components/Section";
import { educationItems } from "@/constant";
import Image from "next/image";
import React from "react";

const Education = () => {
  return (
    <Section heading="Education">
      <div className="mt-4 space-y-7">
        {educationItems.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center md:flex-row gap-4"
          >
            <div className="relative w-[110px] h-full">
              <Image
                src={item.institutionLogo}
                alt="Institution"
                style={{ objectFit: "cover" }}
                sizes="100%"
                quality={100}
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-[#52adc8] text-xl font-semibold hover:underline hover:underline-offset-2 hover:text-gray-600 transition-colors duration-200">
                <a href={item.institutionLink} target="_blank">
                  {item.institution}
                </a>
              </h2>
              <p>{item.degree}</p>
              <p>
                {item.major}{" "}
                <ClickableLink linkText="Certificate" link={item.certificate} />
              </p>
              <p>{item.duration}</p>
              <p>
                {item.result}{" "}
                {item.transcript && (
                  <ClickableLink linkText="Transcript" link={item.transcript} />
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;
