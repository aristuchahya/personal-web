const dataProject = [];

function addProject(event) {
  event.preventDefault();

  let title = document.getElementById("title").value;
  let content = document.getElementById("content").value;
  let image = document.getElementById("input-image").value;

  if (title == "") {
    return alert("Please enter your title");
  } else if (content == "") {
    return alert("Please enter your content");
  } else if (image == "") {
    return alert("Please enter your image");
  }

  dataProject.push({
    title: title,
    content: content,
    image: image,
  });

  console.log(dataProject);
}
