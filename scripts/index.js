/**
 * Created by yu on 2016/11/4 0004.
 */
// 首页轮播图
$(function () {
  $('.banner').unslider({
    animation: 'vertical',    //  切换动画为垂直
    speed: 500,               //  切换动画时间
    delay: 5000,              //  切换动画间隔
    keys: true,               //  允许使用键盘操作
    dots: true,               //  使用导航点
    autoplay: true,           //  自动播放
    fluid: false              //  不支持响应式
  });
});

//  选择区域省市级三级联动，默认为新都
$('#locationSelect').citys({province: '四川', city: '成都', area: '新都'});

//  comment列表垂直滚动
$(function () {
  var $comment = $('#comment');
  var scrollTimer;
  $comment.hover(function () {
    clearInterval(scrollTimer);
  }, function () {
    scrollTimer = setInterval(function () {
      scrollNews($comment);
    }, 3000);
  }).trigger('mouseleave');

  function scrollNews(obj) {
    var $self = obj.find('ul');
    var lineHeight = $self.find('li:first').height();
    $self.animate({
      'marginTop': -lineHeight + 'px'
    }, 700, function () {
      $self.css({
        marginTop: 0
      }).find('li:first').appendTo($self);
    });
  }
});

