
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Bootstrap 101 Template</title>

    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">

    <style>
    body {
        padding-top: 50px;
    }
    </style>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>

    <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Project name</a>
          </div>
          <div id="navbar" class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
            </ul>
          </div><!--/.nav-collapse -->
        </div>
    </nav>

    <div class="container">

    <div class="starter-template">
      <h1>新規登録</h1>

      <form action = "entry.php" method="post" enctype="multipart/form-data">

          <div class="form-group">
            <label for="file">画像</label>
            <input type="file" class="form-control" id="file" name="img">
          </div>

          <div class="form-group">
            <label for="name">機体名</label>
            <input type="text" class="form-control" id="name" name="name">
          </div>

          <div class="form-group">
            <label for="ratio">確率(%)</label>
            <input type="text" class="form-control" id="ratio" name="ratio">
            <p class="help-block">100回引いた時にどれだけ出るか。</p>
          </div>

          <button type="submit" class="btn btn-default">登録</button>

      </form>

      <hr />

      <h1>登録済一覧</h1>

      <table class="table">
        <thead>
            <tr><th>No.</th><th>画像</th><th>機体名</th><th>倍率(%)</th></tr></thead>
        <tbody border="1" width="80%" height="500">
            <tr>
                <?php
                setlocale(LC_ALL,'ja_JP.UTF-8');
                  #日本語が読み込まれない場合に記述
                $handle = fopen("data.csv", "r");
                $lineNumber = 0;

                while ( $record = fgetcsv( $handle) ) {
                  echo '<tr><td>';
                    $lineNumber++;
                echo $lineNumber;
                echo "<td><img src=img/$record[2]></td>"; #画像の場所
                echo '</td><td>';
                echo "$record[0]";
                echo '</td><td>';
                echo "$record[1]";
                echo '</td></tr>';


                }

                fclose( $handle );
                ?>

            </tr>
        </tbody>
      </table>
    </div>

    </div><!-- /.container -->

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
  </body>
</html>
