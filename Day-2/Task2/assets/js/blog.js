const dataProject = [];

function addProject(event) {
  event.preventDefault();

  let project = document.getElementById("project-name").value;
  let start = document.getElementById("start-date").value;
  let end = document.getElementById("end-date").value;
  let desc = document.getElementById("description").value;
  let tech1 = document.getElementById("technologies1").checked;
  let tech2 = document.getElementById("technologies2").checked;
  let tech3 = document.getElementById("technologies3").checked;
  let tech4 = document.getElementById("technologies4").checked;
  let img = document.getElementById("input-image").files[0];

  if (project == "") {
    return alert("Please enter your project name");
  } else if (start == "") {
    return alert("Please enter your start date");
  } else if (end == "") {
    return alert("Please enter your end date");
  } else if (desc == "") {
    return alert("Please enter your description");
  } else if (!tech1 && !tech2 && !tech3 && !tech4) {
    return alert("Please select at least one technology");
  } else if (img == "") {
    return alert("Please enter your image");
  }
  dataProject.push({
    project: project,
    start: start,
    end: end,
    desc: desc,
    tech1: tech1,
    tech2: tech2,
    tech3: tech3,
    tech4: tech4,
    img: img,
  });

  console.log(dataProject);

  document.getElementById("form-project").reset();
}
