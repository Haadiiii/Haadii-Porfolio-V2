import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import contact from "../assets/contact-image.jpeg";
import { useState } from "react";
const Contact = () => {
  const[values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  })

  const onSubmit = (e) => {
    e.preventDefault();
    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "hammali99@gmail.com",
      Password : "580996889DE4204A9578F0EB26EA982FD74A",
      To : 'hammali99@gmail.com',
      From : "hammali99@gmail.com",
      Subject : "contact information",
      Body : `Name: ${values.name} <br/> Email: ${values.email} <br/> Message: ${values.message}`
  }).then(message => {
    if(message === 'OK'){
      alert('Your message has been sent, We will contact you shortly')
    }else{
      alert('There is error at sending message. ')
    }
  }
  );
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }


  return (
    <section id="contact" className="contact py-40">
      {/* HEADINGS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex justify-end w-full"
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-yellow">CONTACT ME</span> TO GET STARTED
          </p>
          <div className="flex md:justify-end my-5">
            <LineGradient width="w-1/2" />
          </div>
        </div>
      </motion.div>

      {/* FORM & IMAGE */}
      <div className="md:flex md:justify-between gap-16 mt-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 flex justify-center"
        >
          <img src={contact} alt="contact" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 mt-10 md:mt-0"
        >
          <form
            onSubmit={onSubmit}
          >
            <input
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3"
              type="text"
              placeholder="NAME"
              name="name"
              onChange={handleChange}
              value={values.name}
            />

            <input
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
              type="email"
              placeholder="EMAIL"
              name="email"
              onChange={handleChange}
              value={values.email}
              
            />

            <textarea
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
              name="message"
              placeholder="MESSAGE"
              rows="4"
              cols="50"
              onChange={handleChange}
              value={values.message}
             
            />

            <button
              className="p-5 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white transition duration-500"
              type="submit"
            >
              SEND ME A MESSAGE
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
