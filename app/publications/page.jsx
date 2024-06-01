import Accordion from "@/components/Accordion";
import Section from "@/components/Section";
import { publicationItems } from "@/constant";

const Publications = () => {
  return (
    <Section heading="Publications">
      {/* <iframe
        className="w-full min-h-[60vh] lg:min-h-full border-none"
        src="https://bibbase.org/show?bib=https%3A%2F%2Fbibbase.org%2Fnetwork%2Ffiles%2FdWSCNpRjnPJxuHMtz&noBootstrap=1"
        title="BibBase Publications"
      ></iframe> */}
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
