import { useReducer, createContext, Dispatch, ReactNode } from "react"
import { BudgetActions, budgetReducer, budgetState, initialState } from "../reducers/budget-reducer"

type BudgetContextProps = {
  state: budgetState
  dispatch: Dispatch<BudgetActions>
}

type BudgetProvaiderProps = {
  children: ReactNode
}

export const BudgetContext = createContext<BudgetContextProps>(null!)

export const BudgetProvaider = ({children}: BudgetProvaiderProps) => {

  const [state, dispatch] = useReducer(budgetReducer, initialState)
  
  return (
    <BudgetContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {children}
    </BudgetContext.Provider>
  )
}