// 练习第五题：
// Find the Midpoint of linklist
// 这里面假设这个链表都是奇数的长度，比如长度为7的链表，第四个节点就是middle point。比如长度为3的链表，第二个节点就是middle point。

// 要求：
// 1. 不能通过size的长度来计算！比如先计算链表长度，然后循环链表时看index是否等于长度的中位数。当然把链表转成数组，再取数组的中位数来取到middle point也是一样的是通过size的长度计算的。
// 2. 链表的节点是奇数个，先不用考虑偶数的场景

// 思路
// 第0个不做判断
// 从第1个开始 假设1是，那么继续1+1+1，判断第（1+1+1）个节点是否有值，
// 如果有，那么假设2是，那么继续2+2+1，判断第（2+2+1）个节点是否有值，
// 如果有，那么假设3是，那么继续3+3+1，判断第（3+3+1）个节点是否有值，
// 如果有，那么假设4是，那么继续4+4+1，判断第（4+4+1）个节点是否有值,
// 如果没有，那么4是middle point


var linklist = {
    name: "a",
    child: {
        name: "b",
        child: {
            name: "c",
            child: {
                name: "d",
                child: {
                    name: 'e',
                    child: {
                        name: "f",
                        child: {
                            name: 'g',
                            child: null
                        }
                    }
                }
            }
        }
    }
};

function findMidpoint(linklist, index=0) {
    if (!linklist.child) {
        return linklist;
    }
    if (linklist.child) {
        index++;
        const midpoint = linklist.child;
        let num = 0;
        let targetNum = index + 1;
        let assignMidpoint = midpoint;
        while (num <= targetNum) {
            if (assignMidpoint.child) {
                assignMidpoint = assignMidpoint.child;
                num++
            } else {
                return midpoint;
            }
        }
        return findMidpoint(midpoint, index)
    }
}
console.log(findMidpoint(linklist))

