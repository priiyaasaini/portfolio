import React, {useRef, useState} from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

export default function Connect(){
  const form = useRef()
  const [status, setStatus] = useState(null)

  const sendEmail = (e) => {
    e.preventDefault()
    // Replace the following placeholders with your EmailJS credentials
    const SERVICE_ID = 'YOUR_SERVICE_ID'
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'

    setStatus('sending')
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        setStatus('sent')
        form.current.reset()
      })
      .catch(() => {
        setStatus('error')
      })
  }

  return (
    <section id="connect" className="section">
      <div className="container">
        <motion.h2 initial={{y:10, opacity:0}} animate={{y:0, opacity:1}}>Let's Connect</motion.h2>
        <div className="connect-grid">
          <form ref={form} onSubmit={sendEmail} className="card contact-form">
            <label>Name<input name="from_name" required /></label>
            <label>Email<input name="reply_to" type="email" required /></label>
            <label>Message<textarea name="message" rows="5" required /></label>
            <button type="submit">Send Message</button>
            {status === 'sending' && <p className="muted">Sending...</p>}
            {status === 'sent' && <p className="muted">Message sent — thank you!</p>}
            {status === 'error' && <p className="muted">Failed to send message.</p>}
          </form>

          <div className="card contact-info">
            <h3>Find me</h3>
            <p className="muted">GitHub • LinkedIn • Twitter</p>
            <p className="muted">Available for freelance projects.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
