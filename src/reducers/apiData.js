export default (state = [], action) => {
    switch (action.type) {
      case 'FETCH_ANIMALS':
        return action.payload;
      case 'FETCH_VEGGIES':
          return action.payload;
      default:
        return state;
    }
  };
