import { createContext, useReducer, useState } from "react";


const GlobalContext=createContext();
const changeState=(state,actiob)=>{
  const {type,payload}=actiob
  switch (type){
    case 'LOG_IN':return{...state, user:payload};
    case 'LOG_OUT':return{...state, user:null}
    case "AUSE_CHANGE":{
      return{...state,isAutChang:true}
    }
    default:
      return state;
  }
}

function GlobalContextProvider( {children}){
   const [state,dispach]=useReducer(changeState,{
    url:null,
    praducts:[],
    isAutChang:false,
    totil:0

   })
    return (
        <GlobalContext.Provider value={{...state,dispach}}>
          {children}
        </GlobalContext.Provider>
      );
}
export { GlobalContext, GlobalContextProvider };