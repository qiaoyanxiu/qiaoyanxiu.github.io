var swiper = new Swiper('.swiper-container', {
    //Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)。
    direction: 'vertical',
    //分页器
    pagination: {
        el: '.swiper-pagination',
        //让分页器支持点击
        clickable: true,
    },

    // 前进按钮
    navigation: {
        nextEl: '.swiper-button-next',
    },
});



