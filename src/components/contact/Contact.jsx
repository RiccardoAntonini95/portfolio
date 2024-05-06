import './contact.scss'
import githubLogo from '/src/assets/img/githubLogo.png'
import linkedinLogo from '/src/assets/img/linkedinLogo.png'
import { motion } from 'framer-motion'

const variants = {
  initial: {
      x: 800,
      y: 500,
      opacity: 0
  },

  animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
          duration: 2,
          stiffness: 80,
          type: "spring"
      }
  }
}

const Contact = () => {
    return(
        <>
        <motion.div className='contactContainer' variants={variants} initial="initial" whileInView="animate" >
            <motion.h3>CONTACT ME</motion.h3>
            <motion.h4>MAIL</motion.h4>
            <motion.a href="mailto:riccardo.antonini95@gmail.com?subject=object&body=text">riccardo.antonini95@gmail.com</motion.a>
            <motion.h4>SOCIAL</motion.h4>
            <motion.a href="https://github.com/RiccardoAntonini95" target="_blank" rel="external" >
              <motion.img src={githubLogo} alt="GitHub Logo" />
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/riccardo-antonini-b477212bb/" target="_blank" rel="external" >
              <motion.img src={linkedinLogo} alt="LinkedIn Logo" />
            </motion.a>
            <motion.h4>SEE MY CV</motion.h4>
            <motion.a href="/src/assets/pdf/CV Antonini Riccardo.pdf" download>Download pdf here!</motion.a>
        </motion.div>
        </>
    )
}

export default Contact