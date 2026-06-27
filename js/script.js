// RM BTP — interactions

document.addEventListener('DOMContentLoaded', function () {

  // Année dans le footer
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Menu mobile
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('mainNav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Formulaire de contact -> ouvre le client mail avec les infos pré-remplies
  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = document.getElementById('name').value.trim();
      var phone = document.getElementById('phone').value.trim();
      var service = document.getElementById('service').value;
      var message = document.getElementById('message').value.trim();

      var subject = 'Demande de devis — ' + service;
      var body =
        'Nom : ' + name + '\n' +
        'Téléphone : ' + phone + '\n' +
        'Type de projet : ' + service + '\n\n' +
        'Message :\n' + message;

      var mailto =
        'mailto:ronel.maamoc@facsciences-uy1.cm' +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(body);

      window.location.href = mailto;
    });
  }
});
