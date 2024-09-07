import React from "react";
// to make the animation of the card when hover
import { Tilt } from 'react-tilt'
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import StarWrapper from "../hoc/SectionWrapper"


const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img
            src={icon}
            alt='web-development'
            className='w-16 h-16 object-contain'
          />

          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

function About() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Experienced web and AI developer proficient in JavaScript, Python, perl, React.js, Node.js, PostgreSql, and more. Living in Linz, Austria and making a bachelor degree program in AI at the JKU Linz university. Skilled in problem-solving, collaboration, and writing clean code. Committed to staying updated with industry trends and best practices through continuous learning. Strong ability to deliver successful projects while working independently or within teams. Passionate about creating efficient, visually appealing, and user-friendly web applications. Passionate about creating AI models and have knowledge of neural networks such as CNN, FNN, and RNN. Adaptable to diverse project requirements and able to handle complex challenges with a critical mindset. Seeking opportunities to contribute my skills and drive innovation within a dynamic team. Let's discuss how I can add value to your projects.
      </motion.p>

      <div style={{ justifyContent: 'center' }} className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default StarWrapper(About, "about")
