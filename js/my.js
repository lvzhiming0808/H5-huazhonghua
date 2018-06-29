var istouch = false;
//第1/2页的比例
var k0 = 750 / 44;
//第2/3页的比例
var k1 = 750 / 56;
//第3/4页的比例
var k2 = 750 / 1;
//第4/5页的比例
var k3 = 750 / 1;
var stime = 2000;//  缩放时间【如果长按时为gif图   动画缩放时间为1ms  如果长按时为jpg图   动画缩放时间为2000ms】
//第2页缩小  第3页显示
function page3() {
    $(".page1 .font_1").hide();
    $(".page1 .img_2").animate({ //第2页动效
        "width": 0.56 + "rem",
        "top": 6.45 + "rem",
        "left": 6.53 + "rem"
    }, stime, function () {
      //  console.log("第三页动效完成");
        thirdEnd();
    });
    $(".page1 .img_1").css({//把第1张图片改成第3张，第2张不变
        "width": 7.5 * k1 + "rem",
        "top": -6.45 * k1 + "rem",
        "left": -6.53 * k1 + "rem",
        "z-index": 1
    }).attr("src", "images/3.jpg").animate({ //第3页动效
        "width": 7.5 + "rem",
        "top": 0 + "rem",
        "left": 0 + "rem"
    }, stime)
}
//第二页结束后执行的函数
function towEnd() {
    $(".page1 .img_2").attr("src", "images/2.gif");//播放第2页gif
    $(".page1 .font_1 ").attr("src", "images/font_2.png").css({//第2页文字动效
        "width": 1.65 + "rem",
        "top": 0.78 + "rem",
        "left": 4.83 + "rem"
    }).fadeIn(2000);
    setTimeout(function () {
        $(".page1 .img_2").css({
            "z-index": 2
        })
    }, 2000);
    setTimeout(page3, 4000);
}
//第3页缩小  第4页显示
function page4() {
    $(".page1 .font_1").hide();
    $(".page1 .img_1").stop().animate({ //第2页动效
        "width": 0.27 + "rem",
        "top": 9.68 + "rem",
        "left": 1.88 + "rem",
        "opacity": 0,
        "z-index": 0
    }, stime, function () {
        fourthEnd()
    });
    $(".page1 .img_2").css({//把第2张图片改成第4张，第2张不变
        "width": 7.5 * k2 + "rem",
        "top": -9.68 * k2 + "rem",
        "left": -1.88 * k2 + "rem",
        "z-index": "1"
    }).attr("src", "images/4.jpg").stop().animate({ //第4页动效
        "width": 7.5 + "rem",
        "top": 0 + "rem",
        "left": 0 + "rem"
    }, stime)
}
//第3页结束后执行的函数
function thirdEnd() {
    $(".page1 .img_1").attr("src", "images/3.gif");//播放第3页gif
    setTimeout(function () {
        $(".page1 .font_1 ").attr("src", "images/font_3.png").css({//第3页文字动效
            "width": 1.39 + "rem",
            "top": 0.54 + "rem",
            "left": 4.72 + "rem"
        }).fadeIn(2000);
    }, 1000);
    setTimeout(page4, 4000);
    //第三页缩小  第四页显示
}
//第4页缩小  第5页显示
function page5() {
    $(".page1 .font_1").hide();
    $(".page1 .img_2").stop().animate({ //第4页动效
        "width": 0.27 + "rem",
        "top": 6.7 + "rem",
        "left": 6 + "rem",
        "opacity": 0,
        "z-index": "3"
    }, stime, function () {
        fiveEnd()
    });
    $(".page1 .img_1").css({//把第3张图片改成第5张，第4张不变
        "width": 7.5 * k3 + "rem",
        "top": -6.7 * k3 + "rem",
        "left": -6 * k3 + "rem",
        "opacity": 1
    }).attr("src", "images/5.jpg").stop().animate({ //第4页动效
        "width": 7.5 + "rem",
        "top": 0 + "rem",
        "left": 0 + "rem"
    }, stime)
}
//第4页结束后执行的函数
function fourthEnd() {
    $(".page1 .img_2").attr("src", "images/4.gif");//播放第4页gif
    setTimeout(function () {
        $(".page1 .font_1 ").attr("src", "images/font_4.png").css({//第4页文字动效
            "width": 1.92 + "rem",
            "top": 1.14 + "rem",
            "left": 4.4 + "rem"
        }).fadeIn(2000);
    }, 1000);
    setTimeout(page5, 4000)
}

