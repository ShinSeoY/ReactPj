// import Button from './Button';
// import styles from './App.module.css';
import { useState, useEffect } from 'react';

function App() {
    const [counter, setValue] = useState(0);
    const [keyword, setKeyword] = useState('');

    const onClick = () => setValue((prev) => prev + 1);
    const onChange = (event) => setKeyword(event.target.value);

    console.log('i run allways');
    useEffect(() => {
        console.log('i run only once');
    }, []);

    useEffect(() => {
        if (keyword != '' && keyword.length > 5) {
            console.log('i run keyword change', keyword);
        }
    }, [keyword]);

    return (
        <div>
            {/* <h1 className={styles.title}>welcome</h1> */}
            {/* <Button text={'click me'} onClick={onClick} /> */}
            <input value={keyword} type="text" placeholder="search here,..." onChange={onChange} />
            <h1>{counter}</h1>
            <button onClick={onClick}>click me</button>
        </div>
    );
}

export default App;
