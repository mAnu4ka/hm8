let but_shose1 = document.querySelector('.mq1')
let but_shose2 = document.querySelector('.mq')
let img = document.querySelector('img')
let but = document.querySelector('.but_num1')
let but2 = document.querySelector('.but_num2')
let but3 = document.querySelector('.but_num3')
let but4 = document.querySelector('.but_num4')
let pricee = document.querySelector('.pricee')
let p = document.querySelector('h6')
let defolt_price = 1.999
let srcc = {
    md1: './mbp14-spacegray-select-2021101.png',
    md: './mbp14-silver-select-202110 1.png'
}
const active = (src, element, element2, text) => {
    p.innerText = text
    element.classList.add('active')
    element.classList.remove("passive")
    element2.classList.add('passive')
    element2.classList.remove("active")
    img.setAttribute('src', src)
}
but_shose1.onclick = function () {
    active(srcc.md1, but_shose1, but_shose2, 'White')
}

but_shose2.onclick = function () {
    active(srcc.md, but_shose2, but_shose1,'Space Grey')
}
but.onclick = function () {
    price(0, but, but2, but3, but4)
}
but2.onclick = function () {
    price(0.200, but2, but, but3, but4)
}
but3.onclick = function () {
    price(0.600, but3, but, but2, but4)
}
but4.onclick = function () {
    price(1.200, but4, but, but2, but3, )
}
const price = (money, element, element2, element3, element4) => {
    defolt_price = 1.999
    defolt_price += money
    pricee.innerText = '$' + defolt_price
    element.classList.add('active_price')
    element.classList.remove('passive_price')
    element2.classList.remove('active_price')
    element2.classList.add('passive_price')
    element3.classList.remove('active_price')
    element3.classList.add('passive_price')
    element4.classList.remove('active_price')
    element4.classList.add('passive_price')
}