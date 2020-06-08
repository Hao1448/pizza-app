import {useState, useEffect} from 'react';
import { WidgetCards } from 'components'
import fetch from 'isomorphic-unfetch';

export default function Index() {
  const [arrPizza, setArrPizza] = useState();

    useEffect(() => {
        fetch('/api/pizza')
            .then(r => r.json())
            .then(data => setArrPizza(data))
    }, [])

    if(!arrPizza) {
        return 'Loading...'
    }
  return <WidgetCards pizzas={arrPizza}/>
}
