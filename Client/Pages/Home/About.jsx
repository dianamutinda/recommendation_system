import AboutImg from "../../src/assets/bcg.jpeg"
const About = () =>{
    return(
        <div className="about-section">
        <div className="image-wrapper">
          <div className="about-image">
            <img src={AboutImg} alt="about image" />
          </div>
          <div className="about-text">
            <h1 className="about-title">About us</h1>
            <p className="about-para">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
              nesciunt quam eum qui, alias ipsam sequi suscipit totam voluptatem
              quo veritatis incidunt, nulla eaque eligendi eveniet consequatur
              iste deleniti eius, repellendus dicta.
            </p>
          </div>
        </div>
      </div>
    )
}
export default About