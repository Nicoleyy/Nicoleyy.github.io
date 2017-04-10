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


## Reference
[You're Missing the Point of Promises](https://blog.domenic.me/youre-missing-the-point-of-promises/)
[Promise](https://www.promisejs.org/)


 
