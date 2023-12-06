const pianoKeys = document.querySelectorAll(".piano-keys .key"); //Vai pegar as teclas
const volumeSlider = document.querySelector(".volume-slider input"); //Volume
const keysCheck = document.querySelector(".keys-check input");

let mapedKeys = []; //Criado com o intuito de n dar erro quando uma tecla diferente for clicada

let audio = new Audio("src/tunes/a.wav")

const playTune = (key) => {
    audio.src = `src/tunes/${key}.wav`;
    audio.play();

    //Para ter o efeito de sombredo pelo teclado
    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active"); //adiciona e depois tira
    setTimeout(()=> {
        clickedKey.classList.remove("active");
    },150);
}

pianoKeys.forEach((key)=> { //Para cada chave                   
    key.addEventListener("click",()=> playTune(key.dataset.key));//dataset.key pega o data-key do html
    mapedKeys.push(key.dataset.key);
})
//(e)-- event
document.addEventListener("keydown",(e) => { //quando pressionar o teclado
    if(mapedKeys.includes(e.key)){
        playTune(e.key); //Pega a tecla que esta sendo pressionada 
    }
});

const handleVolume = (e)=>{
    audio.volume = e.target.value;//Vai pegar o valor do volume
};

const showHideKeys = ()=>{
    pianoKeys.forEach(key => key.classList.toggle("hide")); //Quando clicar vai coloca todas a teclas como hide
}               //toggle - verifica se tem aquela classe na lista de classes daquele objeto, se n tiver
                //  ele adiciona, e se tiver ele remove.
volumeSlider.addEventListener("input", handleVolume);
keysCheck.addEventListener("click", showHideKeys);