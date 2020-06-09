import { createContext, useState, useEffect } from "react";

const CardContext = createContext();

const STORAGE_KEY = 'shop';
const getFromStorage = () => {
    const str = localStorage.getItem(STORAGE_KEY);
    return str ? JSON.parse(str) : {
        'pizzas': []
    }
}
const setToStorage = (data) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

const CardProvider = ({children}) => {
    const [pizzas, setPizzas] = useState([]);
    useEffect(() => {
        const storeData = getFromStorage();
        setPizzas(storeData.pizzas)
    }, []);
    useEffect(() => {
        setToStorage({pizzas})
    }, [pizzas])
    const incrementPizza = pizzaId => {
        let existedPizza = pizzas.find(pizza => pizza.id == pizzaId)
        let newPizzas = []
        if(existedPizza) {
            newPizzas = pizzas.map(pizza => {
                if(pizza.id == pizzaId) {
                    return {
                        ...pizza,
                        count: pizza.count + 1
                    }
                } else {
                    return {...pizza}
                }
            })
        } else {
            newPizzas = [
                {
                    id: pizzaId,
                    count: 1,
                },
                ...pizzas
            ]
        }
        setPizzas(newPizzas)
    }

    const removePizza = pizzaId => {
        let newPizzas = pizzas.filter(pizza => pizza.id != pizzaId)
        setPizzas(newPizzas)
    }

    const decrementPizza = pizzaId => {
        let newPizzas = pizzas.map(pizza => {
            if(pizza.id == pizzaId) {
                return {
                    ...pizza,
                    count: pizza.count - 1
                }
            } else {
                return {...pizza}
            }
        })
        const existedPizza = newPizzas.find(pizza => pizza.id == pizzaId)
        if(existedPizza.count == 0) {
            newPizzas = newPizzas.filter(pizza => pizza.id != pizzaId)
        }
        setPizzas(newPizzas)
    }

    const clearPizzas = (callback) => {
        setToStorage({pizzass: []})
        setPizzas([]);
        callback();
    }
  return (
    <CardContext.Provider
        {...{value: { incrementPizza, decrementPizza, pizzas, removePizza, clearPizzas }}}
    >
      {children}
    </CardContext.Provider>
  );
};

const CardConsumer = CardContext.Consumer;

export { CardContext, CardProvider, CardConsumer };