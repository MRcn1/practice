$("#header").load('data/header.php')
$("#footer").load('data/footer.php')

var loginuname=null
var loginuid=null
$("#bt-login").click(function(){
    var data=$('#login-form').serialize()

    $.ajax({url:"data/user_login.php",
            data:data,
            success:function(arr){
                if(arr.code===1){
                    $('.modal').css({display:'none'})
                    loginuname=arr.uname
                    loginuid=arr.uid
                    $('#welcome').html(`欢迎回来:<a href="">${loginuname}</a>`)
                }else{
                    $('.modal .alert').html(arr.msg)
                }


            },
            error:function(){
                $('.modal .alert').html(`用户名或密码错误`)
            }
        }
    )
})

loadProductByPage(1)
function loadProductByPage(pageNum){
    $.ajax({url:'data/product_select2.php',
            data:{pageNum:pageNum},
            success:function(arr){
                var html=''
                for(var i=0; i<arr.data.length;i++){
                    var a=arr.data[i]
                    html+=`<li>
                                <a href="${a.pid}"><img src="${a.pic}" alt=""/></a>
                                <p>${a.price}</p>
                                <h1><a href="">${a.pname}</a></h1>
                                <div>
                                    <a href="" class="contrast"><i></i>对比</a>
                                    <a href="" class="p-operate"><i></i>关注</a>
                                    <a href="${a.pid}" class="addcart"><i></i>加入购物车</a>
                                </div>
                            </li>
                    `
                }
                $('#plist>ul').html(html)

                html=''
                html+=`<li><a href="${arr.pageNum-2}">${arr.pageNum-2}</a></li>
                      <li><a href="${arr.pageNum-1}">${arr.pageNum-1}</a></li>
                      <li class="active"><a href="#">${arr.pageNum}</a></li>
                      <li><a href="${arr.pageNum+1}">${arr.pageNum+1}</a></li>
                      <li><a href="${arr.pageNum+2}">${arr.pageNum+2}</a></li>
                      `
                $('.pager').html(html)
            },
            error:function(){
                    alert('400错误')
            }
    })


}

$('.pager').on('click','a',function(e){
    e.preventDefault()
    var pn=$(this).attr('href')
    loadProductByPage(pn)
})


$('#plist>ul').on('click','.addcart',function(e){
    e.preventDefault()
    var pid=$(this).attr('href')
    $.ajax({url:'data/car_product_add.php',
        data:{uid:loginuid,pid:pid},
        success:function(arr){
            alert('添加成功')
        },
        error:function(){
            alert('400')
        }
    })
})

$('#header').on('click','#settle_up',function(){
    document.cookie='loginUserName='+loginuname
    document.cookie='loginUserId='+loginuid
    location.href='shoppingcart.html'
})