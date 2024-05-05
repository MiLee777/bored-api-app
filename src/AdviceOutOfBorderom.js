import { useEffect, useState } from "react";

function AdviceOutOfBorderom() {

    const [advices, setAdvices] = useState('');

    useEffect(() => {
        getAdvice();
    }, []);

    const getAdvice = async() => {
        const response = await fetch('https://www.boredapi.com/api/activity/');
        const data = await response.json();
        console.log(data);
        setAdvices(data.activity);
    }

    return (
        <div className='container'>
            <h1>{ advices }</h1>
            <button onClick={ getAdvice } className='btn'>new advice</button>
        </div>
    )
}

export default AdviceOutOfBorderom;