'use strict'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import * as model from './model.js'
import view from './view.js'
import { INPUT, INPUT_FORM } from './config.js'

const controlOperation = function (e) {
    model.setOperation(e)
    // Determine is it operator(e.g '+','-') or command(e.g 'equal','delete')
    model.state.operationName.length > 1 ? controlCommands(model.state.operationName) : view.displayOperation(model.state)
}

const controlCommands = function (operation) {
    if (operation === 'equal') view.displayResult(model.doOperation(INPUT))
    if (operation === 'delete') view.inputDelete()
    if (operation === 'clear') view.inputClear()
}

const init = function () {
    INPUT_FORM.reset()
    view.addHandlerClick(controlOperation)
}
init()