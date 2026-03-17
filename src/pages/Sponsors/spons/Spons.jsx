import "./spons.css"

export default function Spons() {

  return (
    <div className='ups__sponsors-sponsor-grid'>
        <h2>Special Thanks To:</h2>
        <div className='ups__sponsors-sponsor-line'>
            <a href='https://www.uwa.edu.au/ems/schools/physics-mathematics-and-computing/physics' target="_blank" rel="noopener noreferrer">
                <img src='/assets/dop.webp' alt='UWA Physics Department'/>
            </a>
            <p>For ongoing support with events and outreach; for the use of the facilities in the Physics building</p>
        </div>
        
        <div className='ups__sponsors-sponsor-line'>
            <a href='https://www.icrar.org/' target="_blank" rel="noopener noreferrer">
                <img src='/assets/icrar.jpg' alt='International Centre for Radio Astronomy Research logo'/>
            </a>
            <p>For letting us use your telescopes during our Astronights over the years</p>
        </div>
        
        <div className='ups__sponsors-sponsor-line'>
            <a href='https://www.bhp.com/' target="_blank" rel="noopener noreferrer">
                <img src='/assets/bhp.png' alt='BHP logo'/>
            </a>
            <p>For making our hopes of getting our own telescope possible (named the BHP Telescope)</p>
        </div>

        <div className='ups__sponsors-sponsor-line'>
            <a href='https://binocentral.com.au/about-us/' target="_blank" rel="noopener noreferrer">
                <img src='/assets/binocentral_logo.jpg' alt='Bino Central logo'/>
            </a>
            <p>Thank you to BinoCentral Joondalup for helping us get an amazing deal with the BHP Telescope</p>
        </div>
    </div>
  )
}
