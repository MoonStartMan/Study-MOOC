var pageIndex = 1;  //  当前是第几页

function next() {

    if(pageIndex == 6) {
        return;
    }
    var curPage = document.getElementById("page"+pageIndex);
    curPage.style.webkitTransform = "rotateX(-90deg)";
    curPage.style.transform = "rotateX(-90deg)";
    curPage.style.opacity = "0";
    pageIndex ++;
    var nextPage = document.getElementById("page"+pageIndex);
    nextPage.style.webkitTransform = "rotateX(0deg)";
    nextPage.style.transform = "rotateX(0deg)";
    nextPage.style.opacity = "1";
}


function prev() {
    if(pageIndex == 1) {
        return;
    }
    var curPage = document.getElementById("page"+pageIndex);
    curPage.style.webkitTransform = "rotateX(90deg)";
    curPage.style.transform = "rotateX(90deg)";
    curPage.style.opacity = "0";
    pageIndex --;
    var prevPage = document.getElementById("page"+pageIndex);
    prevPage.style.webkitTransform = "rotateX(0deg)";
    prevPage.style.transform = "rotateX(0deg)";
    prevPage.style.opacity = "1";
}


document.getElementById("next").onclick = function() {
    next();
    return;
}

document.getElementById("prev").onclick = function() {
    prev();
    return;
}