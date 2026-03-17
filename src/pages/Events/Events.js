import Navbar from '../../components/navbar/Navbar';
import SocialsBar from '../../components/socialsBar/SocialsBar';
import Footer from '../../components/footer/Footer';
import { Info } from '../Events';

export default function Events() {
  return (
    <div className="Events">
      <Navbar />
      <Info />
      <SocialsBar />
      <Footer />
      
    </div>
  )
}