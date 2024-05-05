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
            <h4>PHONE</h4>
            <p>+39/3465749820</p>
            <h4>SOCIAL</h4>
            <a href="#">
              <img src={githubLogo} alt="GitHub Logo" />
            </a>
            <a href="#">
              <img src={linkedinLogo} alt="LinkedIn Logo" />
            </a>

        </div>
        </>
    )
}

export default Contact