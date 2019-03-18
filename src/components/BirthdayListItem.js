import React from 'react';
import moment from 'moment';

const BirthdayListItem = ({ fullName, phoneNumber, birthday }) => (
    <div className="list-item">
        <div className="list-item__date">
            {moment(birthday).format("DD/MM/YY")}
        </div>
        <div className="list-item__data">
            {fullName}
        </div>
        <div className="list-item__data">
            {phoneNumber}
        </div>
    </div>
);

export default BirthdayListItem;