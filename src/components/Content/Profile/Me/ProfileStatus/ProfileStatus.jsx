import React from 'react';
import classes from '../Me.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }
    activateEditMode() {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div className={classes.status}>
                <div className={classes.newStatus}>
                    {!this.state.editMode &&
                        <span onDoubleClick={this.activateEditMode.bind(this)} > {this.props.status} </span>
                    }
                    {this.state.editMode &&
                        <span> <input autoFocus onBlur={this.deactivateEditMode.bind(this)} type="text" value={this.props.status} /> </span>
                    }

                </div>
                <div className="description">{this.props.profile.aboutMe}</div>
                <div>Ищет работу: {this.props.profile.lookingForAJob === true ? 'Да' : 'Нет'} </div>
            </div>
        );
    }

};

export default ProfileStatus;
