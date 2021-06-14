import produce from 'immer';
import createReducer from './reducerUtils';

const initialState = {
    users:{
nameUser:'ful name',
age:'age',
city:'city',
email:'email',
phone:'phone'
    }   
}
    
const users={
     setName(state, action) {
        state.users.nameUser = action.payload
    },
     setAge(state, action) {
        state.users.age = action.payload
    },
    setCity(state, action) {
        state.users.city = action.payload
    },
    setEmail(state, action) {
        state.users.email = action.payload
    },
    setPhone(state, action) {
        state.users.phone = action.payload
    }
}

export default produce((state, action) => createReducer(state, action, users), initialState);
