import {useState} from 'react';


export function Counter() {
    const [count,setcount] = useState<number>(0);
    return(<div>
        <p>
            Cups Order:{count}
        </p>
        <button
        onClick={()=>setcount((c)=>c+1)}
        >

        </button>
    </div>)
    
}