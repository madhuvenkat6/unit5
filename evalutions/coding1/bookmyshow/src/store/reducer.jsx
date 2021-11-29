import { BOOK_TICKET } from "./actionTypes";

const initState = {
    movies:[
        {
            name:"movie1",
            description:"bbvhfd fjbjhbd jdbfjbdf jhdbbf jnfjbjdf",
            genre:"comedy"
        },
        {
            name:"movie2",
            description:"bbvhfd fjbjhbd jdbfjbdf jhdbbf jnfjbjdf",
            genre:"emotional"
        },
        {
            name:"movie3",
            description:"bbvhfd fjbjhbd jdbfjbdf jhdbbf jnfjbjdf",
            genre:"comdey-thriller"
        },
        {
            name:"movie4",
            description:"bbvhfd fjbjhbd jdbfjbdf jhdbbf jnfjbjdf",
            genre:"thriller"
        },
        {
            name:"movie5",
            description:"bbvhfd fjbjhbd jdbfjbdf jhdbbf jnfjbjdf",
            genre:"Horror"
        }
    ],
    ticket:{
        name:"Bheemla naayak",
        time:"06:00pm",
        description:"hjhsjdshsdhgvhvh"
    },
    isBooked:true
}


export const reducer = (state=initState,{type,payload})=>{
    switch (type) {
        case BOOK_TICKET:
            return {ticket:payload}
        default:
            return {...state}
    }
}