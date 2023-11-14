export const postsInitial = {
    postsList: [],
}

const postsReducer = (state = postsInitial, action) => {
    switch (action.type) {
        case 'FILL':
            return {
                ...state,
                postsList: action.payload
            }
        default:
            return state;
    }
}

export default postsReducer;