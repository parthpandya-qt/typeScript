import './App.css'
import { ChaiCard } from './components/ChaiCard.tsx'
import { Counter } from './components/Counter.tsx'
import { ChaiList } from './components/ChaiList.tsx'
import type { Chai } from './types.ts'
import { OrderForm } from './components/OrderForm.tsx'
import {Card} from './components/Card.tsx'
function App() {

  const chailist: Chai[] = [
    { id: 1, name: "Masala Chai", price: 2.5 },
    { id: 2, name: "Ginger Chai", price: 2.0 },
    { id: 3, name: "Cardamom Chai", price: 3.0 },
  ];

  return (
    <>
      <div>
        <h1>Welcome to TypeScript with React!</h1>

        <ChaiCard
          name="Masala Chai"
          price={2.5}
          isSpecial={true}
        />

        <Counter />
      </div>

      <div>
        <ChaiList chaiList={chailist} />
      </div>

      <div>
        <OrderForm
          onSubmit={(order) => {
            console.log(
              "Order submitted:",
              order.name,
              order.cups
            );
          }}
        />
      </div>
      <div>
        <Card 
        title = "Parth Pandya"
        footer = "footer"/>
      </div>
    </>
  );
}

export default App;
