//Create an array of partners
const partners = [
  { src: "images/partners/partner-bustour.png", alt: "Partner Bus Tours" },
  {
    src: "images/partners/partner-cabinrental.png",
    alt: "Partner Cabin Rental",
  },
  {
    src: "images/partners/partner-campingadv.png",
    alt: "Partner Camping Adventure",
  },
  {
    src: "images/partners/partner-collegetours.png",
    alt: "Partner College Tours",
  },
  {
    src: "images/partners/partner-rentalbike.png",
    alt: "Partner Bike Rentals",
  },
  {
    src: "images/partners/partner-tourgroup.png",
    alt: "Partner Tour Group",
  },
];

const ulElement = document.getElementById("partners");
ulElement.classList.add("row"); // Add Bootstrap's row class to the parent UL

partners.forEach((partner) => {
  const li = document.createElement("li");
  li.classList.add("partner", "col-12", "col-sm-6", "col-md-4", "col-lg-2"); // Add Bootstrap's grid classes for responsiveness

  const img = document.createElement("img");
  img.src = partner.src;
  img.alt = partner.alt;
  img.classList.add("img-fluid"); // Add Bootstrap's class for responsive images

  li.appendChild(img);
  ulElement.appendChild(li);
});
