export const ACTION_CHANGE_PRELOADER = "ACTION_CHANGE_PRELOADER";
export const ACTION_CHANGE_CONFIG = "ACTION_CHANGE_CONFIG";
export const ACTION_CHANGE_DESIGN = "ACTION_CHANGE_DESIGN";
export const ACTION_CHANGE_TOP_POSITION = "ACTION_CHANGE_TOP_POSITION";
export const ACTION_CHANGE_PARRENT_COMPONENT = "ACTION_CHANGE_PARRENT_COMPONENT";
export const ACTION_CHANGE_DISPLAY_WIDTH = "ACTION_CHANGE_DISPLAY_WIDTH";

export const setPreloader = preloader => ({
  type: ACTION_CHANGE_PRELOADER,
  payload: preloader
});

export const setConfig = config => ({
  type: ACTION_CHANGE_CONFIG,
  payload: config
});

export const setDesign = design => ({
  type: ACTION_CHANGE_DESIGN,
  payload: design
});

export const setTopPosition = top => ({
  type: ACTION_CHANGE_TOP_POSITION,
  payload: top
});

export const setParrentComponent = dom => ({
  type: ACTION_CHANGE_PARRENT_COMPONENT,
  payload: dom
});

export const setDisplayWidth = width => ({
  type: ACTION_CHANGE_DISPLAY_WIDTH,
  payload: width
});
