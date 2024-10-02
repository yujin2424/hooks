import {useRef, useState, useEffect} from 'react';
import './App.css';

function App() {
  const [count, setCount]=useState(1);
  /* const renderCount = useRef(1); */
  const inputRef=useRef('');

  useEffect(()=>{
    //console.log(inputRef)
    inputRef.current.focus()
  },[])

  const login=()=>{
    alert(`환영합니다 ${inputRef.current.value}`)
    inputRef.current.focus()
  }
/*    useEffect(()=>{
      renderCount.current=renderCount.current+1;
      console.log('렌더링 수',renderCount.current );
   }) */
   
   
   return (
      <div className="App">
         
         <p>Count : {count}</p>
         <button onClick={()=> setCount(count+1)}>Up</button>
         <br />
         <hr />
         <br />
         <h2>Dom요소 접근</h2>
         <input ref={inputRef} type="text" placeholder='username' />
         <button onClick={login}>로그인</button>
      </div>
   );
}

export default App;