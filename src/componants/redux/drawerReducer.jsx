const drawerState = {
    title: "Keep"
}

export const DrawerReducer = (state = drawerState, action) => {
    switch (action.type) {
        case 'Notes':
            return {
                ...state,
                title: 'Notes'
            };
        case 'Remainder':
            return {
                ...state,
                title: 'Remainder'
            };
        case 'Edit':
            return {
                ...state,
                title: 'Edit'
            };
        case 'Archive':
            return {
                ...state,
                title: 'Archive'
            };
        case 'Trash':
            return {
                ...state,
                title: 'Trash'
            };
        default:
            return state
    }
}