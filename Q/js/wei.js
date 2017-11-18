/**
 * Created by LENOVO on 2017/11/4.
 */
$("#header").load("data/header.php",function(){
    $("#header").on('mouseenter',".input_box button",function(e){
        e.preventDefault();
        $(this).parent().parent().addClass("hover");
        //$(this).prev().addClass("hover");
        $(this).addClass("hover");
    });
    //登录时
    var un = sessionStorage.getItem("uname");
    if(un){
        console.log(un);
        $("#login").parent().html(`<a href='#'>欢迎回来_${un}</a>&nbsp;<a class="out">退出</a>`);

        //点击退出时
        $(".out").click(function () {
            sessionStorage['uname']='';
            $("#login").parent().replaceWith(`<a href='login.html'>登录</a>`);
            location.reload();
            console.log(22);
        })
    }
});
$("#footer").load("data/footer.php");

$(".about-img>span").mousemove(function(){
    console.log(1);
   $(this).prev().children().first().show();
    $(this).prev().children().last().hide();
});

//热门城市推荐
$("ul[data-toggle=city]").on("mousemove","li",function(){
    var $this = $(this);
    var li = $this.index();
    $this.addClass("hover").siblings().removeClass("hover");
   // console.log(li);
    $(".city-cards").children().eq(li).removeClass("active")
        .siblings().addClass("active");
});
//目的地
$("ul[data-toggle=des]").on("mousemove","li",function(){
    var $this=$(this);
    var li = $this.index();
    console.log(li);
    $this.addClass("hover").siblings().removeClass("hover");
    $("[data-des=des]").children().eq(li).removeClass("active")
        .siblings().addClass("active");
});