'use strict'

/* ---------------- 1 ----------------------- */
let $order_1 = document.createElement('span')
$order_1.classList.add('order_1')
document.body.append($order_1)
$order_1.innerText = '1.'

let $field1 = document.createElement('input')
$field1.classList.add('name_field');
document.body.append($field1)
$field1.setAttribute('type', 'text')
$field1.setAttribute('placeholder', 'Ваше имя?')

let getHello = () => {
    let name = document.querySelector('.name_field').value
    document.querySelector('.board1_field').innerText = 'Здравствуйте, ' + name + '! :-)'
}

let $btn1 = document.createElement('button')
document.body.append($btn1)
$btn1.innerText = 'Получить приветствие'
$btn1.onclick = getHello

let $board1 = document.createElement('div')
$board1.classList.add('board1_field')
document.body.append($board1)

let $br1 = document.createElement('br')
document.body.append($br1)

/* ---------------- 2 ----------------------- */

let $order_2 = document.createElement('span')
$order_2.classList.add('order_2')
document.body.append($order_2)
$order_2.innerText = '2.'

let $field2 = document.createElement('input')
$field2.classList.add('birthYear_field');
document.body.append($field2)
$field2.setAttribute('type', 'text')
$field2.setAttribute('placeholder', 'Ваш год рождения?')

let getAge = () => {
    const currentYear = '2020'
    let birthYear = Number(document.querySelector('.birthYear_field').value)
    document.querySelector('.board2_field').innerText = 'Вам: ' + (currentYear - birthYear) + ' лет'
}

let $btn2 = document.createElement('button')
document.body.append($btn2)
$btn2.innerText = 'Узнать свой возраст'
$btn2.onclick = getAge

let $board2 = document.createElement('div')
$board2.classList.add('board2_field')
document.body.append($board2)

let $br2 = document.createElement('br');
document.body.append($br2)

/* --------------- 3 ------------------------ */

let $order_3 = document.createElement('span')
$order_3.classList.add('order_3')
document.body.append($order_3)
$order_3.innerText = '3.'

let $field3 = document.createElement('input')
$field3.classList.add('lengthSideSqu_field');
document.body.append($field3)
$field3.setAttribute('type', 'text')
$field3.setAttribute('placeholder', 'Cторона квадрата равна...')

let getPerimeter = () => {

    let lengthSideSqu = Number(document.querySelector('.lengthSideSqu_field').value)
    document.querySelector('.board3_field').innerText = 'Периметр квадрата равен: ' + (lengthSideSqu * 4)
}

let $btn3 = document.createElement('button')
document.body.append($btn3)
$btn3.innerText = 'Узнать периметр'
$btn3.onclick = getPerimeter

let $board3 = document.createElement('div')
$board3.classList.add('board3_field')
document.body.append($board3)

let $br3 = document.createElement('br');
document.body.append($br3)

/* ---------------- 4 ----------------------- */

let $order_4 = document.createElement('span')
$order_4.classList.add('order_4')
document.body.append($order_4)
$order_4.innerText = '4.'

let $field4 = document.createElement('input')
$field4.classList.add('radius_field');
document.body.append($field4)
$field4.setAttribute('type', 'text')
$field4.setAttribute('placeholder', 'Радиус круга равен...')

let getSquare = () => {

    let radius = Number(document.querySelector('.radius_field').value)
    document.querySelector('.board4_field').innerText = 'Площадь круга равна: ' + (Math.PI * (radius ** 2))
}

let $btn4 = document.createElement('button')
document.body.append($btn4)
$btn4.innerText = 'Узнать площадь'
$btn4.onclick = getSquare

let $board4 = document.createElement('div')
$board4.classList.add('board4_field')
document.body.append($board4)

let $br4 = document.createElement('br');
document.body.append($br4)

/* ---------------- 5 ----------------------- */

let $order_5 = document.createElement('span')
$order_5.classList.add('order_5')
document.body.append($order_5)
$order_5.innerText = '5.'

