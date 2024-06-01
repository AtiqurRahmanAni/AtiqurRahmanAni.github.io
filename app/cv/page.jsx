import ClickableLink from "@/components/ClickableLink";
import Section from "@/components/Section";
import React from "react";

const CV = () => {
  return (
    <Section heading="Curriculum Vitae">
      <p className="mt-4 mb-2 text-lg">
        You can download a PDF copy of my{" "}
        <ClickableLink
          linkText="CV"
          link="https://drive.google.com/file/d/1Vx5F6Iai9h_KZ7X0vdGvPvfaUtR6Wgrx/view"
        />{" "}
        here
      </p>
      <iframe
        src="https://drive.google.com/file/d/1Vx5F6Iai9h_KZ7X0vdGvPvfaUtR6Wgrx/preview"
        className="w-full h-[calc(100dvh-20rem)] border-none"
        title="PDF Viewer"
      ></iframe>
    </Section>
  );
};

export default CV;
