## What is promise ?
Promises are a software abstraction that makes working with asynchronous operations much more pleasant. In most basic 
defination, your code will move from continuation-passing style:
```js
getTweetsFor("domenic", function (err, results) {
  // the rest of your code goes here.
});
```
to one where your functions return a value, called a promise, which is represents the eventual result of the operation:
```
var promiseForTweets = getTweetsFor("domenic");
```
This is powreful since you can now treat these promises as first-class objects, passing them around, aggregating them, and so
on instead of inserting dummy callbacks that tie togehter other callbacks in order to do the same.

A promise is in one of the three different state:
* pending - The initial state of promise.
* fullfied - The state of a promise representing a sucessful operation.
* rejected - The state of a promise representing a failed operation.
Once a promise is fullfied or rejected, it is immutable.

## What is the point of promise?
Promise is about something much depper, namely providing a direct correspondence between synchronous functions and asynchronous
functions.

The point of promise is to give us back functional composition and error bubbling in the async world. They do this by saying
that your funcitons should return a promise, which can do one of the two things:
* Become fullfied by a value.
* Become rejected by an exception.

on the other hand, `then` function is a mechanisam for attacking callbacks for an aggregation collection. It's a mechanisam 
for applying a transformation to a promise, and yielding a new promise frome that transformation.
* If either handler returns a value, the new promise is fullfied with that value.
* If either handler throws an exception, the new promise is rejected with that exception.
This breaks into four scenarios, depending on the state of the promise.
1. Fullfied, fullment handler returns a value: simple function transformation.
2. Fullfied, fullmentt habdler returns an exception: getting data, and throwing exception in responding to it.
3. Rejected, rejection handler returns a value, a `catch` clause got the error and handle it.
4. Rejected, rejection handler returns an exception: a `catch` clause got the error and re-throw it(or a new one).
Furthermore, note that by catching exceptions and transforming them into rejections, we take care both intentional and 
nonintentional exceptions, just like in sync code.

## Duck typing to check a promise
```js
if (p != null &&
(typeof p === 'object' || typeof p === 'function') && 
typeof p.then === 'function') {
//assume this is a thenable!
} else {
//not thenable
}

## Reference
* [You're Missing the Point of Promises](https://blog.domenic.me/youre-missing-the-point-of-promises/)
* [Promise](https://www.promisejs.org/)


 
