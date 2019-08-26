export const ACTION_SET_MENU = "ACTION_SET_MENU";
export const ACTION_SET_OPEN = "ACTION_SET_OPEN";

export const setMenu = menu => ({
  type: ACTION_SET_MENU,
  payload: menu
});

export const setOpenClose = status => ({
  type: ACTION_SET_OPEN,
  payload: status
});
