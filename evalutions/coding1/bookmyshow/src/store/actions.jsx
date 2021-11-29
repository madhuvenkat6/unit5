import { BOOKED, BOOK_TICKET, UPDATE_MOVIE } from "./actionTypes";

export const bookTicket = (data) => ({type:BOOK_TICKET, payload:data })
export const updateMovie = (data) => ({type:UPDATE_MOVIE,payload:data})
export const changeStatus = () => ({type:BOOKED,payload:""})