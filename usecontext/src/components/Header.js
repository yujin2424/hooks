import React, {useContext} from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Header = () => {
    const {isDark}=useContext(ThemeContext);
    console.log(isDark)
    return (
        <header className='header' style={{
            backgroundColor:isDark? 'black':'lightgray',
            color:isDark? 'white': 'black',
        }}>
            <h1>반가워~~~유진아</h1>
        </header>
    );
};

export default Header;