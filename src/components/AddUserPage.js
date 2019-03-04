import React from 'react';
import { connect } from 'react-redux';
import UserForm from './UserForm';
import { startAddUser } from '../actions/user';
import { startLogout } from '../actions/auth';

export class AddUserPage extends React.Component {
    onSubmit = (user) => {
        this.props.startAddUser(user);
        this.props.history.push('/');
    };

    onLogout = () => {
        this.props.startLogout();
    }

    render() {
        return (
            <div>
                <div className="header">
                    <div className="content-container">
                        <div className="header__content">
                            <h1 className="header__title">Criar usuário</h1>
                            <button className="button button--link" onClick={this.onLogout}>Sair</button>
                        </div>
                    </div>
                </div>
                <div className="content-container content-container--form">
                    <UserForm
                        onSubmit={this.onSubmit}
                    />
                </div>
            </div>
        );
    };
};

const mapDispatchToProps = (dispatch) => ({
    startAddUser: (user) => dispatch(startAddUser(user)),
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(AddUserPage);