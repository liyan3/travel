SET NAMES UTF8;
DROP DATABASE IF EXISTS travel;
CREATE DATABASE travel CHARSET=UTF8;
USE travel;
CREATE TABLE q_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(16),
  upwd VARCHAR(20),
  phone VARCHAR(16),
  gender VARCHAR(1),
  email VARCHAR(16),
  avater VARCHAR(64)
);
INSERT INTO q_user VALUES
(null,'裏YuHiro','123456','13678901234','男','Yuhiro@163.cn','avater/uname1.jpg'),
(null,'laohai1991','123457','18234567890','女','laohai@163.cn','avater/uname2.jpg'),
(null,'hellenpxh','123458','18234567890','女','laohai@163.cn','avater/uname3.jpg'),
(null,'小神经','123459','18234567890','男','huhu@163.cn','avater/uname4.jpg'),
(null,'aero4400','123450','18234567890','女','aero4400@163.cn','avater/uname5.jpg'),
(null,'laohai1991','123457','18234567890','女','laohai@163.cn','avater/uname6.jpg'),
(null,'啤啤女','123457','18234567890','女','laohai@163.cn','avater/uname7.jpg'),
(null,'yukiqueen','123457','18234567890','女','laohai@163.cn','avater/uname8.jpg'),
(null,'Miss谷-美丽心情','123457','18234567890','女','laohai@163.cn','avater/uname9.jpg'),
(null,'月月的旅行世界','123457','18234567890','女','laohai@163.cn','avater/uname10.jpg'),
(null,'敏华爱美丽','123457','18234567890','女','laohai@163.cn','avater/uname10.jpg'),
(null,'Barry路鹏宇','123457','18234567890','女','laohai@163.cn','avater/uname10.jpg'),
(null,'RollingWheat','123457','18234567890','女','laohai@163.cn','avater/uname10.jpg'),
(null,'从广角到长焦','123457','18234567890','女','laohai@163.cn','avater/uname10.jpg'),
(null,'JeffWang1983','123457','18234567890','女','laohai@163.cn','avater/uname10.jpg'),
(null,'张花花老师','123457','18234567890','女','laohai@163.cn','avater/uname10.jpg'),
(null,'冰冰熊_icebear','123457','18234567890','女','laohai@163.cn','avater/uname10.jpg'),
(null,'扎扎NovotnyJin','123457','18234567890','女','laohai@163.cn','avater/uname10.jpg'),
(null,'老扬','123457','18234567890','女','laohai@163.cn','avater/uname10.jpg');


#头部大图
CREATE TABLE q_banner(
  bid INT PRIMARY KEY AUTO_INCREMENT, 
  img_1 VARCHAR(64),
  title VARCHAR(64),
  uname VARCHAR(16),
  href VARCHAR(64)
);
INSERT INTO q_banner VALUES
(null,'img/banner/banner1.jpg','【台湾游记攻略】皋月◆浅尝辄止的台湾11日◆','裏YuHiro','http://bbs.qyer.com/thread-2793939-1.html'),
(null,'img/banner/banner2.jpg','【塞尔维亚游记攻略】750公里，7座修道院，我们与塞尔维亚的中世纪湿壁画单独呆了3天','小神经','http://bbs.qyer.com/thread-2808020-1.html'),
(null,'img/banner/banner3.jpg','穷游锦囊 | 贝加尔湖','“我们流连忘返，在贝加尔湖畔”','http://guide.qyer.com/lake-baikal/'),
(null,'img/banner/banner4.jpg','美丽的峡湾，无尽的白昼，2017初夏自驾挪威','hellenpxh','http://bbs.qyer.com/thread-2793939-1.html'),
(null,'img/banner/banner5.jpg','【AERO4400】徜徉加拿大落基山脉（加国150年庆典、班夫自驾、卡尔加里牛仔节）','aero4400','http://bbs.qyer.com/thread-2793939-1.html');
#广告
CREATE TABLE q_ad(
  aid INT PRIMARY KEY AUTO_INCREMENT,
  ad_img VARCHAR(64)
);

#猜你感兴趣的
CREATE TABLE q_interest(
  iid INT PRIMARY KEY AUTO_INCREMENT,
  img_2 VARCHAR(64),
  introduce VARCHAR(128),
  uname VARCHAR(20)
);
INSERT INTO q_interest VALUES
(null,'img/interest/interest3','够南非！（非洲之傲火车，顶级营地SABI SABI猎游，索韦托贫民窟，和谐美好开普敦）','啤啤女');

