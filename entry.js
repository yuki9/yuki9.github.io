<?php //リダイレクトする場合＜？Phpの上に空白欄があると動かなくなる
$filename = 'data.csv';



if (($handle = fopen($filename, 'a')) !== FALSE) {
  fwrite($handle, $_POST['name']);
  fwrite($handle, ",");
  fwrite($handle, $_POST['ratio']);
  fwrite($handle, ",");
  fwrite($handle, $_FILES["img"]["name"]);

  fwrite($handle, PHP_EOL); //＼nと違ってどのOSでも改行されるS
  fclose($handle);

}


if (is_uploaded_file($_FILES["img"]["tmp_name"])) {
  if (move_uploaded_file($_FILES["img"]["tmp_name"], "img/" . $_FILES["img"]["name"])) {
    chmod("img/" . $_FILES["img"]["name"], 0644);
    //echo $_FILES["img"]["name"] . "をアップロードしました。";
  } else {
    //echo "ファイルをアップロードできません。";
  }
} else {
  //echo "ファイルが選択されていません。";
}
redirect();
function redirect(){
  header("Location: admin.php?" . time());
}
?>
