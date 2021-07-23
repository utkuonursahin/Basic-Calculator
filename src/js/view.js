'use strict'
import { INPUT } from './config.js'
class View {
    _parentEl = document.querySelector('.buttons')

    addHandlerClick(handler) { this._parentEl.addEventListener('click', handler) }

    displayOperation(state) {
        INPUT.setAttribute('readonly', true)
        state.operationName === 'n' ? INPUT.value += state.button.innerHTML : INPUT.value += `${state.operationName}`
        INPUT.focus()
    }
    displayResult(result) {
        if (result > 0 && result < 1) INPUT.value = result.toFixed(2) // Fixes some weird results for small numbers e.g.(0.1 + 0.2)
        else if (result.toString().length >= 6) INPUT.value = result.toFixed(3) // Fixes some weird results for big numbers
        else INPUT.value = result // In cases there is no need for fixing
    }
    inputDelete() { INPUT.value = INPUT.value.slice(0, INPUT.value.length - 1) } // Delete the last char on input
    inputClear() { INPUT.value = '' } // Delete all chars on input
}
export default new View()