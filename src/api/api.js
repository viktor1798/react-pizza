import axios from "axios";

const instanse = axios.create({
    withCredentials: true
})

export const pizzasApi ={
    getPizzas(category){
        return instanse.get(`http://localhost:3000/data-base-pizza.json?${category !== 0 ? `category=${category}` : ''}`)
    },
}