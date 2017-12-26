var arr=document.cookie.split('; ')
var cookieData={}

for(var i=0; i<arr.length;i++){
    var kv=arr[i]
    var pair=kv.split('=')
    cookieData[pair[0]]=pair[1]
}

var loginUid=cookieData['loginUserId']
var loginUname=cookieData['loginUserName']

$('#header').load('data/header.php',function(){
    $('#welcome').html(`欢迎回来${loginUname}`)
})
$('#footer').load('data/footer.php')

$.ajax({
    type: 'GET',
    url: 'data/cart_detail_select.php',
    data: {uid: loginUid},
    success: function(list){
        //遍历购物车中的每个商品，生成TR和TD
        var html = '';
        $.each(list, function(i,p){
            html += `
      <tr>
          <td>
              <input type="checkbox"/>
              <input type="hidden" value="${p.did}" />
              <div><img src="${p.pic}"></div>
          </td>
          <td><a href="">${p.pname}</a></td>
          <td>${p.price}</td>
          <td>
              <button>-</button><input type="text" value="${p.count}"/><button>+</button>
          </td>
          <td><span>${p.price*p.count}</span></td>
          <td><a href="${p.did}">删除</a></td>
      </tr>
      `;
        });
        $('#cart tbody').html(html);
    },
    error:function(){
        alert('404cuowu')
    }
});