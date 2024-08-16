import { getServices} from "./database.js"

const services = getServices()

export const Services = () => {
    let html = "<ul>"
    for (const service of services) {
        html += `
            <li>${service.name}</li>
    `
    }
    html = html + "</ul>"
    return html;
};