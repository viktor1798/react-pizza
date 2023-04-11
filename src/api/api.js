import axios from "axios";

const instanse = axios.create({
    withCredentials: true
})

export const pizzasApi ={
    getPizzas(){
        return instanse.get('http://localhost:3000/data-base-pizza.json')
    },
}