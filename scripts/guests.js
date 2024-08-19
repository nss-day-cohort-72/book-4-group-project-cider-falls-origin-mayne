import { getGuests } from './database.js';

const guests = getGuests();

export const Guests = () => {
  let html = `
    <ul class = "guest-container">`;
    html += `
    <h3>All Guests</h3>
    `
  for (const guest of guests) {
    html += `
        <li>${guest.name}</li>
    `;
  }
  html += `
  </ul>
 `;
  return html;
};

