const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let store = {
    _state: {
        profilePage: {
            postData: [
                { id: 1, postText: 'первый пост' },
                { id: 2, postText: 'второй пост' },
                { id: 3, postText: 'третий пост' },
                { id: 4, postText: 'четвертый пост' },
            ],
            newPostText: "Just text"
        },
        dialogPage: {
            messageData: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How are you?' },
                { id: 3, message: 'Im fine' },
            ],
            dialogsData: [
                { id: 1, name: "Ivan" },
                { id: 2, name: "Petya" },
                { id: 3, name: "Ksyusha" },
            ],
        }
    },
    _callSubscriber() { },


    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    //Методы
    addPost() {
        let newPost = {
            id: 5,
            postText: this._state.profilePage.newPostText,
        }
        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                postText: this._state.profilePage.newPostText,
            }
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }


}



export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
window.store = store;

export default store;

