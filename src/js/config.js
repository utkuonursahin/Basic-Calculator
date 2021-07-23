export const INPUT = document.querySelector('.user__input')
export const INPUT_FORM = document.querySelector('.user__form')
export const OPERATION_MAP_OBJECT = {
    'x': arr => arr.reduce((acc, cur) => (+acc) * (+cur)),
    '/': arr => arr.reduce((acc, cur) => (+acc) / (+cur)),
    '%': arr => (arr[0] * arr[1]) / 100,
    '+': arr => arr.reduce((acc, cur) => (+acc) + (+cur)),
    '-': arr => arr.reduce((acc, cur) => (+acc) - (+cur))
}