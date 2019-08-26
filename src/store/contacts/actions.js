export const ACTION_CHANGE_CONTACTS = "ACTION_CHANGE_CONTACTS";
export const ACTION_CHANGE_SOCIALS = "ACTION_CHANGE_SOCIALS";

export const setContacts = contacts => ({
  type: ACTION_CHANGE_CONTACTS,
  payload: contacts
});

export const setSocials = socials => ({
  type: ACTION_CHANGE_SOCIALS,
  payload: socials
});
