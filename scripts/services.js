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
// Click event listener//
document.addEventListener('click', (clickEvent) => {
  const whatWasClickedOn = clickEvent.target;
  
  //Check if clicked item's data-type is "service"//
  if (whatWasClickedOn.dataset.type === 'service') {
    // Save data-id attribute in variable//
    const serviceId = parseInt(whatWasClickedOn.dataset.id);
    //Filter objects in parkAreaServices that have same serviceId as serviceId variable//
    const matchedParkAreaServices = parkAreaServices.filter(
      (service) => service.serviceId === serviceId
    );

    const mainAttractionArr = [];
    //Loop over matchedParkAreas services array and find matched areaID//
    for (const parkArea of matchedParkAreaServices) {
      // Push the matched areas in mainAttractionsArr//
      mainAttractionArr.push(findMatchedArea(parkArea, areas));
    }
     //Transform each array item to show only .mainAttraction value//
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
 //Helper function to find matched Areas//
const findMatchedArea = (parkArea, areaArr) => {
  let matchedArea = null;
  for (const area of areaArr) {
    if (area.id === parkArea.areaId) {
      matchedArea = area;
    }
  }
  return matchedArea;
};
