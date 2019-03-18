import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import VoucherList from './VoucherList';
import { startSetVouchers } from '../actions/vouchers';

const VoucherDashboardPage = ({ startSetVouchers }) => {
    startSetVouchers();
    return (
        <div>
            <div className="bg-orange">
                <div className="content-container button-tab">
                    <Link className="button" to={`/createVoucher`}>Resgatar</Link>
                </div>
            </div>
            <VoucherList />
        </div>
    )
};

const mapDispatchToProps = (dispatch) => ({
    startSetVouchers: () => dispatch(startSetVouchers())
});

export default connect(undefined, mapDispatchToProps)(VoucherDashboardPage);