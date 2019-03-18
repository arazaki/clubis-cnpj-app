import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import MaskedInput from 'react-text-mask';
import CPF from 'gerador-validador-cpf';
import numeral from 'numeral';

//const date = new Date();
const now = moment();

export class VoucherForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            customer: '',
            cpf: props.voucher ? props.voucher.cpf : '',
            amount: props.voucher ? (props.voucher.amount / 100).toString() : '',
            createdAt: props.voucher ? moment(props.voucher.createdAt) : moment(),
            error: ''
        };
    };

    onCpfChange = (e) => {
        const cpf = e.target.value;
        if (!cpf || cpf.match(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/)) {
            const customer = this.props.customers.find((customer) => {
                return customer.cpf === CPF.format(cpf, 'digits');
            });
            if (!customer) {
                this.setState(() => ({ error: 'CPF não encontrado.' }));
            } else {
                this.setState(() => ({ error: '' }));
                this.setState(() => ({ cpf, customer }));
            }
        }
    };
    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\,\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    };
    onSubmit = (e) => {
        e.preventDefault();
        const amountFormatted = parseFloat(this.state.amount.replace(",","."), 10) * 100;
        if (!this.state.amount) {
            this.setState(() => ({ error: 'Informe o valor.' }));
        } else if (amountFormatted > this.state.customer.balance) {
            this.setState(() => ({ error: 'Valor de resgate acima do saldo disponível.' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                cpf: this.state.cpf,
                amount: amountFormatted,
                createdAt: this.state.createdAt.valueOf(),
            });
        }
    };
    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                <MaskedInput
                    mask={[/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]}
                    className="text-input"
                    type="text"
                    placeholder="CPF"
                    value={this.state.cpf}
                    onChange={this.onCpfChange}
                />
                {this.state.cpf &&
                    <div>
                        <div>
                            Disponível para resgate: {numeral(this.state.customer.balance / 100).format('$0,0.00')}
                        </div>
                        <input
                            className="text-input"
                            type="text"
                            placeholder="Valor de resgate"
                            value={this.state.amount}
                            onChange={this.onAmountChange}
                        />
                    </div>
                }
                <div>
                    <button className="button">Resgatar</button>
                </div>
            </form>
        )
    }
};

const mapStateToProps = (state) => ({
    customers: state.customers
});

export default connect(mapStateToProps)(VoucherForm);