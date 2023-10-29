import AsyncStorage from "@react-native-async-storage/async-storage";
import * as storage from "../Utils/storage";

export async function SavePlayer(player){
    player.storyteller = false;
    player.points = 0;
    player.votado = "";
    await storage.storeData(player.name, player);
}

export async function UpdatePlayer(player){
    await storage.editData(player.name, player);
}

export async function GetPlayer(name){
    let player =  await storage.getData(name);
    if(!player)
        console.error('Player doesnt exist '+ name, code);
    return player;
}

export async function GetAllPlayers(){
    let playerNames =  await storage.getAllKeys();
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
    if(player)
        await storage.removeData(name);
    else
        console.error('Player doesnt exist '+ name, code);
}

export async function ResetAll(){
    let data =  await storage.getAllKeys();
    data = await AsyncStorage.clear()
}

export async function CreateGame(players){
    players[0].storyteller = true;
}

export async function GetStoryteller(players){
    var storyteller = players.find(function(p) {
        return p.storyteller == true;
    })
    return storyteller;
}

export async function GetOtherPlayers(players){
    var others = players.filter(function(p) {
        return p.storyteller == false;
    })
    return others;
}

export async function ResetPoints(players){
    players.forEach(player => {
        player.points = 0
        storage.editData(player.name, players);
    })
    return players;
}

export async function PointsSum(players){
    var players = await GetAllPlayers()
    var storyteller = players.find(player => player.storyteller);

    function GetExtraPoints(player) {
        players.forEach(element => 
            element.name == player.votado && element.name != storyteller.name ? element.points += 1 : element = element)
    }

    var acertos = [];
    var storytellerloses = false;
    players.forEach(element => {
        element.votado == storyteller.name ? acertos.push(element) : acertos = acertos;
    });
    acertos.length == 0 || acertos.length == players.length - 1 ? storytellerloses = true : storytellerloses = false

    if(storytellerloses) {
        players.forEach(element => {
            element.points += 2;
        });
        storyteller.points -= 2;
    }

    for(i=0; i<players.length; i++) {
        if(players[i].votado == storyteller.name)
            players[i].points += 3; 
            GetExtraPoints(players[i])
    };
    console.log(players)
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
    var players = GetAllPlayers();
    for (let i = 0; i < players.length; i++) {
        if (players[i].storyteller === true) {
            players[i + 1].storyteller = true;
            players[i].storyteller = false;
            break;
        }
    }

    players.forEach(element => {
        element.votado == "";
    });

}