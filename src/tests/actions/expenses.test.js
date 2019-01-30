import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '12344abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '12344abc'
    });
});

test('should setup edit expense action object', () => {
    const action = editExpense('124abce', {note: 'New note value'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '124abce',
        updates: {
            note: 'New note value'
        }
    });
});

test('should setup add expense action object', () => {
    const expenseData = {
        description: 'rent',
        amount: 109500,
        createdAt: 1000,
        note: 'This was my rent last month'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should setup add expense action object with defaults', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    });
});