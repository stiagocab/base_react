const ADD_TO_LIST = "ADD_TO_LIST";

export const ListReducer = (state, action) => {
   switch (action.type) {
      case ADD_TO_LIST:
         return [...state, {...action.payload}];
      default:
         return state;
   }
};
