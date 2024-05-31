const Section = ({ heading, children }) => {
  return (
    <div className="my-6 md:mt-0 flex-1">
      <h1 className="font-semibold text-3xl text-gray-600 text-center md:text-left">
        {heading}
      </h1>
      {children}
    </div>
  );
};

export default Section;
