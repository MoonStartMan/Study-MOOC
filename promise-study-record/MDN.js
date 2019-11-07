// This code from the MDN website

//  链式调用
doSomething().then(function(result) {
    return doSomethingElse(result);
})
.then(function(newResult) {
    return doThirdThing(newResult);
})
.then(function(finalResult) {
    console.log('Got the final result: ' + finalResult);
})
.catch(failureCallback);

doSomething()
.then(result => doSomethingElse(result) )
.then(newResult => doThirdThing(newResult) )
.then(finalResult => {
    console.log(`Got the final result：${finalResult}`);
})
.catch(failureCallback);