let $field5_1 = document.createElement('input')
$field5_1.classList.add('distance_field');
document.body.append($field5_1)
$field5_1.setAttribute('type', 'text')
$field5_1.setAttribute('placeholder', 'Дистанция в км равна...')

let $field5_2 = document.createElement('input')
$field5_2.classList.add('time_field');
document.body.append($field5_2)
$field5_2.setAttribute('type', 'text')
$field5_2.setAttribute('placeholder', 'Желаемое ремя пути (час)?')

let getSpeed = () => {
    let distance = Number(document.querySelector('.distance_field').value)
    let time = Number(document.querySelector('.time_field').value)
    document.querySelector('.board5_field').innerText = 'Вам нужно двигаться со скоростью: ' + distance / time + ' км/ч'
}

let $btn5 = document.createElement('button')
document.body.append($btn5)
$btn5.innerText = 'Необходимая скорость'
$btn5.onclick = getSpeed

let $board5 = document.createElement('div')
$board5.classList.add('board5_field')
document.body.append($board5)

let $br5 = document.createElement('br');
document.body.append($br5)

/* ----------------- 6 ---------------------- */

let $order_6 = document.createElement('span')
$order_6.classList.add('order_6')
document.body.append($order_6)
$order_6.innerText = '6.'


let $field6 = document.createElement('input')
$field6.classList.add('usd_field');
document.body.append($field6)
$field6.setAttribute('type', 'text')
$field6.setAttribute('placeholder', 'У меня есть ... USD')

let getEur = () => {
    const exchange = 1.1
    let usd = Number(document.querySelector('.usd_field').value)
    document.querySelector('.board6_field').innerText = 'Вы получите вот столько EUR: ' + (usd / exchange).toFixed(2)
}

let $btn6 = document.createElement('button')
document.body.append($btn6)
$btn6.innerText = 'Получить EUR'
$btn6.onclick = getEur

let $board6 = document.createElement('div')
$board6.classList.add('board6_field')
document.body.append($board6)

let $br6 = document.createElement('br');
document.body.append($br6)

/* ----------------- 7 ---------------------- */

let $order_7 = document.createElement('span')
$order_7.classList.add('order_7')
document.body.append($order_7)
$order_7.innerText = '7.'

let $field7 = document.createElement('input')
$field7.classList.add('volume_field');
document.body.append($field7)
$field7.setAttribute('type', 'text')
$field7.setAttribute('placeholder', 'Объем флешки в Гб...')

let getQuantity = () => {
    const file = 820
    let volume = Number(document.querySelector('.volume_field').value)
    document.querySelector('.board7_field').innerText = 'Вы можете сохранить: ' + Math.trunc(volume * 1000 / file) + ' файлов по 820 Мб'
}

let $btn7 = document.createElement('button')
document.body.append($btn7)
$btn7.innerText = 'Количество файлов (820 Мб)'
$btn7.onclick = getQuantity

let $board7 = document.createElement('div')
$board7.classList.add('board7_field')
document.body.append($board7)

let $br7 = document.createElement('br');
document.body.append($br7)

/* ---------------- 8 ----------------------- */

let $order_8 = document.createElement('span')
$order_8.classList.add('order_8')
document.body.append($order_8)
$order_8.innerText = '8.'

let $field8 = document.createElement('input')
$field8.classList.add('sum_field');
document.body.append($field8)
$field8.setAttribute('type', 'text')
$field8.setAttribute('placeholder', 'Сколько у Вас денежек?')

let getChocoQuantity = () => {
    let chocoCost = 20
    let sum = Number(document.querySelector('.sum_field').value)
    document.querySelector('.board8_field').innerText = 'Вы можете купить ' + Math.trunc(sum / chocoCost) + ' шоколадок'
    if (sum % chocoCost) {
        document.querySelector('.board8_field').innerText = 'Вы можете купить ' + Math.trunc(sum / chocoCost) +
            ' шоколадок и у Вас еще останется ' + (sum % chocoCost).toFixed(2) + ' гривен'
    }
}

let $btn8 = document.createElement('button')
document.body.append($btn8)
$btn8.innerText = 'Количество шоколадок'
$btn8.onclick = getChocoQuantity

