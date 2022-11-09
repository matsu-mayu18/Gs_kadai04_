let key_num = 0;
let bg_class = "";

const imgfile = ["01.png", "02.png", "03.png"];
const imgpass = "./img/"; //imgファイルまでのパス

//saveのクリックイベント
//クリックされたらローカルストレージに保存＆HTML追記
$("#save").on("click", function () {
  //   alert("kore");
  let key = $("#date_val").val();
  let value = $("#text_area").val();

  if (key == "" || value == "") {
    alert("Empty");
  } else {
    localStorage.setItem(key, value); //ローカルストレージに保存
    key_num++; //key_numを一つ進める

    bg_class = "randombg" + key_num;

    //listにp要素を追加
    $(".list")
      .append('<p class="' + bg_class + '">' + value + "</p>")
      .fadeIn(3000);

    //ランダム背景を設定
    let bg_num = Math.floor(Math.random() * imgfile.length);

    $("." + bg_class).css(
      "background-image",
      "url(" + imgpass + imgfile[bg_num] + ")"
    );

    // console.log("url(" + imgpass + imgfile[bg_num] + ")");
  }
});

//ページ読み込みのとき：保存データ取得表示
//ローカルストレージからデータを取得
//文字の表示と背景画像の表示(データとして持っているのは日付とTodoだけ→画像の番号も持つ必要がある)
for (let i = 0; i < localStorage.length; i++) {
  const key_num = localStorage.key(i);
  const value = localStorage.getItem(key_num);

  const html = `
    <p class=" + ${bg_class} + "> + ${value} + </p>
    `;

  //  <p class="randombg"> ${value} </p>

  $(".list").append(html);
}

$(function () {
  $(".calender").datepicker({
    showOtherMonths: true, //他の月を表示
    selectOtherMonths: true, //他の月を選択可能

    changeYear: true, //年を表示
    changeMonth: true, //月を選択
    minDate: "-1y -1m",
    maxDate: "+1y +1m",

    //日付が選択されたとき
    onSelect: function (dateText, inst) {
      $("#date_val").val(dateText);
    },
  });
});

//animalのクリックイベント
$("#giraff").on("click", function () {
  //   alert("giraff");

  $("#text_area")
    .css("background-image", "url(./img/01_opacity.png)")
    .css("background-size", "contain")
    .css("background-repeat", "no-repeat");
  // .css("filter", "brightness(10%)")
  // .css("filter", "grayscale(20%)")
  // .css("filter", "opacity(30%)")
  // .css("filter", "alpha(opacity=30)");
});
//animalのクリックイベント
$("#lion").on("click", function () {
  $("#text_area")
    .css("background-image", "url(./img/02_opacity.png)")
    .css("background-size", "contain")
    .css("background-repeat", "no-repeat");
  //     .css("filter", "brightness(10%)")
  //     .css("filter", "grayscale(20%)")
  //     .css("filter", "opacity(30%)");
});

//animalのクリックイベント
$("#monkey").on("click", function () {
  $("#text_area")
    .css("background-image", "url(./img/03_opacity.png)")
    .css("background-size", "contain")
    .css("background-repeat", "no-repeat");
  // .css("filter", "brightness(10%)")
  // .css("filter", "grayscale(20%)")
  // .css("filter", "opacity(30%)");
});
