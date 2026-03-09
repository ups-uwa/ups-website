
import {useState, React, useEffect } from 'react'

import "./info.css"

export default function Info() {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('universityphysicssociety@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // reset after 2 seconds
    }

    return (
        <div>
            <div className='ups__contact-info_email_container'>
                <p onClick={handleCopy} style={{cursor: 'pointer'}}>
                    <b>Email</b>: universityphysicssociety@gmail.com
                    {copied && <span> Copied!</span>}
                </p>
            </div>
            <p>not sure what we actually want here</p>
        </div>
    )
}
