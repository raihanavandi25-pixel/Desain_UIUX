<?php
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['submit'])) 
  $name = htmlspecialchars($_POST['name']);
    $date_of_arrival = htmlspecialchars($_POST['date_of_arrival']);
    $number_of_player = htmlspecialchars($_POST['number_of_player']);
    $account_number = htmlspecialchars($_POST['account_number']);
    $bank = htmlspecialchars($_POST['bank']);
    $send_to_mobile = htmlspecialchars($_POST['send_to_mobile']);
    $phone = htmlspecialchars($_POST['phone']);
    $send_to_email = htmlspecialchars($_POST['send_to_email']);
    $email = htmlspecialchars($_POST['email']);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reservation Result</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Reservation Details</h1>
    </header>
    <main>
        <div class="result-container">
            <h2>Thank you for your reservation, <?php echo $name; ?>!</h2>
            <p><strong>Date of Arrival:</strong> <?php echo $date_of_arrival; ?></p>
            <p><strong>Number of Players:</strong> <?php echo $number_of_player; ?></p>
            <p><strong>Account Number:</strong> <?php echo $account_number; ?></p>
            <p><strong>Bank:</strong> <?php echo $bank; ?></p>
            <p><strong>Send to Mobile Phone:</strong> <?php echo $send_to_mobile ? 'Yes' : 'No'; ?></p>
            <p><strong>Phone:</strong> <?php echo $phone; ?></p>
            <p><strong>Send to Email:</strong> <?php echo $send_to_email ? 'Yes' : 'No'; ?></p>
            <p><strong>Email:</strong> <?php echo $email; ?></p>
        </div>
    </main> <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hasil Reservasi - DICE Boardgame</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #eaffea;
      padding: 30px;
    }

    .result-box {
      background-color: #caffca;
      padding: 20px;
      border-radius: 10px;
      max-width: 700px;
      margin: auto;
      box-shadow: 0 0 10px rgba(0, 100, 0, 0.3);
    }

    h2 {
      text-align: center;
      color: #004d00;
    }

    .data-row {
      margin: 10px 0;
      font-size: 16px;
    }

    strong {
      color: #003300;
    }

    .logo {
      text-align: center;
      margin-bottom: 20px;
    }

    .logo img {
      width: 120px;
    }

    .back-button {
      display: block;
      margin: 30px auto 0;
      padding: 10px 20px;
      background-color: #006600;
      color: white;
      text-align: center;
      text-decoration: none;
      border-radius: 5px;
      width: fit-content;
    }

    .back-button:hover {
      background-color: #004d00;
    }
  </style>
</head>
<body>

  <div class="result-box">
    <div class="logo">
      <img src="assets/dice.png" alt="Dice Logo">
    </div>

    <h2>✅ Bukti Reservasi Anda</h2>

    <div class="data-row"><strong>Nama Pemesan:</strong> <?php echo htmlspecialchars($_GET['title'] ?? '-'); ?></div>
    <div class="data-row"><strong>Tanggal Kedatangan:</strong> <?php echo htmlspecialchars($_GET['Date_of_arrival'] ?? '-'); ?></div>
    <div class="data-row"><strong>Jumlah Pemain:</strong> <?php echo htmlspecialchars($_GET['Player'] ?? '-'); ?></div>
    <div class="data-row"><strong>Nomor Rekening:</strong> <?php echo htmlspecialchars($_GET['account'] ?? '-'); ?></div>
    <div class="data-row"><strong>Bank:</strong> <?php echo htmlspecialchars($_GET['bank'] ?? '-'); ?></div>
    <div class="data-row"><strong>Nomor Meja:</strong> <?php echo htmlspecialchars($_GET['table'] ?? '-'); ?></div>
    <div class="data-row"><strong>Dikirim ke HP:</strong> <?php echo isset($_GET['send_sms']) ? 'Ya' : 'Tidak'; ?></div>
    <div class="data-row"><strong>Nomor HP:</strong> <?php echo htmlspecialchars($_GET['phone'] ?? '-'); ?></div>
    <div class="data-row"><strong>Dikirim ke Email:</strong> <?php echo isset($_GET['send_email']) ? 'Ya' : 'Tidak'; ?></div>
    <div class="data-row"><strong>Email:</strong> <?php echo htmlspecialchars($_GET['email'] ?? '-'); ?></div>

    <a href="index.html" class="back-button">🔙 Kembali ke Form</a>
  </div>

</body>
</html>
