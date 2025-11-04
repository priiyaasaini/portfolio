import React, {useState, useEffect} from 'react'

const items = [
  {name: 'About', href: '#about'},
  {name: 'Experience', href: '#experience'},
  {name: 'Projects', href: '#projects'},
  {name: 'Connect', href: '#connect'},
]

export default function Navbar(){
  const [scrolled, setScrolled] = useState(false)
  useEffect(()=> {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return ()=> window.removeEventListener('scroll', onScroll)
  },[])

  const scrollTo = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if(!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - 70
    window.scrollTo({top, behavior: 'smooth'})
  }

  return (
    <nav className={"nav " + (scrolled ? 'nav--scrolled' : '')}>
      <div className="container nav-inner">
        <a href="#about" className="logo" onClick={(e)=>scrollTo(e,'#about')}>Portfolio</a>
        <div className="nav-links">
          {items.map(i=> (
            <a key={i.href} href={i.href} onClick={(e)=>scrollTo(e, i.href)}>{i.name}</a>
          ))}
        </div>
      </div>
    </nav>
  )
}
