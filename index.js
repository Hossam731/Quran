let imageBox = document.getElementById("imagebox")
let next = document.querySelector(".next")
let previous = document.querySelector(".previous")
pagenum = 1
function nextPage() {
    next.addEventListener("click", function () {
        pagenum++
        setImage(pagenum)
        if (pagenum > 605) {
            pagenum = -1
        }



    })
} function previousPage() {

    previous.addEventListener("click", function () {
        --pagenum
        setImage(pagenum)
        if (pagenum <= 1) {
            pagenum = 1
            pagenum++
        }
    })

}
// search by page num 
let searchBtn = document.getElementById("btn")

searchBtn.addEventListener("click", function () {

    let searchInp = document.getElementById("search-inp")
    pagenum = +searchInp.value
    if (pagenum > 605) {
        alert("max value 604")
    }
    else {
        setImage(pagenum + 1)
    }

})




// اختيار الجزء 
gozaa = {
    1: 1,
    2: 23,
    3: 43,
    4: 63,
    5: 83,
    6: 103,
    7: 123,
    8: 143,
    9: 163,
    10: 183,
    11: 203,
    12: 223,
    13: 243,
    14: 263,
    15: 283,
    16: 303,
    17: 323,
    18: 343,
    19: 363,
    20: 383,
    21: 403,
    22: 423,
    23: 443,
    24: 463,
    25: 483,
    26: 503,
    27: 523,
    28: 543,
    29: 563,
    30: 583
}
let searchByGozaNum = document.getElementById("select")
for (i = 1; i <= 30; i++) {
    searchByGozaNum.innerHTML += `<option value="${i}">الجزء رقم ${i} </option>`

}
searchByGozaNum.onchange = function () {
    pagenum = gozaa[searchByGozaNum.value]
    setImage(pagenum)

}


function setImage(pagenum) {
    imageBox.src = `https://cdn.qurango.net/Sura2/files/mobile/${pagenum}.jpg`

}
nextPage()
previousPage()