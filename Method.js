//*find() :Trả về phần tử đầu tiên thoả điều kiện.
const arr = [5, 10, 15];
const found = arr.find(x => x > 8); // 10
//*findIndex() : Trả về vị trí của phần tử đầu tiên thoả điều kiện.
const index = arr.findIndex(x => x === 10); // 1
//*some() : Trả về true nếu ít nhất một phần tử thoả điều kiện.
const hasEven = [1, 3, 5, 6].some(x => x % 2 === 0); // true
//*every() : Trả về true nếu tất cả phần tử thoả điều kiện.
const allPositive = [1, 2, 3].every(x => x > 0); // true
