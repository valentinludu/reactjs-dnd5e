export const addUserConfig = (userConfig) => ({ type: "ADD_USER_CONFIG", payload: userConfig });

export const changeScreen = (screenName) => ({type: "CHANGE_SCREEN", payload: screenName});

export const resetUser = () => ({type: "RESET_USER"})