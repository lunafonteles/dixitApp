import AsyncStorage from "@react-native-async-storage/async-storage";
import * as storage from "../Utils/storage";

export async function SavePlayer(player){
    player.storyteller = false;
    player.points = 0;
    player.voted = "";
    await storage.storeData(player.name, player);
}

export async function UpdatePlayer(player){
    await storage.editData(player.name, player);
}

export async function GetPlayer(name){
    let player =  await storage.getData(name);
    if(!player) return
    return player;
}

export async function GetAllPlayers(){
    let result =  await storage.getAllKeys();
    let playerNames = result.filter(element => element != "turn")
    playerNames = playerNames.filter(name => !name.includes("game"));
    let players = await AsyncStorage.multiGet(playerNames)
    return players.map(([key, value]) => {
        try {
            return JSON.parse(value);
        } catch (error) {
            console.error("Error parsing JSON:", error);
            return null; 
        }
    }).filter(player => player !== null);
}

export async function DeletePlayer(name){
    let player =  await storage.getData(name);
    if(player) await storage.removeData(name);
    else return
}

export async function ResetAll(){
    let data =  await storage.getAllKeys();
    data = await AsyncStorage.clear()
}

export async function CreateGame(players){
    players[0].storyteller = true;
    SaveTurn(1)
}

export async function GetStoryteller(players){
    var storyteller = players.find(function(p) {
        return p.storyteller == true;
    })
    storyteller.voted = "";
    return storyteller;
}

export async function GetOtherPlayers(players){
    var others = players.filter(function(p) {
        return p.storyteller == false;
    })
    others.forEach( p => {
        p.voted = "";
        UpdatePlayer(p)
    })
    return others;
}

export async function ResetGameData(players){
    players.forEach(player => {
        player.points = 0
        player.voted = ''
        player.storyteller = false
        storage.editData(player.name, player);
    })
    return players;
}

export async function PointsSum(){
    var players = await GetAllPlayers()
    var storyteller = players.find(player => player.storyteller);

    function GetExtraPoints(player) {
        players.forEach(element => player.name == element.voted && player.name != storyteller.name ? player.points += 1 : player = player)
    }

    var acertos = [];
    var storytellerloses = false;
    players.forEach(element => {
        element.voted == storyteller.name ? acertos.push(element.name) : acertos = acertos;
    });
    storytellerloses = acertos.length == 0 || acertos.length == (players.length - 1) ?  true : false

    if(storytellerloses) {
        players.forEach(element => {
            if(element.storyteller == false) {
                element.points += 2;
                GetExtraPoints(element);
            }
        });
    } else {
        for(let i=0; i<players.length; i++) {
            if(players[i].voted == storyteller.name || players[i].storyteller) {
                players[i].points += 3; 
                GetExtraPoints(players[i])
            }
        };
    }
    return players
}

export async function clearAsyncStorage() {
    try {
      await AsyncStorage.clear();
      console.log('AsyncStorage foi limpo com sucesso.');
    } catch (error) {
      console.error('Erro ao limpar AsyncStorage:', error);
    }
  }

export async function ChangeTurn(players){
    for (let i = 0; i <= players.length; i++) {
        if (players[i].storyteller === true) {
            const nextIndex = (i + 1) % players.length; 
            players[nextIndex].storyteller = true;
            players[i].storyteller = false;
            break;
        }
    }
    return players
}

export async function SaveTurn(turn) {
    await storage.storeData("turn", turn);
}

export async function GetTurn() {
    let turn =  await storage.getData("turn");
    if(!turn) return
    return turn;
}

export async function FinishGame() {
    let players = await GetAllPlayers();
    let winners = [];
    let maxPoints = -1;
    players.filter(player => {
        if (player.points === maxPoints) {
            winners.push(player.name);
          } else if (player.points > maxPoints) {
            maxPoints = player.points;
            winners = [player.name];
          }
    })
    return winners
}