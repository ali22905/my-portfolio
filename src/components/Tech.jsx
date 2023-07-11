import React from 'react'
import BallCanvas from './canvas/Ball'
import { technologies } from '../constants'
import StarWrapper from "../hoc/SectionWrapper"
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";


const Tech = () => {
  return (
    <>
      <motion.div className='mb-5' variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div style={{cursor: 'grab'}} className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  )
}


export default StarWrapper(Tech, '')
