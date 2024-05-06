import './contact.scss'
import githubLogo from '/src/assets/img/githubLogo.png'
import linkedinLogo from '/src/assets/img/linkedinLogo.png'

const Contact = () => {
    return(
        <>
        <div className='contactContainer'>
            <h3>CONTACT ME!</h3>
            <h4>MAIL</h4>
            <a href="mailto:riccardo.antonini95@gmail.com?subject=object&body=text">riccardo.antonini95@gmail.com</a>
            <h4>SOCIAL</h4>
            <a href="https://github.com/RiccardoAntonini95" target="_blank" rel="external" >
              <img src={githubLogo} alt="GitHub Logo" />
            </a>
            <a href="https://www.linkedin.com/in/riccardo-antonini-b477212bb/" target="_blank" rel="external" >
              <img src={linkedinLogo} alt="LinkedIn Logo" />
            </a>
        </div>
        </>
    )
}

export default Contact