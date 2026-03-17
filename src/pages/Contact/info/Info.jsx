
import {useState } from 'react'

import "./info.css"
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
                    <b>Email</b>: universityphysicssociety@gmail.com
                    {copied && (
                        <span className='ups__contact-info-copied ups__contact-info-copied--fade'>
                            {' '}Copied!
                        </span>
                    )}
                </p>
                <p>
                    <b>Instagram</b>: <a href="https://instagram.com/upsuwa/" target="_blank" rel="noopener">https://instagram.com/upsuwa/</a>
                </p>
                <p>
                    <b>Discord</b>: <a href="https://discord.com/invite/AZZyMqB" target="_blank" rel="noopener">https://discord.com/invite/AZZyMqB</a>
                </p>
                <p>
                    <b>Facebook</b>: <a href="https://facebook.com/UPSuwa/" target="_blank" rel="noopener">https://facebook.com/UPSuwa/</a>
                </p>
            </div>
            <Signup />
            <SocialsBar />
        </div>
    )
}
