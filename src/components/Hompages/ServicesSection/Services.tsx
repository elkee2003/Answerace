import './Services.css';
import { MdHome } from "react-icons/md";
import { LuBaby } from "react-icons/lu";
import { FaFire } from "react-icons/fa6";
import { GiRazor } from "react-icons/gi";
import { TbScissorsOff } from "react-icons/tb";


const Services = () => {
  return (
    <section
        id='services'
        className="service-wrapper"
    >
        <div className="paddings innerWidth flexColStart service-container">
            <h1 className="primaryText">Services</h1>
            <p className="secondaryText">
            At Answerace Grooming, I provide top-tier barbering services tailored to your style and preference. Whether you want a sharp fade, a clean shave, or a stylish lineup, I've got you covered.
            </p>

            {/* Haircut & Fade Haircut */}
            <div className='difServices'>
                <h2>
                    <span className='service-icons'><TbScissorsOff /></span> Haircut & Fade Haircut
                </h2>
                <p>A fade haircut blends short sides and back into longer hair on top, creating a smooth and stylish transition. Choose from:</p>

                <p>• <b>Low Fade</b> - A subtle blend starting near the ears</p>

                <p>• <b>Mid Fade</b> - A balanced fade sitting between low and high</p>

                <p>• <b>High Fade</b> - A bold and striking look with a higher blend</p>

                <p>• <b>Temp Fade</b> - A sharp and detailed temple fade</p>

                <p>• <b>Tapered Fade</b> - A natural and seamless blend</p>

                <p>• <b>Burst Fade</b> - A rounded fade around the ears</p>

                <p>
                    💇🏾‍♂️ Men's Detailed Fade & Enhancement (50 mins) - <b>₦5,000</b> 
                </p>
                <p>
                    Includes hair detailing, enhancements (optional designs, color, or precision cuts).
                </p>
            </div>

            {/* Balding, Beard Grooming & Lineup */}
            <div className='difServices'>
                <h2>
                    <span className='service-icons'><GiRazor /></span> Balding, Beard Grooming & Lineup
                </h2>

                <p>A clean-shaven or well-maintained bald head pairs perfectly with a neatly trimmed beard. This service ensures a polished, stylish, and confident appearance.</p>

                <p>
                    <span className='service-icons'><TbScissorsOff /></span> Balding, Beard Grooming & Lineup (45 mins) - <b>₦5,000</b>
                </p>
                <p>
                    Includes a clean shave, beard shaping, and styling for a refined look.
                </p>
            </div>

            {/* Children’s Haircuts */}
            <div className='difServices'>
                <h2>
                    <span className='service-icons'><LuBaby /></span> Children's Haircuts
                </h2>

                <p>Gentle and stylish cuts for younger clients. I ensure a comfortable experience while delivering a fresh and trendy look for kids.</p>

                <p>
                    <span className='service-icons'><TbScissorsOff /></span>Children's Haircuts (50 mins) - <b>₦3,000</b>
                </p>
            </div>

            {/* Lineup with Enhancement (Optional Black Hair Dye) */}
            <div className='difServices'>
                <h2>
                    <span className='service-icons'><FaFire /></span> Lineup with Enhancement (Optional Black Hair Dye)
                </h2>

                <p>A lineup gives your haircut a clean and defined finish, while enhancements (optional black dye or precision edging) make the look even sharper.</p>
                <p>
                    <span className='service-icons'><TbScissorsOff /></span> Lineup with Enhancement (35 mins) - <b>₦5,000</b>
                </p>
                <p>Includes razor-sharp edges and optional color enhancements.</p>
            </div>

            {/* Home Service */}
            <div className='difServices'>
                <h2>
                    <span className='service-icons'><MdHome /></span> Home Service Appointments
                </h2>

                <p>Prefer getting your haircut in the comfort of your home? I offer premium home service where I bring the barbering experience to you.</p>

                <p>
                    <span className='service-icons'><TbScissorsOff /></span> Home Service Appointment (1 hr 20 mins - 1 hr 45 mins) - From <b>₦25,000</b>
                </p>
                <p>
                    (Price varies based on location and service type.)
                </p>
            </div>

            <div className='book-button-container'>
                <a 
                    href="https://www.fresha.com/book-now/l6bt7azy/all-offer?id=493091&share&pId=460566" 
                    className="book-button" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                Book Session
                </a>
            </div>
        </div>
    </section>
  );
};

export default Services;