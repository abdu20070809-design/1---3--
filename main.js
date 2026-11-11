

const title = document.querySelector('#title');
const btnEl = document.querySelector('#btn');
const resultEL = document.querySelector('#result');
const nameInputEL = document.querySelector('#nameInput')
const numberInputEl = document.querySelector('#numberInput')

function func(str){
    return str.split(' ').map(item => item[0].toUpperCase() + item.slice(1).toLowerCase()).join(' ')
}

btnEl.addEventListener('click', () => {
   const name =  nameInputEL.value.trim();
   if( name === '') {
   
   resultEL.textContent = 'Введите название'
   resultEL.className = 'error'
   return 
   }

   if(name.toLowerCase().includes('test')){
    resultEL.textContent = 'Такое название нельзя';
    resultEL.className = 'error';
    return
   }

   const formate = func(name)

   const abb = name.split(' ').map(item => item[0].toUpperCase()).join(' ')

   const length = name.replaceAll('','').length

   const number = numberInputEl.value.trim();

   const checkNumber = Number(number)

   if(number === '' || Number.isNaN(checkNumber)){
    resultEL.textContent = 'Введите цену';
    resultEL.className = 'error'
    return
   }

   const promocode = Math.floor(Math.random() * 90) + 10 

   const price = checkNumber.toFixed(2)

   let discont = 'без скидки';
   let cardClass = 'newbie';
   if(checkNumber >= 1000){
    discont = 'Скидка 10%'; cardClass = 'legend';
   } else if (checkNumber >= 500){
    discont = 'Скидка 5%'; cardClass = 'pro';
   }

   resultEL.className = cardClass;
   resultEL.innerHTML = `name: ${formate}, Аббревиатура: ${abb},длина: ${length}, цена: ${price}, промокод: ${promocode}, скидка: ${discont}`



})

nameInputEL.addEventListener('keydown',(e) => {
    if(e.key === 'Enter'){
        btnEl.click()
    }
})