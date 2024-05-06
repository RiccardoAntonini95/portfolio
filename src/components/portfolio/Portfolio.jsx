import "./portfolio.scss"
import ProjectCard from "./ProjectCard"
import { motion } from "framer-motion"

const variants = {
    initial: {
        x: 0,
        y: 500,
        opacity: 0
    },

    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.3
        }
    }
}

const Portfolio = () => {
    return(
        <>
        <h2 className="portfolioTitle">SELECTED PROJECTS</h2>
        <motion.div className="projectsContainer" variants={variants} initial="initial" whileInView="animate" >
           <ProjectCard projectName={"Pixel Gem Shop"} projectLink={"https://github.com/RiccardoAntonini95/PixelGemShop"} projectPicture={"pixelgem.png"}  />
           <ProjectCard projectName={"In Forno Pizzeria"} projectLink={"https://github.com/RiccardoAntonini95/s19l1-2-3-4-5"} projectPicture={"Inforno.png"}  />
           <ProjectCard projectName={"LinkedIn clone (Team)"} projectLink={"https://github.com/RiccardoAntonini95/LinkedInClone_TeamForzaHorizon"} projectPicture={"linkedinclone.png"}  />
        </motion.div>
        </>
    )
}

export default Portfolio