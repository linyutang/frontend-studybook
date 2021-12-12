/**
 * @param {number} n
 * @return {boolean}
 */

 const getNext = (x) => {
    let z = 0;
    while(x) {
        z += (x % 10) * (x % 10)
        x = Math.floor(x / 10)
    }
    return z
}

var isHappy = function(n) {
    let p = getNext(n)
    let q = getNext(getNext(n))
    while(p !== q && q !== 1) {
        p = getNext(p)
        q = getNext(getNext(q))
    }
    return q === 1
};