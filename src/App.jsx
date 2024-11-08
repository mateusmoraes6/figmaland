import { Navbar } from "./components/Navbar";
import { Main } from "./components/Main";
import { Feature } from "./components/Feature";
import { CalendarFeature } from "./components/CalendarFeature";
import { Newsletter } from "./components/Newsletter";
import { Partners } from "./components/Partners";
import { Testimonials } from "./components/Testimonials";
import Pricing from "./components/Pricing";
import { ContactUs } from "./components/ContactUs";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="bg-dark-Background">
        <Navbar/>
        <Main />
        <Feature />
        <CalendarFeature />
        <Newsletter />
        <Partners />
        <Testimonials />
        <Pricing />
        <ContactUs />
        <Footer />
    </div>
  )
}
