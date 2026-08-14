// Bean & Batch Roastery — shared site behaviour

// Mobile navigation toggle
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  // Basic client-side confirmation for forms (enquiry & contact pages)
  var forms = document.querySelectorAll("form[data-confirm]");
  forms.forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var note = form.querySelector(".form-note");
      if (note) {
        note.textContent = "Thanks — your message has been noted. (Demo form: no data is sent yet; connect this to a backend or form service before going live.)";
        note.hidden = false;
      }
      form.reset();
    });
  });
});
