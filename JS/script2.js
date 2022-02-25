document.addEventListener("DOMContentLoaded", ()=>{
	let caixas = document.querySelectorAll(".caixa");
	
	caixas.forEach((caixa)=>{
		caixa.addEventListener("click",handleClick);
	})
})

function handleClick(event) {
	let caixa = event.target;
	let position = caixa.id;

	if(handleMove(position)){
	setTimeout( () => {alert("O jogo acabou - vencedor foi ( " +simbolos[playerTime] +" )")}, 10);
	
	}
	updatCaixa(position);

}
function updatCaixa(position) {
	let caixa = document.getElementById(position.toString());
	let simbolos = tabuleiro[position];
	caixa.innerHTML = "<div class ='" + simbolos + "'></div>";
}
function reiniciar() {
		let caixas = document.querySelectorAll(".caixa");
	caixas.forEach((caixa)=>{
			caixa.innerHTML = "";})
			tabuleiro = ["", "", "", "", "", "", "", "", ""];
			gameover = false;
		}
	

	
