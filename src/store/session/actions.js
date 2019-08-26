export const ACTION_CHANGE_SESSION = "ACTION_CHANGE_SESSION";
export const ACTION_CHANGE_ADMIN = "ACTION_CHANGE_ADMIN";

export const setAdmin = admin => ({
  type: ACTION_CHANGE_ADMIN,
  payload: admin
});

export const setSession = session => ({
  type: ACTION_CHANGE_SESSION,
  payload: session
});
