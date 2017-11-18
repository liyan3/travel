/**
 * Created by web-01 on 2017/10/26.
 */

//验证
(()=> {
    var result = false;
	var up=0,un=0,ph=0;
    $("#phone").blur(e => {
        vali($(e.target), "data/register/vali.php", "手机号")
    });

    function vali($txt, url, err) {
        var span = $txt.next().children();
        var tet = $txt.val();
        if (tet == "") {
            $txt.addClass("error");
            span.text(err + "不能让为空");
            result = false;
			ph=0;
			un=0;
        } else {
            $.post(url, $txt.attr("name") + "=" + $txt.val()).then(data => {
                console.log(data);
                if (data == "true") {
                    $txt.removeClass("error");
                    span.text("");
                    result = true;
					ph=1;un=1;
                } else {
                    $txt.addClass("error");
                    span.text(err + "已存在");
                    result = false;
					ph=0;un=0;
                }
            })
        }
    }

    $("#uname").blur(e => {
        //vali($(e.target),"data/register/vali.php","用户名");
        var uname = $(e.target).val();
        var unameReg =uname.length;
        if (unameReg<2) {
            $(e.target).next().children().text("用户名由2~12位中英文、数字和下划线组成");
            un=0;
        } else {
            $(e.target).next().children().text("");
            un=1;
        }
    });
    function checkPwd() {
        var $upwd = $("#upwd1"),
            $upwd2 = $("#upwd2"),
            $span = $upwd2.next().children();
        if ($upwd.val() != $upwd2.val()) {
            $upwd.addClass("error");
            $span.text("两次输入的密码不一致!");
            result = false;
        } else {
            $upwd.removeClass("error");
            $span.text("");
            result = true;
        }
    }

    $("#upwd1").blur((e) => {
        var that = $(e.target);
        if (!that.val()) {
            that.next().children().text("请输入密码");
            result = false;up=0;
        } else {
            var upwdReg = /^[a-zA-Z0-9]{6,14}$/;
            if (!upwdReg.test(that.val())) {
                that.next().children().text("支持数字大小写字母,和标点符号，不允许有空格");
                result = false;up=0;
            } else {
                that.next().children().text("");
                result = true;
				up=1;
            }
        }
    });
    $("#upwd2").blur(checkPwd);

    $("#login-btn").click(function (e) {
       // console.log(result);
        e.preventDefault();
        var uname = $("#uname").val();
        var phone = $("#phone").val();
        var upwd = $("#upwd1").val();
        if(result&&un==1&&up==1&&ph==1){
			console.log(result);
            $(".button-error").text("");
            $.ajax({
                type: "POST",
                url: "data/register/register.php",
                data: {uname: uname, phone: phone, upwd: upwd},
                success: function (data) {
                    console.log(typeof data);
                    if (data.code > 0) {
                        //console.log(1);
                        $("#login-btn").html("注册成功,请前往登录");
                        location.href="login.html";
                    }
                },
                error: function () {
                    alert("网络故障");
                }
            });
       }else{
            $(".button-error").text("哎呀是不是忘了啥");
        }
    })
})();