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

partners.forEach((partner) => {
  const li = document.createElement("li");
  li.classList.add("partner");

  const img = document.createElement("img");
  img.src = partner.src;
  img.alt = partner.alt;

  li.appendChild(img);
  ulElement.appendChild(li);
});
