import { CalendarFeature } from "./components/CalendarFeature";
import { Partners } from "./components/Partners";
import { Testimonials } from "./components/Testimonials";

export default function App() {
  return (
    <div className="bg-dark-Background">
        <CalendarFeature />
        <Partners />
        <Testimonials />
    </div>
  )
}
