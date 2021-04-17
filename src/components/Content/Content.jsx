import { Route } from 'react-router-dom';
import classes from './Content.module.css';
import Dialogs from './Dialogs/Dialogs';
import News from './News/News';
import Music from './Music/Music';
import Settings from './Settings/Settings';
import UsersContainer from './Users/UsersContainer';
import ProfileContainer from './Profile/ProfileContainer';
import LoginPage from './Login/Login';

const Content = (props) => {
  return (
    <div className={classes.content}>
      <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
      <Route path="/dialogs" render={() => <Dialogs store={props.store} />} />
      <Route path="/news" render={() => <News />} />
      <Route path="/music" render={() => <Music />} />
      <Route path="/settings" render={() => <Settings />} />
      <Route path="/users" render={() => <UsersContainer />} />
      <Route path="/login" render={() => <LoginPage />} />
    </div>
  );
};

export default Content;
