//  获取时间
function getTime() {
    var time = new Date();
    var year = time.getFullYear();
    var month = time.getMonth()+1;
    var day = time.getDate();
    var hour = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    var timeArr = year + "-" + add0(month) + "-" + add0(day) + "  " +add0(hour) + ":" + add0(min) + ":" + add0(sec);
    return timeArr
}

function add0(time) {
    time >=10 ? time : "0" + time;
    return time;
}

function add() {
    var $val = $("textarea").val();
    $(".container").append(
        `
        <div class="content">
            <div class="text">${$val}</div>
            <div class="time">${getTime()}</div>
            <div class="remove">删除</div>
        </div>
        `
    )
}

$("button").click(function(){
    add();
})

$(document).on('click','.remove',function(){
    $(this).parents(".content").remove();
})