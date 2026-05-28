import './index.css'
import { NavHeader } from './components/ui/NavHeader'
import Hero from './components/Hero'
import CartelScroll from './components/CartelScroll'
import PartyDetails from './components/PartyDetails'
import DressCode from './components/DressCode'
import Countdown from './components/Countdown'
import RSVP from './components/RSVP'
import Footer from './components/Footer'
import VaultIntro from './components/VaultIntro'

export default function App() {
  return (
    <>
      <VaultIntro />
      <NavHeader />
      <Hero />
      <CartelScroll />
      <PartyDetails />
      <DressCode />
      <Countdown />
<RSVP />
      <Footer />
    </>
  )
}
