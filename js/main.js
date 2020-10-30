const $mainList = document.getElementById('anketData')
const $obrazovanie = document.getElementById('obrazovanieUser')
const $mailUser = document.getElementById('mailUser')
const $buttonPower = document.getElementById('dataGo')

let htmlByfer = ''


const vidsObrazov = [
    'Высшее',
    'Неполное высшее',
    'Среднее',
    'Не полное среднее',
    'Образование отсутствует',
    'Другое'
]

const vidsMail = [
    '@mail.ru',
    '@inbox.ru',
    '@list.ru',
    '@bk.ru',
    '@yandex.ru',
    '@gmail.com',
    'Other'
]



vidsObrazov.forEach((item) => {
    htmlByfer += `<option value="${item}">${item}</option>`
})

$obrazovanie.innerHTML = htmlByfer
htmlByfer = ''

vidsMail.forEach((item) => {
    htmlByfer += `<option value="${item}">${item}</option>`
})

$mailUser.innerHTML = htmlByfer
htmlByfer = ''

$buttonPower.addEventListener('click', () => {

    let dataUser = {
        $name: document.getElementById('nameUser').value,
        $surname: document.getElementById('surnameUser').value,
        $patronymic: document.getElementById('patronymicUser').value,
        $Pol: $("input[name=polUser]:checked").val(),
        $telephon: document.getElementById('telUser').value,
        $dateOfBirth: document.getElementById('dateOfBirthUser').value,
        $obrazovanie: document.getElementById('obrazovanieUser').value,
        $experienceWork: document.getElementById('experienceWorkUser').checked,
        $sizeMoney: document.getElementById("sizeMoneyUser").value,
        $nameMail: document.getElementById('nameMailUser').value,
        $mailUser: document.getElementById('mailUser').value,
        $password1: document.getElementById('passwordUser1').value,
        $password2: document.getElementById('passwordUser2').value


//mailUser
//nameMailUser
    }

    console.log(dataUser)
})














const sizePic = () => {
    let size = document.getElementById("sizeMoneyUser").value;
    let testDiv = document.getElementById('testRange')

    testDiv.innerHTML = size
   }


jQuery(($) => {
    $("#telUser").mask("+38(071) 999-9999");
    });