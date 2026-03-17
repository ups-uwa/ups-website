import { useState } from 'react'

import './enlargeableImage.css'

export default function EnlargeableImage({ src, className, alt, id }) {
    const [enlarged, setEnlarged] = useState(false);
    const [lastTap, setLastTap] = useState(0);

    const handleClick = () => {
        const isTouchDevice = window.matchMedia('(hover: none)').matches;

        if (isTouchDevice) {
            const now = Date.now();
            if (now - lastTap < 300) {
                setEnlarged(true);
            }
            setLastTap(now);
        } else {
            setEnlarged(true);
        }
    };

    return (
        <>
            <img src={src} alt={alt} className={className} id={id} onClick={handleClick} />

            {enlarged && (
                <div className='ups__image-enlarged' onClick={() => setEnlarged(false)}>
                    <img src={src} alt={alt} onClick={(e) => e.stopPropagation()} />
                </div>
            )}
        </>
    )
}