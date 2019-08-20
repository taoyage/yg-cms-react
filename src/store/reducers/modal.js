export const modal = (state = {}, action) => {
  switch (action.type) {
    case 'HIDE_MODAL':
      return { ...state, visible: false, formInit: {}, type: 'create' };
    case 'SHOW_CREATE_MODAL':
      return { ...state, visible: true };
    case 'SHOW_UPDATE_MODAL':
      return { ...state, visible: true, formInit: action.payload, type: 'update' };
    default:
      return state;
  }
};
