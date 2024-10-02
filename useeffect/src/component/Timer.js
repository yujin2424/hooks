import {useEffect} from 'react';

const Timer = (props) => {
    useEffect(()=>{
        const timer=setInterval(()=>{
            console.log('타이머가 돌아가고 있는중...')
        },1000)
        return () =>{
            clearInterval(timer);
            console.log('타이머가 종로되었습니다.')
        }
    },[])
    return (
        <div>
            <span>타이머가 돌아가고 있습니다. 콘솔확인부탁</span>
        </div>
    );
};

export default Timer;