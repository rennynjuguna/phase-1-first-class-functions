function receivesAFunction(callback) {
    return callback();
}
function returnsANamedFunction(){
    var callback = function (){
        return function name(){
            return 'anonymous';
        }
    }
    return receivesAFunction(callback);
}
function returnsAnAnonymousFunction(){
    return function(){
        console.log('anonymous')
    }
}