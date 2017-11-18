(()=>{
	function topicPage(start){
	  //console.log(1);
	  $.get("data/index/topic.php?start="+start).then(data=>{
		//console.log(data);
		var html="";
		for(var t of data){
		  //console.log(t.tid);
			html +=`
		   <li>
			<div class="item" title="${t.t_title}">
				<div class="topic_img">
					 <img src="${t.t_img}">
				</div>
				<div class="topic_title">
					<div class="avatar">
						<a href="wait.html">
						  <img src="${t.avater}">
						</a>
						<span><a href="wait.html" class="f14">${t.uname}</a></span>
					</div>
					<a href="wait.html" target="_blank">
						${t.t_title}
					</a>
				</div>
			</div>	
			</li>`;
		}
		$("#topic_u1").html(html);
	   })
	}
  topicPage(0);
  $("#topic_page").on("mouseover","li",e=>{
    var that = $(e.target);
	var i=that.index();
	that.addClass("active").siblings().removeClass("active");
	var start=i*8;
    console.log(start);
    topicPage(start);
  })
})();

//////商城的数据加载 shopping
(()=>{
  function shopPage(sp){
    $.get("data/index/shopping.php?sp="+sp).then((data)=>{
	  var html="";
	  console.log(data);
	  for(var s of data){
	    html +=`
		  <li>
			 <div class="buytoday">
				<h3>${s.classify}</h3>
				<div class="buytoday_cont">
				<div class="buytodat_img">
					<a href="wait.html"><img src="${s.img}"></a>
				</div>
                 <div class="buytitle">
					 <p>${s.title}</p>
				</div>
                <div class="buyprice">
					<span>${s.price}</span><span>元起</span><a href="wait.html" class="f14">立即抢购</a>
				</div>
				</div>
				<div class="buygo">
					<a href="#">更多低价： [暑期][国庆]深圳直飞暹粒5-6日自由行</a>
				</div>
			</div>
		</li>			 
		`;
	  }
      $("#shop_ul").html(html);
	})
  }
 shopPage(0);
 $("#shop_diamonds").on("mouseover","li",e=>{
	    var that = $(e.target);
		var index=that.index();
		that.addClass("run").siblings().removeClass("run");
		var sp=index*3;
		console.log(sp);
		shopPage(sp);

	})
		
})()