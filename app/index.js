import { calculate, simplify } from '@thk2b/algebra';

const $expression = document.getElementById('expression');
const $operation = document.getElementById('operation');
const $run = document.getElementById('run');
const $result = document.getElementById('result');

const operations = {
    calculate, simplify
};

const state = {
    operation: 'calculate',
    expression: ''
};

$operation.addEventListener('change', e => {
    state.operation = $operation.value;
});

$expression.addEventListener('change', e => {
    state.expression = $expression.value;
});

$run.addEventListener('click', e => {
    $result.innerHTML = operations[state.operation](state.expression);
});