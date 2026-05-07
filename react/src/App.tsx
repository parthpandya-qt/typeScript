import './App.css'
import { ChaiCard } from './components/ChaiCard.tsx'
import { Counter } from './components/Counter.tsx'
function App() {
 

  return (
    <>
      <div>
        <h1>Welcome to TypeScript with React!</h1>
        <ChaiCard name="Masala Chai" price={2.5} isSpecial={true} />
        <Counter />
      </div>
     
    </>
  )
}

export default App
