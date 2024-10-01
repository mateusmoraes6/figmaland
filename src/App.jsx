import { CalendarFeature } from "./components/CalendarFeature";
import { Newsletter } from "./components/Newsletter";
import { Partners } from "./components/Partners";
import { Testimonials } from "./components/Testimonials";

export default function App() {
  return (
    <div className="bg-dark-Background">
        <CalendarFeature />
        <Newsletter />
        <Partners />
        <Testimonials />
    </div>
  )
}
