const textConfig = {
  text1: "Cin chào bé iu của a ✌️",
  text2: "A cóa đìu này mún nói với bé, nhưng bé phải trả lời thật lòng nha 🤗",
  text3: "Bé cóa iu a hong nèo 🫣?",
  text4: "Em mòa hong trả lời hay thoát ra là làm vợ a lun đóa nha hihi 💍👰",
  text5: "Ai thèm yêu a chứ 🖕😤",
  text6: "Iu nhắm lun á trời 😍",
  text7: "Choa a bíc seo bé lại thích a đi nè kk",
  text8: "Mau gửi choa a bíc iiiiii 😁",
  text9: "Vì a ngon zai với đáng iu nhắm lun 😋😍",
  text10: "HIHI a bíc mà, a cũng iu bé nhắm á 😘😍",
  text11: "Bé đồng ý làm người iu của a nhaaaaaa 💖💝💕💞💓💗💘",
  text12: "Đến được bước này là bé đồng ý làm người iu của a gòi đóa nha, lẹ lên inbox a đi 💌 ",
};

$(document).ready(function () {
  // process bar
  setTimeout(function () {
    firstQuestion();
    $(".spinner").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({
      overflow: "visible",
    });
  }, 600);

  $("#text3").html(textConfig.text3);
  $("#text4").html(textConfig.text4);
  $("#no").html(textConfig.text5);
  $("#yes").html(textConfig.text6);

  function firstQuestion() {
    $(".content").hide();
    Swal.fire({
      title: textConfig.text1,
      text: textConfig.text2,
      imageUrl: "img/CinChao.jpg",
      imageWidth: 300,
      imageHeight: 300,
      background: '#fff url("img/iput-bg.jpg")',
      imageAlt: "Custom image",
    }).then(function () {
      $(".content").show(200);
    });
  }
  // switch button position
  function switchButton() {
    var audio = new Audio("sound/duck.mp3");
    audio.play();
    var leftNo = $("#no").css("left");
    var topNO = $("#no").css("top");
    var leftY = $("#yes").css("left");
    var topY = $("#yes").css("top");
    $("#no").css("left", leftY);
    $("#no").css("top", topY);
    $("#yes").css("left", leftNo);
    $("#yes").css("top", topNO);
  }
  // move random button póition
  function moveButton() {
    var audio = new Audio("sound/Swish1.mp3");
    audio.play();
    if (screen.width <= 600) {
      var x = Math.random() * 300;
      var y = Math.random() * 500;
    } else {
      var x = Math.random() * 500;
      var y = Math.random() * 500;
    }
    var left = x + "px";
    var top = y + "px";
    $("#no").css("left", left);
    $("#no").css("top", top);
  }

  var n = 0;
  $("#no").mousemove(function () {
    if (n < 1000000000000000000000) switchButton();
    if (n > 5) moveButton();
    n++;
  });
  $("#no").click(() => {
    if (screen.width >= 900) switchButton();
  });

  // generate text in input
  function textGenerate() {
    var n = "";
    var text = textConfig.text9 || "";  // Đảm bảo textConfig.text9 tồn tại và không phải undefined
    var a = Array.from(text);
    var textVal = $("#txtReason").val() || "";  // Sử dụng giá trị mặc định nếu $("#txtReason").val() là falsy
    var count = textVal.length;
    
    if (count > 0) {
        for (let i = 0; i < count; i++) {
            if (i < a.length) {  // Đảm bảo i không vượt quá chỉ số của mảng a
                n += a[i];
            } else {
                break;
            }
        }
    }
    
    $("#txtReason").val(n);
}

  // show popup
  $("#yes").click(function () {
    var audio = new Audio("sound/tick.mp3");
    audio.play();
    Swal.fire({
      title: textConfig.text7,
      html: true,
      width: 900,
      padding: "3em",
      html: "<input type='text' class='form-control' id='txtReason'  placeholder='Ghi ở đây nè bé iu ơiiiiii'>",
      background: '#fff url("img/iput-bg.jpg")',
      backdrop: `
                    rgba(0,0,123,0.4)
                    url("img/giphy2.gif")
                    left top
                    no-repeat
                  `,
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonColor: "#fe8a71",
      cancelButtonColor: "#f6cd61",
      confirmButtonText: textConfig.text8,
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          width: 900,
          confirmButtonText: textConfig.text12,
          background: '#fff url("img/iput-bg.jpg")',
          title: textConfig.text10,
          text: textConfig.text11,
          confirmButtonColor: "#83d0c9",
          onClose: () => {
            window.location = "https://www.facebook.com/ducanh0405.2004";
          },
        });
      }
    });

    $("#txtReason").focus(function () {
      var handleWriteText = setInterval(function () {
        textGenerate();
      }, 10);
      $("#txtReason").blur(function () {
        clearInterval(handleWriteText);
      });
    });
  });
});
