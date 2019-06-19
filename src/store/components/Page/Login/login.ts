// Actions

export const SET_POPUP_ISVISIBLE_STATE = "SET_POPUP_ISVISIBLE_STATE";

// Action Creators

export const setPopUpIsVisibleState = (isVisible: any) => ({
  type: SET_POPUP_ISVISIBLE_STATE,
  payload: isVisible
});

// Reducer

const defaultState = {
  isVisible: false,
  popUpData: null
};

function setIsVisibleState(state: any, isVisible: any) {
  return {
    ...state,
    isVisible: isVisible.payload
  };
}

export const loginReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case SET_POPUP_ISVISIBLE_STATE:
      return setIsVisibleState(state, action);
    default:
      return state;
  }
};
