const testimonials = [
  {
    image:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    quote: "Mantap sekali jasanya",
    author: "Surya Elidanto",
    rating: 3,
  },
  {
    image:
      "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    quote: "Keren sekali",
    author: "Huda Aditya",
    rating: 4,
  },
  {
    image:
      "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    quote: "Pengerjaan bagus",
    author: "Ahmad Yahya",
    rating: 4,
  },
  {
    image:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quote: "Masih harus diperbaiki",
    author: "I Gusti Putu",
    rating: 3,
  },
  {
    image:
      "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quote: "Excellent work!",
    author: "Agung Setiawan",
    rating: 5,
  },
  {
    image:
      "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quote: "Kerja Bagus",
    author: "Fajar Setio",
    rating: 4,
  },
];

function allTestimonial() {
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

  document.getElementById("testi").innerHTML = testimonialHTML.join("");
}

function filterTestimonial(rating) {
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
