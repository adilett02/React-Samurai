import { Route } from 'react-router-dom';
import classes from './Content.module.css';
import Dialogs from './Dialogs/Dialogs';
import News from './News/News';
import Profile from './Profile/Profile';
import Music from './Music/Music';
import Settings from './Settings/Settings';
import UsersContainer from './Users/UsersContainer';

const Content = (props) => {
  return (
    <div className={classes.content}>
      <Route path="/profile" render={() => <Profile store={props.store} />} />
      <Route path="/dialogs" render={() => <Dialogs store={props.store} />} />
      <Route path="/news" render={() => <News />} />
      <Route path="/music" render={() => <Music />} />
      <Route path="/settings" render={() => <Settings />} />
      <Route path="/users" render={() => <UsersContainer />} />
    </div>
  );
};

export default Content;
