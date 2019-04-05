for ... of 循环会向被访问对象请求一个迭代器对象
```js
let myArrary = [1, 2, 3]
let it = myArrary[Symbol.iteraotr]()
it.next() // {value: 1, done: false}
it.next() // {value: 2, done: false}
it.next() // {value: 3, done: false}
it.next() // {done: true}
```

普通的对象没有内置的@@iterator，手动添加可以完成for ... of遍历
```js
Object.prototype[Symbol.iterator] = function () {
    let o = this
    let keys = Object.keys(o)
    let idx = 0
    return {
      next: function () {
        return {
          value: keys[idx++],
          done: idx > keys.length
        }
      }
    }
}
```
