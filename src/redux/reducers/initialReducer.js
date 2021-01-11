const initialState = {
  datas: {},
};

const initReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SOMETHING":
      return state;
    default:
      return state;
  }
};

export default initReducer;
