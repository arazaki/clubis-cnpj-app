import React from 'react';
import { connect } from 'react-redux';
import { startLoginGoogle, startLoginFacebook } from '../actions/auth';
import { FaFacebook, FaGoogle } from 'react-icons/fa';

export const LoginPage = ({ startLoginGoogle, startLoginFacebook }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">CluBis Empresas</h1>
            <p>Conheça, relacione-se, fidelize!</p>
            <button className="button button--google" onClick={startLoginGoogle}><FaGoogle className="icon"/>Login with Google</button>
            <button className="button button--facebook" onClick={startLoginFacebook}><FaFacebook  className="icon"/>Login with Facebook</button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLoginGoogle: () => dispatch(startLoginGoogle()),
    startLoginFacebook: () => dispatch(startLoginFacebook()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);