import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

//const date = new Date();
const now = moment();

export default class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: props.user ? props.user.fullName : '',
            cpf: props.user ? props.user.cpf: '',
            email: props.user ? props.user.email : '',
            phoneNumber: props.user ? props.user.phoneNumber: '',
            birthday: props.user ? moment(props.user.birthday) : moment(),
            calendarFocused: false,
            error: ''
        };
    };

    onFullNameChange = (e) => {
        const fullName = e.target.value;
        this.setState(() => ({ fullName }));
    };
    onCpfChange = (e) => {
        const cpf = e.target.value;
        if (!cpf || cpf.match(/^\d{1,11}$/)) {
            this.setState(() => ({ cpf }));
        }
    };
    onEmailChange = (e) => {
        const email = e.target.value;
        this.setState(() => ({ email }))
    };
    onPhoneNumberChange = (e) => {
        const phoneNumber = e.target.value;
        if (!phoneNumber || phoneNumber.match(/^\d{1,11}$/)) {
            this.setState(() => ({ phoneNumber }));
        }
    };
    onDateChange = (birthday) => {
        if (birthday) {
            this.setState(() => ({ birthday }));
        }
    };
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }))
    };
    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.fullName || !this.state.cpf || !this.state.phoneNumber) {
            this.setState(() => ({ error: 'Por favor, informe o nome, o CPF e o telefone.' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                fullName: this.state.fullName,
                cpf: this.state.cpf,
                email: this.state.email,
                phoneNumber: this.state.phoneNumber,
                birthday: this.state.birthday.valueOf(),
                email: this.state.email
            });
        }
    };
    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                <input
                    className="text-input"
                    type="text"
                    placeholder="Nome completo"
                    autoFocus
                    value={this.state.fullName}
                    onChange={this.onFullNameChange}
                />
                <input
                    className="text-input"
                    type="text"
                    placeholder="CPF"
                    value={this.state.cpf}
                    onChange={this.onCpfChange}
                />
                <input
                    className="text-input"
                    type="text"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.onEmailChange}
                />
                <input
                    className="text-input"
                    type="text"
                    placeholder="Telefone"
                    value={this.state.phoneNumber}
                    onChange={this.onPhoneNumberChange}
                />
                <SingleDatePicker
                    date={this.state.birthday}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
                <div>
                    <button className="button">Salvar</button>
                </div>
            </form>
        )
    }
};