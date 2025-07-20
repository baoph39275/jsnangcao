//2. Vòng lắp với forEach()
//forEach : Duyệt qua từng phần tử trong mảng(không trả về mảng mới).
const arr = [1, 2, 3];
arr.forEach((value, index, array)=>{
    console.log(`Giá trị: ${value}, Vị trí: ${index}`);
});