let $board8 = document.createElement('div')
$board8.classList.add('board8_field')
document.body.append($board8)

let $br8 = document.createElement('br');
document.body.append($br8)

/* ----------------- 9 ---------------------- */

let $order_9 = document.createElement('span')
$order_9.classList.add('order_9')
document.body.append($order_9)
$order_9.innerText = '9.'

let $field9 = document.createElement('input')
$field9.classList.add('number_field');
document.body.append($field9)
$field9.setAttribute('type', 'text')
$field9.setAttribute('placeholder', 'Введите трехзначное число')

let reverseNumber = () => {
    let number = Number(document.querySelector('.number_field').value)
    let num1 = number % 10;
    let number2 = Math.trunc(number / 10);
    let num2 = number2 % 10;
    let num3 = Math.trunc(number2 / 10);
    document.querySelector('.board9_field').innerText = `Вот число задом наперёд: ${num1}${num2}${num3}`
}

let $btn9 = document.createElement('button')
document.body.append($btn9)
$btn9.innerText = 'Перевернуть число'
$btn9.onclick = reverseNumber

let $board9 = document.createElement('div')
$board9.classList.add('board9_field')
document.body.append($board9)

let $br9 = document.createElement('br');
document.body.append($br9)

/* ----------------- 10 ---------------------- */

let $order_10 = document.createElement('span')
$order_10.classList.add('order_10')
document.body.append($order_10)
$order_10.innerText = '10.'

let $field10 = document.createElement('input')
$field10.classList.add('deposit_field');
document.body.append($field10)
$field10.setAttribute('type', 'text')
$field10.setAttribute('placeholder', 'Введите сумму вклада, грн')

let getPercent = () => {
    let deposit = Number(document.querySelector('.deposit_field').value)
    document.querySelector('.board10_field').innerText = 'Ваши проценты за 2 месяца состявят ' + (deposit * 0.05 / 12 * 2).toFixed(2) + ' гривен'
}

let $btn10 = document.createElement('button')
document.body.append($btn10)
$btn10.innerText = 'Проценты за 2 месяца'
$btn10.onclick = getPercent

let $board10 = document.createElement('div')
$board10.classList.add('board10_field')
document.body.append($board10)

let $br10 = document.createElement('br');
document.body.append($br10)

/* ------------------- 11 -------------------- */

let $order_11 = document.createElement('span')
$order_11.classList.add('order_11')
document.body.append($order_11)
$order_11.innerText = '11.'

let checkAge = () => {
    let userAge = Number(document.querySelector('.age_field').value)
    if (userAge >= 0 && userAge <= 11) {
        document.querySelector('.board11_field').innerText = 'Вы еще ребенок...'
    } else if (userAge >= 12 && userAge <= 17) {
        document.querySelector('.board11_field').innerText = 'Вы уже подросток :)'
    } else if (userAge >= 18 && userAge <= 59) {
        document.querySelector('.board11_field').innerText = 'Да Вы зрелая личность!'
    } else if (userAge >= 60) {
        document.querySelector('.board11_field').innerText = 'Скорее всего Вы уже на пенсии...'
    }
}

let $field11 = document.createElement('input')
$field11.classList.add('age_field')
document.body.append($field11)
$field11.setAttribute('type', 'text')
$field11.setAttribute('placeholder', 'Введите свой возраст')

let $btn11 = document.createElement('button')
document.body.append($btn11)
$btn11.innerText = 'Определить категорию'
$btn11.onclick = checkAge

let $board11 = document.createElement('div')
$board11.classList.add('board11_field')
document.body.append($board11)

let $br11 = document.createElement('br');
document.body.append($br11);

/* ------------------ 12 --------------------- */

let $order_12 = document.createElement('span')
$order_12.classList.add('order_12')
document.body.append($order_12)
$order_12.innerText = '12.'

