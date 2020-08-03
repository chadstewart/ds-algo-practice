function fibonacciDynamic(sequenceLength) {
    const fibonacci = [0, 1];

    const fibExec = num => {
        if(num < 0) {
            return 'Please use a non-negative integar.';
        } else if(num != null) {
            return fibonacci[num];
        } else {
            return (fibonacci.push(fibExec(num - 1) + fibExec(num - 2)));
        }
    }

    return fibExec(sequenceLength);

}

function fibonacciIterative(sequenceLength) {
    const fibonacci = [0, 1];

    for(let i = 0; i <= sequenceLength; i++){
        if(sequenceLength === 1 || sequenceLength ===  0){
            return fibonacci[sequenceLength];
        }

        let temp = fibonacci[1];
        fibonacci[1] = fibonacci[1] + fibonacci[0];
        fibonacci[0] = temp;
    }

    return fibonacci[sequenceLength];
}