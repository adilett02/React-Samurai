import { renderEntireTree } from "./../render";
let state = {
    profilePage: {
        postData: [
            { id: 1, postText: 'первый пост' },
            { id: 2, postText: 'второй пост' },
            { id: 3, postText: 'третий пост' },
            { id: 4, postText: 'четвертый пост' },
        ]
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
}


export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        postText: postMessage
    }
    state.profilePage.postData.push(newPost);
    renderEntireTree(state);
}



export default state;

