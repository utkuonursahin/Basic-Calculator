import { OPERATION_MAP_OBJECT } from "./config.js";
export const state = {
    operationMapObject: OPERATION_MAP_OBJECT,
    operationName: '',
    button: ''
}

export const setOperation = function (e) {
    // Find closest button from 'e.target' then set it's dataset data as 'state.operationName'
    // *For better understand, please go check button's data attribute on 'index.html'*
    state.button = e.target.closest('.btn')
    state.operationName = state.button.dataset.operation
}

export const doOperation = function (input) {
    // Split all chars on input and filter mathematical operators
    const inputsArr = input.value.split('')
    const signsArr = inputsArr.filter(el => Object.keys(state.operationMapObject).includes(el))
    // Assign the latest mathematical operator on 'signsArr' as operation 'sign' then split the input string according to that 'sign'
    const sign = signsArr.slice(-1)
    const numbersArr = input.value.split(`${sign}`)
    // Find the corresponding function for 'sign' from 'state.operationMapObject' by bracket notation
    const getResultFn = state.operationMapObject[sign]
    return getResultFn(numbersArr) // Return result
}