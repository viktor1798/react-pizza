import axios from "axios";

const instanse = axios.create({
    withCredentials: true
})

export const pizzasApi ={
    getPizzas(category, sortBy){
        return instanse.get(`http://localhost:3100/pizzas?${category !== 0 ? `category=${category}` : ''}&_sort=${
            sortBy.type
          }&_order=${sortBy.order}`)
    },
}