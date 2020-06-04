import {useState, useEffect} from 'react';
import { CardPizza } from 'components'
import fetch from 'isomorphic-unfetch';

export default () => {
    const [arrPizza, setArrPizza] = useState();

    useEffect(() => {
        fetch('/api/pizza')
            .then(r => r.json())
            .then(data => setArrPizza(data))
    }, [])

    if(!arrPizza) {
        return 'Loading...'
    }
    return (
        <div style={{display: 'flex'}}>
            {
                arrPizza.map((pizza, index) => <CardPizza key={index} item={pizza} />)
            }
        </div>
    )
}