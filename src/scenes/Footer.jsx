import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 bg-gradient-rainblue pt-10">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl text-deep-blue">
            Hamid Ali
          </p>
          <p className="font-playfair text-md text-deep-blue">
            ©2023 Haadii. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
