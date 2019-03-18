import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByTotal, sortByDate, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';

export class SaleListFilters extends React.Component {
    state = {
        calendarFocused: null
    };
    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }))
    };
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    };
    onSortChange = (e) => {
        if (e.target.value === 'date') {
            this.props.sortByDate();
        } else if (e.target.value === 'total') {
            this.props.sortByTotal();
        }
    };
    render() {
        return (
            <div className="bg-orange">
                <div className="content-container">
                    <div className="input-group__filter">
                        <div className="input-group__item">
                            <input
                                className="text-input"
                                placeholder="Pesquisar por nome"
                                type="text"
                                value={this.props.filters.text}
                                onChange={this.onTextChange}
                            />
                        </div>
                        <div className="input-group__item">
                            <select
                                className="select"
                                value={this.props.filters.sortBy}
                                onChange={this.onSortChange}
                            >
                                <option value="date">Data</option>
                                <option value="total">Valor</option>
                            </select>
                        </div>
                        <div className="input-group__item">
                            <DateRangePicker
                                startDate={this.props.filters.startDate}
                                endDate={this.props.filters.endDate}
                                startDatePlaceholderText="Data início"
                                endDatePlaceholderText="Data fim"
                                onDatesChange={this.onDatesChange}
                                focusedInput={this.state.calendarFocused}
                                onFocusChange={this.onFocusChange}
                                showClearDates={true}
                                numberOfMonths={1}
                                isOutsideRange={() => false}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByTotal: () => dispatch(sortByTotal()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(SaleListFilters);