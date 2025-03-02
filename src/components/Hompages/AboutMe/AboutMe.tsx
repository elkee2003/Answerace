import './AboutMe.css';

const AboutMe = () => {
  return (
    <section
        id='aboutMe'
        className="aboutMe-wrapper"
    >
        <div className="paddings innerWidth flexColStart aboutMe-container">
            <h1 className="primaryText">Meet Answerace – Your Trusted Barber</h1>
            <p className="secondaryText">
            With more than a decade of experience in precision cutting and styling, I take pride in every haircut and beard trim I do. My goal is simple—to provide you with top-notch grooming in a comfortable and friendly atmosphere.
            </p>
            
            <h3>Why Choose Answerace?
            </h3>

            <div className='reasons'>
              <p>✔️ Expert in all hair types & styles</p>
              <p>✔️ Expert in all hair types & styles</p>
              <p>✔️ Personalized service tailored to you</p>
              <p>✔️ Affordable pricing with premium quality</p>
            </div>
            <p>At my shop, it's more than just a haircut — it's an experience.</p>
        </div>
    </section>
  );
};

export default AboutMe;