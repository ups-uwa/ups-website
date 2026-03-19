import "./signup.css"
import config from "../../assets/config.json"

export default function Signup() {

    return (
    <div className='ups__container-signup'>
        <a href= {config["signup-url"]} target='_blank' rel="noopener noreferrer">
            Sign up for an Annual Membership!
        </a>
    </div>
  )
}