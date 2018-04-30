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

function handleRun(){
    const operation = operations[state.operation];
    if(operation){
        try {
            $result.innerHTML = operation(state.expression);
            $result.classList.remove('error');
        } catch (e) {
            $result.innerHTML = e.message;
            $result.classList.add('error');
        };
    } else {
        $result.innerHTML = 'feature comming soon...';
    };
}

$operation.addEventListener('change', e => {
    state.operation = $operation.value;
});
$expression.addEventListener('keydown', e => {
    if(e.key === 'Enter'){
        handleRun()
    };
});

$expression.addEventListener('change', e => {
    state.expression = $expression.value;
});

$run.addEventListener('click', e => {
    handleRun();
});