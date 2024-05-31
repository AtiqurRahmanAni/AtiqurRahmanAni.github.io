import ClickableLink from "@/components/ClickableLink";
import Section from "@/components/Section";
import React from "react";

const CV = () => {
  return (
    <Section heading="Curriculum Vitae">
      <p className="mt-4">
        You can download a PDF copy of my{" "}
        <ClickableLink
          linkText="CV"
          link="https://drive.google.com/file/d/1Vx5F6Iai9h_KZ7X0vdGvPvfaUtR6Wgrx/view"
        />{" "}
        here
      </p>
      <div className="mt-4">
        <iframe
          src="/CV.pdf"
          className="w-full min-h-[50dvh] md:min-h-[65dvh] border-none"
          title="PDF Viewer"
        ></iframe>
      </div>
    </Section>
  );
};

export default CV;
