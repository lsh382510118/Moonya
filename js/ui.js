$(function(){
    $('.artical-layer-box').on('click','.artical-layer-close',function(){
        $('.artical-layer-main').removeClass('in').removeClass('out').addClass('out');
        $('.artical-layer-mark').removeClass('in').removeClass('out').addClass('out');
        setTimeout(function(){$('.artical-layer-wrap').remove();$('.artical-layer-box').hide();},700)
    });
    $('.main-nav>div').click(function(){
        $('.page-header').addClass('hide');
    })
});
//<div class="nav-box">
//    <nav class="main-nav">
//    <div class="active home">Home</div>
//    <div>HTML5/CSS3</div>
//    <div>JavaScript</div>
//    <div>Plug-in Unit</div>
//    <div>Awaken Artical</div>
//<div>Test-Page</div>
//</nav>
//</div>