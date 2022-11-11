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
    //ローカルストレージに保存
    localStorage.setItem(key, value);

    //背景画像をランダムで表示する
    //bg_classの値を randombg + ランダム数値に設定
    let bg_num = Math.floor(Math.random() * imgfile.length);
    let bg_class = "randombg" + bg_num;
    // console.log(bg_class);

    console.log(imgpass, imgfile[bg_num]);

    //listにp要素を追加。class="randombg1"など。
    const html_list = `
      <div class="Todo_contents">
        <img src="${imgpass}${imgfile[bg_num]}" class="bg">
        <p class="${bg_class}">${key}<br/>${value}</p>
        <span class="delete">x</span>
        <span class="done">done</span>
      </div>
    `;

    console.log(html_list);
    $(".list").append(html_list);

    // console.log("url(" + imgpass + imgfile[bg_num] + ")");
  }
});

//clearのクリックイベント
//カレンダーの値を消すのはまだできてない。
$("#clear").on("click", function () {
  $("#text_area").val("");
  // $("#calender").val("");
});

//ページリロードのとき：保存データ取得表示
//ローカルストレージからデータを取得
//文字の表示と背景画像の表示(データとして持っているのは日付とTodoだけ→画像の番号も持つ必要がある)
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);

  const html_reload = `
  <div class="Todo_contents">
    <img src="${imgpass}${imgfile[1]}" class="bg">
    <p class="${bg_class}">${key}<br/>${value}</p>
    <span class="delete">x</span>
    <span class="done">done</span>
  </div>
    `;

  //  <p class="randombg"> ${value} </p>
  $(".list").append(html_reload);
}

//animalのクリックイベント
//画像だけ透過度Opacity設定しようとしたが、テキストも透過されてしまった。
//今回はあらかじめ透過した画像を設定。
//CANVASとか使ったら何かできるようになるだろうか…。
$("#giraff").on("click", function () {
  //   alert("giraff");
  $("#text_area")
    .css("background-image", "url(./img/01_opacity.png)")
    .css("background-size", "contain")
    .css("background-repeat", "no-repeat");
  // .css("filter", "brightness(10%)")
  // .css("filter", "grayscale(20%)")
  // .css("filter", "opacity(30%)");
});
//animalのクリックイベント
$("#lion").on("click", function () {
  $("#text_area")
    .css("background-image", "url(./img/02_opacity.png)")
    .css("background-size", "contain")
    .css("background-repeat", "no-repeat");
});

//animalのクリックイベント
$("#monkey").on("click", function () {
  $("#text_area")
    .css("background-image", "url(./img/03_opacity.png)")
    .css("background-size", "contain")
    .css("background-repeat", "no-repeat");
});

//カレンダーを表示
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

//deleteボタンが押されたら
//親要素だけ消す
$(".delete").on("click", function () {
  // alert("delete");

  $(this).parent().remove();
});

//doneボタンが押されたら
$(".done").on("click", function () {
  // alert("delete");

  $("#play-button").get(0).play();
});
