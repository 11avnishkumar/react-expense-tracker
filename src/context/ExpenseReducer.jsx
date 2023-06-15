export const expenseReducer = (state, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return { ...state,transactions:[...state.transactions, action.expensesData] }
        default:
            return state
    }
}
