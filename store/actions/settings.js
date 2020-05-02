export const SAVE_SETTINGS = "SAVE_SETTINGS";
export const RESTORE_DEFAULT = "RESTORE_DEFAULT";
export const SAVE_FIRST_LAUNCH = "SAVE_FIRST_LAUNCH";

export const saveFirstLaunch = (payload) => {
  //console.log("dispatch");
  return {
    data: payload,
    type: SAVE_FIRST_LAUNCH,
  };
};

export const saveSettings = (payload) => {
  return {
    data: payload,
    type: SAVE_SETTINGS,
  };
};

export const restoreDefault = () => {
  return {
    type: RESTORE_DEFAULT,
  };
};
