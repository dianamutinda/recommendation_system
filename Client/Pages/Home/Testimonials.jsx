import "./Home.css"
import profile1 from "../../src/assets/profile1.jpg"
const Testimonials = () => {
    return (
      <section className="testimonials">
        <div className="test-title">
          <h1 className="title">Testimonials</h1>
          <h2 className="subtitle">what our beneficiaries say about us</h2>
        </div>
    
        <div className="test-container">
          
          <div className="img-container">
            <div className="img-test-wrapper">
             <img src={profile1} alt="" />
             <p className="rating">stars</p>
              <div className="wrapper-text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur, ad!
                </p>
                <h4>ruth mutisya</h4>
              </div>
            </div>
  
            <div className="img-test-wrapper">
            <img src={profile1} alt="" />
            <p className="rating">stars</p>
              <div className="wrapper-text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur, ad!
                </p>
                <h4>manase gunga</h4>
              </div>
            </div>
  
            <div className="img-test-wrapper">
            <img src={profile1} alt="" />
            <p className="rating">stars</p>
              <div className="wrapper-text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur, ad!
                </p>
                <h4>paul peterson</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  export default Testimonials;