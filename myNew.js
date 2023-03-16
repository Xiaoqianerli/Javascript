function Person() {
    this.name = "John";
    this.getName = function() {

    }
  }
  // const person = Person();
  function myNew(fun, ...args) {
    let a = {};
    a.__proto__ = fun.prototype; //新建对象，将构造函数与原型对象链接起来
    fun.apply(a, args);//改变构造函数的this指向为这个对象
    console.log(a instanceof fun)
    return a;//输出这个对象
  }
  const person = myNew(Person);
  
  // console.log(myNew())

  console.log(person)