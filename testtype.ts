interface IFunc {
  <Why>(fn: () => Why, age: number): Why
}

const foo: IFunc = function (fn, age) {
  return fn()
}



foo<number>(() => {
  return 123
}, 18)

// 不傳入時會類型推斷
foo(() => {
  return 'aaa'
}, 23)
