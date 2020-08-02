  //国内疫情数据
  var oSpan1 = document.querySelector('.num1')
  var oSpan2 = document.querySelector('.num2')
  var oSpan3 = document.querySelector('.num3')
  var oSpan4 = document.querySelector('.num4')

  var oNum1 = document.querySelector('.compnum1')
  var oNum2 = document.querySelector('.compnum2')
  var oNum3 = document.querySelector('.compnum3')
  var oNum4 = document.querySelector('.compnum4')
  var oTime = document.querySelector('.newtime')

  var allconf = document.getElementsByClassName("li4")
  var alldead = document.getElementsByClassName("li5")
  var allheal = document.getElementsByClassName("li6")

  //国外疫情数据
  var fSpan0 = document.querySelector('.fnum0')
  var fSpan1 = document.querySelector('.fnum1')
  var fSpan2 = document.querySelector('.fnum2')
  var fSpan3 = document.querySelector('.fnum3')
  var fSpan4 = document.querySelector('.fnum4')

  var fp1 = document.querySelector('.comps1')
  var fp2 = document.querySelector('.comps2')
  var fp3 = document.querySelector('.comps3')
  var fp4 = document.querySelector('.comps4')
  var fp5 = document.querySelector('.comps5')


  //新闻界面数据
  var n1 = document.querySelector('.news1')
  var n2 = document.querySelector('.news2')
  var n3 = document.querySelector('.news3')
  var n4 = document.querySelector('.news4')
  var n5 = document.querySelector('.news5')


  //ajax函数封装
  function ajax(method, url, data, succ, fali) {
    if (window.XMLHttpRequest) {
      var oAjax = new XMLHttpRequest();
    } else {
      var oAjax = ActiveXObject('Microsoft.XMLHTTP');
    }//兼容浏览器

    oAjax.open(method, url);
    if (data) oAjax.send(data);
    else oAjax.send();
    oAjax.onreadystatechange = function () {
      if (oAjax.readyState == 4) {
        if (oAjax.status == 200) {
          var res = oAjax.responseText;
          succ(res);
        } else {
          var err = oAjax.responseText;
          fali(err);
        }
      }
    }
  }

  //时间戳转化函数
  function add0(m) {
    return m < 10 ? '0' + m : m;
}
function formatDate(timeStamp) {
    let time = new Date(timeStamp),
        y = time.getFullYear(),
        m = time.getMonth() + 1,
        d = time.getDate(),
        h = time.getHours(),
        mm = time.getMinutes(),
        s = time.getSeconds();
    return y + '-' + add0(m) + '-' + add0(d) + ' ' + add0(h) + ':' + add0(mm) + ':' + add0(s);
}

  //获取国内外的疫情数据，用于数据界面的渲染
  ajax('GET', 'http://api.tianapi.com/txapi/ncov/index?key=b3eff00e25a4c8b658176e5804677e07', true, function (res) {
    var res = JSON.parse(res);
    var arr = res.newslist[0].desc;
    console.log(res);
    oTime.innerHTML = formatDate(arr.modifyTime);

    //渲染国内数据
    oSpan1.innerHTML = JSON.stringify(arr.confirmedCount);
    oSpan2.innerHTML = JSON.stringify(arr.currentConfirmedCount);
    oSpan3.innerHTML = JSON.stringify(arr.deadCount);
    oSpan4.innerHTML = JSON.stringify(arr.curedCount);
    
    var num1 = arr.confirmedIncr;
    var num2 = arr.currentConfirmedIncr;
    var num3 = arr.deadIncr;
    var num4 = arr.curedIncr;

    var farr = arr.foreignStatistics;
    
    //渲染国外数据
    fSpan0.innerHTML = farr.confirmedCount;
    fSpan1.innerHTML = farr.currentConfirmedCount;
    fSpan2.innerHTML = farr.suspectedCount;
    fSpan3.innerHTML = farr.deadCount;
    fSpan4.innerHTML = farr.curedCount;

    var num5 = farr.confirmedIncr;
    var num6 = farr.currentConfirmedIncr;
    var num7 = farr.suspectedIncr;
    var num8 = farr.deadIncr;
    var num9 = farr.curedIncr;

    //比较与昨日的数据变化，渲染数据增减以及颜色（确诊与死亡人数增加用红色，但治愈增加应用绿色）
    if (num1 > 0) { oNum1.innerHTML = ("+" + num1); oNum1.style.color = 'red' }
      else if (num1 < 0) { oNum1.innerHTML = (num1); oNum1.style.color = 'green' }
       else { oNum1.innerHTML = ("无变化"); oNum1.style.color = 'green' }
    if (num2 > 0) { oNum2.innerHTML = ("+" + num2); oNum2.style.color = 'red' }
      else if (num2 < 0) { oNum2.innerHTML = (num2); oNum2.style.color = 'green' }
        else { oNum2.innerHTML = ("无变化"); oNum2.style.color = 'green' }
    if (num3 > 0) { oNum3.innerHTML = ("+" + num3); oNum3.style.color = 'red' }
      else if (num3 < 0) { oNum3.innerHTML = (num3); oNum3.style.color = 'green' }
        else { oNum3.innerHTML = ("无变化"); oNum3.style.color = 'green' }
    if (num4 < 0) { oNum4.innerHTML = (num4); oNum4.style.color = 'red' }
      else if (num4 > 0) { oNum4.innerHTML = ("+" + num4); oNum4.style.color = 'green' }
        else { oNum4.innerHTML = ("无变化"); oNum4.style.color = 'green' }
    if (num5 > 0) { fp1.innerHTML = ("+" + num5); fp1.style.color = 'red' }
      else if (num5 < 0) { fp1.innerHTML = (num5); fp1.style.color = 'green' }
       else { fp1.innerHTML = ("无变化"); fp1.style.color = 'green' }
    if (num6 > 0) { fp2.innerHTML = ("+" + num6); fp2.style.color = 'red' }
      else if (num6 < 0) { fp2.innerHTML = (num6); fp2.style.color = 'green' }
        else { fp2.innerHTML = ("无变化"); fp2.style.color = 'green' }
    if (num7 > 0) { fp3.innerHTML = ("+" + num7); fp3.style.color = 'red' }
      else if (num7 < 0) { fp3.innerHTML = (num7); fp3.style.color = 'green' }
        else { fp3.innerHTML = ("无变化"); fp3.style.color = 'green' }
    if (num8 > 0) { fp4.innerHTML = ("+" + num8); fp4.style.color = 'red' }
      else if (num8 < 0) { fp4.innerHTML = (num8); fp4.style.color = 'green' }
        else { fp4.innerHTML = ("无变化"); fp4.style.color = 'green' }
    if (num9 < 0) { fp5.innerHTML = (num9); fp5.style.color = 'red' }
      else if (num8 > 0) { fp5.innerHTML = ("+" + num9); fp5.style.color = 'green' }
        else { fp5.innerHTML = ("无变化"); fp5.style.color = 'green' }

  
    //实时渲染新闻界面
    var newsarr = res.newslist[0].news;
    var ntxt = document.querySelector('.newssour');
    ntxt.innerHTML = "新闻内容来源于 " + newsarr[0].infoSource + "<span>（更新于</span>" + newsarr[0].pubDateStr + "<span>  ）</span>" ;

    n1.children[0].innerHTML = newsarr[0].title;
    n1.children[1].innerHTML = "<span> </span>" + newsarr[0].summary;
    n1.onclick = function(){ window.open(newsarr[0].sourceUrl);}

    n2.children[0].innerHTML = newsarr[1].title;
    n2.children[1].innerHTML = "<span> </span>" + newsarr[1].summary;
    n2.onclick = function(){ window.open(newsarr[1].sourceUrl);}

    n3.children[0].innerHTML = newsarr[2].title;
    n3.children[1].innerHTML = "<span> </span>" + newsarr[2].summary;
    n3.onclick = function(){ window.open(newsarr[2].sourceUrl);}

    n4.children[0].innerHTML = newsarr[3].title;
    n4.children[1].innerHTML = "<span> </span>" + newsarr[3].summary;
    n4.onclick = function(){ window.open(newsarr[3].sourceUrl);}

    n5.children[0].innerHTML = newsarr[4].title;
    n5.children[1].innerHTML = "<span> </span>" + newsarr[4].summary;
    n5.onclick = function(){ window.open(newsarr[4].sourceUrl);}
  }, function (err) {
    oTime.innerHTML = ('(疫情数据获取失败! 请刷新页面重新获取)');
  })

