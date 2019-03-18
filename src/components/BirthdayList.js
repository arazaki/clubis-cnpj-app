import React from 'react';
import { connect } from 'react-redux';
import BirthdayListItem from './BirthdayListItem';

export const BirthdayList = (props) => (
    <div className="">
        {
            props.birthdayList.length === 0 ? (
                <div className="list-item list-item--message">
                    <span>
                        Sem aniversariantes :/
                    </span>
                </div>
            ) : (
                    props.birthdayList.map((item) => {
                        return <BirthdayListItem key={item.id} {...item} />;
                    })
                )
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        birthdayList: state.dashboardData.birthdayList
    };
};

export default connect(mapStateToProps)(BirthdayList);