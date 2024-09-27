import { Button } from "./components/Button";
import { Heading } from "./components/Heading";

export default function App() {
  return (
    <div className="bg-dark-Background">
        <div className="bg-blue-300">
          <Heading>Hello World Heading 1</Heading>
          <Heading type="h2" color="white">Hello World Heading 2</Heading> 
        </div>
        <Button>Primary Background</Button>
        <Button variant='secondary'>Secondary Background</Button>
        <Button isBold>Bold Text witch Primary Background</Button>
        <Button isBold variant='secondary'>Bold Text witch Secondary Background</Button>
    </div>
  )
}
