import React from 'react';
import { connect } from 'react-redux';
import SaleListItem from './SaleListItem';
import selectSales from '../selectors/sales';

export const SaleList = ({ sales }) => (
    <div className="content-container content-container--bg-white">
        <div className="list-body">
            {
                sales.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>
                            Sem vendas ainda :/
                    </span>
                    </div>
                ) : (
                        sales.map((sale) => {
                            return <SaleListItem key={sale.cfeId} {...sale} />;
                        })
                    )
            }
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        sales: selectSales(state.sales, state.filters)
    };
};

export default connect(mapStateToProps)(SaleList);