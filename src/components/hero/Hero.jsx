import { motion } from "framer-motion";
import githubLogo from "/src/assets/img/githubLogo.png";
import portfoliopic from "/src/assets/img/portfolio-pic.png";
import "./hero.scss";

const Hero = () => {
  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const sliderVariants = {
    initial: {
      x: "100%",
    },
    animate: {
      x: "-970%",
      transition: {
        duration: 30,
        repeat: Infinity,
        repeatType: "mirror",
      },
    },
  };

  const scrollVariants = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }
  }

  return (
    <>
      <div className="hero">
        <div className="wrapper">
          <motion.div
            className="textContainer"
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            <motion.h2 variants={textVariants}>ANTONINI RICCARDO</motion.h2>
            <motion.h1 variants={textVariants}>Web Developer</motion.h1>
            <motion.div className="buttons" variants={textVariants}>
              <motion.a
                href="https://github.com/RiccardoAntonini95"
                target="blank"
                rel="external"
                className="githubBtn"
                variants={textVariants}
              >
                See my work
                <img src={githubLogo} width={50} alt="GitHub Logo" />
              </motion.a>
              <motion.a href="#Contact" variants={textVariants}>
                Contact me
              </motion.a>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                fill="white"
                viewBox="0 0 16 16"
                variants={scrollVariants}
                initial="initial"
                animate="animate"
              >
                <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3m4 8a4 4 0 0 1-8 0V5a4 4 0 1 1 8 0zM8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5 0 0 0-5-5" />
              </motion.svg>
            </motion.div>
          </motion.div>
          <motion.div className="picContainer" variants={textVariants}>
            <img src={portfoliopic} alt="portfolioPic" />
          </motion.div>
        </div>
        <motion.div
          className="textSliderContainer"
          variants={sliderVariants}
          initial="initial"
          animate="animate"
        >
          HTML5 CSS3 JS SASS React TS C# .NET ASP.NET
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
