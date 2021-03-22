import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";



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
            newMessageText: "Just text 2",
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


    dispatch(action) {
        profileReducer(this._state.profilePage, action);
        dialogReducer(this._state.dialogPage, action);
        this._callSubscriber(this._state);
    }


}





window.store = store;

export default store;

