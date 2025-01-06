type counterState = {
    count: number,
    status: string;
}

type updateCountAction = {
    type: 'increment' | 'decrement' | 'reset'
}

type SetStatusAction = {
    type: 'setStatus';
    payload: 'active' | 'inactive'
}

type ActionType = updateCountAction | SetStatusAction

export const initialState : counterState = {
    count: 0,
    status: 'Pending...' 
}

export const counterReducer = (state: counterState, action: ActionType) : counterState => {
    switch (action.type) {
        case 'increment':
            return {...state, count: state.count + 1}
        case 'decrement':
            return {...state, count: state.count - 1}
        case 'reset':
            return {...state, count: 0}
        case 'setStatus':
            return {...state, status: action.payload}
        default: {
            const unhandledActionType: never = action;
            throw new Error(
                `Unexpected action type: ${unhandledActionType}. Please double check the counter reducer.`
            );
        }
    }
}