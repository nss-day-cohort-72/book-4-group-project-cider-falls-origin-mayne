import { getServices, getParkAreaServices, getAreas} from "./database.js"

const services = getServices()
const parkAreaServices = getParkAreaServices()
const areas = getAreas()

export const Services = () => {
    let html = "<ul>"
    for (const service of services) {
        html += `
            <li data-id="${service.id}" data-type="service">${service.name}</li>
    `
    }
    html = html + "</ul>"
    return html;
};



document.addEventListener(
    "click", (clickEvent) => {
        const whatWasClickedOn = clickEvent.target

        if (whatWasClickedOn.dataset.type === "service") {
            const serviceId = parseInt(whatWasClickedOn.dataset.id)
            const matchedParkAreaServices = parkAreaServices.filter(service => service.serviceId === serviceId)
            console.log(matchedParkAreaServices)

        }
     }
)