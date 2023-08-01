// # Bài 1: Tính tiền taxi
// Tính tiền cước taxi dựa vào các điều kiện sau
// Số km ≤ 1 giá 15000đ
// 1 < số km ≤ 5 giá 13500đ
// Số km > 5 giá 11000đ
// Nếu số km > 120 km sẽ được giảm 10% trên tổng số tiền

var distance = 121.5,
cost;
if (distance > 0){
    if (distance <= 1){
        cost = 15000;
    } else if (distance <= 5) {
        cost = 15000 + (distance - 1) * 13500;
    } else if (distance > 5 && distance <= 120){
        cost = 15000 + 4 * 13500 + (distance - 5) * 11000;
    } else {
        cost = (15000 + 4 * 13500 + (distance - 5) * 11000) * 0.9;

    }
    console.log(`Tổng số tiền cần thanh toán là ${cost} đồng` );
}

// else {
//     console.log(`Hãy nhập lại quãng đường đã đi`);
// }

// # Bài 2: Tính tiền điện
// Học viên viết chương trình tiền điện hàng tháng theo yêu cầu sau

// Input: Số điện tiêu thụ hàng tháng

// Output: Hiển thị số tiền phải đóng

// Chi tiết giá điện theo bậc

// bậc 1 | 0 - 50    kWh | 1678 đồng/1kWh | 50 số
// bậc 2 | 51 - 100  kWh | 1734 đồng/1kWh | 50 số
// bậc 3 | 101 - 200 kWh | 2104 đồng/1kWh | 100 số
// bậc 4 | 201 - 300 kWh | 2536 đồng/1kWh | 100 số 
// bậc 5 | 301 - 400 kWh | 2834 đồng/1kWh | 100 số
// bậc 6 | > 401     kWh | 2927 đồng/1kWh

var kwh = 201,
cost;
if (kwh > 0){
    if (kwh <= 50){
        cost = 1678 * kwh;
    } else if (kwh <= 100){
        cost = 1678 * 50 + (kwh - 50) * 1734;
    } else if (kwh <= 200){
        cost = 1678 * 50 + 1734 * 50 + (kwh - 100) * 2104;
    } else if (kwh <= 300){
        cost = 1678 * 50 + 1734 * 50 + 2104 * 100 + (kwh - 200) * 2536;
    } else if ( kwh <= 400){
        cost = 1678 * 50 + 1734 * 50 + 2104 * 100 + 2536 * 100 + (kwh - 300) * 2834;
    } else {
        cost = 1678 * 50 + 1734 * 50 + 2104 * 100 + 2536 * 100 + 2834 * 100 + (kwh - 400) * 2927;
    }
    console.log(`Tiền điện tháng này của bạn là ${cost} đồng`);
} else {
    console.log(`Hãy nhập lại số kWh đã sử dụng`);
}



// # Bài 3: Tính giá trị biểu thức
// Cho trước số nguyên n. Tính giá trị biểu thức sau

// S= 1*2 + 2*3 + 3*4 + ... + n*(n+1)

var n = 5,
subS = 0,
S = 0;
if (n > 0 && n % 1 === 0){
    for (var i = 1; i <= n; i++){
        subS = i * (i + 1); 
        // console.log(subS);
        S += subS;  
    } 
console.log(`Tổng của phép tính là ${S}`);

} else {
    console.log(`Không hợp lệ, nhập số khác`);
}


// # Bài 4: Viết hàm kiểm tra số nguyên tố
// Viết 1 hàm kiểm tra 1 số có phải số nguyên tố hay không?

// Hàm có 1 tham số là số cần kiểm tra
// Hàm có giá trị trả về
// Gọi hàm trong câu điều kiện if else


function checkNb(n){
    if (n <= 1 || n % 1 !== 0) {
        return false;
    } 
     else {
        for (var i = 2; i < n; i++){
            if (n % i === 0) {
                return false;
            } 
        }
        return true;
    }
}
    var n = `ba`;
    if (checkNb(n)){
        
        console.log(`Đây là số nguyên tố`);
    } else {
     
        console.log(`Đây không là số nguyên tố`);
    }



// Vẽ tam giác số sau với N dòng

// 1

// 2 3

// 4 5 6

// 7 8 9 10

// 11 12 13 14 15


var n = 1;
var display = "";
for ( var i = 1; i <= n; i++ ) {
    display = "1";
    for (var j = 2; j <= i; j++){
        display = display + " " + j;
    } 
    console.log(display );
}



// # Bài 6: Vẽ bàn cờ vua
// Học viên sử dụng kiến thức đã học về vòng lặp, câu lệnh rẽ nhánh để vẽ bàn cờ vua
  

var board = "",
size = 8;
for (var i = 0; i < size; i++){
    for (var j = 0; j < size; j++){
        if ((i + j) % 2 === 0){
            board += `\u25A1`;
        }
        else {
            board +=`\u25A0`;
        }
    }
    board += `\n`;
}
console.log(board);




// # Bài 7: Vẽ bảng cửu chương
// Học viên sử dụng kiến thức đã học để vẽ bảng cửu chương từ 1 đến 10

var table = "",
size = 10;
for (var i = 1; i <= size; i++){
    for (var j = 1; j <= size; j++){
        var total = i * j;
        table += ` ${i} x ${j} = ${total} \n`;
    }
    table += `\n`;
}
console.log(table);



// # Bài 8: Tính giá trị biểu thức không dùng vòng lặp
// Tính giá trị biểu thức: S = 1 + 1/2 + 1/3 + 1/4 + 1/5 +…+1/N

function getSum(n) {
    if (n === 1) {
      return 1;
    } else if (n > 1 && n % 1 === 0) {
      return 1 / n + getSum(n - 1);
    }
    else {
        return `không hợp lệ`
    }
  }
  
  var result = getSum(3.5);
  console.log(result);
  