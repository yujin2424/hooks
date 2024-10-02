import React,{useContext} from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Content = () => {
   const {isDark}=useContext(ThemeContext)
   return (
      <div className='content' style={{
         backgroundColor:isDark? 'black':'lightgray',
         color:isDark? 'white': 'black',
      }}>
         <p>지현님, 행복한 하루 되세요</p>
      </div>
   );
};

export default Content;