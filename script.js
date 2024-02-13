document.addEventListener("DOMContentLoaded", function () {
  var startDate = new Date("2023-09-09"); // Tanggal awal (9 September 2023)

  // Fungsi untuk mengupdate waktu setiap detik
  function updateTimer() {
    var now = new Date(); // Tanggal saat ini
    var timeDifference = now.getTime() - startDate.getTime(); // Selisih waktu dalam milidetik

    var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Format waktu
    var timeString = `
      <div class="timer-container">
        <div class="time">
          <p>${days}<span class="colon">:</span></p>
          <p class="time-desc">Hari</p>
        </div>
        <div class="time">
          <p>${("0" + hours).slice(-2)} <span class="colon">:</span></p>
          <p class="time-desc">Jam</p>
        </div>
        <div class="time">
          <p>${("0" + minutes).slice(-2)} <span class="colon">:</span></p>
          <p class="time-desc">Menit</p>
        </div>
        <div class="time">
          <p>${("0" + seconds).slice(-2)}</p>
          <p class="time-desc">Detik</p>
        </div>
      </div>`;

    // Tampilkan waktu di dalam elemen dengan id "timer"
    document.getElementById("timer").innerHTML = timeString;
  }

  // Panggil fungsi updateTimer setiap detik
  setInterval(updateTimer, 1000);
});
