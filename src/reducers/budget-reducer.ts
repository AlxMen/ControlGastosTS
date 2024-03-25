
export type BudgetActions =
  { type: 'add-budget', payload: { budget: number } }
  
export type budgetState = {
  budget: number
}

export const initialState: budgetState = {
  budget: 0 
}

export const budgetReducer = (
  state: budgetState = initialState,
  action: BudgetActions
) => {

  if (action.type === 'add-budget') {
    

    return {
      ...state,
      budget: action.payload.budget
    }
  }


  return state
}
