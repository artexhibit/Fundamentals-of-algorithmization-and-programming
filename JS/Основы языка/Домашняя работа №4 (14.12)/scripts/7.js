document.write(`<b>` + "Задание 7:" + `</b><br>`);

let person = {
    name: "",
    surname: "",

    setName: function (name) {
        this.name = name;
    },

    setSurname: function (surname) {
        this.surname = surname;
    },

    getFullName: function () {
        let fullName = (new String).concat(this.surname, " ", this.name);
        return document.write(fullName + `<br>`);
    }
}
person.setName("Александр");
person.setSurname("Пушкин");
person.getFullName();