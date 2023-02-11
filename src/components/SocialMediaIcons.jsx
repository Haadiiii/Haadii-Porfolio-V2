import linkdin from "../assets/images/Group.png";
import git from "../assets/images/Vector.png";
import twitter from "../assets/images/Vector2.png";
import Angel from "../assets/images/Vector3.png";
import Medium from "../assets/images/Vector4.png";


const SocialMediaIcons = () => {
    return (
      <div className="flex justify-center md:justify-start my-10 gap-7">
        <a
          className="hover:transition ease-in-out hover:scale-150 duration-500"
          href="https://www.linkedin.com/in/hamid-ali-haadii/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="w-6" alt="linkedin-link" src={linkdin} />
        </a>
        <a
          className="hover:transition ease-in-out hover:scale-150 duration-500"
          href="https://github.com/Haadiiii"
          target="_blank"
          rel="noreferrer"
        >
          <img className="w-6" alt="twitter-link" src={git} />
        </a>
        <a
          className="hover:transition ease-in-out hover:scale-150 duration-500"
          href="https://twitter.com/HaaDiii_99"
          target="_blank"
          rel="noreferrer"
        >
          <img className="w-6"  alt="facebook-link" src={twitter} />
        </a>
        <a
          className="hover:transition ease-in-out hover:scale-150 duration-500"
          href="https://angel.co/u/haamid-ali-2"
          target="_blank"
          rel="noreferrer"
        >
          <img className="w-6"  alt="instagram-link" src={Angel} />
        </a>
        <a
          className="hover:transition ease-in-out hover:scale-150 duration-500"
          href="https://medium.com/@hammali99"
          target="_blank"
          rel="noreferrer"
        >
          <img className="w-6" alt="angel-link" src={Medium} />
        </a>
      </div>
    );
  };
  
  export default SocialMediaIcons;