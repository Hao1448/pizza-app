import { createContext, useState } from "react";

const CardContext = createContext();

const CardProvider = ({children}) => {
    // pizzas = [{
    //     id: 1,
    //     count: 1
    // }]
    const [pizzas, setPizzas] = useState([]);
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
        console.log({newPizzas})
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
  return (
    <CardContext.Provider
        {...{value: { incrementPizza, decrementPizza, pizzas, removePizza }}}
    //   {...{ value: { user, gridData, detailItem, setDetailItem } }}
    >
      {children}
    </CardContext.Provider>
  );
};

const CardConsumer = CardContext.Consumer;

export { CardContext, CardProvider, CardConsumer };