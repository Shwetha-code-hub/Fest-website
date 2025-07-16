const categorySelect = document.getElementById('category');
const eventSelect = document.getElementById('event');

const eventOptions = {
  technical: [
    "Coding Challenge",
    "Tech Quiz",
    "App Development"
  ],
  cultural: [
    "Solo Singing",
    "Group Dance",
    "Fashion Show"
  ],
  sports: [
    "Football",
    "Basketball",
    "Tug of War"
  ]
};

categorySelect.addEventListener('change', function () {
  const selectedCategory = categorySelect.value;
  eventSelect.innerHTML = '<option value="">-- Choose an Event --</option>';

  if (eventOptions[selectedCategory]) {
    eventOptions[selectedCategory].forEach(function (event) {
      const option = document.createElement('option');
      option.value = event;
      option.textContent = event;
      eventSelect.appendChild(option);
    });
  }
});
