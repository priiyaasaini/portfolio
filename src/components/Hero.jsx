import React from 'react'
import { motion } from 'framer-motion'
import profile from '../assets/profile.jpeg'

const skills = ['Java','Python','JavaScript','data structure & algo','UI/UX','React','Node.js','CSS','UI/UX']

export default function Hero(){
  const scrollToNext = () => {
    const el = document.getElementById('experience')
    if(!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - 70
    window.scrollTo({top, behavior:'smooth'})
  }

  return (
    <section id="about" className="section hero">
      <div className="container hero-inner">
        <motion.img src={profile} alt="Profile" className="hero-avatar" 
          initial={{scale:0.8, opacity:0}} animate={{scale:1, opacity:1}} transition={{duration:0.6}} />


        <motion.h1 initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.2}}>
          Hi, I'm <span className="text-primary">Priya </span>
        </motion.h1>

        <motion.p initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.3}} className="lead">
          Java Developer | Now diving into AI and Machine Learning . 
        </motion.p>

        <div className="skills">
          {skills.map(s => (
            <motion.span key={s} className="skill" initial={{scale:0}} animate={{scale:1}} transition={{delay:0.4}}>
              {s}
            </motion.span>
          ))}
        </div>

        <motion.button className="scroll-down" onClick={scrollToNext} initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.7}}>
          ↓
        </motion.button>
      </div>
    </section>
  )
}
