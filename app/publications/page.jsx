import Accordion from "@/components/Accordion";
import Section from "@/components/Section";
import { publicationItems } from "@/constant";

const Publications = () => {
  return (
    <Section heading="Publications">
      <div className="space-y-4 mt-4">
        {publicationItems.map((item, idx) => (
          <Accordion
            key={idx}
            year={item.year}
            publications={item.publications}
          />
        ))}
      </div>
    </Section>
  );
};

export default Publications;
