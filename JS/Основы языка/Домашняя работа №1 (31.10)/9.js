/* Задание 9(*) Даны размер ипотечного кредита (S — 2 млн.руб), процентная ставка (p  — 10%), кол-во лет (years — 5). Найти переплату по кредиту, значение переплаты должно содержаться в переменной perepl. Результат выведите на страницу с помощью document.write(); */

function mortragePaymentAmount(S, p, years) {
    if ((typeof S == 'number') && (typeof p == 'number') && (typeof years == 'number')) {
        let monthlyInterestRate = p / (100 * 12);
        let mortrageDurationInMonths = 12 * years;
        let annuityRatio = monthlyInterestRate * Math.pow((1 + monthlyInterestRate), mortrageDurationInMonths) / ((Math.pow((1 + monthlyInterestRate), mortrageDurationInMonths)) - 1);
        let monthlyPayment = Math.round(S * annuityRatio);
        let perepl = (monthlyPayment * mortrageDurationInMonths) - S;
        return document.write(perepl);
    } else {
        return console.log("Введённые значения должны быть числами");
    };
};

mortragePaymentAmount(2000000, 10, 5);

