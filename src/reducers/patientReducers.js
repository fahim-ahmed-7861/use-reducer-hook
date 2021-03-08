import { act } from "react-dom/cjs/react-dom-test-utils.production.min";


export const initialState={

    patients:[],
}

export const patientReducer=(state,action)=>
{
    switch(action.type)
    {
        case "ADD_PATIENT":

           const newObj={
               name : action.name,
               id:action.id
           }

           const newPatient=[...state.patients,newObj];

            return {
                patients:newPatient
            }
        
        case "REMOVE_PATIENT":

         const remaining=state.patients.filter(pt=>pt.id!=action.id);
         const newState={
             patients:remaining
         }
            return newState;

        default:
            return state;
    }
}