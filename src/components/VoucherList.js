import React from 'react';
import { connect } from 'react-redux';
import VoucherListItem from './VoucherListItem';
import selectVouchers from '../selectors/vouchers';

export const VoucherList = ({ vouchers }) => (
    <div className="content-container content-container--bg-white">
        <div className="list-body">
            {
                vouchers.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>
                            Sem resgates ainda :/
                    </span>
                    </div>
                ) : (
                        vouchers.map((voucher) => {
                            return <VoucherListItem key={voucher.id} {...voucher} />;
                        })
                    )
            }
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        vouchers: selectVouchers(state.vouchers, state.filters)
    };
};

export default connect(mapStateToProps)(VoucherList);