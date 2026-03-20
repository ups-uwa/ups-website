import "./socialsBar.css"
import config from "../../assets/config.json"

export default function SocialsBar() {

    return (
    <div className='ups__socials'>
        <a href={config.insta_url} target="_blank" rel="noopener noreferrer">
            <img src={process.env.PUBLIC_URL + "/assets/instagram.svg"} alt="Instagram"/>
        </a>
        <a href={config.discord_url} target="_blank" rel="noopener noreferrer">
            <img src={process.env.PUBLIC_URL + "/assets/discord.svg"} alt="Discord"/>
        </a>
        <a href={config.fb_url} target="_blank" rel="noopener noreferrer">
            <img src={process.env.PUBLIC_URL + "/assets/facebook.svg"} alt="Facebook"/>
        </a>
        <a href={"mailto:" + config.email_address} target='_blank' rel="noopener noreferrer">
            <img src={process.env.PUBLIC_URL + "/assets/icon-mail.svg"} alt="Email"/>
        </a>
    </div>
  )
}



