// Given coordinates
const givenLat = 38.8951;
const givenLon = -77.0364;

// Radius in miles
const radius = 1.5;

// Convert radius to feet
const radiusInFeet = radius * 5280;

// Convert given coordinates to radians
const givenLatRad = givenLat * Math.PI / 180;
const givenLonRad = givenLon * Math.PI / 180;

// Generate random distance and angle
const randomDistance = Math.sqrt(Math.random()) * radiusInFeet;
const randomAngle = Math.random() * 2 * Math.PI;

// Calculate new coordinates
const newLat = givenLat + (randomDistance / 364567.2) * (180 / Math.PI);
const newLon = givenLon + (randomDistance / 364567.2) * (180 / Math.PI) / Math.cos(givenLatRad);

console.log(newLat, newLon)