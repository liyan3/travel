/**
 * Created by web-01 on 2017/11/9.
 */
$("#header").load("data/header.php",function(){
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
  }
);
$("#footer").load("data/footer.php");