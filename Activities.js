const Activities = [
  {
    title: "Robotics Club",
    tags: ["STEM"],
    description: "Learn to build and program robots for competitions."
  },
  {
    title: "Drama Society",
    tags: ["Arts"],
    description: "Act, direct, and produce performances."
  },
  {
    title: "Student Council",
    tags: ["Leadership"],
    description: "Organize school-wide initiatives and lead peers."
  },
  {
    title: "Volunteering Team",
    tags: ["Community"],
    description: "Engage with your community through service."
  },
  {
    title: "Soccer Team",
    tags: ["Sports"],
    description: "Train and compete in school-level tournaments."
  }
];

const ActivitiesList = document.getElementById("ActivitiesList");
const searchInput = document.getElementById("searchInput");
const checkboxes = document.querySelectorAll(".filters input[type='checkbox']");

function displayActivities(filtered = activities) {
  ActivitiesList.innerHTML = "";
  filtered.forEach(activity => {
    const card = document.createElement("div");
    card.className = "activity-card";
    card.innerHTML = `
      <h3>${Activity.title}</h3>
      <p>${Activity.description}</p>
      <small>${Activity.tags.join(", ")}</small>
    `;
    ActivitiesList.appendChild(card);
  });
}

function filterActivities() {
  const searchText = searchInput.value.toLowerCase();
  const selectedTags = Array.from(checkboxes)
    .filter(cb => cb.checked)
    .map(cb => cb.value);

  const filtered = Activities.filter(act => {
    const matchesSearch = act.title.toLowerCase().includes(searchText) || act.description.toLowerCase().includes(searchText);
    const matchesTags = selectedTags.length === 0 || selectedTags.every(tag => act.tags.includes(tag));
    return matchesSearch && matchesTags;
  });

  displayActivities(filtered);
}

searchInput.addEventListener("input", filterActivities);
checkboxes.forEach(cb => cb.addEventListener("change", filterActivities));

// Initial display
displayActivities();
