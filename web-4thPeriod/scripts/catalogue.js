document.addEventListener("DOMContentLoaded", function () {
  const products = [
    {
      name: "Tarkir: Dragonstorm Play Booster",
      category: "Play Booster",
      expansion: "Tarkir: Dragonstorm",
      section: "Sealed Products",
      image: "../images/tarkir-playbooster.jpg",
      price: 120,
    },
    {
      name: "Tarkir: Dragonstorm Collector Booster",
      category: "Collector Booster",
      expansion: "Tarkir: Dragonstorm",
      section: "Sealed Products",
      image: "../images/Tarkir Dragonstorm Collector Booster.jpg",
      price: 800,
    },
    {
      name: "Tarkir: Dragonstorm Bundle",
      category: "Bundle",
      expansion: "Tarkir: Dragonstorm",
      section: "Sealed Products",
      image: "../images/Tarkir Dragonstorm Bundle.jpg",
      price: 1500,
    },
    {
      name: "Tarkir: Dragonstorm Prerelease Pack",
      category: "Prerelease Pack",
      expansion: "Tarkir: Dragonstorm",
      section: "Sealed Products",
      image: "../images/Tarkir Dragonstorm Prerelease Pack.png",
      price: 500,
    },
    {
      name: "Tarkir: Dragonstorm Commander Deck – Abzan",
      category: "Commander Deck",
      expansion: "Tarkir: Dragonstorm",
      section: "Sealed Products",
      image: "../images/Tarkir Dragonstorm Commander Deck – Abzan.jpg",
      price: 1000,
    },
    {
      name: "Tarkir: Dragonstorm Commander Deck – Jeskai",
      category: "Commander Deck",
      expansion: "Tarkir: Dragonstorm",
      section: "Sealed Products",
      image: "../images/Tarkir Dragonstorm Commander Deck – Jeskai.jpg",
      price: 1000,
    },
    {
      name: "Tarkir: Dragonstorm Commander Deck – Mardu",
      category: "Commander Deck",
      expansion: "Tarkir: Dragonstorm",
      section: "Sealed Products",
      image: "../images/Tarkir Dragonstorm Commander Deck – Mardu.jpg",
      price: 1000,
    },
    {
      name: "Tarkir: Dragonstorm Commander Deck – Sultai",
      category: "Commander Deck",
      expansion: "Tarkir: Dragonstorm",
      section: "Sealed Products",
      image: "../images/Tarkir Dragonstorm Commander Deck – Sultai.png",
      price: 1000,
    },
    {
      name: "Tarkir: Dragonstorm Commander Deck – Temur",
      category: "Commander Deck",
      expansion: "Tarkir: Dragonstorm",
      section: "Sealed Products",
      image: "../images/Tarkir Dragonstorm Commander Deck – Temur.jpg",
      price: 1000,
    },
    {
      name: "Foundations Starter Kit",
      category: "Starter Kit",
      expansion: "Foundations",
      section: "Sealed Products",
      image: "../images/Foundations Starter Kit.jpg",
      price: 300,
    },
    {
      name: "Foundations Beginner Box",
      category: "Beginner Box",
      expansion: "Foundations",
      section: "Sealed Products",
      image: "../images/Foundations Beginner Box.jpg",
      price: 400,
    },
    {
      name: "Foundations Bundle",
      category: "Bundle",
      expansion: "Foundations",
      section: "Sealed Products",
      image: "../images/Foundations Bundle.png",
      price: 1400,
    },
    {
      name: "Foundations Jumpstart Booster Box",
      category: "Jumpstart Booster Box",
      expansion: "Foundations",
      section: "Sealed Products",
      image: "../images/Foundations Jumpstart Booster Box.jpg",
      price: 3500,
    },
    {
      name: "Foundations Play Booster Box",
      category: "Play Booster Box",
      expansion: "Foundations",
      section: "Sealed Products",
      image: "../images/Foundations Play Booster Box.jpg",
      price: 4000,
    },
    {
      name: "Foundations Collector Booster Box",
      category: "Collector Booster Box",
      expansion: "Foundations",
      section: "Sealed Products",
      image: "../images/Foundations Collector Booster Box.jpg",
      price: 10000,
    },
    {
      name: "Innistrad Remastered Draft Booster Box",
      category: "Draft Booster Box",
      expansion: "Innistrad Remastered",
      section: "Sealed Products",
      image: "../images/Innistrad Remastered Draft Booster Box.jpg",
      price: 6000,
    },
    {
      name: "Innistrad Remastered Collector Booster Box",
      category: "Collector Booster Box",
      expansion: "Innistrad Remastered",
      section: "Sealed Products",
      image: "../images/Innistrad Remastered Collector Booster Box.jpg",
      price: 12000,
    },
    {
      name: "Modern Horizons 3 Play Booster Box",
      category: "Play Booster Box",
      expansion: "Modern Horizons 3",
      section: "Sealed Products",
      image: "../images/Modern Horizons 3 Play Booster Box.png",
      price: 10000,
    },
    {
      name: "Modern Horizons 3 Collector Booster Box",
      category: "Collector Booster Box",
      expansion: "Modern Horizons 3",
      section: "Sealed Products",
      image: "../images/Modern Horizons 3 Collector Booster Box.png",
      price: 25000,
    },
    {
      name: "Modern Horizons 3 Bundle",
      category: "Bundle",
      expansion: "Modern Horizons 3",
      section: "Sealed Products",
      image: "../images/Modern Horizons 3 Bundle.png",
      price: 1800,
    },
    {
      name: "Magic: The Gathering – Assassin's Creed Play Booster",
      category: "Play Booster",
      expansion: "Assassin's Creed",
      section: "Sealed Products",
      image: "../images/Assassin's Creed Play Booster.jpg",
      price: 150,
    },
    {
      name: "Magic: The Gathering – Assassin's Creed Collector Booster",
      category: "Collector Booster",
      expansion: "Assassin's Creed",
      section: "Sealed Products",
      image: "../images/Assassin's Creed Collector Booster.jpg",
      price: 900,
    },
    {
      name: "Magic: The Gathering – Assassin's Creed Bundle",
      category: "Bundle",
      expansion: "Assassin's Creed",
      section: "Sealed Products",
      image: "../images/Assassin's Creed Bundle.jpg",
      price: 1600,
    },
    {
      name: "Ultra PRO - Secret Lair - Exotic Orchard Playmat",
      category: "Playmat",
      expansion: "Secret Lair",
      section: "Accessories",
      image: "../images/Ultra PRO - Secret Lair - Exotic Orchard Playmat.jpg",
      price: 400,
    },
    {
      name: "Ultra PRO - Innistrad Remastered - Sorin Playmat",
      category: "Playmat",
      expansion: "Innistrad Remastered",
      section: "Accessories",
      image: "../images/Ultra PRO - Innistrad Remastered - Sorin Playmat.jpg",
      price: 500,
    },
    {
      name: "MagicFest 2020 Promo Forest Playmat",
      category: "Playmat",
      expansion: "MagicFest 2020",
      section: "Accessories",
      image: "../images/MagicFest 2020 Promo Forest Playmat.jpg",
      price: 600,
    },
    {
      name: "MagicCon Las Vegas 2024 Black Lotus Playmat",
      category: "Playmat",
      expansion: "MagicCon Las Vegas 2024",
      section: "Accessories",
      image: "../images/MagicCon Las Vegas 2024 Black Lotus Playmat.jpg",
      price: 800,
    },
    {
      name: "Ultra PRO - Tarkir Dragonstorm Ugin Playmat",
      category: "Playmat",
      expansion: "Tarkir Dragonstorm",
      section: "Accessories",
      image: "../images/Tarkir Dragonstorm Ugin Playmat.jpg",
      price: 450,
    },
    {
      name: "Llanowar Elves Showcase Anime Playmat",
      category: "Playmat",
      expansion: "Foundations",
      section: "Accessories",
      image: "../images/Llanowar Elves.jpg",
      price: 550,
    },
    {
      name: "MagicCon Chicago Secret Lair Playmat",
      category: "Playmat",
      expansion: "Secret Lair",
      section: "Accessories",
      image: "../images/MagicCon Chicago Secret Lair Playmat.jpg",
      price: 700,
    },
    {
      name: "Atraxa Playmat - MagicCon Philadelphia 2023",
      category: "Playmat",
      expansion: "Phyrexia",
      section: "Accessories",
      image: "../images/traxa Playmat - MagicCon Philadelphia 202.jpg",
      price: 650,
    },
    {
      name: "Ultra PRO - Bloomburrow AR Enhanced Playmat",
      category: "Playmat",
      expansion: "Bloomburrow",
      section: "Accessories",
      image: "../images/Ultra PRO - Bloomburrow AR Enhanced Playmat.jpg",
      price: 500,
    },
    {
      name: "MTG Fallout Standard Playmat G.E.C.K.",
      category: "Playmat",
      expansion: "Fallout",
      section: "Accessories",
      image: "../images/MTG Fallout Standard Playmat G.E.C.K..jpg",
      price: 480,
    },
    {
      name: "Ultra PRO - Eclipse Matte Sleeves (100ct)",
      category: "Protectors",
      expansion: "General",
      section: "Accessories",
      image: "../images/Ultra PRO - Eclipse Matte Sleeves (100ct).jpg",
      price: 250,
    },
    {
      name: "Dragon Shield - Matte Sleeves (100ct)",
      category: "Protectors",
      expansion: "General",
      section: "Accessories",
      image: "../images/Dragon Shield - Matte Sleeves (100ct).jpg",
      price: 300,
    },
    {
      name: "KMC - Hyper Matte Sleeves (80ct)",
      category: "Protectors",
      expansion: "General",
      section: "Accessories",
      image: "../images/KMC - Hyper Matte Sleeves (80ct).jpg",
      price: 200,
    },
    {
      name: "Ultimate Guard - Katana Sleeves (100ct)",
      category: "Protectors",
      expansion: "General",
      section: "Accessories",
      image: "../images/Ultimate Guard - Katana Sleeves (100ct).png",
      price: 350,
    },
    {
      name: "BCW - Deck Guard Sleeves (100ct)",
      category: "Protectors",
      expansion: "General",
      section: "Accessories",
      image: "../images/BCW - Deck Guard Sleeves (100ct).jpg",
      price: 150,
    },
    {
      name: "Max Protection - Holographic Sleeves (50ct)",
      category: "Protectors",
      expansion: "General",
      section: "Accessories",
      image: "../images/Max Protection - Holographic Sleeves (50ct).jpg",
      price: 180,
    },
    {
      name: "Legion - Dragonhide Sleeves (100ct)",
      category: "Protectors",
      expansion: "General",
      section: "Accessories",
      image: "../images/Legion - Dragonhide Sleeves (100ct).jpg",
      price: 280,
    },
    {
      name: "Pro-Matte - Deck Protector Sleeves (100ct)",
      category: "Protectors",
      expansion: "General",
      section: "Accessories",
      image: "../images/Pro-Matte - Deck Protector Sleeves (100ct).webp",
      price: 220,
    },
    {
      name: "Gamegenic - Prime Sleeves (100ct)",
      category: "Protectors",
      expansion: "General",
      section: "Accessories",
      image: "../images/Gamegenic - Prime Sleeves (100ct).jpg",
      price: 260,
    },
    {
      name: "Arcane Tinmen - Dragon Shield Art Sleeves (100ct)",
      category: "Protectors",
      expansion: "General",
      section: "Accessories",
      image: "../images/Arcane Tinmen - Dragon Shield Art Sleeves (100ct).jpg",
      price: 400,
    },
  ];

  const productsPerLoad = 5;
  let prductsLoaded = 0;
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  const filterButtons = document.querySelectorAll(".filter-button");


function createItems(product) {
  const container = document.getElementById('item-container');

  const itemDiv = document.createElement('div');
  itemDiv.classList.add('product-card');
  itemDiv.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <p>${product.name}</p>
    <div class="price"><p>Price: ${product.price}</p></div>
    <input type="button" class="buy-button" value="Buy">
  `;
  container.appendChild(itemDiv);
}


function filterProductsByExpansion(filter = "all")
{
  const container = document.getElementById('item-container');
  container.innerHTML = "";
  prductsLoaded = 0;

  const filteredProducts = products.filter(product =>
    filter === "all" || product.expansion.includes(filter)
  )

  for(i = 0; i < productsPerLoad; i++){
    createItems(filteredProducts[i])
    prductsLoaded++;
  }

  if (prductsLoaded >= filteredProducts.length) {
    loadMoreBtn.style.display = "none";
  } else {
      loadMoreBtn.style.display = "block";
  }
}



function showRandomItems(filter = "all") {
  const container = document.getElementById('item-container');
  container.innerHTML = '';

  const filteredProducts = products.filter(product =>
    filter === "all" || product.expansion.includes(filter)
  )

  const shuffled = filteredProducts.sort(() => 0.5 - Math.random());

  for(i = 0; i < productsPerLoad; i++){
    createItems(shuffled[i])
    prductsLoaded++;
  }
}




const bodyId = document.body.id;

if (bodyId === "main-page") {
  showRandomItems();
} else if (bodyId === "sealedProducts-page") {
  filterProductsByExpansion()
}



const buttons = document.querySelectorAll('#filters .filter-button');

buttons.forEach(button => {
  const val = button.value;

  button.addEventListener('click', () => {

    filterProductsByExpansion(val);

  });
});



filterButtons.forEach(button => {
  button.addEventListener("click", function() {
      document.querySelector(".filter-button.active").classList.remove("active");
      this.classList.add("active");
  });
});

loadMoreBtn.addEventListener("click", function() {
  const activeFilter = document.querySelector(".filter-button.active").getAttribute("value");
  
  const filteredProducts = products.filter(product => activeFilter === "all" || product.expansion.includes(activeFilter))

  const newProductsToLoad = filteredProducts.slice(prductsLoaded, prductsLoaded + productsPerLoad);

  newProductsToLoad.forEach(item => {
    createItems(item);
    prductsLoaded++;
  });

  if (prductsLoaded >= filteredProducts.length) {
      loadMoreBtn.style.display = "none";
  }

});
});


document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("popup-ad");
  const closeBtn = document.querySelector(".close-btn");
  const claimOfferBtn = document.getElementById("claim-offer");

  if (closeBtn) {
      closeBtn.addEventListener("click", function () {
          popup.style.display = "none"; 
      });
  }

  claimOfferBtn.addEventListener("click", function () {
      alert("Your discount is activated, use code: MTG2025");
      popup.style.display = "none"; 
  });
});

function closePopup() {
  const popup = document.getElementById("popup-ad");
  popup.style.display = "none";  
}




document.addEventListener("DOMContentLoaded", function () {
  const smallAdContainer = document.getElementById("small-ad-container");
  const acceptOfferBtn = document.getElementById("accept-offer");
  const declineOfferBtn = document.getElementById("decline-offer");

  setTimeout(function() {
      if (smallAdContainer) {
          smallAdContainer.classList.add("show");
      }
  }, 5000);

  function hideSmallAd() {
      if (smallAdContainer) {
          smallAdContainer.classList.remove("show");
      }
  }

  if (acceptOfferBtn) {
    acceptOfferBtn.addEventListener("click", hideSmallAd);
  }

  if (declineOfferBtn) {
      declineOfferBtn.addEventListener("click", hideSmallAd);
  }
});