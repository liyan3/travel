//登录确认

var checkUtext=0;
var checkPtext=0;
var unameErr=$(".name-err"),upwdErr=$(".pwd-err");

$("#uname").blur(function(e){
	var uname = $(this).val();
	//console.log(uname);
  if(uname==""){
    unameErr.text("！ 请输入邮箱/手机号/用户名");
    checkUtext=0;
  }else{
    unameErr.text("");
    checkUtext=1;
  }
})
$("#upwd").blur(function(e){
	var upwd = $(this).val();
	//console.log(upwd);
  if(upwd==""){
    upwdErr.text("！ 请输入登录密码");
    checkPtext=0;
  }else{
    upwdErr.text("");
    checkPtext=1;
  }
})

$("#login-btn").click(function(e){
  e.preventDefault();
  if( checkUtext==1&&checkPtext==1){
        var n=$("#uname").val();
        var p=$("#upwd").val();
        $.ajax({
            type:"GET",
            url:"data/login/login.php",
            data:{uname:n,upwd:p},
            success:function (data) {
                //console.log(typeof data);
                if(data.code>0){
                    console.log(n);
                   sessionStorage.setItem("uname",n);
                   sessionStorage.setItem("uid",data.uid);
                    $("#login-btn").text("登陆中...");
					location.href="index.html";
                }else if(data.code<0){
				  upwdErr.text("用户名或密码错误");	
				}
            },
            error:function () {
                alert("网络故障，请检查");
            }
        })
    }else{
	  upwdErr.text("请输入正确的用户名或密码");	
	}
})