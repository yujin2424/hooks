import {useEffect, useState} from 'react';
import Timer from './component/Timer';

function App() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState('');
  const [showTimer, setShowTimer]=useState(false)
    //화면 첫 렌더링(Mount)
    //재렌더링(Update)
    //화면에서 사라질때 (Unmount)
    const countUpdate = ()=>{
        setCount(count+1)
    }
    const inputChange=(e)=>{
        setName(e.target.value)
    }    
    useEffect(() => {
        console.log('렌더링')
    },[]) //비어있는 디펜던시는 렌더링이 처음 한번만 일어나야 할때
    return (
      <div className="App">
        <div className="count">
          <button onClick={countUpdate}>Update</button>
          <br />
          <span>count :{count}</span>
          <br />
          <input type="text" value={name} onChange={inputChange} />
          <span>name:{name}</span>
        </div>
        <br />
        <hr />
        <br />
        <div className="cleanup">
          {showTimer && <Timer />}
          <button onClick={()=>{setShowTimer(!showTimer)}}>Toggle Timer</button>
        </div>
      </div>
    );
}

export default App;
