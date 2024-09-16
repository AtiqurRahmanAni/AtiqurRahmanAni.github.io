import Button from "@/components/Button";
import Section from "@/components/Section";
import { projectItems } from "@/constant";
import React from "react";

const Projects = () => {
  return (
    <Section heading="Projects">
      <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-6">
        {projectItems.map((item, idx) => (
          <div
            key={idx}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow overflow-hidden flex flex-col pb-4"
          >
            <iframe
              width="100%"
              height="220px"
              src={item.embedLink}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-600">
                {item.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-500">
                {item.description}
              </p>
            </div>
            <div className="mt-auto px-4 space-x-2">
              {item.gitLink && (
                <Button btnText="Git Link" link={item.gitLink} />
              )}
              {item.demoLink && (
                <Button btnText="Project Demo" link={item.demoLink} />
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
