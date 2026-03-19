
import {useState } from 'react'

import "./info.css"
import config from "../../../assets/config.json"

import SocialsBar from '../../../components/socialsBar/SocialsBar';
import Signup from '../../../components/signup/Signup';

export default function Info() {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('universityphysicssociety@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
    }

    return (
        <div className='ups__contact-info-container'>
            
            <div className='ups__contact-info_links'>
                <p onClick={handleCopy} style={{cursor: 'pointer'}}>
                    <b>Email</b>: {config.email_address}
                    {copied && (
                        <span className='ups__contact-info-copied ups__contact-info-copied--fade'>
                            {' '}Copied!
                        </span>
                    )}
                </p>
                <p>
                    <b>Instagram</b>: <a href={config.insta_url} target="_blank" rel="noopener noreferrer">{config.insta_url}</a>
                </p>
                <p>
                    <b>Discord</b>: <a href={config.discord_url} target="_blank" rel="noopener noreferrer">{config.discord_url}</a>
                </p>
                <p>
                    <b>Facebook</b>: <a href={config.fb_url} target="_blank" rel="noopener noreferrer">{config.fb_url}</a>
                </p>
            </div>
            <Signup />
            <SocialsBar />
        </div>
    )
}