let showSymbol = () => {
    let num = Number(document.querySelector('.num_field').value)
    if (num == 1) {
        document.querySelector('.board12_field').innerText = '!'
    } else if (num == 2) {
        document.querySelector('.board12_field').innerText = '@'
    } else if (num == 3) {
        document.querySelector('.board12_field').innerText = '#'
    } else if (num == 4) {
        document.querySelector('.board12_field').innerText = '$'
    } else if (num == 5) {
        document.querySelector('.board12_field').innerText = '%'
    } else if (num == 6) {
        document.querySelector('.board12_field').innerText = '^'
    } else if (num == 7) {
        document.querySelector('.board12_field').innerText = '&'
    } else if (num == 8) {
        document.querySelector('.board12_field').innerText = '*'
    } else if (num == 9) {
        document.querySelector('.board12_field').innerText = '('
    } else if (num == 0) {
        document.querySelector('.board12_field').innerText = ')'
    }
}

let $field12 = document.createElement('input')
$field12.classList.add('num_field');
document.body.append($field12)
$field12.setAttribute('type', 'text')
$field12.setAttribute('placeholder', 'Введите цифру от 1 до 9')

let $btn12 = document.createElement('button')
document.body.append($btn12)
$btn12.innerText = 'Вывести символ на клавише'
$btn12.onclick = showSymbol

let $board12 = document.createElement('div')
$board12.classList.add('board12_field')
document.body.append($board12)

let $br12 = document.createElement('br');
document.body.append($br12);

/* ------------------ 13 --------------------- */

let $order_13 = document.createElement('span')
$order_13.classList.add('order_13')
document.body.append($order_13)
$order_13.innerText = '13.'

let showEqual = () => {
    let numb = Number(document.querySelector('.numb_field').value)
    let n3 = numb % 10;
    let numb2 = Math.trunc(numb / 10);
    let n2 = numb2 % 10;
    let n1 = Math.trunc(numb2 / 10);

    if (n1 == n2 && n2 == n3) {
        document.querySelector('.board13_field').innerText = `Есть совпадение цифр! ${n1}${n2}${n3}`
    } else if (n1 == n2) {
        document.querySelector('.board13_field').innerText = `Есть совпадение цифр! ${n1}${n2}`
    } else if (n1 == n3) {
        document.querySelector('.board13_field').innerText = `Есть совпадение цифр! ${n1}${n3}`
    } else if (n2 == n3) {
        document.querySelector('.board13_field').innerText = `Есть совпадение цифр!  ${n2}${n3}`
    }
}

let $field13 = document.createElement('input')
$field13.classList.add('numb_field')
document.body.append($field13)
$field13.setAttribute('type', 'text')
$field13.setAttribute('placeholder', 'Введите трехзначное число')

let $btn13 = document.createElement('button')
document.body.append($btn13)
$btn13.innerText = 'Проверить одинаковые цифры'
$btn13.onclick = showEqual

let $board13 = document.createElement('div')
$board13.classList.add('board13_field')
document.body.append($board13)

let $br13 = document.createElement('br');
document.body.append($br13);

/* ------------------ 14 --------------------- */

let $order_14 = document.createElement('span')
$order_14.classList.add('order_14')
document.body.append($order_14)
$order_14.innerText = '14.'

let checkYear = () => {
    let year = Number(document.querySelector('.year_field').value)

    if (year % 400 == 0) {
        document.querySelector('.board14_field').innerText = 'Высокосный год!'
    } else if (year % 4 == 0 && year % 100 != 0) {
        document.querySelector('.board14_field').innerText = 'Высокосный год!'
    } else {
        document.querySelector('.board14_field').innerText = 'Обычный такой себе год... совсем не высокосный...'
    }
}

let $field14 = document.createElement('input')
$field14.classList.add('year_field')
document.body.append($field14)
$field14.setAttribute('type', 'text')
$field14.setAttribute('placeholder', 'Введите год')

let $btn14 = document.createElement('button')
document.body.append($btn14)
$btn14.innerText = 'Высокосный?'
$btn14.onclick = checkYear

let $board14 = document.createElement('div')
$board14.classList.add('board14_field')
document.body.append($board14)

let $br14 = document.createElement('br');
document.body.append($br14);

