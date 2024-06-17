import logo from "../assets/logo.png";

export const Footer = () => {
  return (
    <footer className="relative footer bg-cover bg-center flex flex-col px-4 md:px-16 text-black w-auto h-auto">
      <div className="relative flex flex-row mt-10 m-auto ml-0">
        <img
          src={logo}
          alt="logo"
          className="w-24 h-24 md:w-40 md:h-40 md:mt-[-15px] md:mr-[-35px] "
        />
        <h1 className="mt-2 ml-[-24px] md:ml-0 font-jostBold7 pt-5 md:mt-4 text-3xl md:text-6xl text-left">
          Vriksh
        </h1>
      </div>
      <div className="relative flex flex-row flex-wrap-reverse justify-between mt-6 mb-8">
        <div className="flex flex-row items-center mx-auto">
          <div className="items-center text-center md:text-left md:ml-10 md:mb-10 md:mr-20">
            <h1 className="font-jostBold7 mt-2 md:mt-5 text-2xl md:text-4xl whitespace-nowrap">
              Our Socials
            </h1>
            <h2 className="font-jostBold6 text-center mt-5 md:mt-10 text-xl md:text-3xl">
              Instagram
            </h2>
            <h2 className="font-jostBold6 text-center mt-8 md:mt-16 text-xl md:text-3xl">
              Facebook
            </h2>
            <h2 className="font-jostBold6 text-center mt-8 md:mt-16 text-xl md:text-3xl">
              Twitter
            </h2>
          </div>
          <div className="items-center text-left ml-10 md:ml-10 md:mb-10">
            <h1 className="font-jostBold7 text-center mt-2 md:mt-5 text-2xl md:text-4xl">
              Discover
            </h1>
            <h2 className="font-jostBold6 text-center mt-5 md:mt-10 text-xl md:text-3xl">
              Home
            </h2>
            <h2 className="font-jostBold6 text-center mt-8 md:mt-16 text-xl md:text-3xl">
              Project
            </h2>
            <h2 className="font-jostBold6 text-center mt-8 md:mt-16 text-xl md:text-3xl">
              About
            </h2>
          </div>
        </div>
        <div className="flex flex-col mx-10 mb-8 md:mb-0 md:ml-20 md:mr-48 ">
          <h1 className="font-interBold text-4xl md:text-5xl text-center md:text-left">
            Subscribe To <br /> Hear From Us
          </h1>
          <input
            type="text"
            placeholder="Email"
            className="w-auto h-auto mt-8 pl-3 text-xl md:mt-12 md:pl-5 md:text-2xl rounded-2xl"
          />
        </div>
      </div>
      <p className="font-interNormal text-sm text-center mb-4 mt-0">
        Copyright 2024 Vriksh
      </p>
    </footer>
  );
};
