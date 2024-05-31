import Section from "@/components/Section";

const Publications = () => {
  return (
    <Section heading="Publications">
      <iframe
        className="w-full min-h-full border-none"
        src="https://bibbase.org/show?bib=https%3A%2F%2Fbibbase.org%2Fnetwork%2Ffiles%2FdWSCNpRjnPJxuHMtz&noBootstrap=1"
        title="BibBase Publications"
      ></iframe>
    </Section>
  );
};

export default Publications;
