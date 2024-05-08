import githubLogo from "/src/assets/img/githubLogo.png";
import { motion } from "framer-motion";
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
            duration: 0.8
        }
    }
}
const ProjectCard = (props) => {
    return(
        <motion.div className="projectCard" variants={variants}>
            <h4>{props.projectName}</h4>
            <img src={props.projectPicture} alt="project-pic" className="projectPic"/>
            <a href={props.projectLink} rel="external" target="_blank">See it on GitHub <img src={githubLogo} width={20} alt="GitHub Logo"/></a>
        </motion.div>
    )
}

export default ProjectCard