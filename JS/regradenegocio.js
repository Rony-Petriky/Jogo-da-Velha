//regras do jogo

let tabuleiro = ["", "", "", "", "", "", "", "", ""];
let playerTime = 0;
let simbolos = ["o", "x"];
let gameover = false;



function handleMove(position) {
	
	if (gameover) {
		return;
	}
	if(tabuleiro[position] == ''){

	tabuleiro[position] = simbolos[playerTime];

	gameover = isWin();
	if (gameover == false) {

		if(playerTime == 0){
			playerTime = 1;
			}else{
				playerTime = 0;
			}
		}
	}
	return gameover;
}
function isWin(){
	let winStates=[
		[0,1,2],
		[3,4,5],
		[6,7,8],
		[0,3,6],
		[1,4,7],
		[2,5,8],
		[0,4,8],
		[2,4,6],]
			
			for (var i = 0; i < winStates.length; i++) {
			let sqr = winStates[i]
			let pos1 = sqr[0];
			let pos2 = sqr[1];
			let pos3 = sqr[2];


				if(tabuleiro[pos1] == tabuleiro[pos2] && 
					tabuleiro[pos1] == tabuleiro[pos3] &&
					tabuleiro[pos1] != ""){


					return true;
				}
		}return false;


}
