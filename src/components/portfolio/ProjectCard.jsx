import githubLogo from "/src/assets/img/githubLogo.png";

const ProjectCard = (props) => {
    return(
        <div className="projectCard">
            <h4>{props.projectName}</h4>
            <img src={`/src/assets/img/${props.projectPicture}`} alt="project-pic" className="projectPic" />
            <a href={props.projectLink} rel="external" target="_blank">See it on GitHub <img src={githubLogo} width={20} alt="GitHub Logo" /></a>
        </div>
    )
}

export default ProjectCard