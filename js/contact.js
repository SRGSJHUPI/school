// ---------------- form submission and a popup modal
 document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('messageForm');
    const popup = document.getElementById('popupModal');
    const closeBtn = document.getElementById('closeModal');

    form.addEventListener('submit', function (e) {
      e.preventDefault(); // prevent scroll / reload
      popup.classList.remove('hidden'); // show modal
    });

    closeBtn.addEventListener('click', function () {
      popup.classList.add('hidden'); // hide modal
    });
  });