//Props dos jogadores
const player1 = {
    NOME: 'Mario',
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 0,
}

const player2 = {
    NOME: 'DK',
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 0,
}

const player3 = {
    NOME: 'Peach',
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 2,
    PONTOS: 0,
}

const player4 = {
    NOME: 'Yoshi',
    VELOCIDADE: 2,
    MANOBRABILIDADE: 4,
    PODER: 3,
    PONTOS: 0,
}

const player5 = {
    NOME: 'Bowser',
    VELOCIDADE: 5,
    MANOBRABILIDADE: 2,
    PODER: 5,
    PONTOS: 0,
}

const player6 = {
    NOME: 'DK',
    VELOCIDADE: 5,
    MANOBRABILIDADE: 2,
    PODER: 5,
    PONTOS: 0,
}

//array dos jogadores
const players = [player1, player2, player3, player4, player5, player6];

//função para pegar players aleatoriamente sem repetir
function getRandomPlayers(players) {
    let firstIndex = Math.floor(Math.random() * players.length);
    let secondIndex;
    do {
        secondIndex = Math.floor(Math.random() * players.length);
    } while (secondIndex === firstIndex);
    return [players[firstIndex], players[secondIndex]];
}

//função de rodar o dado
async function rollDice(){
    return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock(){
    let random = Math.random();
    let result;

    switch(true){
        case random < 0.33:
            result = 'RETA'
            break;
        case random < 0.66:
            result = 'CURVA'
            break;
        default:
            result = 'CONFRONTO'
            break;
        }
        return result;
    }

async function logRollResult(characterName, block, diceResult, attribute){
    console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`)
}

async function playRaceEngine(character1, character2){
    for(let round = 1; round <= 5; round++){
        console.log(`🏁 Rodada ${round}`)

        //sorter os dados
        let block = await getRandomBlock();
        console.log(`Bloco: ${block}`);
        //rolar os dados
        let dice1 = await rollDice();
        let dice2 = await rollDice();

        //teste de habilidade
        let totalTestSkill1 = 0 
        let totalTestSkill2 = 0 

        if(block === 'RETA'){
            totalTestSkill1 = dice1 + character1.VELOCIDADE;
            totalTestSkill2 = dice2 + character2.VELOCIDADE;

            await logRollResult(character1.NOME, "velocidade", dice1, character1.VELOCIDADE);
            await logRollResult(character2.NOME, "velocidade", dice2, character2.VELOCIDADE);
        }
        if(block === 'CURVA'){
            totalTestSkill1 = dice1 + character1.MANOBRABILIDADE;
            totalTestSkill2 = dice2 + character2.MANOBRABILIDADE;

            await logRollResult(character1.NOME, "manobrabilidade", dice1, character1.MANOBRABILIDADE);
            await logRollResult(character2.NOME, "manobrabilidade", dice2, character2.MANOBRABILIDADE);
        }
        if(block === 'CONFRONTO'){
            let powerResult1 = dice1 + character1.PODER;
            let powerResult2 = dice2 + character2.PODER;

            console.log(`${character1.NOME} confrontou com ${character2.NOME} ☠️`)
            await logRollResult(character1.NOME, "poder", dice1, character1.PODER);
            await logRollResult(character2.NOME, "poder", dice2, character2.PODER);


            if(powerResult1 > powerResult2 && character2.PONTOS > 0){
                console.log(`${character1.NOME} venceu o confronto! ${character2.NOME} perdeu um ponto 🐢`);
                character2.PONTOS --;
            }
            
            if(powerResult2 > powerResult1 && character1.PONTOS > 0){
                console.log(`${character2.NOME} venceu o confronto! ${character1.NOME} perdeu um ponto 🐢`);
                character1.PONTOS --;
            }

            console.log(powerResult1 === powerResult2 ? "Confronto empatou, ninguem perde ponto" : "")    
            

        }
        //Esse if verifica o vencedor e atribui um ponto a ele
        if(totalTestSkill1 > totalTestSkill2){
            console.log(`${character1.NOME} ganhou um ponto!`);
            character1.PONTOS++
        } else if (totalTestSkill2 > totalTestSkill1){
            console.log(`${character2.NOME} ganhou um ponto!`)
            character2.PONTOS++
        }

        console.log("-------------------------------------------------")
        }

}

async function declareWinner(character1, character2){
    console.log("Resultado final:")
    console.log(`${character1.NOME}: ${character1.PONTOS} ponto(s)`)
    console.log(`${character2.NOME}: ${character2.PONTOS} ponto(s)`)

    if(character1.PONTOS > character2.PONTOS){
        console.log(`\n${character1.NOME} venceu a corrida 🏆`)
    }else if(character2.PONTOS > character1.PONTOS){
        console.log(`\n${character2.NOME} venceu a corrida 🏆`)
    }else{
        console.log("A corrida terminou em empate!")
    }
}

//Para deixar a função para rodar automaticamente basta colocar a função toda dentro de uma função anônima auto-invocada () e no fim chamar novamente ()
(async function main(){
    const [playerA, playerB] = getRandomPlayers(players);
    console.log(`🏁🚨 Corrida entre ${playerA.NOME} e ${playerB.NOME} começando`)

    await playRaceEngine(playerA, playerB)
    await declareWinner(playerA, playerB)
})()




