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
  let imageUrl = URL.createObjectURL(img);

  if (project === "") {
    return alert("Please enter your project name");
  } else if (start === "") {
    return alert("Please enter your start date");
  } else if (end === "") {
    return alert("Please enter your end date");
  } else if (desc === "") {
    return alert("Please enter your description");
  } else if (!tech1 && !tech2 && !tech3 && !tech4) {
    return alert("Please select at least one technology");
  } else if (imageUrl === "") {
    return alert("Please enter your image");
  }

  if (end < start) {
    return alert("End date cannot be before start date");
  }

  let startDatePart = start.split("/");
  let endDatePart = end.split("/");

  let formatStarDate =
    startDatePart[2] + "-" + startDatePart[1] + "-" + startDatePart[0];
  let formatEndDate =
    endDatePart[2] + "-" + endDatePart[1] + "-" + endDatePart[0];

  let newStart = new Date(formatStarDate);
  let newEnd = new Date(formatEndDate);

  //konversi pengurangan milisecond
  let timeDiff = newEnd - newStart;

  let differenceDay = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  let differenceMonth = Math.floor(differenceDay / 30.44);
  let differenceYears = Math.floor(differenceMonth / 12);

  let duration;

  if (differenceYears > 0) {
    duration = `${differenceYears} Years`;
  } else if (differenceMonth > 0) {
    duration = `${differenceMonth} Months`;
  } else {
    duration = `${differenceDay} Days`;
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
    img: imageUrl,
    duration: duration,
  });

  console.log(dataProject);

  newData();

  document.getElementById("form-project").reset();
}

function newData() {
  document.getElementById("list-project").innerHTML = "";
  for (let i = 0; i < dataProject.length; i++) {
    let data = dataProject[i];

    let truncatedDesc = truncateDesc(data.desc, 50);

    document.getElementById("list-project").innerHTML += `
            <div class="card-project">
              <img
                src="${data.img}"
                alt="ini gambar"
                class="profile-project"
              />
              <div class="footer-project">
                <h2>${data.project}</h2>
                <p class="durasi">Durasi : ${data.duration}</p>
                <p>${truncatedDesc} </p>
                <a href="#">Read More</a>
              </div>
            </div>
          `;
  }
}

function truncateDesc(description, maxlength) {
  if (description.length > maxlength) {
    return description.substring(0, maxlength) + "...";
  } else {
    return description;
  }
}