#商城
CREATE TABLE q_shopping(
  sid INT PRIMARY KEY AUTO_INCREMENT, 
  img VARCHAR(64),
  #local_beauty VARCHAR(20),#景点特色
  title VARCHAR(100),
  price INT,
  classify VARCHAR(6)
);
INSERT INTO q_shopping VALUES
(null,'img/shopping/shopping1.jpg','[国庆]长沙直飞洛杉矶10天/13天/14天往返含税机票(可配全国联运)',2599,'机票'),
(null,'img/shopping/shopping2.jpg','[可用券]上海/南京/杭州直飞巴厘岛5-6天往返含税机票
',599,'机票'),
(null,'img/shopping/shopping3.jpg','[可用券]美国个人旅游签证(全国受理,可加急办理,EVUS更新,顺丰包回邮)',1180,'签证'),
(null,'img/shopping/shopping4.jpg','[可用券]加拿大个人旅游签证(全国收取)',890,'签证'),
(null,'img/shopping/shopping5.jpg','[可用券]【上海领区,拒签全退】日本个人旅游签证(单次/多次可选;送1日Wi-Fi)',38,'签证'),
(null,'img/shopping/shopping6.jpg','[可用券]申根16国个人旅游签证(全国受理)',780,'签证'),
(null,'img/shopping/shopping7.jpg','[国庆]上海直飞台北/高雄单程含税机票(可自由搭配回程票)',350,'机票'),
(null,'img/shopping/shopping8.jpg','[可用券]【北京领区,限量抢购】日本个人旅游签证(单次/多次/简化办理;拒签退款)',55,'签证'),
(null,'img/shopping/shopping9.jpg','【赠免税店优惠券】泰国普吉岛环线穿梭巴士票（多时段）',25,'城市玩乐'),
(null,'img/shopping/shopping10.jpg','[可用券](四星,近地铁西营盘站)香港万怡酒店 Courtyard By Marriott Hong Kong(饱览维多利亚港美景,海边性价比推荐)',660,'酒店'),
(null,'img/shopping/shopping11.jpg','【穷游Q-Home独家】日本京都祇园日式茶道体验',128,'城市玩乐'),
(null,'img/shopping/shopping12.jpg','[可用券][国庆]广州直飞兰卡威5/6天往返含税机票',999,'机票'),
(null,'img/shopping/shopping13.jpg','【权力的游戏拍摄地之一】西班牙塞维利亚王宫(免排队门票)',115,'城市玩乐'),
(null,'img/shopping/shopping14.jpg','[可用券](四星,近地铁西营盘站)香港万怡酒店 Courtyard By Marriott Hong Kong(饱览维多利亚港美景,海边性价比推荐)',660,'酒店'),
(null,'img/shopping/shopping15.jpg','[可用券][国庆]广州直飞兰卡威5/6天往返含税机票',999,'机票');

#热门游记与话题
CREATE TABLE q_topic(
  tid INT PRIMARY KEY AUTO_INCREMENT, 
  t_img VARCHAR(64),
  t_title VARCHAR(100),
  uname VARCHAR(16)
  );
INSERT INTO q_topic VALUES
(null,'img/topic/topic1.jpg','【自由爱自驾】伊比利亚艳阳下之被遗忘的列强葡萄牙','yukiqueen'),
(null,'img/topic/topic2.jpg','【从美西荒野自驾，至纽约之巅】跑车、越野、大提顿秋色、露营、纽约天际线、摄影坐标···','Miss谷-美丽心情'),
(null,'img/topic/topic3.jpg','行摄锡兰，一个人的斯里兰卡深度游','月月的旅行世界'),
(null,'img/topic/topic4.jpg','【吃货夫妻的干货游记】人均2500元，新加坡可以这样吃这样玩！','敏华爱美丽'),
(null,'img/topic/topic5.jpg','多一点真诚 少一点套路 摩洛哥10日行（马拉喀什－卡萨布兰卡－舍夫沙万－菲斯－撒哈拉散团体验）完结','Barry路鹏宇'),
(null,'img/topic/topic6.jpg','【中国老司机自驾游全球】在中土世界大梦一场','RollingWheat'),
(null,'img/topic/topic7.jpg','冰冷意大利（海量美图，赠超详细威尼斯购物彩蛋和荷兰转机美拍）','从广角到长焦'),
(null,'img/topic/topic8.jpg','再度造访微笑国度，只因“泰”美丽','JeffWang1983'),
(null,'img/topic/topic9.jpg','【自由爱自驾】冰岛16天 | 三小时的夜还是太长太长！团长诗人厨娘摄影师老司机翻译官（环岛/车辆故障/被报警/失联）','你的三桂阿爸'),
(null,'img/topic/topic10.jpg','【完结】伊朗冬日10天包车经典五城自助游【懒人必看攻略干货，含伊朗导游讲解笔记，地毯/藏红花采买心得，万字真言】','张花花老师'),
(null,'img/topic/topic11.jpg','原来你是这样的夏威夷 － 海豚同游，体验逐浪，仰望星空，追逐落日，随心自驾，挑战徒步，玩出我们的夏威夷style','冰冰熊_icebear'),
(null,'img/topic/topic12.jpg','「扎扎环球@俄罗斯」相遇圣彼得堡凉夏 走遍七彩莫斯科','扎扎NovotnyJin'),
(null,'img/topic/topic13.jpg','只为那一刻花开：周游日本之27天关西樱花季，柯南巡礼。海量美图+游记攻略+小众景点推荐+盘点那些樱花套路。（基本完成）','老扬'),
(null,'img/topic/topic14.jpg','从兰卡威吃到槟城，让你扶墙出的当地美食大搜罗','ccxiaoka'),
(null,'img/topic/topic15.jpg','【独家※重磅】走进白宫参观，你也可以！','沙哈拉'),
(null,'img/topic/topic16.jpg','【中国老司机 自驾游全球】假道寻梅 深度自驾环岛Samui（第二次泰国之行）','涛声凌厉'),
(null,'img/topic/topic17.jpg','只用3000元，一个人如何去看贝加尔湖？','撒小野'),
(null,'img/topic/topic18.jpg','【中国老司机 自驾游全球】小咩的波西米亚王国姐妹行——布拉格-CK-KV9天8夜捷克自驾游（内含签证、租车）','莎小瞳'),
(null,'img/topic/topic19.jpg','【自由爱自驾】春天，到外高加索转个圈——2017我在格鲁吉亚与亚美尼亚的旅行（游记+攻略）','自由的鱼'),
(null,'img/topic/topic20.jpg','【深度强迫症的超强攻略第4弹】感受缅甸的善意，被世界温柔相待，5天2地深度游','撞南墙的朱姐姐'),
(null,'img/topic/topic22.jpg','Hello~Switzerland!(摄影亲子游2017暑假瑞士11天深度游，摄影线路详解，大量高清照片，已完结）','guihu5277'),
(null,'img/topic/topic23.jpg','绿岛浮碧海，群鱼衬繁星--帕劳浮潜+深潜+夜钓+自驾6天五晚行程超级详细实用攻略（澳门出发）','Arcady'),
(null,'img/topic/topic24.jpg','泰国普吉岛初见 斯米兰群岛 皇帝岛 8日深度游（来自Zoe摄影师的旅行拍摄-多图）','zoestyle'),
(null,'img/topic/topic25.jpg','【暴走女第五季】一趟贯穿首尔+庆州+釜山的韩国全景MIX之旅','dingding'),
(null,'img/topic/topic26.jpg','【丛林·要塞·茶园·大海】雨季锡兰漫行记/公交+短途包车/海量美图','Blankurmind'),
(null,'img/topic/topic27.jpg','【台湾自由行】2017.5两人10日台湾顺时针环岛——每天都嫌胃不够的吃货之旅(完结)','下雨的早晨sai'),
(null,'img/topic/topic28.jpg','和老公陪公婆火车游意大利，超详细博物馆预订流程，米兰到科莫湖一日往返公共交通详解，打折季“贤惠”买买买及退税攻略（完结）','larere'),
(null,'img/topic/topic29.jpg','回首又见他~塞班岛潜水考证游','路过随便看看'),
(null,'img/topic/topic30.jpg','2017超级马里奥之土耳其探秘之旅','在摄之戒');
 #特别策划与活动
CREATE TABLE q_planing(
  pid INT PRIMARY KEY AUTO_INCREMENT, 
  p_img VARCHAR(64),
  p_title VARCHAR(64)
  );