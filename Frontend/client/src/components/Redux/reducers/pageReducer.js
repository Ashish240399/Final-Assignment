import { PAGE_CHANGE } from "../actions/pageAction"

const init={
    page:1
}

export const pageReducer=(state=init,{type,payload})=>{
    switch(type){
        case PAGE_CHANGE:
            return {...state,page:state.page+payload}
        default:
            return state
    }
}