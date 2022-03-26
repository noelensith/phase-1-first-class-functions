function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    const named = function () {
        return "";
    }
    return named;
}

function returnsAnAnonymousFunction() {
    return () => ""
}

//(function returnsAnAnonymousFunction() {
//    return ''
//})
