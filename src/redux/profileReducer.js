const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";


let initialState = {
    postData: [
        { id: 1, postText: 'первый пост' },
        { id: 2, postText: 'второй пост' },
        { id: 3, postText: 'третий пост' },
        { id: 4, postText: 'четвертый пост' },
    ],
    newPostText: "Just text"
}

let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                postText: state.newPostText,
            }
            state.postData.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}
export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })


export default profileReducer;