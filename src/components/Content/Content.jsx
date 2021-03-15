import { Route } from 'react-router-dom';
import classes from './Content.module.css';
import Dialogs from './Dialogs/Dialogs';
import News from './News/News';
import Profile from './Profile/Profile';
import Music from './Music/Music';
import Settings from './Settings/Settings';

const Content = (props) => {

    // let dialogsData = [
    //     { id: 1, name: "Ivan" },
    //     { id: 2, name: "Petya" },
    //     { id: 3, name: "Ksyusha" },
    // ]
    return (
        <div className={classes.content}>
            <Route path='/profile' render={() => <Profile postData={props.postData} />} />
            <Route path='/dialogs' render={() => <Dialogs dialogsData={props.dialogsData} messageData={props.messageData} />} />
            <Route path='/news' render={() => <News />} />
            <Route path='/music' render={() => <Music />} />
            <Route path='/settings' render={() => <Settings />} />
        </div>
    );
}

export default Content;