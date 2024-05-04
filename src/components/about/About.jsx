import "./about.scss";
import aboutImg from "/src/assets/img/profile-pic-github.png";

const About = () => {
  return (
    <>
     <h3>ABOUT ME</h3>
      <div className="aboutContainer">
        <div className="aboutTextContainer">
          <p>
            My name is <strong>Riccardo Antonini</strong>, I'm 29 years old, and I'm delving into
            the world of <strong>development</strong> after being fascinated by it for so long.
          </p>
          <p>
            After a series of work experiences in other sectors <em>here for my CV</em>, I decided to deepen my knowledge
            by attending a bootcamp with <em>EPICODE</em> school. During this journey, I
            studied both <strong>frontend</strong> and <strong>backend</strong> technologies and had the opportunity
            to work on various projects, both <strong>independently</strong> and in <strong>teams</strong>.
          </p>
         <p>
            When I approach a new project I like to start with the entire site design before writing a single line of
            code. I find it incredibly rewarding to <strong>solve the challenges</strong> that
            arise during development, and I believe that's the <strong>most fulfilling </strong>
            part of the job, especially when it comes to finding effective
            solutions while working in a team.
         </p>
          <p>
            Currently, I'm solidifying the
            technologies I've learned during my training to further my studies.
            Getting hands-on with code, I discovered that my initial interest has
            evolved into a genuine pleasure in working with it.
          </p>
          <p>
            Outside of work,
            I'm passionate about video games, especially strategic ones, and I
            also play Magic: The Gathering, a collectible card game.
          </p>   
        </div>
        <div className="aboutImgContainer">
            <img src={aboutImg} alt="profile-pic-github" />
        </div>
      </div>
    </>
  );
};

export default About;
