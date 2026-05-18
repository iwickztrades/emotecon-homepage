const glow = document.querySelector(".cursor-glow");
const meterFill = document.querySelector(".meter-fill");
const chargeValue = document.querySelector(".charge-value");
const chatOutput = document.querySelector(".chat-output");
const reactionButtons = document.querySelectorAll("[data-reaction]");
const signupForm = document.querySelector(".signup-form");
const formNote = document.querySelector(".form-note");

let charge = 72;

window.addEventListener("pointermove", (event) => {
  if (!glow) return;
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
});

reactionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const reaction = button.dataset.reaction;
    charge = Math.min(100, charge + 7);

    reactionButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");

    meterFill.style.width = `${charge}%`;
    chargeValue.textContent = charge;
    chatOutput.innerHTML = `<strong>Crowd:</strong> ${reaction} wave sent`;

    if (charge === 100) {
      chatOutput.innerHTML = `<strong>Arena:</strong> neon finale unlocked`;
      setTimeout(() => {
        charge = 74;
        meterFill.style.width = `${charge}%`;
        chargeValue.textContent = charge;
      }, 900);
    }
  });
});

signupForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  formNote.textContent = "Pass reserved. Check your inbox before doors open.";
  signupForm.reset();
});

document.querySelectorAll(".ticker").forEach((ticker) => {
  ticker.innerHTML += ticker.innerHTML;
});
