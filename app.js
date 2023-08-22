const axios = require('axios')


const fs = require('fs');

// Câu hỏi 


// Câu 1 : Tại sao Node.js được gọi là môi trường chạy bất đồng bộ (asynchronous runtime)? Hãy cung cấp ví dụ minh họa về việc sử dụng tính năng bất đồng bộ trong Node.js.
// Trả lời :  Node.js được gọi là môi trường chạy bất đồng bộ (asynchronous runtime) bởi vì nó có khả năng xử lý các tác vụ mà không chờ đợi cho đến khi một tác vụ hoàn thành trước khi bắt đầu tác vụ tiếp theo. Thay vào đó, Node.js sử dụng mô hình bất đồng bộ để tiếp tục thực hiện các tác vụ khác trong khi các tác vụ khác đang được xử lý. Điều này giúp tối ưu hóa việc sử dụng tài nguyên và đảm bảo ứng dụng vẫn đáp ứng tốt trong quá trình xử lý nhiều tác vụ.
// Ví dụ: 

// -----------code --------------
setTimeout(() => {
    fs.readFile('data.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        console.log('File content:', data);
    });
}, 2000); 

console.log("Lê Quang Văn")
// -----------code --------------


// Kết quả trả về: dòng code  console.log("Lê Quang Văn") được thực hiện trước bời gì hàm setTimeOut() là 1 hàm bất đồng bộ nên nó được đưa vào xử lí riêng sau khi chương trình được chạy (chính xác là 2s )
// Lê Quang Văn
// File content: Tên: Lê Quang Văn
// Tuổi: 20
// Địa chỉ: Phú Đô, Nam Từ Liêm
// Email: vanlq160803@gmail.com

//  ---------------------------------------
// Câu hỏi 2: Câu hỏi 2: Trong Node.js, làm thế nào để tránh "callback hell" và cải thiện đọc mã nguồn? Nêu ra một số kỹ thuật hoặc thư viện giúp giải quyết vấn đề này.
// Trả lời : Để tránh "callback hell" và cải thiện đọc mã nguồn, có một số kỹ thuật và thư viện có thể sử dụng:
// -Sử dụng Promises
// -Sử dụng Thư viện async/await
// -Tách các Hàm và Modules
// -Sử dụng Arrow Functions

//  ---------------------------------------
// Câu hỏi 3:Câu hỏi 3: Trong Express.js, middleware là gì và tại sao chúng quan trọng trong việc xử lý yêu cầu HTTP?
// Trả lời: Middleware là các hàm chạy tuần tự theo thứ tự khi một yêu cầu HTTP được gửi đến máy chủ. Chúng thường được sử dụng để thực hiện các tác vụ như xác thực, kiểm tra quyền truy cập, xử lý dữ liệu đầu vào, và thêm thông tin vào yêu cầu trước khi chúng được chuyển đến các định tuyến xử lý chính.
// Ví dụ: router.put('/chat/groupadd' , auth, addToGroup) (trong đoạn code này thì 'auth' chính là 1 middleware. nó sẽ được thực hiện trước để kiểm trả xem người dùng đã đăng nhập hay chưa rồi sẽ trả về kết quả để đoạn code có thực hiện tiếp 'addtoGroup' hay không. )

// Câu hỏi 4: Trong Node.js, sự khác biệt giữa biến var, let, và const là gì? Hãy cung cấp ví dụ minh họa về cách mỗi loại biến hoạt động.
// Trả lời: 
// - var: là biến toàn cục có thể được sử dụng ở bất cứ đâu trong file
// - let: là biến cục bộ chỉ sử dụng trong 1 đoạn code 
// - const: giống với let nhưng const không thể thay đổi 
//  Ví dụ: 

// -----------code --------------
function example() {
    if (true) {
        var x = 10;
        let y = 20;
        const z = 30 
        // z = 40 // báo lỗi vì z không thể thay đổi

        console.log(y); // 20
    }
    console.log(x);// 10, vì var có phạm vi hàm
    // console.log(y); // báo lỗi vì biến y chưa tồn tại
    // console.log(z); // báo lỗi vì z chưa tồn tại
}
example(); 
// -----------code --------------

// ----------------------------------------------------------------
// Bài tập



//  Bài tập 1: Bài tập 1: Viết một chương trình Node.js sử dụng module fs để đọc nội dung của một file văn bản có tên là "data.txt" và in nội dung ra màn hình. Sử dụng callback để xử lý việc bất đồng bộ.

// đã khai báo module fs ở trên.
// -----------code --------------
const filePath = 'data.txt';
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('Persional Infomation :', data);
});
// -----------code --------------

// ------------------
// Bài tập 2: Sử dụng module axios, viết một chương trình Node.js để tải nội dung từ một danh sách các URL và in ra màn hình tổng số ký tự của nội dung tải về. Sử dụng Promise để quản lý việc bất đồng bộ.

// -----------code --------------
const urls = ['https://vanlq162003.vercel.app/', 'https://github.com/Vanlq162003'];

function downloadContent(url) {
    return axios.get(url)
        .then(response => response.data)
        .then(content => content.length);
}

Promise.all(urls.map(downloadContent))
    .then(lengths => {
        const totalLength = lengths.reduce((total, length) => total + length, 0);
        console.log('Tổng kí tự:', totalLength);
    })
    .catch(err => {
        console.error('Error:', err);
    });
// -----------code --------------

// Bài tập 3: Sử dụng Express.js, tạo một ứng dụng web đơn giản có một trang chủ hiển thị thông báo "Welcome to our website!" và một trang "About" hiển thị "About us". Sử dụng middleware để ghi lại thời gian mỗi lần có yêu cầu.

// -----------code --------------
const express = require('express');
const app = express();

// Middleware để ghi lại thời gian
app.use((req, res, next) => {
    console.log(`Time: ${new Date().toLocaleTimeString()} - URL: ${req.url}`);
    next();
});

// Route cho trang chủ
app.get('/', (req, res) => {
    res.send('Welcome to our website!');
});

// Route cho trang "About"
app.get('/about', (req, res) => {
    res.send('About us');
});

// Khởi động server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
// -----------code --------------

//  khi truy cập vào (http://localhost:3000/) trên web sẽ hiển thị 'Welcome to our website!'
//  khi truy cập vào (http://localhost:3000/about) trên web sẽ hiển thị 'About us'


// Bài tập 4: Viết một chương trình Node.js để kiểm tra xem một danh sách các số nguyên có phải là số nguyên tố hay không. In ra màn hình danh sách các số nguyên và kết quả tương ứng ("Prime" hoặc "Not Prime").

// Trả lời: 
function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    
    if (number <= 3) {
        return true;
    }
    
    if (number % 2 === 0 || number % 3 === 0) {
        return false;
    }
    
    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) {
            return false;
        }
    }
    
    return true;
}

const numbers = [2, 3, , 4, 5, 7, 9]; // Đổi danh sách số nguyên tùy ý

numbers.forEach(number => {
    const result = isPrime(number) ? 'Prime' : 'Not Prime';
    console.log(`${number}: ${result}`);
});













