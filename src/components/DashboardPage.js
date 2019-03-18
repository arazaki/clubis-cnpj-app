import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import TotalCustomers from './indicators/TotalCustomers';
import TotalCashbacked from './indicators/TotalCashbacked';
import TotalBalance from './indicators/TotalBalance';
import TotalWithdrawn from './indicators/TotalWithdrawn';
import TotalSales from './indicators/TotalSales';
import SumTotalSales from './indicators/SumTotalSales';
import AverageTicketSales from './indicators/AverageTicketSales';
import AverageCashbackRate from './indicators/AverageCashbackRate';
import BirthdayList from './BirthdayList';
import { MdCake } from 'react-icons/md';

export const DashboardPage = ({ totalCustomers, totalWithdrawn, totalSales, sumTotalSales, totalCashbacked, totalBalance }) => (
    <div>
        <div className="bg-orange">
            <div className="content-container button-tab">
                <Link className="button" to={`/createVoucher`}>Resgatar</Link>
            </div>
        </div>
        <div className="content-container">
            <div className="dashboard-panel">
                <div className="dashboard-group">
                    <div className="dashboard-group__header">
                        <h1>Vendas</h1>
                    </div>
                    <div className="dashboard-group__list">
                        <TotalCustomers totalCustomers={totalCustomers} />
                        <TotalSales totalSales={totalSales} />
                        <SumTotalSales sumTotalSales={sumTotalSales} />
                        <AverageTicketSales sumTotalSales={sumTotalSales} totalSales={totalSales} />
                    </div>
                </div>
                <div className="dashboard-group">
                    <div className="dashboard-group__header">
                        <h1>Cashback</h1>
                    </div>
                    <div className="dashboard-group__list">
                        <TotalCashbacked totalCashbacked={totalCashbacked} />
                        <TotalWithdrawn totalWithdrawn={totalWithdrawn} />
                        <TotalBalance totalBalance={totalBalance} />
                        <AverageCashbackRate sumTotalSales={sumTotalSales} totalCashbacked={totalCashbacked} />
                    </div>
                </div>
            </div>
            <div className="dashboard-panel">
                <div className="dashboard-group">
                    <div className="dashboard-group__header">
                        <div>
                            <MdCake />
                        </div>
                        <div>
                            <h1>Aniversariantes</h1>
                        </div>
                    </div>
                    <div className="dashboard-group__list">
                        <BirthdayList />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const mapStateToProps = (state) => ({
    totalCustomers: state.dashboardData.totalCustomers,
    totalWithdrawn: state.dashboardData.totalWithdrawn,
    totalSales: state.dashboardData.totalSales,
    sumTotalSales: state.dashboardData.sumTotalSales,
    totalCashbacked: state.dashboardData.totalCashbacked,
    totalBalance: state.dashboardData.totalBalance
});

export default connect(mapStateToProps)(DashboardPage);
