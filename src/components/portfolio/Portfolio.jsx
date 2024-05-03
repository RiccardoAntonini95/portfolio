import "./portfolio.scss"
import ProjectCard from "./ProjectCard"

const Portfolio = () => {
    return(
        <>
        <h2 className="portfolioTitle">Some of my projects</h2>
        <div className="projectsContainer">
           <ProjectCard projectName={"Pixel Gem Shop"} projectLink={"https://github.com/RiccardoAntonini95/PixelGemShop"} projectPicture={"pixelgem.png"}  />
           <ProjectCard projectName={"In Forno Pizzeria"} projectLink={"https://github.com/RiccardoAntonini95/s19l1-2-3-4-5"} projectPicture={"Inforno.png"}  />
           <ProjectCard projectName={"LinkedIn clone (Team)"} projectLink={"https://github.com/RiccardoAntonini95/LinkedInClone_TeamForzaHorizon"} projectPicture={"linkedinclone.png"}  />
        </div>
        </>
    )
}

export default Portfolio