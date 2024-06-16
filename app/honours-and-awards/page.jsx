import ClickableLink from "@/components/ClickableLink";
import Section from "@/components/Section";
import {
  courseCompletedItems,
  honours,
  languageCertifications,
} from "@/constant";
import React from "react";

const Honours = () => {
  return (
    <div>
      <Section heading="Honours & Awards">
        <ul className="mt-4 space-y-1.5 text-lg list-disc list-outside pl-5">
          {honours.map((item, idx) => (
            <li key={idx}>
              {item.title}{" "}
              {item.certificate && (
                <ClickableLink linkText="Certificate" link={item.certificate} />
              )}
            </li>
          ))}
        </ul>
      </Section>
      <Section heading="Extracurricular Activities">
        <ul className="mt-4 space-y-1.5 text-lg list-disc list-outside pl-5">
          <li>Organizer of AUST CSE Festival Fall 2021</li>
        </ul>
      </Section>
      <Section heading="Course Completed">
        <ul className="mt-4 space-y-1.5 text-lg list-disc list-outside pl-5">
          {courseCompletedItems.map((item, idx) => (
            <li key={idx}>
              {item.title}{" "}
              {item.certificate && (
                <ClickableLink linkText="Certificate" link={item.certificate} />
              )}
            </li>
          ))}
        </ul>
      </Section>
      <Section heading="Language Certification">
        <ul className="mt-4 space-y-1.5 text-lg list-disc list-outside pl-5">
          {languageCertifications.map((item, idx) => (
            <li key={idx}>
              {item.title}{" "}
              {item.certificate && (
                <ClickableLink linkText="Certificate" link={item.certificate} />
              )}
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
};

export default Honours;
