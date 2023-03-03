const initialState = {
    authToken: '',
    signToken: '',
    normSignToken: '',
    loader: false,
    profileToken: '',
    normProfileToken: '',
};

function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_PROFILE_TOKEN':
            return { ...state, profileToken: action.payload };

            case 'SET_NPROFILE_TOKEN':
            return { ...state, normProfileToken: action.payload };

        case 'SET_AUTH_TOKEN':
            return { ...state, authToken: action.payload }

        case 'SET_SIGN_TOKEN':
            return { ...state, signToken: action.payload }

        case 'SET_NSIGN_TOKEN':
            return { ...state, normSignToken: action.payload }

        case 'ACTIVATE_LOADER':
            return { ...state, loader: true }

        case 'INACTIVATE_LOADER':
            return { ...state, loader: false }

        case 'CLEAR_ALL':
            return { ...initialState, }

        default:
            return state;
    }
};

export default userReducer;