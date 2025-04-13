
import { Suspense } from 'react';
import './App.css'
import Display_Bottle from './component/displaybottle/Display_Bottle';

function App() {
  
  const myData=fetch('../public/bottles.json')
  .then((res) => {
    return res.json();
  })

  
  return (
    <>
      
      
    
     
      <Suspense fallback={<p>waiting for message...</p>}>
        <Display_Bottle myData={myData}></Display_Bottle>
      
    </Suspense>
    </>
  )
}

export default App
