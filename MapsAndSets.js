// Maps Và Sets  
//-Map: 1. cấu trúc dữ liệu lưu các cặp key-value.
//2.Khác với object,key có thể là bất kỳ kiểu dữ liệu nào(object,number,string,...).
const map = new Map();
map.set('name', 'Bảo');
map.set(1, 'Số một');
console.log(map.get(1)); //"Số một"

//Set: Lưu trữ danh sách 'giá trị duy nhất'(Không trùng lặp)
const mySet = new Set([1, 2, 2, 3]);
console.log(mySet); // Set(3) {1, 2, 3}
mySet.add(4);
mySet.delete(2);
