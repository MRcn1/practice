if(sessionStorage['loginName']===null){
    location.href='productlist.html'
}

$('#header').load('data/header.php',function(){
    $('#welcome').html('欢迎回来'+sessionStorage['loginName'])
})
$('#footer').load('data/footer.php')

$.ajax({
    url:'data/cart_detail_select.php',
    data:{uid:sessionStorage['loginUid']},
    success:function(list){
        var html=''
        var zongjine=0
        $.each(list,function(i,p){
            zongjine+=p.price*p.count
            html+=`
                    <div class="goods-item">
                        <div class="p-img">
                            <a target="_blank" href="">
                            <img src="${p.pic}">
                            </a>
                        </div>
                        <div class="p-name">
                            <a href="" target="_blank">
                                ${p.pname}
                            </a>
                        </div>
                        <div class="p-price">
                            <strong class="jd-price">￥${p.price}</strong>
                            <span class="p-num">x${p.count}</span>
                            <span class="p-state">有货</span>
                        </div>
                    </div>
            `
        })
        $('div.goods-items').html(html)
        $('#sum-price').html(`￥${zongjine.toFixed(2)}`)
        $(':hidden[name="price"]').val(`￥${zongjine}`)
    },
    error:function(){

    },
})

/*点击不同的支付方式，修改同级的隐藏域*/
$('.payment-list').on('click','li',function(){
    $(this).addClass('payment-item-selected').siblings()
        .removeClass('payment-item-selected')

    var v=$(this).data('value')
    console.log(v)
    $(this).siblings(":hidden").val(v)
})
/*点击提交表单，序列化表单form-order异步提交给服务器*/
$('#checkout-floatbar').on('click','.checkout-submit',function(){
    var data=$('#form-order').serialize()
    data+=`&userId=${sessionStorage['loginUid']}`
    $.ajax({type:'post',
            url:'data/order_add.php',
            data:data,
            success:function(result){
                if(result.code===1){
                    sessionStorage['orderId']=result.orderId
                    location.href='addorder_succ.html'
                }else{
                    alert('订单生成失败')
                }
            },
            error:function(){
                alert('异步提交失败')
            }
    })
})