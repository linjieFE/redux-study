const defaultState={
    inputValue:'hi! linjieFE',
    list:[]
}
export default (state = defaultState,action)=>{
    if(action.type==='changeInput'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if(action.type==='addItem'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    return state
}