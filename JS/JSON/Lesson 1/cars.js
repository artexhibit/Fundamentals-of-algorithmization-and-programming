const body = document.querySelector("body");
const header = document.createElement("header");
const main = document.createElement("main");
const headline = document.createElement("h1");
const carParameters = ["ID", "Модель", "Тип ДВС", "Мощность л.с.", "Расположение цилиндров", "Рабочий объём", "Число цилиндров"];

headline.textContent = "JSON представление данных";
header.append(headline);
body.append(header);
body.append(main);

parsedJSON["toyota"].forEach(car => {
    const carMainDiv = document.createElement("div");
    const carImage = document.createElement("img");
    carMainDiv.append(carImage);

    const carParameterNameDiv = document.createElement("div");
    const carParameterValueDiv = document.createElement("div");
    carParameterNameDiv.classList = "parametersDiv";
    carParameterValueDiv.classList = "parametersDiv";

    const devider = document.createElement("div");
    devider.classList = "devider";

    carParameters.forEach(parameter => {
        const carParameter = document.createElement("p");
        const carParameterValue = document.createElement("p");
        carParameter.classList = "parameter";
        carParameter.textContent = parameter;
        carParameterNameDiv.append(carParameter);
        carParameterValueDiv.append(carParameterValue);
    });

    for (let i = 0; i < carParameters.length; i++) {
        carParameterValueDiv.childNodes[i].textContent = car[i];
    };

    carImage.src = car[carParameters.length];
    carMainDiv.append(carParameterNameDiv);
    carMainDiv.append(carParameterValueDiv);
    main.append(carMainDiv);

    if (car[0] != parsedJSON["toyota"].length) {
        main.append(devider);
    }
});