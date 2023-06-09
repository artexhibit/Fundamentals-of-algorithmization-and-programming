// определение JSON-строки
let personJSON = '{ "surname" : "Бородина", "name" : "Ксения", "patronymic" : "Алексеевна", "post" : "Преподаватель", "category" : "Соответствие занимаемой должности", "experience" : {"total" : 21.3, "college" : 14.5}, "courses" : ["Профессия веб-разработчик", "Fullstack разработчик на Python"], "education" : [ { "institution" : "Санкт-Петербургский государственный университет (СПбГУ)", "qualification" : "Информационные системы и технологии", "specialty" : "Безопасность киберфизических систем", "year_receipts" : 1993, "year_release" : 1998 }, { "institution" : "Московский государственный университет имени М.В.Ломоносова", "qualification" : "Факультет вычислительной математики и кибернетики", "specialty" : "Прикладная математика и информатика", "year_receipts" : 1990, "year_release" : 2001 } ] }';

const objectJSON = JSON.parse(personJSON);
const sectionNames = ["Должность", "Категория", "Опыт работы", "Курсы", "Образование"];
const contentDiv = document.querySelector("#content");
const image = document.createElement("img");

image.classList = "img";
image.src = "no-image.jpg";

const infoDiv = document.createElement("div");
const headline = document.createElement("h1");

infoDiv.classList = "info";
headline.textContent = "Портфолио";
infoDiv.append(headline);

contentDiv.classList = "wrapper";
contentDiv.append(image);
contentDiv.append(infoDiv);

const subHeadline = document.createElement("h2");
subHeadline.textContent = `${objectJSON.surname} ${objectJSON.name} ${objectJSON.patronymic}`;
infoDiv.append(subHeadline);

sectionNames.forEach(sectionName => {
    const section = document.createElement("p");
    section.textContent = `${sectionName}:`;

    if (sectionName == "Должность") {
        section.textContent = `${sectionName}: ${objectJSON.post}`;
    } else if (sectionName == "Категория") {
        section.textContent = `${sectionName}: ${objectJSON.category}`;
    } else {
        const ul = document.createElement("ul");

        if (sectionName == "Опыт работы") {
            const info = { 0: ["total", "Общий"], 1: ["college", "Колледж"] };

            for (let i = 0; i < Object.keys(objectJSON.experience).length; i++) {
                const li = document.createElement("li");
                li.textContent = `${info[i].pop()}: ${objectJSON.experience[info[i].shift()]}`
                ul.append(li);
            };
        } else if (sectionName == "Курсы") {
            objectJSON.courses.forEach(cource => {
                const li = document.createElement("li");
                li.textContent = cource;
                ul.append(li);
            });
        } else {
            for (let i = 0; i < Object.keys(objectJSON.education).length; i++) {
                const ulOuter = document.createElement("ul");
                ulOuter.textContent = `${i + 1}. ${objectJSON.education[i].institution}`
                section.append(ulOuter);

                const ulInner = document.createElement("ul");
                ulOuter.append(ulInner);

                const info = { 0: ["qualification", "Квалификация"], 1: ["specialty", "Специальность"], 2: ["year_receipts", "Год поступления"], 3: ["year_release", "Год выпуска"] };

                for (let j = 0; j < Object.keys(objectJSON.education[i]).length - 1; j++) {
                    const li = document.createElement("li");

                    li.textContent = `${info[j].pop()}: ${objectJSON.education[i][info[j].shift()]}`

                    ulInner.append(li);
                }
            }
        }
        section.append(ul);
    }
    infoDiv.append(section);
});