/* ------------------ 15 --------------------- */

let $order_15 = document.createElement('span')
$order_15.classList.add('order_15')
document.body.append($order_15)
$order_15.innerText = '15.'


let checkNumber5 = () => {
    let number5 = document.querySelector('.number5_field').value
    let number5Split = number5.split('')

    if (number5Split[0] == number5Split[4] && number5Split[1] == number5Split[3]) {
        document.querySelector('.board15_field').innerText = 'Это число - палиндром!'
    } else {
        document.querySelector('.board15_field').innerText = 'Это не палиндром... ещё разок?'
    }
}

let $field15 = document.createElement('input')
$field15.classList.add('number5_field')
document.body.append($field15)
$field15.setAttribute('type', 'text')
$field15.setAttribute('placeholder', 'Введите пятиразрядное число')

let $btn15 = document.createElement('button')
document.body.append($btn15)
$btn15.innerText = 'Палиндром?'
$btn15.onclick = checkNumber5

let $board15 = document.createElement('div')
$board15.classList.add('board15_field')
document.body.append($board15)

let $br15 = document.createElement('br');
document.body.append($br15);

/* ------------------ 16 --------------------- */

let $order_16 = document.createElement('span')
$order_16.classList.add('order_16')
document.body.append($order_16)
$order_16.innerText = '16.'

let $form16 = document.createElement('form')
$form16.classList.add('exchange_form')
document.body.append($form16)
$form16.setAttribute('action', '#')
$form16.setAttribute('method', 'post')

let $field16 = document.createElement('input')
$field16.classList.add('exchange_sum_field')
$form16.appendChild($field16)
$field16.setAttribute('type', 'text')
$field16.setAttribute('placeholder', 'Введите сумму, USD')

let $select16 = document.createElement('select')
$select16.classList.add('currency_select')
$form16.appendChild($select16)
$select16.setAttribute('name', 'currency')
document.querySelector('.currency_select').id = 'currency_select_id'

let $optionEUR = document.createElement('option')
$optionEUR.classList.add('option_eur')
$select16.appendChild($optionEUR)
$optionEUR.setAttribute('value', 'eur')
$optionEUR.innerText = 'EUR'

let $optionUAH = document.createElement('option')
$optionUAH.classList.add('option_uah')
$select16.appendChild($optionUAH)
$optionUAH.setAttribute('value', 'uah')
$optionUAH.innerText = 'UAH'

let $optionAZN = document.createElement('option')
$optionAZN.classList.add('option_azn')
$select16.appendChild($optionAZN)
$optionAZN.setAttribute('value', 'azn')
$optionAZN.innerText = 'AZN'

let convertCourse = () => {
    const usd_eur = 0.92
    const usd_uah = 26.66
    const usd_azn = 1.7

    let sumUSD = document.querySelector('.exchange_sum_field').value

    let n = document.getElementById('currency_select_id').options.selectedIndex
    if (n == 0) {
        document.querySelector('.board16_field').innerText = 'Ваша сумма EUR: ' + (sumUSD * usd_eur).toFixed(2)
    } else if (n == 1) {
        document.querySelector('.board16_field').innerText = 'Ваша сумма UAH: ' + (sumUSD * usd_uah).toFixed(2)
    } else if (n == 2) {
        document.querySelector('.board16_field').innerText = 'Ваша сумма AZN: ' + (sumUSD * usd_azn).toFixed(2)
    }
}

let $btn16 = document.createElement('button')
document.body.append($btn16)
$btn16.innerText = 'Перевести по курсу'
$btn16.onclick = convertCourse

let $board16 = document.createElement('div')
$board16.classList.add('board16_field')
document.body.append($board16)

let $br16 = document.createElement('br')
document.body.append($br16)

/* ------------------ 17 --------------------- */

let $order_17 = document.createElement('span')
$order_17.classList.add('order_17')
document.body.append($order_17)
$order_17.innerText = '17.'


