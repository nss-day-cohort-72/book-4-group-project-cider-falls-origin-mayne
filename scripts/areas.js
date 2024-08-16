import { getAreas,getServices,getGuests, getParkAreaServices } from "./database.js"

const areas = getAreas()
const areaServices = getParkAreaServices()
const guests = getGuests()
const services = getServices()

export const Areas = () => {
    let html = ""
    for (const area of areas) {
        html += `
            <h1 data-type="area" data-id="${area.id}">${area.mainAttraction}</h1>
    `
        for (const areaService of areaServices) {
            if (area.id === areaService.areaId) {
                let serviceId = areaService.serviceId

                for (const service of services) {
                    if (service.id === serviceId) {
                        html += `<li>${service.name}</li>`
                    }
                }
            }
        }

        for (const guest of guests) {
            if (area.id === guest.areaId) {
                html += `<li>${guest.name}</li>`
            }
        }
    }
    return html;
};


document.addEventListener(
    "click", (clickEvent) => {
        const whatWasClickedOn = clickEvent.target

        if (whatWasClickedOn.dataset.type === "area") {
            let clickedAreaId = parseInt(whatWasClickedOn.dataset.id)
            const matchGuest = guests.filter(guest => guest.areaId === clickedAreaId)
            let counter = 0
            for (const guest of matchGuest) {
                if (guest) {
                    counter++
                }
            }
            window.alert(`This area has ${counter} guests`)
        }
     }
)