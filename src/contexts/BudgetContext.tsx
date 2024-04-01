import { useReducer, createContext, Dispatch, ReactNode, useMemo } from "react"
import { BudgetActions, budgetReducer, budgetState, initialState } from "../reducers/budget-reducer"

type BudgetContextProps = {
  state: budgetState;
  dispatch: Dispatch<BudgetActions>;
  totalExpenses: number;
  remainingBudget: number
};

type BudgetProvaiderProps = {
  children: ReactNode
}

export const BudgetContext = createContext<BudgetContextProps>(null!)

export const BudgetProvaider = ({children}: BudgetProvaiderProps) => {

  const [state, dispatch] = useReducer(budgetReducer, initialState)

  const totalExpenses = useMemo(
    () => state.expenses.reduce((total, expense) => expense.amount + total, 0),
    [state.expenses]
  );

  const remainingBudget = state.budget - totalExpenses;
  
  return (
    <BudgetContext.Provider
      value={{
        state,
        dispatch,
        totalExpenses,
        remainingBudget,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
}