let countDiscount = () => {
    let sumPurchase = document.querySelector('.sumPurchase_field').value

    if (sumPurchase <= 199) {
        document.querySelector('.board17_field').innerText = 'Пока маловато для скидки...'
    }
    else if (sumPurchase >= 200 && sumPurchase <= 299) {
        document.querySelector('.board17_field').innerText = 'Сумма к оплате со скидкой 3% составит: ' + (sumPurchase - (sumPurchase * 0.03)).toFixed(2)
    } else if (sumPurchase >= 300 && sumPurchase <= 499) {
        document.querySelector('.board17_field').innerText = 'Сумма к оплате со скидкой 5% составит: ' + (sumPurchase - (sumPurchase * 0.05)).toFixed(2)
    } else if (sumPurchase >= 500) {
        document.querySelector('.board17_field').innerText = 'Сумма к оплате со скидкой 7% составит: ' + (sumPurchase - (sumPurchase * 0.07)).toFixed(2)
    }
}

let $field17 = document.createElement('input')
$field17.classList.add('sumPurchase_field')
document.body.append($field17)
$field17.setAttribute('type', 'text')
$field17.setAttribute('placeholder', 'Введите сумму покупки')

let $btn17 = document.createElement('button')
document.body.append($btn17)
$btn17.innerText = 'Рассчитать сумму со скидкой'
$btn17.onclick = countDiscount

let $board17 = document.createElement('div')
$board17.classList.add('board17_field')
document.body.append($board17)

let $br17 = document.createElement('br');
document.body.append($br17);

/* ------------------ 18 --------------------- */

let $order_18 = document.createElement('span')
$order_18.classList.add('order_18')
document.body.append($order_18)
$order_18.innerText = '18.'


let checkSize = () => {
    let lengthCircul = document.querySelector('.lengthCircul_field').value
    let perimeterSquare = document.querySelector('.perimeterSquare_field').value

    let circleDiameter = lengthCircul / Math.PI
    let squareSide = perimeterSquare / 4

    if (squareSide >= circleDiameter) {
        document.querySelector('.board18_field').innerText = 'Круг поместится в квадрате!'
    }
    else {
        document.querySelector('.board18_field').innerText = 'Круг не влезет, как ни крути... (('
    }
}

let $field18_1 = document.createElement('input')
$field18_1.classList.add('lengthCircul_field')
document.body.append($field18_1)
$field18_1.setAttribute('type', 'text')
$field18_1.setAttribute('placeholder', 'Введите длину окружности')

let $field18_2 = document.createElement('input')
$field18_2.classList.add('perimeterSquare_field')
document.body.append($field18_2)
$field18_2.setAttribute('type', 'text')
$field18_2.setAttribute('placeholder', 'Введите периметр квадрата')


let $btn18 = document.createElement('button')
document.body.append($btn18)
$btn18.innerText = 'Влезет ли круг в квадрат?'
$btn18.onclick = checkSize

let $board18 = document.createElement('div')
$board18.classList.add('board18_field')
document.body.append($board18)

let $br18 = document.createElement('br');
document.body.append($br18);

/* ------------------ 19 --------------------- */

let $order_19 = document.createElement('span')
$order_19.classList.add('order_19')
document.body.append($order_19)
$order_19.innerText = '19.'


// Вопрос №1

let $form19 = document.createElement('form')
$form19.classList.add('questions_form')
$form19.setAttribute('action', '#')

document.body.append($form19)

let $question1 = document.createElement('p')
$question1.classList.add('question1')
$form19.appendChild($question1)

let $h19_1 = document.createElement('h4')
$question1.appendChild($h19_1)
$h19_1.innerText = '1. Шмурдик боится как мышей, так и тараканов.'

let $option19_1_1 = document.createElement('input')
$option19_1_1.classList.add('question1-option1')
$option19_1_1.setAttribute('type', 'radio')
$option19_1_1.setAttribute('value', '1a')
$option19_1_1.setAttribute('name', 'question1')
$option19_1_1.id = 'question1-option1'
$form19.appendChild($option19_1_1)

