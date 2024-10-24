import { Navbar } from "./components/Navbar";
import { Main } from "./components/Main";
import { CalendarFeature } from "./components/CalendarFeature";
import { Newsletter } from "./components/Newsletter";
import { Partners } from "./components/Partners";
import { Testimonials } from "./components/Testimonials";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-dark-Background">
        <Navbar/>
        <Main />
        <CalendarFeature />
        <Newsletter />
        <Partners />
        <Testimonials />
        <Footer />
    </div>
  )
}
