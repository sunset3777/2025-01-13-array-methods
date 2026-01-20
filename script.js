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
// 是否改變原陣列（mutate）：是
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

revary = ["中文書","英文書","日文書"]
console.log(revary.reverse())

//第十一種:indexOf
//=============
// 關鍵字（一句話說明）：檢查陣列中是否有某個元素，並列印到該元素為止的陣列長度
// 是否改變原陣列（mutate）：否
// 參數說明 : 1 或以上
// 回傳值: 索引值
//=============
console.log(ary.indexOf("英文書"))
console.log(ary)

//第十二種: lastIndexOf
//=============
// 關鍵字（一句話說明）：檢查陣列中最後出現的某元素
// 是否改變原陣列（mutate）：否
// 參數說明 : 1 或以上
// 回傳值: 索引值
//=============

repeatary = ["中文書","英文書","日文書","英文書","日文書","中文書","英文書",]
console.log(repeatary.lastIndexOf("中文書"))

//第十三種: length
//=============
// 關鍵字（一句話說明）：列出陣列長度
// 是否改變原陣列（mutate）：否
// 參數說明 : 無
// 回傳值: 陣列長度
//=============

console.log(ary.length)

//第十四種: some
//=============
// 關鍵字（一句話說明）：檢查陣列有其中一個元素
// 是否改變原陣列（mutate）：否
// 參數說明 : 無
// 回傳值: boolean
//=============

console.log(ary.some(function(val){
    return val == "日文書"
})
)

//第十五種: every
//=============
// 關鍵字（一句話說明）：檢查陣列是否都是同一元素
// 是否改變原陣列（mutate）：否
// 參數說明 : 無
// 回傳值: boolean
//=============

let sameary = ["中文書","中文書","中文書","中文書"]

console.log(ary.every(function(val){
    return val == "日文書"
})
)

console.log(sameary.every(function(val){
    return val == "中文書"
})
)

//第十六種: forEach
//=============
// 關鍵字（一句話說明）：把陣列每個元素都傳出一次
// 是否改變原陣列（mutate）：否
// 參數說明 : 3 當下的值，索引數，陣列
// 回傳值: boolean
//=============

ary.forEach(function(val, i){
    return console.log (i, val)
})
console.log(ary);

//第十七種: map
//=============
// 關鍵字（一句話說明）：可以再不改變原陣列的情況回傳一個新陣列
// 是否改變原陣列（mutate）：否
// 參數說明 : callback函式
// 回傳值: 陣列
//=============

let book = ["中文書","英文書","日文書"]
let prices = [100, 200, 300];

let bookprices=ary.map((val, i) => {
    return val + "=" + prices[i] + "元";
});

console.log(bookprices)

//第十八種: filter
//=============
// 關鍵字（一句話說明）：挑出陣列內的幾個元素變成另外一個陣列
// 是否改變原陣列（mutate）：否
// 參數說明 : callback函式
// 回傳值: 陣列
//=============

let result = book.map((val, i) => {
    if (prices[i] < 250) {
        return val + "=" + prices[i] + "元";
    }
    return null;
}).filter(item => item !== null);

console.log(result);

//第十九種: slice
//=============
// 關鍵字（一句話說明）：挑出陣列內的幾個元素變成另外一個陣列
// 是否改變原陣列（mutate）：否
// 參數說明 : 2 ,開始索引數，結束索引數
// 回傳值: 陣列
//=============

console.log(repeatary.slice(3,6))

//第二十種: concat
//=============
// 關鍵字（一句話說明）：在原有陣列後面加上一段陣列變成新的陣列
// 是否改變原陣列（mutate）：否
// 參數說明 : 1個或以上要新增的陣列
// 回傳值: 合併後的新陣列
//=============

console.log(ary.concat(["法文書","德文書"]))