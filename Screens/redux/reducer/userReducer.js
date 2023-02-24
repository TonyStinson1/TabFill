const initialState = {
    profileToken: '',
    authToken: '',
    docToken: {},
    loader: false,
};

function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_PROFILE_TOKEN':
            return { ...state, profileToken: action.payload };

        case 'SET_AUTH_TOKEN':
            return { ...state, authToken: action.payload }

        case 'SET_DOC_TOKEN':
            return { ...state, docToken: action.payload }

        case 'ACTIVATE_LOADER':
            return { ...state, loader: true }

        case 'INACTIVATE_LOADER':
            return { ...state, loader: false }

        default:
            return state;
    }
};

export default userReducer;