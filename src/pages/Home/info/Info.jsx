
import "./info.css"

import SocialsBar from '../../../components/socialsBar/SocialsBar';
import Signup from '../../../components/signup/Signup';

export default function Info() {

  return (
    <div className='ups__home-info'>
        <div>
            <div className='ups__home-info_container'>
                <h1>Welcome to the UWA University Physics Society</h1>
                <p>The University Physics Society, est. 1965, represents all students studying or interested in Physics at the University of Western Australia (Guild affiliated).</p>
                <p>We offer a wide range of social, educational and professional activities from Cocktail Nights and Ping Pong tournaments to Study Nights and Physics Demonstrations. Come check out our clubroom on the Physics building 2nd floor and follow our socials to stay in the loop on how you can get involved!</p>
            </div>


            <Signup />
            <SocialsBar />
        

            {/* -----Replaced by socialsBar, kept for reference----- */}
            {/* <div className='ups__home-info_container-icons'>
                <a href="https://instagram.com/upsuwa/" target="_blank" rel="noopener">
                    <img src="/assets/instagram.svg" alt="Instagram"/>
                </a>
                <a href="https://discord.com/invite/AZZyMqB" target="_blank" rel="noopener">
                    <img src="/assets/discord.svg" alt="Discord"/>
                </a>
                <a href="https://facebook.com/UPSuwa/" target="_blank" rel="noopener">
                    <img src="/assets/facebook.svg" alt="Facebook"/>
                </a>
            </div> */}
        </div>
    </div>
  )
}
