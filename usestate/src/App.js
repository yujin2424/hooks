import {useState} from 'react';
import './App.css';

const heavyWork= () =>{
   console.log('무지무지 무거운 일이야');
   return ["조지현", "이유진"];
}
function App() {
   const [state, setState] = useState(1);
   const [names, setNames]= useState(()=>{
      return heavyWork();
   });
   const [input, setInput]=useState('');
   const handleClick=() =>{
      let newTime;
      if(state>=24){
         newTime=1;
      }else{
         newTime=state+1
      }
      setState(newTime)
   }
   //console.log("업데이트")

   const handleInputChange = (e) => {
      setInput(e.target.value)
      
   }
   console.log(input);
   const handleUpload = () =>{
      setNames((prevState) =>{
         console.log('이전 state :', prevState)
         return [input, ...prevState]
      })
   }
   
  return (
    <div className="App">
      <div className='state'>
         <span>현재 시각 :{state}시</span>
         <button onClick={handleClick}>Update</button>
      </div>
      <br />
      <hr />
      <br />

      <div className="inputState">
         <input type="text" value={input} onChange={handleInputChange} />
         <button onClick={handleUpload}>Upload</button>
         <br />
         {names.map((name, i)=>{
            return <p key={i}>{name}</p>
         })}
      </div>
    </div>
  );
}

export default App;
