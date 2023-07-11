import React, {useEffect, useState} from 'react'
import ComputersCanvas from './canvas/computers'
import { styles } from '../styles'
import { motion } from "framer-motion";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LinkOffIcon from '@mui/icons-material/LinkOff';

export default function Hero({isMobile}) {

  return (
    <section style={{marginBottom: "110px"}} className={`relative w-full h-screen mx-auto`}>
      <div
        className={`inset-0  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div style={{marginTop: '120px'}} className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div style={{marginTop: '120px'}}>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Ali</span>
          </h1>
          <p style={{fontSize: '23px'}} className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a MERN stack<br className='sm:block hidden' />
            Developer
          </p>
          <div className='mt-2 flex w-40 justify-between mb-2'>
            <GitHubIcon sx={{cursor: 'pointer', '&:hover': {color: '#d9d9d9'}}} fontSize='large' onClick={() => {window.location.href = "https://github.com/ali22905"}} />
            <LinkedInIcon sx={{cursor: 'pointer', '&:hover': {color: '#d9d9d9'}}} fontSize='large' onClick={() => {window.location.href = "https://www.linkedin.com/in/ali-tarek-32b898223/"}} />
            <LinkOffIcon sx={{cursor: 'pointer', '&:hover': {color: '#d9d9d9'}}} fontSize='large' />
          </div>
          <div>

          </div>
        </div>
      </div>

      <div style={{top: '43%', width: '100%', cursor: 'grab'}} className='absolute computer-canv-containter'>
        <ComputersCanvas isMobile={isMobile} />
      </div>

      <div style={{top: isMobile? '90%' : '100%', height: 'fit-content'}} className='absolute xs:bottom-10 bottom-64 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}
