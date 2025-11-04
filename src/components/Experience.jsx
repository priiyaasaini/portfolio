import React from 'react'
import { motion } from 'framer-motion'

const experiences = [
  {company: 'Amdocs', position:'Associate Software Enginner ', duration:'2024 - present ', desc:['Enhanced UI/UX ','Build telecom site with java sprinboot']},
  {company: 'Cybeorg', position:'Coding Tutor', duration:'2022 - 2023', desc:['taught python','Problem solving']},
]

export default function Experience(){
  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.h1 initial={{y:10, opacity:0}} animate={{y:0, opacity:1}}>Experience</motion.h1>
        <div className="experience-list">
          {experiences.map((exp, i)=>(
            <motion.article key={i} className="card" initial={{y:30, opacity:0}} whileInView={{y:0, opacity:1}} viewport={{once:true}}>
              <h2>{exp.position}</h2>
              <p className="muted">{exp.company} • {exp.duration}</p>
              <ul>
                {exp.desc.map((d, idx)=> <li key={idx}>{d}</li>)}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
