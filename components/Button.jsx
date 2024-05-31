const Button = ({ btnText, link = null }) => {
  const className =
    "bg-gray-700 text-white px-4 py-2 rounded-3xl inline-block hover:bg-gray-500 transition-colors duration-200";

  return !link ? (
    <button className={className}>{btnText}</button>
  ) : (
    <a className={className} href={link} target="_blank">
      {btnText}
    </a>
  );
};

export default Button;
