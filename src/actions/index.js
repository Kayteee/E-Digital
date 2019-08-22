import jsonapi from '../apis/jsonapi';


export const fetchAnimals = () => async dispatch => {
    const response = await jsonapi.get('/animals');
     dispatch({ type: 'FETCH_ANIMALS', payload:response.data });
     
};
  
export const fetchVeggies = id => async dispatch => {
    const response = await jsonapi.get('/fruitveg');
   dispatch({ type: 'FETCH_VEGGIES', payload: response.data });
};
