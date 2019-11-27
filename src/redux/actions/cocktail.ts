import {SEARCH_COCKTAILS,SEARCH_LOAD_COCKTAILS} from './type';
import axios from 'axios';

export function searchCocktails(text:string){
    return (dispacth:Function)=>{
        dispacth({
            type:SEARCH_LOAD_COCKTAILS
        });
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+text)
        .then(response=>{
            if(response.data.drinks !== null){
                return dispacth({
                    type:SEARCH_COCKTAILS,
                    payload:response.data.drinks
                })
            }else {
                return dispacth({
                    type:SEARCH_COCKTAILS,
                    payload:[]
                })
            }
        })
    }
}