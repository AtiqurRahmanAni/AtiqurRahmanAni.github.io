import ClickableLink from "@/components/ClickableLink";
import Section from "@/components/Section";
import { courseCompletedItems, honours } from "@/constant";
import React from "react";

const Honours = () => {
  return (
    <div>
      <Section heading="Honours & Awards" className="text-2xl">
        <ul className="mt-4 space-y-1.5 text-lg list-disc list-inside">
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
      <Section heading="Extracurricular Activities" className="text-2xl">
        <ul className="mt-4 space-y-1.5 text-lg list-disc list-inside">
          <li>Organizer of AUST CSE Festival Fall 2021</li>
        </ul>
      </Section>
      <Section heading="Course Completed" className="text-2xl">
        <ul className="mt-4 space-y-1.5 text-lg list-disc list-inside">
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
    </div>
  );
};

export default Honours;
