import React from 'react';
import MaskedInput from 'react-text-mask';

export default class CompanyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            companyName: props.company ? props.company.companyName : '',
            cnpj: props.company ? props.company.cnpj : '',
            email: props.company ? props.company.email : '',
            phoneNumber: props.company ? props.company.phoneNumber : '',
            addressCity: props.company ? props.company.addressCity: '',
            addressState: props.company ? props.company.addressState: '',
            addressStreet: props.company ? props.company.addressStreet: '',
            logoLink: props.company ? props.company.logoLink: '',
            cashbackDefaultRate: props.company ? props.company.cashbackDefaultRate: '',
            error: ''
        };
    };

    onCompanyNameChange = (e) => {
        const companyName = e.target.value;
        this.setState(() => ({ companyName }));
    };
    onCnpjChange = (e) => {
        const cnpj = e.target.value;
        if (!cnpj || cnpj.match(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/)) {
            this.setState(() => ({ cnpj }));
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
    onAddressCityChange = (e) => {
        const addressCity = e.target.value;
        this.setState(() => ({ addressCity }))
    };
    onAddressStateChange = (e) => {
        const addressState = e.target.value;
        this.setState(() => ({ addressState }))
    };
    onAddressStreetChange = (e) => {
        const addressStreet = e.target.value;
        this.setState(() => ({ addressStreet }))
    };
    onLogoLinkChange = (e) => {
        const logoLink = e.target.value;
        this.setState(() => ({ logoLink }))
    };
    onCashbackDefaultRateChange = (e) => {
        const cashbackDefaultRate = e.target.value;
        if (!cashbackDefaultRate || cashbackDefaultRate.match(/^\d{1,2}?$/)) {
            this.setState(() => ({ cashbackDefaultRate }));
        }
    };
    
    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.companyName || !this.state.cnpj || !this.state.phoneNumber || !this.state.email || !this.state.addressCity || !this.state.addressState || !this.state.addressStreet || !this.state.cashbackDefaultRate) {
            this.setState(() => ({ error: 'Por favor, informe todos os campos obrigatórios.' }));
        } else if (this.state.email && !this.state.email.match(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`´{|}~-]+\@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])*$/)) {
            this.setState(() => ({ error: 'Email inválido.' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                companyName: this.state.companyName,
                cnpj: this.state.cnpj,
                email: this.state.email,
                phoneNumber: this.state.phoneNumber,
                addressCity: this.state.addressCity,
                addressState: this.state.addressState,
                addressStreet: this.state.addressStreet,
                logoLink: this.state.logoLink,
                cashbackDefaultRate: this.state.cashbackDefaultRate
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
                    placeholder="Nome da empresa"
                    autoFocus
                    value={this.state.companyName}
                    onChange={this.onCompanyNameChange}
                />
                <MaskedInput
                    mask={[/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.',/\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/]}
                    className="text-input"
                    type="text"
                    placeholder="CNPJ"
                    value={this.state.cnpj}
                    onChange={this.onCnpjChange}
                />
                <input
                    className="text-input"
                    type="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.onEmailChange}
                />
                <MaskedInput
                    mask={['(', /[1-9]/, /\d/, ')', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                    className="text-input"
                    type="tel"
                    placeholder="Celular"
                    value={this.state.phoneNumber}
                    onChange={this.onPhoneNumberChange}
                />
                <input
                    className="text-input"
                    type="text"
                    placeholder="Cidade"
                    value={this.state.addressCity}
                    onChange={this.onAddressCityChange}
                />
                <input
                    className="text-input"
                    type="text"
                    placeholder="Estado"
                    value={this.state.addressState}
                    onChange={this.onAddressStateChange}
                />
                <input
                    className="text-input"
                    type="text"
                    placeholder="Logradouro"
                    value={this.state.addressStreet}
                    onChange={this.onAddressStreetChange}
                />
                <input
                    className="text-input"
                    type="text"
                    placeholder="Link para Logo"
                    value={this.state.logoLink}
                    onChange={this.onLogoLinkChange}
                />
                <input
                    className="text-input"
                    type="text"
                    placeholder="Taxa padrão de cashback (%)"
                    value={this.state.cashbackDefaultRate}
                    onChange={this.onCashbackDefaultRateChange}
                />
                <div>
                    <button className="button">Salvar</button>
                </div>
            </form>
        )
    }
};