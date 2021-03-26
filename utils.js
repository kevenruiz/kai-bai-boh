export function cpuKaiBaiBoh() {
    const randomNumber = Math.ceil(Math.random() * 3);
    if (randomNumber === 1) return 'scissors';
    if (randomNumber === 2) return 'rock';
    if (randomNumber === 3) return 'paper';
}

export function didUserWin(player, computer) {
    if (player === computer) return 'draw';
    if (player === 'paper' && computer === 'rock') return 'win';
    if (player === 'paper' && computer === 'scissors') return 'loss';
    if (player === 'scissors' && computer === 'paper') return 'win';
    if (player === 'scissors' && computer === 'rock') return 'loss';
    if (computer === 'scissors' && player === 'rock') return; 'win';
    if (computer === 'paper' && player === 'rock') return; 'loss';


}

