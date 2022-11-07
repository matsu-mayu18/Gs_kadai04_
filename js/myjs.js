let key_num = 0;
let bg_class = "";

const imgfile = ["01.png", "02.png", "03.png"];
const imgpass = "./img/"; //imgファイルまでのパス

//saveのクリックイベント
//クリックされたらローカルストレージに保存＆HTML追記
$("#save").on("click", function () {
  //   alert("kore");
  let value = $("#text_area").val();

  if (value == "") {
    alert("Empty");
  } else {
    localStorage.setItem(key_num, value); //ローカルストレージに保存
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

//ページ読み込みのとｋ：保存データ取得表示
//ローカルストレージからデータを取得
for (let i = 0; i < localStorage.length; i++) {
  const key_num = localStorage.key(i);
  const value = localStorage.getItem(key_num);

  const html = `
    <p class="randombg"> ${value} </p>
    <p class="' + ${bg_class} + '">' + ${value} + "</p>"
    `;

  $(".list").append(html);
}
