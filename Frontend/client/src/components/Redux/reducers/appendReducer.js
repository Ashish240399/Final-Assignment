import { GET_DATA } from "../actions/appendAction"

const init={
    products:[]
}

export const appendProductReducer=(state=init,{type,payload})=>{
    switch(type){
        case GET_DATA:
            return {...state,products:payload}
        default:
            return state
    }
}