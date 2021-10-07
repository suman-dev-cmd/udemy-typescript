import { Action } from './../actions/index';
import { ActionType } from './../actionTypes/index';
import axios from "axios";
import { Dispatch } from 'react';

export const searchRepositoies =(term:string)=>{
    return async (dispatch:Dispatch<Action>)=>{
        dispatch({
            type:ActionType.SEARCH_REPOSITORIES
        });

        try{
            const {data}:{data:any} = await axios.get(`https://registry.npmjs.org/-/v1/search?text=${term}`);
            const names = data.objects.map((result:any)=>{
                return result.package.name;
            });
            dispatch({
                type:ActionType.SEARCH_REPOSITORIES_SUCCESS,
                payload:names
            })
        } catch (err:any){
            dispatch({
                type:ActionType.SEARCH_REPOSITORIES_ERROR,
                payload:err.message
            });
        }
    };
};