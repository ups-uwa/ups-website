import "./socialsBar.css"

export default function SocialsBar() {

    return (
    <div className='ups__socials'>
        <a href="https://instagram.com/upsuwa/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/instagram.svg" alt="Instagram"/>
        </a>
        <a href="https://discord.com/invite/AZZyMqB" target="_blank" rel="noopener noreferrer">
            <img src="/assets/discord.svg" alt="Discord"/>
        </a>
        <a href="https://facebook.com/UPSuwa/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/facebook.svg" alt="Facebook"/>
        </a>
        <a href="mailto:universityphysicssociety@gmail.com" target='_blank' rel="noopener noreferrer">
            <img src="/assets/icon-mail.svg" alt="Email"/>
        </a>
    </div>
  )
}



