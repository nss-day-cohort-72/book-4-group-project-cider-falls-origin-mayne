import { getServices, getParkAreaServices, getAreas } from './database.js';

const services = getServices();
const parkAreaServices = getParkAreaServices();
const areas = getAreas();

export const Services = () => {
  let html = '<ul>';
  for (const service of services) {
    html += `
            <li data-id="${service.id}" data-type="service">${service.name}</li>
    `;
  }
  html = html + '</ul>';
  return html;
};

document.addEventListener('click', (clickEvent) => {
  const whatWasClickedOn = clickEvent.target;

  if (whatWasClickedOn.dataset.type === 'service') {
    const serviceId = parseInt(whatWasClickedOn.dataset.id);
    const matchedParkAreaServices = parkAreaServices.filter(
      (service) => service.serviceId === serviceId
    );
    const mainAttractionArr = [];
    for (const parkArea of matchedParkAreaServices) {
      mainAttractionArr.push(findMatchedArea(parkArea, areas));
    }

    let mainAttractions = mainAttractionArr.map(
      (attraction) => attraction.mainAttraction
    );

    if (mainAttractions.length === 2) {
      mainAttractions = mainAttractions.join(' and ');
    }

    const serviceName = whatWasClickedOn.textContent;
    if (mainAttractions.length === 0) {
      window.alert(`${serviceName} is not offered in any location`);
    } else {
      window.alert(`${serviceName} is available in ${mainAttractions}`);
    }
  }
});

const findMatchedArea = (parkArea, areaArr) => {
  let matchedArea = null;
  for (const area of areaArr) {
    if (area.id === parkArea.areaId) {
      matchedArea = area;
    }
  }
  return matchedArea;
};
