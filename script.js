let ary = ["中文書","英文書","日文書"]

//=============
//第一種:shift
//=============
// 關鍵字（一句話說明）：移除陣列第一個值
// 是否改變原陣列（mutate）：是
// 參數說明 : 0 不需要傳入參數
// 回傳值：被取出的元素
//=============
console.log(ary.shift());
console.log(ary);
//=============
//第二種:unshift
//=============
// 關鍵字（一句話說明）：新增陣列第一個值
// 是否改變原陣列（mutate）：是
// 參數說明 : 1或以上
// 回傳值：陣列長度
//=============
console.log(ary.unshift("中文書"));
console.log(ary);
//=============
//第三種:pop
//=============
// 關鍵字（一句話說明）：取出陣列最後一個值
// 是否改變原陣列（mutate）：是
// 參數說明 : 0 不需要傳入參數
// 回傳值：被取出的元素
//=============
console.log(ary.pop());
console.log(ary);
//=============
//第四種:push
//=============
// 關鍵字（一句話說明）：新增陣列最後一個值
// 是否改變原陣列（mutate）：是
// 參數說明 : 1或以上 陣列長度
// 回傳值: 陣列長度
//=============
console.log(ary.push("日文書"));
console.log(ary);
//=============
//第五種:splice
//=============
// 關鍵字（一句話說明）：取出陣列特定一個值
// 是否改變原陣列（mutate）：是
// 參數說明 : 至少 1 個 (起始位置)。通常用 2 個 (位置, 數量) 或 3 個以上 (位置, 數量, 要插入的新元素)
// 回傳值: 包含被刪除元素的陣列
//=============
console.log(ary.splice(1, 1))//取第二個 沒使用deletecount會一直取到最後一個
console.log(ary);
//splice 新增元素用法
console.log(ary.splice(1, 0, "英文書"))
console.log(ary);
//=============
//第六種:join
//=============
// 關鍵字（一句話說明）：將陣列轉成字串
// 是否改變原陣列（mutate）：否
// 參數說明 : 1 指定要用甚麼符號連結字串(toString預設為逗號)
// 回傳值: 字串
//=============
console.log(ary.join("|"))
console.log(ary)
//=============
//第七種:reduce
//=============
// 關鍵字（一句話說明）：將陣列做累加輸出成字串
// 是否改變原陣列（mutate）：否
// 參數說明 : 2 Callback 函式 和 初始值
// 回傳值: 字串
//=============
console.log(ary.reduce(function(prev,next){
    return prev + "跟" + next
})
)

let arynum = [1,2,3,4,5,6,7,8,9,10]

console.log(arynum.reduce(function(prev,next){
    return prev + next
},0)

)//陣列數字的話，會列印出數字加總

//=============
//第八種:reduceRight
//=============
// 關鍵字（一句話說明）：將陣列做累加輸出成字串(右到左)
// 是否改變原陣列（mutate）：否
// 參數說明 : 1 Callback 函式
// 回傳值: 字串
//=============

console.log(ary.reduceRight(function(prev,next){
    return prev + "跟" + next
})
)

//=============
//第九種: sort
//=============
// 關鍵字（一句話說明）：將陣列做排序
// 是否改變原陣列（mutate）：否
// 參數說明 : 0 或新增一個 callback 函式
// 回傳值: 陣列
//=============
console.log(ary.sort())

let randonum = [1,7,3,4,16,8]

console.log(randonum.sort(function(a, b){
    return a > b ? 1 : -1
})
)//如果是以數字為陣列 加上callback 函式可以從小到大排列

//第十種:reverse
//=============
// 關鍵字（一句話說明）：將陣列順序倒反
// 是否改變原陣列（mutate）：是
// 參數說明 : 無
// 回傳值: 陣列
//=============
console.log(ary.revwese())
console.log(ary)