let $label19_1_1 = document.createElement('label')
$label19_1_1.classList.add('equestion1-label1')
$label19_1_1.setAttribute('for', 'question1_option1')
$label19_1_1.innerText = 'a) шмурдик не боится тараканов;'
$form19.appendChild($label19_1_1)

let $br19_1 = document.createElement('br');
$form19.appendChild($br19_1);

let $option19_1_2 = document.createElement('input')
$option19_1_2.classList.add('question1-option2')
$option19_1_2.setAttribute('type', 'radio')
$option19_1_2.setAttribute('value', '1b')
$option19_1_2.setAttribute('name', 'question1')
$option19_1_2.id = 'question1-option2'
$form19.appendChild($option19_1_2)

let $label19_1_2 = document.createElement('label')
$label19_1_2.classList.add('equestion1-label2')
$label19_1_2.setAttribute('for', 'question1_option2')
$label19_1_2.innerText = 'b) шмурдик боится мышей;'
$form19.appendChild($label19_1_2)

let $br19_2 = document.createElement('br');
$form19.appendChild($br19_2);

let $option19_1_3 = document.createElement('input')
$option19_1_3.classList.add('question1-option3')
$option19_1_3.setAttribute('type', 'radio')
$option19_1_3.setAttribute('value', '1c')
$option19_1_3.setAttribute('name', 'question1')
$option19_1_3.id = 'question1-option3'
$form19.appendChild($option19_1_3)

let $label19_1_3 = document.createElement('label')
$label19_1_3.classList.add('equestion1-label3')
$label19_1_3.setAttribute('for', 'question1_option3')
$label19_1_3.innerText = 'c) шмурдик боится мышей больше, чем тараканов, но и тараканов боится тоже.'
$form19.appendChild($label19_1_3)

// Вопрос №2

let $question2 = document.createElement('p')
$question2.classList.add('question2')
$form19.appendChild($question2)

let $h19_2 = document.createElement('h4')
$question2.appendChild($h19_2)
$h19_2.innerText = '2. Известно, что грымзик обязательно или полосат, или рогат, или то и другое вместе.'

let $option19_2_1 = document.createElement('input')
$option19_2_1.classList.add('question2-option1')
$option19_2_1.setAttribute('type', 'radio')
$option19_2_1.setAttribute('value', '2a')
$option19_2_1.setAttribute('name', 'question2')
$option19_2_1.id = 'question2-option1'
$form19.appendChild($option19_2_1)

let $label19_2_1 = document.createElement('label')
$label19_2_1.classList.add('equestion2-label1')
$label19_2_1.setAttribute('for', 'question2_option1')
$label19_2_1.innerText = 'a) грымзик не может быть безрогим;'
$form19.appendChild($label19_2_1)

let $br19_3 = document.createElement('br');
$form19.appendChild($br19_3);

let $option19_2_2 = document.createElement('input')
$option19_2_2.classList.add('question2-option2')
$option19_2_2.setAttribute('type', 'radio')
$option19_2_2.setAttribute('value', '2b')
$option19_2_2.setAttribute('name', 'question2')
$option19_2_2.id = 'question2-option2'
$form19.appendChild($option19_2_2)

let $label19_2_2 = document.createElement('label')
$label19_2_2.classList.add('equestion2-label2')
$label19_2_2.setAttribute('for', 'question2_option2')
$label19_2_2.innerText = 'b) грымзик не может быть однотонным и безрогим одновременно;'
$form19.appendChild($label19_2_2)

let $br19_4 = document.createElement('br');
$form19.appendChild($br19_4);

let $option19_2_3 = document.createElement('input')
$option19_2_3.classList.add('question2-option3')
$option19_2_3.setAttribute('type', 'radio')
$option19_2_3.setAttribute('value', '2c')
$option19_2_3.setAttribute('name', 'question2')
$option19_2_3.id = 'question2-option3'
$form19.appendChild($option19_2_3)

let $label19_2_3 = document.createElement('label')
$label19_2_3.classList.add('equestion3-label3')
$label19_2_3.setAttribute('for', 'question2_option3')
$label19_2_3.innerText = 'c) грымзик не может быть полосатым и безрогим одновременно.'
$form19.appendChild($label19_2_3)

