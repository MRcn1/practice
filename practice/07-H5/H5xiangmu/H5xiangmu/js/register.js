$('#bt-submit').on('click',function(){
    var data=$('#form-register').serialize()
    $.ajax({type:"GET",
        url:'data/user_add.php',
        data:data,
        success:function(arr){
            if(arr.code===1){
                alert('注册成功')
                location.href='productlist.html'
            }
        },
        error:function(){
            alert('400错误')
        }
    })
})