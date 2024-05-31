import Navbar from "./Navbar";
import Profile from "./Profile";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col md:flex-row pt-24 px-6 lg:px-14 lg:max-w-7xl m-auto md:gap-x-16 mt-7">
        <Profile />
        {children}
      </main>
    </>
  );
};

export default Layout;
