function getTestimonial(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);

    xhr.onload = () => {
      resolve(JSON.parse(xhr.responseText));
    };

    xhr.onerror = () => {
      reject("Network Error");
    };

    xhr.send();
  });
}

async function allTestimonial() {
  const testimonials = await getTestimonial(
    "https://api.npoint.io/4d457f8164ebde466928"
  );

  if (!testimonials.length) {
    return (document.getElementById("testi").innerHTML =
      "<h1>Data Not Found</h1>");
  }

  const testimonialHTML = testimonials.map((testimonial) => {
    return `<div class="card-testi">
          <img
            src="${testimonial.image}"
          />
          <p class="quote"><i>"${testimonial.quote}"</i></p>
          <p class="author">- ${testimonial.author}</p>
          <p class="rate-star">${testimonial.rating} <i class="fa-regular fa-star"></i></p>
        </div>`;
  });

  console.log(testimonials);

  document.getElementById("testi").innerHTML = testimonialHTML.join("");
}

async function filterTestimonial(rating) {
  const testimonials = await getTestimonial(
    "https://api.npoint.io/4d457f8164ebde466928"
  );

  const filteredTesti = testimonials.filter(
    (testimonial) => testimonial.rating == rating
  );

  if (!filteredTesti.length) {
    return (document.getElementById("testi").innerHTML =
      "<h1>Data Not Found</h1>");
  }

  const testimonialHTML = filteredTesti.map((testimonial) => {
    return `<div class="card-testi">
          <img
            src="${testimonial.image}"
          />
          <p class="quote"><i>"${testimonial.quote}"</i></p>
          <p class="author">- ${testimonial.author}</p>
          
        </div>`;
  });

  document.getElementById("testi").innerHTML = testimonialHTML.join("");
}

allTestimonial();
