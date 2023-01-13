import AsyncStorage from "@react-native-async-storage/async-storage";
import * as storage from "../Utils/storage";

export async function SavePlayer(player){
    player.storyteller = false;
    player.points = 0;
    console.log(player)
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
    return players.map(([key, value]) => JSON.parse(value));
}

export async function DeletePlayer(name){
    let player =  await storage.getData(name);

    if(player)
        await storage.removeData(name);
    else
        console.error('Player doesnt exist '+ name, code);
}