// Вопрос №3

let $question3 = document.createElement('p')
$question3.classList.add('question3')
$form19.appendChild($question3)

let $h19_3 = document.createElement('h4')
$question3.appendChild($h19_3)
$h19_3.innerText = '3. Если запырку отравить, то она сразу начнет пускать пузыри.'

let $option19_3_1 = document.createElement('input')
$option19_3_1.classList.add('question3-option1')
$option19_3_1.setAttribute('type', 'radio')
$option19_3_1.setAttribute('value', '3a')
$option19_3_1.setAttribute('name', 'question3')
$option19_3_1.id = 'question3-option1'
$form19.appendChild($option19_3_1)

let $label19_3_1 = document.createElement('label')
$label19_3_1.classList.add('equestion3-label1')
$label19_3_1.setAttribute('for', 'question3_option1')
$label19_3_1.innerText = 'a) если запырка пускает пузыри, то она была отравлена;'
$form19.appendChild($label19_3_1)

let $br19_5 = document.createElement('br');
$form19.appendChild($br19_5);

let $option19_3_2 = document.createElement('input')
$option19_3_2.classList.add('question3-option2')
$option19_3_2.setAttribute('type', 'radio')
$option19_3_2.setAttribute('value', '3b')
$option19_3_2.setAttribute('name', 'question3')
$option19_3_2.id = 'question3-option2'
$form19.appendChild($option19_3_2)

let $label19_3_2 = document.createElement('label')
$label19_3_2.classList.add('equestion3-label2')
$label19_3_2.setAttribute('for', 'question3_option2')
$label19_3_2.innerText = 'b) если запырку не отравить, то она не будет пускать пузыри;'
$form19.appendChild($label19_3_2)

let $br19_6 = document.createElement('br');
$form19.appendChild($br19_6);

let $option19_3_3 = document.createElement('input')
$option19_3_3.classList.add('question3-option3')
$option19_3_3.setAttribute('type', 'radio')
$option19_3_3.setAttribute('value', '3c')
$option19_3_3.setAttribute('name', 'question3')
$option19_3_3.id = 'question3-option3'
$form19.appendChild($option19_3_3)

let $label19_3_3 = document.createElement('label')
$label19_3_3.classList.add('equestion3-label3')
$label19_3_3.setAttribute('for', 'question3_option3')
$label19_3_3.innerText = 'c) если запырка не пускает пузыри, то она не отравлена.'
$form19.appendChild($label19_3_3)

let $br19_7 = document.createElement('br');
$form19.appendChild($br19_7);

let getPoints = () => {

    let getAnswer1 = () => {

        let z = document.getElementsByName('question1')

        for (let i = 0; i < z.length; i++) {

            if (z[0].checked) {
                return 0
            } else if (z[1].checked) {
                return 2
            } else if (z[2].checked) {
                return 0
            }
        }
    }

    let getAnswer2 = () => {

        let x = document.getElementsByName('question2')

        for (let i = 0; i < x.length; i++) {

            if (x[0].checked) {
                return 0
            } else if (x[1].checked) {
                return 2
            } else if (z[2].checked) {
                return 0
            }
        }
    }

    let getAnswer3 = () => {

        let y = document.getElementsByName('question3')

        for (let i = 0; i < y.length; i++) {

            if (y[0].checked) {
                return 0
            } else if (y[1].checked) {
                return 0
            } else if (y[2].checked) {
                return 2
            }
        }
    }

    document.querySelector('.board19_field').innerText = `Количество набранных баллов: ` + `${getAnswer1() + getAnswer2() + getAnswer3()}`
}

let $btn19 = document.createElement('button')
$btn19.classList.add('btn_19')
$btn19.setAttribute('type', 'button')
$form19.appendChild($btn19)
$btn19.innerText = 'Отправить'
$btn19.onclick = getPoints

let $br19_8 = document.createElement('br');
document.body.appendChild($br19_8);

let $board19 = document.createElement('div')
$board19.classList.add('board19_field')
document.body.append($board19)

