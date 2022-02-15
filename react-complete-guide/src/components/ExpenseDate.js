import './ExpenseDate.css'

function ExpenseDate(props) {
    const locale = 'pl-PL'
    const month = props.date.toLocaleDateString(locale, {month: 'long'});
    const year = props.date.getFullYear();
    const day = props.date.toLocaleDateString(locale, {day: '2-digit'})

    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </div>
    );
}

export default ExpenseDate