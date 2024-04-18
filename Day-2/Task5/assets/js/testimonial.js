class Testimonial {
  image = "";
  quote = "";
  author = "";

  constructor(image, quote, author) {
    this.image = image;
    this.quote = quote;
    this.author = author;
  }

  html() {
    throw new Error(
      "You should use one of 'AuthorTestimonial' or 'CompanyTestimonial'"
    );
  }
}

class AuthorTestimonial extends Testimonial {
  html() {
    return `<div class="card-testi">
          <img
            src="${this.image}"
          />
          <p class="quote"><i>"${this.quote}"</i></p>
          <p class="author">- ${this.author}</p>
        </div>`;
  }
}

class CompanyTestimonial extends Testimonial {
  html() {
    return `<div class="card-testi">
          <img
            src="${this.image}"
          />
          <p class="quote"><i>"${this.quote}"</i></p>
          <p class="author">- ${this.author} company</p>
        </div>`;
  }
}

const testimonial1 = new AuthorTestimonial(
  "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "Mantap sekali jasanya",
  "Surya Elidanto"
);

const testimonial2 = new AuthorTestimonial(
  "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "Keren lah pokoknya",
  "Rangga Putra"
);

const testimonial3 = new AuthorTestimonial(
  "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "Wuhuu kerenlah!",
  "Yahya Kurniawan"
);

const testimonials = [testimonial1, testimonial2, testimonial3];

let testimonialHTML = ``;

for (let i = 0; i < testimonials.length; i++) {
  testimonialHTML += testimonials[i].html();
}

document.getElementById("testi").innerHTML = testimonialHTML;