function page6() {
    $(".page1 .font_1").hide();
    $(".book_left").show()
    $(".page1 .img_1").stop().animate({ //第4页动效
        "width": 6.84 + "rem",
        "top": 0.58 + "rem",
        "left": 0.50 + "rem",
        "height":"89%",
        "z-index": "5"
    }, stime, function () {
        $(".font_6").fadeIn();
        $(".hand_pic").show();
        var el = document.getElementById('box');
        var startx, starty;
//获得角度
        function getAngle(angx, angy) {
            return Math.atan2(angy, angx) * 180 / Math.PI;
        };

//根据起点终点返回方向 1向上 2向下 3向左 4向右 0未滑动
        function getDirection(startx, starty, endx, endy) {
            var angx = endx - startx;
            var angy = endy - starty;
            var result = 0;

            //如果滑动距离太短
            if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
                return result;
            }

            var angle = getAngle(angx, angy);
            if (angle >= -135 && angle <= -45) {
                result = 1;
            } else if (angle > 45 && angle < 135) {
                result = 2;
            } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
                result = 3;
            } else if (angle >= -45 && angle <= 45) {
                result = 4;
            }

            return result;
        }

//手指接触屏幕
        el.addEventListener("touchstart", function (e) {
            startx = e.touches[0].pageX;
            starty = e.touches[0].pageY;
        }, false);
//手指离开屏幕
        el.addEventListener("touchend", function (e) {
            var endx, endy;
            endx = e.changedTouches[0].pageX;
            endy = e.changedTouches[0].pageY;
            var direction = getDirection(startx, starty, endx, endy);
            switch (direction) {
                case 0:
                    //    alert("未滑动！");
                    break;
                case 1:
                    //   alert("向上！")
                    break;
                case 2:
                    //   alert("向下！")
                    break;
                case 3:
                    // alert("向左！");
                    $(el).addClass("book_ani");
                    break;
                case 4:
                    //   alert("向右！")
                    break;
                default:
            }
        }, false);
        //   $(".pip_warp").hide();
        //  $(".book_box").show();
    });
    $(".page1").css({"background-image": " url('images/book_bd.jpg')"});

}
function fiveEnd() {
    $(".page1 .img_1").attr("src", "images/5.gif");//播放第5页gif
    setTimeout(function () {
        $(".page1 .font_1 ").attr("src", "images/font_5.png").css({//第5页文字动效
            "width": 2.66 + "rem",
            "top": 5.25 + "rem",
            "left": 2.5 + "rem"
        }).fadeIn(2000);
    }, 1000);
    setTimeout(page6, 4000)
}
$(".btn_box").on("click", function () {
    $(this).hide();
    $(".page1 .font_1").hide();//隐藏文字
    $(".page1 .img_2").animate({"width": 7.5 + "rem", "top": 0 + "rem", "left": 0 + "rem"}, stime,//第2页动效
        function () {
           // console.log("第2页动效执行");
            towEnd();
        });
    $(".page1 .img_1").animate({"width": 0.44 + "rem", "top": 4.17 + "rem", "left": 1.14 + "rem"}, stime);//第1页动效
});
$(function () {
    setTimeout(function () {
        $(".loading").hide();
        $(".book_box").show();
        $("#audio_btn").show();
        $(".img_2").css({"width": 7.5 * k0 + "rem", "top": -4.17 * k0 + "rem", "left": -1.14 * k0 + "rem"});
    }, 3500);
    setTimeout(function () {
        $(".page1 .font_1").fadeIn(2000);
    }, 4000)
});
//安卓禁止长按弹出
$('.btn_box').bind('contextmenu', function (e) {
    e.preventDefault();
});
/*播放，停止按钮*/
$('.off').on("click", function () {
    if ($('#media')[0].paused) {
        $('#media')[0].play();
        $("#audio_btn").addClass("rotate");
        $("#audio_btn").css("background-image", "url(images/music.png) ")
    } else {
        $('#media')[0].pause();
        $("#audio_btn").removeClass("rotate")
        $("#audio_btn").css("background-image", "url(images/music_1.png) ")
    }
})
