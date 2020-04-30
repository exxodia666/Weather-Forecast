export const SAVE_SETTINGS = 'SAVE_SETTINGS';
export const RESTORE_DEFAULT = 'RESTORE_DEFAULT';

export const saveSettings = (payload) => {
    return {
        data: payload,
        type: SAVE_SETTINGS
    }
}

export const restoreDefault = () => {
    return {
        type: RESTORE_DEFAULT
    }
}