$("#header").load("data/header.php",function(){
    $("#header").on('mouseenter',".input_box button",function(e){
        e.preventDefault();
        $(this).parent().parent().addClass("hover");
        //$(this).prev().addClass("hover");
        $(this).addClass("hover");
    });

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
  $("#header-des").click(function(){
  	loaction.href="wei.html";
  })
});
$("#footer").load("data/footer.php");






(()=>{
	//轮播图生成
  var $bannerImg=$("[data-load=bannerImg]");
  var n=0,TRAN=200,INTERVAL=2000,timer=null,WIDTH=0;
  $.get("data/index/banner.php").then(data=>{
	 // console.log(data);
	data.push(data[0]);
	var html = "";
	for(var b of data){
	  html +=`<li class="banner_img" >
		 <a href="wait.html"><img src="${b.img_1}"></a>
		 <div class="title_name">
			<div class="title_n">
				<span class="number"><i>${b.bid}</i>/<em>5</em></span>
				<a href="#">
				<p class="title_banner"><h3>${b.title}</h3></p>
				<p class="title_banner">${b.uname}</p>
				</a>
			</div>
		  </div>
		</li>`;
	}
	$bannerImg.html(html);
    WIDTH= parseInt($("body").css("width"));
	//console.log($("body").css("width"));
    $bannerImg.css("width",data.length*WIDTH);
	$("#banner>li>a>img").css("width",WIDTH);
  }).then(()=>{
	//var WIDTH= parseInt($("body").css("width"));
    function move(){
	  n++;
	  left = n*WIDTH;
	  $bannerImg.css("left",-left);
	  if(n==$bannerImg.children().length-1){
	    setTimeout(function(){
			$bannerImg.css("transition","");
			$bannerImg.css("left",0);
			n=0;
			setTimeout(function(){
			  $bannerImg.css("transition","all .6s ease-in-out");
			},100);
			},
		TRAN+200);
	  }
	} 
	timer=setInterval(move,INTERVAL+TRAN);
    $bannerImg.parent().mouseover(
	  function(){
	  clearInterval(timer);
	  timer=null;
	})
	.mouseleave(function(){
	  timer=setInterval(move,INTERVAL+TRAN);}
	)
	$("[data-move=left]").click(function(e){
	    //e.preventDefault();
		if(n>0){
          n--;
		  $bannerImg.css("transition","all .6s ease-in-uot");
          $bannerImg.css('left',-n*WIDTH);
        }else{
          $bannerImg.css("transition","");
          n=$bannerImg.children().length-1;
          $bannerImg.css('left',-n*WIDTH);
          setTimeout(()=>{
			$bannerImg.css("transition","all .6s ease-in-uot");
			  n--;
			 //console.log(n);
            $bannerImg.css('left',-n*WIDTH);
          },500)
        }
	})
	$("[data-move=right]").click(function(e){
	  e.preventDefault();
	  n++;
	  $bannerImg.css("transition","all .6s ease-in-uot");
      $bannerImg.css('left',-n*WIDTH);
	  if(n==$bannerImg.children().length-1){
	    clearInterval();
        setTimeout(function(e){
		  $bannerImg.css("transition","");
		  n=0;
          $bannerImg.css('left',-n*WIDTH);
		  setTimeout(function(){
		    $bannerImg.css("transition","all .6s ease-in-uot");
		  },100)
		}
		,TRAN);
	  }
	})
  })
})();

//搜索框
  $(".my-tabs:has([data-toggle=tab])").on("click","[data-toggle=tab]",function(){
  	var self = $(this);
  	if(!self.children().hasClass("search-color")){
        self.children().addClass("search-color");
        self.parent().siblings().children().children().removeClass("search-color");
	  var c =self.parent().index();
	  console.log(self);
  	   //console.log(c);
	  $(".search_form").children().eq(c).removeClass("search-none")
		  .siblings().addClass("search-none");
  	}
  });

//底部的q_planing
$(".tabs").on("mouseenter","a",e=>{
  var that=$(e.target);
  var i = that.parent().index();
  $(".play_content>div:eq("+i+")").addClass("active")
	  .siblings().removeClass("active");
});
// $(".tabs:has([data-toggle=tab])")
//    .on("click","[data-toggle=tab]",e=>{
//      var $tar=$(e.target);
//      if(!$tar.parent().is(".active")){
//        $tar.parent().addClass("active")
//          .siblings().removeClass("active");
//        var id=$tar.attr("href");
//        $(id).addClass("active")
//          .siblings().removeClass("active");
//      }
//  })
//}
