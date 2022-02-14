import './ExpenseItem.css';

function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>Feb 14 2022</div>
            <div className="expense-item__description">
                <h2>Car insurance</h2>
                <div className="expense-item__price">$643.45</div>
            </div>
        </div>
    );
}

export default ExpenseItem;