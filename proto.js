    // implementation of JS prototype
    // example
    // var o = {name: 'seven'};
    // o.name // seven: o点name是创建这个对象的属性
    // o.hasOwnProperty('name') // true: o点hasOwnProperty是这个对象原型链上的属性
    // 实现CustomObject
function CustomObject(obj) {
    return new Proxy(obj, {
      get: function (target, name) {
        while (target) {
          if (target[name]) {
            break;
          }
          target = target.proto;
        }
        return target[name];
      },
    });
  }

  var a = new CustomObject({
    data: 1,
    proto: {
      data: 2,
      proto: {
        data: 3,
        print: () => console.log("77"),
      },
    },
  });
  a.print(); // 77