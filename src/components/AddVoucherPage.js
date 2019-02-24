import React from 'react';
import { connect } from 'react-redux';
import VoucherForm from './VoucherForm';
import { startAddVoucher } from '../actions/vouchers';

export class AddVoucherPage extends React.Component {
    onSubmit = (voucher) => {
        this.props.startAddVoucher(voucher);
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Resgatar</h1>
                    </div>
                </div>
                <div className="content-container">
                    <VoucherForm
                        onSubmit={this.onSubmit}
                    />
                </div>
            </div>
        );
    };
};

const mapDispatchToProps = (dispatch) => ({
    startAddVoucher: (voucher) => dispatch(startAddVoucher(voucher))
});

export default connect(undefined, mapDispatchToProps)(AddVoucherPage);