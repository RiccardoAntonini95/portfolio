import "./navbar.scss"
import githubLogo from '/src/assets/img/githubLogo.png'
import linkedinLogo from '/src/assets/img/linkedinLogo.png'
import SideBar from "../sidebar/SideBar"
import { motion } from "framer-motion"

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <SideBar />
        <div className="wrapper">
          <span>Antonini Riccardo</span>
          <div className="social">
            <a href="#">
              <img src={githubLogo} alt="GitHub Logo" />
            </a>
            <a href="#">
              <img src={linkedinLogo} alt="LinkedIn Logo" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default NavBar