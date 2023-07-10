//Flights Part
const flightsData = obj.data.items[0].flights;
const flightsTableHeaderData = ["Код", "Откуда", "Дата и время вылета", "Куда", "Дата и время прилета", "Цена"];
const flightsDiv = document.querySelector(".flights");

const table = document.createElement("table");

flightsDiv.append(table);

for (let j = 0; j < flightsData.length + 1; j++) {
    let tableRow = document.createElement("tr");
    table.appendChild(tableRow);

    for (let i = 0; i < flightsTableHeaderData.length; i++) {
        let td = document.createElement("td");

        if (td.ATTRIBUTE_NODE == 2) {
            td.textContent = flightsTableHeaderData[i];
        }
        tableRow.appendChild(td);
    }
}

for (let i = 0; i < flightsData.length; i++) {
    let nodes = table.childNodes[i + 1].childNodes

    nodes[0].textContent = flightsData[i].flight_code
    nodes[1].textContent = flightsData[i].from.city + ", " + flightsData[i].from.airport + ' (' + flightsData[i].from.iata + ')'
    nodes[2].textContent = flightsData[i].from.date + " " + flightsData[i].from.time
    nodes[3].textContent = flightsData[i].to.city + ", " + flightsData[i].to.airport + ' (' + flightsData[i].to.iata + ')'
    nodes[4].textContent = flightsData[i].to.date + " " + flightsData[i].to.time
    nodes[5].textContent = flightsData[i].cost
}

//Passengers Part
const passengersData = obj.data.items[0].passengers;
const passengersTableHeaderData = ["ID", "Имя", "Дата рождения", "Номер документа"];
const passengersDiv = document.querySelector(".passengers");

const pTable = document.createElement("table");
const pTableBody = document.createElement("tbody");

pTable.appendChild(pTableBody);
passengersDiv.append(pTable);

for (i = 0; i < passengersData.length + 1; i++) {
    let tableRow = document.createElement("tr");
    pTableBody.appendChild(tableRow);

    for (j = 0; j < passengersTableHeaderData.length; j++) {
        let td = document.createElement("td");

        if (td.ATTRIBUTE_NODE == 2) {
            td.textContent = passengersTableHeaderData[j];
        }
        tableRow.appendChild(td);
    }
}

for (let i = 0; i < passengersData.length; i++) {
    let nodes = pTableBody.childNodes[i + 1].childNodes

    nodes[0].textContent = passengersData[i].id
    nodes[1].textContent = passengersData[i].last_name + " " + passengersData[i].first_name
    nodes[2].textContent = passengersData[i].birth_date
    nodes[3].textContent = passengersData[i].document_number
}