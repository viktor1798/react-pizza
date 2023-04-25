import axios from "axios";

const instanse = axios.create({
    withCredentials: true
})

export const pizzasApi ={
    getPizzas(category){
        return instanse.get(`http://localhost:3100/pizzas?${category !== 0 ? `category=${category}` : ''}`)
    },
}