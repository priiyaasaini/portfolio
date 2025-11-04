import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {title:'Analytics Dashboard', desc:'Real-time analytics with visualizations.'},
  {title:'E-Commerce Platform', desc:'Online store with admin panel.'},
  {title:'Portfolio Builder', desc:'Drag & drop portfolio creator.'},
]

export default function Projects(){
  return (
    <section id="projects" className="section section--muted">
      <div className="container">
        <motion.h1 initial={{y:10, opacity:0}} animate={{y:0, opacity:1}}>Projects</motion.h1>
        <div className="grid">
          {projects.map((p, i)=>(
            <motion.div key={i} className="card project-card" initial={{y:30, opacity:0}} whileInView={{y:0, opacity:1}} viewport={{once:true}}>
              <div className="project-image" />
              <h3>{p.title}</h3>
              <p className="muted">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
