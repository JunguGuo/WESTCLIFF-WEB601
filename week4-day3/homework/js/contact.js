document.addEventListener("DOMContentLoaded", function () {
  const petTypeSelect = document.getElementById("pet-type");
  const dogInput = document.getElementById("dog-input");
  const catInput = document.getElementById("cat-input");

  petTypeSelect.addEventListener("change", function () {
    // Hide all dynamic inputs
    dogInput.style.display = "none";
    catInput.style.display = "none";

    // Show the selected input box
    const selectedValue = petTypeSelect.value;
    if (selectedValue === "dog") {
      dogInput.style.display = "block";
    } else if (selectedValue === "cat") {
      catInput.style.display = "block";
    }
  });
});
