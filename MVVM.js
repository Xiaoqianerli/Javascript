let obj = {
    name: "123",
    company: "321",
  };

  const fnArr = new Set();
  obj = new Proxy(obj, {
    get: function (target, propKey, receiver) {
      console.log(`getting ${propKey}!`);
      fnArr.add(watch);
      return Reflect.get(target, propKey, receiver);
    },
    set: function (target, propKey, value, receiver) {
      console.log(`setting ${propKey} ${value}!`);
      target[propKey] = value;
      fnArr.forEach((fn) => fn());
      return true;
    },
  });
  // const templatehtml = document.body.innerHTML;
  function watch() {
    // Todo
    // document.body.innerHTML = templatehtml.replace(/{{(.+?)}}"></g, (...rest) => {
    //   console.log('==>', rest)
    //   return rest[0] = `${obj[rest[1]]}">${obj[rest[1]]}<`
    // })
    document.body.innerHTML = document.body.innerHTML.replace(
      /(?<="{{(.+?)}}")>.*</g,
      (...rest) => {
        console.log("==>", rest);
        return (rest[0] = `>${obj[rest[1]]}<`);
      }
    );
  }

  watch();

  obj.company = "h";

  setTimeout(() => (obj.name = "seven"), 1000);