// state arg is not application state, just the state the reducer is responsible for
export default function(state = null, action)  {
  console.log(action);
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;

  }
  return state;
  }
