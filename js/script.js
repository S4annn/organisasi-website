window.addEventListener('scroll', function() {
    const header = document.querySelector('.header_section');
    if (window.scrollY > 50) { // Aktifkan efek saat scroll melebihi 50px
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Fungsi untuk menghitung countdown
  function countdownTimer(targetDate, countdownId) {
    const countdownElement = document.getElementById(countdownId);
    const daysElement = countdownElement.querySelector('#days' + countdownId.slice(-1));
    const hoursElement = countdownElement.querySelector('#hours' + countdownId.slice(-1));
    const minutesElement = countdownElement.querySelector('#minutes' + countdownId.slice(-1));
    const secondsElement = countdownElement.querySelector('#seconds' + countdownId.slice(-1));

    function updateCountdown() {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        countdownElement.innerHTML = "Event telah berakhir!";
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      daysElement.textContent = days;
      hoursElement.textContent = hours;
      minutesElement.textContent = minutes;
      secondsElement.textContent = seconds;
    }

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();
  }

  // Tanggal target untuk setiap event
  const targetDate1 = new Date('2025-03-18T00:00:00').getTime();
  const targetDate2 = new Date('2024-03-20T00:00:00').getTime();
  const targetDate3 = new Date('2024-05-04T00:00:00').getTime();
  const targetDate4 = new Date('2025-04-05T00:00:00').getTime();

  // Inisialisasi countdown untuk setiap event
  countdownTimer(targetDate1, 'countdown1');
  countdownTimer(targetDate2, 'countdown2');
  countdownTimer(targetDate3, 'countdown3');
  countdownTimer(targetDate4, 'countdown4');
  
  $(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      loop: true, // Loop slider
      margin: 20, // Jarak antar item
      nav: true, // Tampilkan tombol navigasi
      dots: false, // Sembunyikan dots
      responsive: {
        0: {
          items: 1 // 1 item di layar kecil
        },
        600: {
          items: 2 // 2 item di layar sedang
        },
        1000: {
          items: 3 // 3 item di layar besar
        }
      }
    });
  });
