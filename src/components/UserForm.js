import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import CPF from 'gerador-validador-cpf';
import MaskedInput from 'react-text-mask';

//const date = new Date();
const now = moment();

export default class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: props.user ? props.user.fullName : '',
            cpf: props.user ? props.user.cpf : '',
            email: props.user ? props.user.email : '',
            phoneNumber: props.user ? props.user.phoneNumber : '',
            birthday: props.user ? moment(props.user.birthday).format("DD/MM/YYYY") : '',
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
        if (!cpf || cpf.match(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/)) {
            this.setState(() => ({ cpf }));
        }
    };
    onEmailChange = (e) => {
        const email = e.target.value;
        this.setState(() => ({ email }))
    };
    onPhoneNumberChange = (e) => {
        const phoneNumber = e.target.value;
        if (!phoneNumber || phoneNumber.match(/^\([1-9]{2}\)\d{5}\-\d{4}$/)) {
            this.setState(() => ({ phoneNumber }));
        }
    };
    onDateChange = (e) => {
        const birthday = e.target.value;
        if (birthday){
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
        } else if (!CPF.validate(this.state.cpf)) {
            this.setState(() => ({ error: 'Por favor, informe um CPF válido.' }));
        } else if (this.state.email && !this.state.email.match(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`´{|}~-]+\@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])*$/)) {
            this.setState(() => ({ error: 'Email inválido.' }));
        } else if (this.state.birthday && !this.state.birthday.match(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[1-9])|((1)[0-2]))(\/)\d{4}$/)) {
            this.setState(() => ({ error: 'Data de nascimento inválida.' }));
        }else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                fullName: this.state.fullName,
                cpf: CPF.format(this.state.cpf, 'digits'),
                email: this.state.email,
                phoneNumber: this.state.phoneNumber,
                birthday: moment(this.state.birthday, "DD-MM-YYYY").valueOf(),
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
                <MaskedInput
                    mask={[/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.',/\d/, /\d/, /\d/, '-', /\d/, /\d/]}
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
                <MaskedInput
                    mask={['(', /[1-9]/, /\d/, ')', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                    className="text-input"
                    type="text"
                    placeholder="Celular"
                    value={this.state.phoneNumber}
                    onChange={this.onPhoneNumberChange}
                />
                <MaskedInput
                    mask={[/[0-3]/, /[0-9]/, '/', /[0-1]/, /[0-9]/, '/', /\d/, /\d/, /\d/, /\d/]}
                    className="text-input"
                    type="text"
                    placeholder="Data de Nascimento"
                    value={this.state.birthday}
                    onChange={this.onDateChange}
                />
                <div>
                    <button className="button">Salvar</button>
                </div>
            </form>
        )
    }
};