import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import profile from "../assets/images/new.jpeg";

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10 mb-1"
    >
      {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 before:rounded-t-[400px]
       before:w-full before:max-w-400px md:before:max-w-400px before:h-full before:border-2
        before:border-blue before:z-[-1] before:transition duration-500 before:hover:border-yellow"
          >
            <img
              alt="profile"
              className="hover:filter rounded-t-[400px]  hover:saturate-200 transition duration-500 z-10 w-full
              h-[500px] max-w-400px md:max-w-400px lg:max-w-400px xl:max-w-400px 2xl:max-w-400px "
              src={profile}
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="z-10 rounded-t-[400px]  w-full h-full max-w-400px md:max-w-400px lg:max-w-400px xl:max-w-400px 2xl:max-w-400px"
            src={profile}
          />
        )}
      </div>

      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-start">
            Hamid{" "}
            <span
              className="xs:relative xs:text-yellow xs:font-semibold z-20 xs:before:content-brush
              before:absolute before:-left-[35px] before:-top-[70px] before:z-[-1]"
            >
              Ali
            </span>
          </p>

          <p className="mt-10 text-lg mb-7 text-lg text-center md:text-start">
            I am a full-stack developer proficient in front-end, back-end
            development, and agile methodologies with a strong focus on creating
            efficient, scalable, and user-friendly web applications.
            Demonstrated ability to work collaboratively with cross-functional
            teams is complemented by my strong project management,
            communication, and leadership skills, and drive projects from
            concept to deployment.
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <a
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
                hover:bg-blue hover:text-white transition duration-500"
            target={"_blank"}
            href="https://docs.google.com/document/d/1dZyjUPAMjUA_o3MQJyU--QyRRiE8h0tnwyraMOWNfkI/edit?usp=sharing"
          >
            Get Resume
          </a>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
              Let's talk.
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
