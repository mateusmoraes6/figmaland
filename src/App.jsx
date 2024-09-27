import { Button } from "./components/Button";

export default function App() {
  return (
    <div className="bg-dark-Background">
        <h1 className='text-primary bg-dark-Background font-graphik-bold'>Hello word</h1>
        <Button>Primary Background</Button>
        <Button variant='secondary'>Secondary Background</Button>
        <Button isBold>Bold Text witch Primary Background</Button>
        <Button isBold variant='secondary'>Bold Text witch Secondary Background</Button>
    </div>
  )
}
