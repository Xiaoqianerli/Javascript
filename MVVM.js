let obj = {
    name: "123",
    company: "321",
  };
  
  // const templatehtml = document.body.innerHTML;
  function watch(object) {
    // Todo
    obj = new Proxy(object, {
        get: function (target, propKey, receiver) {
          console.log(`getting ${propKey}!`);
          return Reflect.get(target, propKey, receiver);
        },

        set: function (target, propKey, value, receiver) {
          console.log(`setting ${propKey} ${value}!`);
          target[propKey] = value;

          document.body.innerHTML = document.body.innerHTML.replace(
            /(?<="{{(.+?)}}")>.*</g,
            (...rest) => {
              console.log("==>", rest);
              return (rest[0] = `>${target[rest[1]]}<`);
            }
          );
          return true;
        },
    });
    
  }

  watch(obj);

  obj.company = "h";

  setTimeout(() => (obj.name = "seven"), 1000);