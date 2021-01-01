// 表示画面
var result = document.getElementById("result"); 

// 計算
function edit(e) {
result.value = result.value + e.value;
}

// 答えを表示
function calc() {
result.value = new Function("return " + result.value)();
}

// 画面リセット
function reset() {
result.value = '';
}
