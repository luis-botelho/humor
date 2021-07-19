const pokeName = document.querySelector('.name')
const pokeDescription = document.querySelector('.description')
const pokeImg = document.querySelector('.active')
// botões
const typeWater = document.querySelector('.water') 
const typeEletric = document.querySelector('.eletric')
const typeFire = document.querySelector('.fire')
const typePsychic = document.querySelector('.psychic')
const typeDark = document.querySelector('.dark')
const typeGrass = document.querySelector('.grass')
const typeIce = document.querySelector('.ice')
const typeFairy = document.querySelector('.fairy')
const typeNormal = document.querySelector('.normal')

typeWater.addEventListener('click', () =>{
    pokeName.innerText = 'Vaporeon'
    pokeDescription.innerText = 'Quando as barbatanas de Vaporeon começam a vibrar, é um sinal de que a chuva virá dentro de algumas horas.'
    pokeImg.src = './assets/img/vaporeon.png'
})
typeEletric.addEventListener('click', () =>{
    pokeName.innerText = 'Jolteon'
    pokeDescription.innerText = 'Se ele estiver com raiva ou assustado, o pelo de todo o corpo eriçar-se-á como agulhas afiadas que perfuram os inimigos.'
    pokeImg.src = './assets/img/jolteon.png'
})
typeFire.addEventListener('click', () => {
    pokeName.innerText = 'Flareon'
    pokeDescription.innerText = 'Depois de armazenar calor suficiente, a temperatura corporal deste Pokémon pode chegar a até 1.700 °F.'
    pokeImg.src = './assets/img/flareon.png'
})
typePsychic.addEventListener('click', () =>{
    pokeName.innerText = 'Espeon'
    pokeDescription.innerText = 'Ao ler as correntes de ar, ele pode prever coisas como o clima ou o próximo movimento de seu inimigo.'
    pokeImg.src = './assets/img/espeon.png'
})
typeDark.addEventListener('click' , () =>{
    pokeName.innerText = 'Umbreon'
    pokeDescription.innerText = 'Quando este Pokémon fica com raiva, seus poros secretam um suor venenoso, que espirra nos olhos do oponente.'
    pokeImg.src = './assets/img/umbreon.png'
})
typeGrass.addEventListener('click', () =>{
    pokeName.innerText = 'Leafeon'
    pokeDescription.innerText = 'Gálários preferem o aroma distinto que vem das folhas deste Pokémon. Existe um perfume popular feito com esse perfume.'
    pokeImg.src = './assets/img/leafeon.png'
})
typeIce.addEventListener('click', () =>{
    pokeName.innerText = 'Glaceon'
    pokeDescription.innerText = 'Qualquer um que se tornar cativado pela beleza da neve que Glaceon cria será congelado antes que perceba.'
    pokeImg.src = './assets/img/glaceon.png'
})
typeFairy.addEventListener('click', () => {
    pokeName.innerText = 'Sylveon'
    pokeDescription.innerText ='Ao liberar ondas de apagamento de inimizade de suas antenas em forma de fita, Sylveon interrompe qualquer conflito.'
    pokeImg.src = './assets/img/sylveon.png'
})
typeNormal.addEventListener('click',()=>{
    pokeName.innerText = 'Eevee'
    pokeDescription.innerText = 'Ele tem a capacidade de alterar a composição de seu corpo para se adequar ao ambiente circundante.'
    pokeImg.src = './assets/img/eevee.png'
})