import {SEARCH_COCKTAILS,SEARCH_LOAD_COCKTAILS} from '../actions/type';

interface Cocktail {
    cocktails:[],
    isLoading: boolean
}

const initialState:Cocktail = {
    cocktails:[],
    isLoading:false
}



export default (state:Cocktail  = initialState,action:any)=>{
    switch (action.type){
        case SEARCH_COCKTAILS:
            return Object.assign({},state,{cocktails:action.payload,isLoading:false});
        case SEARCH_LOAD_COCKTAILS:
            return Object.assign({},state,{isLoading:true});
    }

    return state;
}