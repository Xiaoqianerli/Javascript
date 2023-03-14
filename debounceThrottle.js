
function debounce(fn, wait = 0) {
    let timer = '';
    return function () {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn();
        }, wait);
    }
}

function throttle(fn, wait = 0) {
    let flag = true;
    return function () {
        if (flag) {
            console.log('go')
            flag = false;
            let timer = setTimeout(() => {
                fn();
                flag = true;
                clearTimeout(timer);

            }, wait);
        } else {
            console.log('pending')
        }
    }
}

function a() {
    console.log('ing')
}

//不管点多少次，在时间范围内只执行一次
let debounceFun = throttle(a, 2000);

//不管点多少次，在时间范围内，由开关控制，只执行一次
let throttleFun = throttle(a, 2000);


window.addEventListener('click', function () {
    debounceFun();
    // throttleFun();
})

