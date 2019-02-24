import React from 'react';
import { connect } from 'react-redux';
import UserForm from './UserForm';
import { startRemoveUser, startEditUser } from '../actions/user';

export class EditUserPage extends React.Component {
    onSubmit = (user) => {
        this.props.startEditUser(user);
        this.props.history.push('/');
    };

    onRemove = (user) => {
        this.props.startRemoveUser(user);
        this.props.history.push('/createUser');
    }

    render() {
        return (
            <div>
                <div className="content-container">
                    <h1 className="page-header__title">Minha Conta</h1>
                    <UserForm
                        user={this.props.user}
                        onSubmit={this.onSubmit}
                    />
                    <button className="button button--secondary" onClick={this.onRemove}>Excluir Conta</button>
                </div>
            </div>
        )
    }
};

const mapDispatchToProps = (dispatch, props) => ({
    startEditUser: (user) => dispatch(startEditUser(user)),
    startRemoveUser: (user) => dispatch(startRemoveUser(user))
});

const mapStateToProps = (state, props) => ({
    user: state.user

});

export default connect(mapStateToProps, mapDispatchToProps)(EditUserPage);