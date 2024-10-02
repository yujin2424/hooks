import {useRef, useState} from 'react';
import './App.css';

function App() {
  const [render, setRender] = useState(0);
  const countRef=useRef(0);

  let countVar=0;

  const doRendering = () =>{
    setRender(render+1)
  }
  const increaseVar = () =>{
      countVar=countVar+1;
      console.log('Var:', countVar)
  }
  const increaseRef = () =>{
    countRef.current=countRef.current+1;
    console.log('Ref:', countRef.current)
  }
  const printResults = () =>{
    console.log(`var: ${countVar},ref: ${countRef.currnet}`)
  }

  return (
    <div className="App">
      <p>Var: {countVar}</p>
      <p>Ref : {countRef.current}</p>
      <button onClick={doRendering}>렌더</button>
      <button onClick={increaseVar}>Var 업데이트</button>
      <button onClick={increaseRef}>Ref 업데이트</button>
      <button onClick={printResults}>Var Ref 값 출력</button>
      
    </div>
  );
}

export default App;
