document.forms['form'].reset()
//document.console

const $mainList = document.getElementById('anketData')
const $obrazovanie = document.getElementById('obrazovanieUser')
const $mailUser = document.getElementById('mailUser')
const $buttonPower = document.getElementById('dataGo')
const $dateBirthUser = document.getElementById('dateOfBirthUser')

let provVozrasta = false
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

    // if(testSoverhenoLetiy(document.getElementById('dateOfBirthUser').value)) {
    //     console.log('big 18')
    // } else {
    //     console.log('little 18')
    // }



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
        $nameUserMail: document.getElementById('nameMailUser').value + document.getElementById('mailUser').value,
        //$mailUser: document.getElementById('mailUser').value,
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


    
//valideyshen

let inputs = document.querySelectorAll('input[data-rule]');
let myCheckList = new Map()


inputs.forEach((item) => {
    myCheckList.set(item.id, false)
})


$dateBirthUser.addEventListener('blur', () => {
    //console.log('dateBlur')
    if(testSoverhenoLetiy($dateBirthUser.value)) {
        $dateBirthUser.setAttribute('style', "color: green")
        provVozrasta = true
        //console.log('big 18')
    } else {
        $dateBirthUser.setAttribute('style', "color: red")
        $buttonPower.disabled = true;
        provVozrasta = false
        //console.log('little 18')
    }
    //this.classList.remove('invalid');
})

for (let input of inputs) {
    input.oninput = function() {
        
        let rule = this.dataset.rule;
        let myProvId = this.id;
        let myValue = this.value
        let check = false;


        switch(rule) {
        case 'textRu': {
                //check = /^\d+$/.test(myValue);
                check = /^([А-Я]|[а-я])+$/.test(myValue);
                break;
            }
        case 'textRuOrEng': {
            check = /^([А-Я]|[а-я]|[A-Z]|[a-z]|[0-9])+$/.test(myValue);
            break;
            }
        }
        //console.log(check)
        

        this.classList.remove('invalid');
        this.classList.remove('valid');

        if (check) {
            myCheckList.set(myProvId, true)
            this.classList.add('valid');
        } else {
            myCheckList.set(myProvId, false)
            this.classList.add('invalid')
        }



        if (rule == 'myParol1' || rule == 'myParol2') {
            //console.log(document.getElementById('passwordUser2').value)

        document.getElementById('passwordUser1').classList.remove('invalid');
        document.getElementById('passwordUser1').classList.remove('valid');
        document.getElementById('passwordUser2').classList.remove('invalid');
        document.getElementById('passwordUser2').classList.remove('valid');


            if(document.getElementById('passwordUser1').value == document.getElementById('passwordUser2').value) {
                myCheckList.set('passwordUser1', true)
                myCheckList.set('passwordUser2', true)
                document.getElementById('passwordUser1').classList.add('valid') 
                document.getElementById('passwordUser2').classList.add('valid')
            } else {
                myCheckList.set('passwordUser1', false)
                myCheckList.set('passwordUser2', false)
                document.getElementById('passwordUser1').classList.add('invalid') 
                document.getElementById('passwordUser2').classList.add('invalid')
            }
        }
        

        check = true
        myCheckList.forEach(function(value, key) {
            if(!value) check = false
          });

        //console.log(document.getElementById('telUser').value)
        //console.log(document.getElementById('nameMailUser').value)
        //nameMailUser

        if (check && provVozrasta) {
           $buttonPower.disabled = false;
        } else {
            $buttonPower.disabled = true;
        }
    };
}


function testSoverhenoLetiy(dateBirthDay) {

    let myDate = new Date()

    let arrBirth = dateBirthDay.split('-')
    let toYear = myDate.getFullYear()
    let toMouns = myDate.getMonth()
    let toDay = myDate.getDate()

    console.log(arrBirth[0])
    console.log(toYear)

    if((toYear - arrBirth[0]) < 18) {
        return false;
    }

    return true
}