import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
// import project from "../assets/";
// import portfolio from "../assets/portfolio.png";
import budget from "../assets/images/Screenshot from 2022-12-29 14-38-28.png";
import spacetraver from "../assets/Space-Travelrs.png";
import todo from "../assets/images/tttttt.jpg";
import calculator from "../assets/Math-Magicians.png";
import Recipe from "../assets/images/Screenshot from 2022-12-29 14-20-18.png";
import pokemon from "../assets/images/Screenshot from 2023-01-30 15-08-18.png";
import bookstore from "../assets/images/Screenshot from 2022-12-29 13-50-10.png";
import MyModal from "../components/MyModal";
import { useState } from "react";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ img, title, description, button, lang, git, live }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = img;
  const [showMyModal, setShowMyModal] = useState(false);

  const handClose = () => {
    setShowMyModal(false);
  };

  return (
    <>
      <motion.div variants={projectVariant} className="relative ">
        <div className={overlayStyles}>
          <p className="text-2xl font-playfair w-[220px]">{title}</p>
          <p className="mt-2 sm:w-[260px]">{description.slice(0, 100)}...</p>
          <button
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500 mt-3"
            onClick={() => setShowMyModal(true)}
          >
            {button}
          </button>
        </div>
        <img
          className="h-[300px] w-full"
          src={`${projectTitle}`}
          alt={projectTitle}
        />
      </motion.div>
      <MyModal
        title={title}
        description={description}
        img={img}
        lang={lang}
        git={git}
        live={live}
        onClose={handClose}
        visible={showMyModal}
      />
    </>
  );
};

const Projects = () => {
  const languages = {
    language1: "HTML",
    language2: "CSS",
    language3: "JavaScript",
    language4: "React",
    language5: "Redux",
    language6: "Ruby",
    language7: "Ruby on Rails",
    language9: "PostgreSQL",
    language10: "Bootstrap",
    language12: "Webpack",
  };

  return (
    <section id="projects" className="pt-40 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          I've completed more than 30 projects,including
          front-end,full-stack,back-end,games.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[530px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project
            img={spacetraver}
            title="space-travelers"
            description="is a web application for a company that provides commercial and scientific space travel services. The application allows users to book rockets and join selected space missions. 
          The application works with real live data from the SpaceX API."
            button="see Project"
            lang={[
              languages.language1,
              languages.language2,
              languages.language4,
              languages.language5,
            ]}
            live="https://deploy-preview-38--gilded-cucurucho-f6c94c.netlify.app/"
            git="https://github.com/Haadiiii/space-travelers-capstone"
          />
          <Project
            img={todo}
            title="Todo-List"
            description="A simple todo list app that allows users to add, delete, edit, and clear all completed tasks, built with HTML, CSS, Javascript and webpack."
            button="see Project"
            lang={[
              languages.language1,
              languages.language2,
              languages.language3,
            ]}
            live="https://haadii-todos.netlify.app/"
            git="https://github.com/Haadiiii/todo-list"
          />

          {/* ROW 2 */}
          <Project
            img={budget}
            title="Budget-App"
            description="this is a Budget App with Ruby on Rails, it allows you to create a user, create a group, create a transaction, you can also see the total amount of money spent in the group, and the total amount of money spent by each user."
            button="see Project"
            lang={[
              languages.language10,
              languages.language9,
              languages.language7,
            ]}
            live="https://budget-website.herokuapp.com/
          "
            git="https://github.com/Haadiiii/haadii-budget-app"
          />
          <Project
            img={calculator}
            title="Math-Magicians"
            description="is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make a simple calculations and read a random math-related quote.
           Built with React, Sass and JavaScript."
            button="see Project"
            lang={[
              languages.language1,
              languages.language2,
              languages.language3,
              languages.language12,
            ]}
            git="https://github.com/Haadiiii/Math-magicians"
            live="https://mathemagecians.netlify.app/"
          />
          <Project
            img={Recipe}
            title="Recipe-App"
            description="The Recipe app keeps track of all your recipes, ingredients, and inventory. It will allow you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe. "
            button="see Project"
            lang={[
              languages.language10,
              languages.language9,
              languages.language7,
            ]}
            live="https://recipe-website.herokuapp.com/users/sign_in"
            git="https://github.com/Haadiiii/haadii-recipe-app"
          />

          {/* ROW 3 */}
          <Project
            img={pokemon}
            title="Pokemon-App"
            description="this website is biult for microverse capstone project. it shows the list of top 20 Pokemon and users can like and comment on the Pokemons, it uses API to fetch and post the user data."
            button="see Project"
            lang={[
              languages.language1,
              languages.language2,
              languages.language3,
              languages.language12,
            ]}
            git="https://github.com/Haadiiii/Pokemon-App"
            live="https://pokedoki-app.netlify.app/"
          />
          <Project
            img={bookstore}
            title="Bookstore-CMS"
            description="It is a MVP version of it that allows you to display a list of books, add a book and remove a selected book. Built with React, Sass and JavaScript."
            button="see Project"
            lang={[
              languages.language1,
              languages.language2,
              languages.language4,
              languages.language5,
            ]}
            git="https://github.com/Haadiiii/Bookstore"
            live="https://deploy-preview-6--haadii-bookstore.netlify.app/"
          />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[530px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
