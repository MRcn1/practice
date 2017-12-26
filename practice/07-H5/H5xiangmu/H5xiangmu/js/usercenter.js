if(!sessionStorage['loginName']===null){
    location.href='productlist.html'
}

$('#header').load('data/header.php',function(){
    $('#welcome').html('欢迎回来'+sessionStorage['loginName'])
})
$('#footer').load('data/footer.php')

$('.affix').on('click','li>a',function(e){
    e.preventDefault()
    $(this).parent().addClass('active').siblings().removeClass('active')

    var id=$(this).attr('href')
    $(id).addClass('active').siblings().removeClass('active')
})

$.ajax({
    url:'data/buy_stat.php',
    data:{uid:sessionStorage['loginUid']},
    success:function(arr){
        var c=new FusionCharts({
            type:'column2d',
            width:'80%',
            height:'450',
            renderAt:'container-buy-stat-canvas',
            dataSource:{data:arr}
        })
        c.render()
    },
    error:function(){}
})