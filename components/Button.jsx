const Button = ({
  btnText,
  onClick,
  loading = false,
  loadingText = null,
  className = null,
  link = null,
}) => {
  return !link ? (
    <button
      className={`bg-gray-700 text-white px-4 py-2 rounded-3xl inline-block hover:bg-gray-500 transition-colors duration-200 ${className} ${
        loading && "bg-gray-500"
      }`}
      onClick={onClick}
      disabled={loading}
    >
      {!loading ? btnText : loadingText}
    </button>
  ) : (
    <a
      className={`bg-gray-700 text-white px-4 py-2 rounded-3xl inline-block hover:bg-gray-500 transition-colors duration-200 ${className}`}
      href={link}
      target="_blank"
    >
      {btnText}
    </a>
  );
};

export default Button;
