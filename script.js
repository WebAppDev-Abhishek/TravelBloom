const destinations = {
  paris: {
    title: "Paris, France",
    description: "The city of lights and love, home to the Eiffel Tower, Louvre, and romantic streets.",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg"
  },
  maldives: {
    title: "Maldives",
    description: "Tropical paradise with crystal clear waters, white sandy beaches, and luxury resorts.",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Maldives_Beach.jpg"
  },
  tokyo: {
    title: "Tokyo, Japan",
    description: "A vibrant mix of modern skyscrapers, traditional temples, and world-class cuisine.",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/12/Tokyo_Tower_and_around_Skyscrapers.jpg"
  },
  newyork: {
    title: "New York, USA",
    description: "The city that never sleeps, famous for Times Square, Central Park, and the Statue of Liberty.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Manhattan_from_top_of_the_rock.jpg"
  },
  london: {
    title: "London, UK",
    description: "Home to Big Ben, Buckingham Palace, and rich cultural heritage.",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fd/London_Montage_L.jpg"
  },
  rome: {
    title: "Rome, Italy",
    description: "A historic city filled with ancient ruins like the Colosseum and Vatican treasures.",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Colosseo_2020.jpg"
  },
  sydney: {
    title: "Sydney, Australia",
    description: "Famous for the Sydney Opera House, Harbour Bridge, and beautiful beaches.",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/88/Sydney_Opera_House_-_Dec_2008.jpg"
  },
  dubai: {
    title: "Dubai, UAE",
    description: "Known for luxury shopping, modern architecture, and the iconic Burj Khalifa.",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Dubai_Marina_2015.jpg"
  },
  bali: {
    title: "Bali, Indonesia",
    description: "A tropical paradise with temples, rice terraces, and stunning beaches.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/68/Tegallalang_Rice_Terrace%2C_Ubud%2C_Bali%2C_Indonesia.jpg"
  },
  cairo: {
    title: "Cairo, Egypt",
    description: "Home to the Great Pyramids of Giza and the Sphinx, a must-visit historic site.",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Kheops-Pyramid.jpg"
  },
  barcelona: {
    title: "Barcelona, Spain",
    description: "Known for Gaudí’s architecture, lively streets, and Mediterranean beaches.",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Sagrada_Familia_01.jpg"
  },
  istanbul: {
    title: "Istanbul, Turkey",
    description: "A city that bridges Europe and Asia, rich in history and culture.",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Hagia_Sophia_Mars_2013.jpg"
  },
  rio: {
    title: "Rio de Janeiro, Brazil",
    description: "Famous for Christ the Redeemer statue, Copacabana beach, and Carnival festival.",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Cristo_Redentor_-_Rio_de_Janeiro%2C_Brasil.jpg"
  }
};

function searchDestinations() {
  const input = document.getElementById("searchInput").value.toLowerCase().trim();
  const cardContainer = document.getElementById("searchResultCard");
  const cardImage = document.getElementById("cardImage");
  const cardTitle = document.getElementById("cardTitle");
  const cardDescription = document.getElementById("cardDescription");

  let match = null;

  for (let key in destinations) {
    const place = destinations[key];
    if (
      key.includes(input.replace(/\s+/g, "")) || // match "newyork" if user types "new york"
      place.title.toLowerCase().includes(input) ||
      place.description.toLowerCase().includes(input)
    ) {
      match = place;
      break; // stop at the first match
    }
  }

  if (match) {
    cardImage.src = match.image;
    cardTitle.textContent = match.title;
    cardDescription.textContent = match.description;
    cardContainer.style.display = "block"; // show card
  } else {
    alert("No results found for: " + input);
    cardContainer.style.display = "none"; // hide card if not found
  }
}

function clearSearch() {
  document.getElementById("searchInput").value = "";
  document.getElementById("searchResultCard").style.display = "none"; // hide card
}
