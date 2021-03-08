import React, { useReducer, useRef } from 'react';
import { initialState, patientReducer } from '../../reducers/patientReducers';

const PatientManagement = () => {

   const nameRef=useRef();

    const [state,dispatch]=useReducer(patientReducer,initialState)
    

    const handleSubmit=(event)=>
    {
        event.preventDefault();

        dispatch({
            type:"ADD_PATIENT",
            name:nameRef.current.value,
            id:state.patients.length+1
        })


    }
    
    return (
        <div>
            <h1>PATIENT COUNT : {state.patients.length}</h1>

            <form onSubmit={handleSubmit}>

                <input ref={nameRef}></input>



            </form>

            {
                state.patients.map(pd=><li

                    onClick={()=>dispatch({type:'REMOVE_PATIENT',
                    id:pd.id
                
                })}
                    
                    
                    key={pd.id}>{pd.name}</li>)


            }
        </div>
    );
};

export default PatientManagement;