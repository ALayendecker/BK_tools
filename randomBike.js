generateBike();

async function generateBike() {
  // Original coordinates
  const lat = 37.3526711;
  const lon = -122.2849872;

  // offset's calcs from chatgpt
  // Generate random offset within 1.5 miles in feet (1 mile = 5280 feet)
  const offset = .1 * 5280 * Math.random();

  // Convert offset from feet to degrees
  const latOffset = (offset / 364567.2) * (180 / Math.PI);
  const lonOffset = (offset / (364567.2 * Math.cos(lat * (Math.PI / 180)))) * (180 / Math.PI);

  const timesUsed = Math.floor(Math.random() * 40 + 7);
  const randomPW = Math.floor(Math.random() * 9999 + 1000);
  const totalStars = Math.floor(Math.random() * timesUsed * Math.floor(Math.random() * 5 + 1));

  let images = [
    "https://i.imgur.com/tC7a1wL.jpg",
    "https://i.imgur.com/la0KCvY.jpg",
    "https://i.imgur.com/MxammD0.jpg",
    "https://i.imgur.com/dwDeese.jpg",
    "https://i.imgur.com/aqQxkaQ.jpg",
    "https://i.imgur.com/1Hy9WrW.jpg",
    "https://i.imgur.com/O5Du1Q0.jpg",
    "https://i.imgur.com/15ibIsF.jpg",
    "https://i.imgur.com/sosCxiP.jpg",
    "https://i.imgur.com/FrVoLkm.jpg",
  ];

  let bikeType = ["Road", "Mountain", "Racing", "Fixed Gear", "Cruiser"];

  // Update object with new coordinates
  const bike = {
    ownerID: "645ebd7171b6ea5da371ddee",
    userID: null,
    image: images[Math.floor(Math.random() * images.length)],
    lat: parseFloat((lat + latOffset).toFixed(7)),
    lon: parseFloat((lon + lonOffset).toFixed(7)),
    bikeType: bikeType[Math.floor(Math.random() * bikeType.length)],
    timeOut: 0,
    totalStars: totalStars,
    lockCombination: randomPW,
    timesUsed: timesUsed,
    outOfService: false,
    missing: false,
    badPw: false,
    noLock: false,
    gearIssue: false,
    flatTire: false,
    structuralDamage: false,
  };
console.log("=====")
  console.log("== Original Bike: ", bike, "==");
  console.log("=====")

  createBike(bike);
}

async function createBike(bikeObj) {
  let response = await fetch("https://bk-test-hef9.onrender.com/bikes/", {
    method: "POST",
    body: JSON.stringify(bikeObj),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.status === 200 || response.status === 201) {
    let data = await response.json();
    console.log("===CREATING BIKE===")
    updateBike(bikeObj, data._id);
  } else {
    console.log("failed");
  }
}

async function updateBike(bikeObj, bikeId) {
  let update = await fetch(`https://bk-test-hef9.onrender.com/bikes/${bikeId}`, {
    method: "PUT",
    body: JSON.stringify(bikeObj),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (update.status === 200 || update.status === 201) {
    let data = await update.json();
    console.log("== Updated Bike: ", data, "==")
  } else {
    console.log("failed");
  }
}


