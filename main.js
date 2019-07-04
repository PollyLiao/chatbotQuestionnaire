
 $(function(){


  function post_data() {
    var num11
    var num12
    var num13
    var num21
    var num22
    var num23
    var num24
    var num25
    var num26
    var num27
    var num28
    var num29
    var num210
    var num31
    var num32
    var num33
    var num34
    var num35
    var num36
    var num41

    $('input[name="num1-1"]:checked').each(function (i,e) {
      num11 = $(this).val()
      
    })
    $('input[name="num1-2"]:checked').each(function () {
       num12 = $(this).val()
    })
    $('input[name="num1-3"]:checked').each(function () {
       num13 = $(this).val()
    })
    $('input[name="num2-1"]:checked').each(function () {
       num21 = $(this).val()
    })
    $('input[name="num2-2"]:checked').each(function () {
       num22 = $(this).val()
    })
    $('input[name="num2-3"]:checked').each(function () {
       num23 = $(this).val()
    })
    $('input[name="num2-4"]:checked').each(function () {
       num24 = $(this).val()
    })
    $('input[name="num2-5"]:checked').each(function () {
       num25 = $(this).val()
    })
    $('input[name="num2-6"]:checked').each(function () {
       num26 = $(this).val()
    })
    $('input[name="num2-7"]:checked').each(function () {
       num27 = $(this).val()
    })
    $('input[name="num2-8"]:checked').each(function () {
       num28 = $(this).val()
    })
    $('input[name="num2-9"]:checked').each(function () {
       num29 = $(this).val()
    })
    $('input[name="num2-10"]:checked').each(function () {
       num210 = $(this).val()
    })
    $('input[name="num3-1"]:checked').each(function () {
       num31 = $(this).val()
    })
    $('input[name="num3-2"]:checked').each(function () {
       num32 = $(this).val()
    })
    $('input[name="num3-3"]:checked').each(function () {
       num33 = $(this).val()
    })
    $('input[name="num3-4"]:checked').each(function () {
       num34 = $(this).val()
    })
    $('input[name="num3-5"]:checked').each(function () {
       num35 = $(this).val()
    })
    $('input[name="num3-6"]:checked').each(function () {
       num36 = $(this).val()
    })
    $('input[name="num4-1"]:checked').each(function () {
       num41 = $(this).val()
    })
    
    if(!num11){
      alert('第一部分的第一題沒填到')
    }else if(!num12){
      alert('第一部分的第二題沒填到')
    }else if(!num13){
      alert('第一部分的第三題沒填到')
    }else if(!num21){
      alert('第二部分的第一題沒填到')
    }else if(!num22){
      alert('第二部分的第二題沒填到')
    }else if(!num23){
      alert('第二部分的第三題沒填到')
    }else if(!num24){
      alert('第二部分的第四題沒填到')
    }else if(!num25){
      alert('第二部分的第五題沒填到')
    }else if(!num26){
      alert('第二部分的第六題沒填到')
    }else if(!num27){
      alert('第二部分的第七題沒填到')
    }else if(!num28){
      alert('第二部分的第八題沒填到')
    }else if(!num29){
      alert('第二部分的第九題沒填到')
    }else if(!num210){
      alert('第二部分的第十題沒填到')
    }else if(!num31){
      alert('第三部分的第一題沒填到')
    }else if(!num32){
      alert('第三部分的第二題沒填到')
    }else if(!num33){
      alert('第三部分的第三題沒填到')
    }else if(!num34){
      alert('第三部分的第四題沒填到')
    }else if(!num35){
      alert('第三部分的第五題沒填到')
    }else if(!num36){
      alert('第三部分的第六題沒填到')
    }else if(!num41){
      alert('第四部分的第一題沒填到')
    }else{
      $.ajax({
        type: 'GET',
        url: 'https://script.google.com/macros/s/AKfycbwP_Zki-msuxhepA4_WNemHKlYzlvdNu5Mj_k40u80HvW203uuh/exec',
        data: {
         'name':$('#userName').val(),
         'num11':num11,
         'num12':num12,
         'num13':num13,
         'num21':num21,
         'num22':num22,
         'num23':num23,
         'num24':num24,
         'num25':num25,
         'num26':num26,
         'num27':num27,
         'num28':num28,
         'num29':num29,
         'num210':num210,
         'num31':num31,
         'num32':num32,
         'num33':num33,
         'num34':num34,
         'num35':num35,
         'num36':num36,
         'num41':num41,
        },
    }).done(function (data) {
      window.location.href = 'thankyou.html'
    });

    }


  }

  $('button').on('click', post_data)
 })