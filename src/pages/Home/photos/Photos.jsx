
import "./photos.css"

import EnlargeableImage from '../../../components/enlargeableImage/EnlargeableImage';

export default function Photos() {

  const photoList = [
    "/assets/demos1.webp",
    "/assets/freshers1.webp",
    "/assets/demos2.webp",
    "/assets/demos4.webp",
    "/assets/profpints1.webp",
    "/assets/astro1.webp",
    "/assets/demos3.webp",
    "/assets/tea1.webp",
    "/assets/freshers2.webp",
  ]

  return (
    <div className='ups__home-photos'>
        <div className='ups__home-photos_container'>
           <div className="ups__home-photos_container-photogrid">
                {photoList.map((pic) => (
                  <div key={pic} className='ups__home-photos_container-photogrid-photo'>
                      <EnlargeableImage src={process.env.PUBLIC_URL+pic} alt={pic.replace('/assets/', '')}/>
                  </div>
                ))}
            </div>
        </div>
    </div>
  )
}
