import AsyncStorage from "@react-native-async-storage/async-storage";
import * as storage from "../Utils/storage";

export async function SavePlayer(name, color, storyteller, points){

    let player = {name: name, color: color,storyteller : storyteller, points: points}

    console.log(player)
    await storage.storeData(name,player);
}

export async function UpdatePlayer(name, color, storyteller, points){

    let player = {name: name, color: color, points: points}

    await storage.editData(name, player);
}

export async function GetPlayer(name){

    let player =  await storage.getData(name);

    if(!player)
        console.error('Player doesnt exist '+ name, code);

    return player;
}

export async function GetAllPlayers(){
    playerNames =  await storage.getAllKeys();

    playerNames = playerNames.filter(name => !name.includes("game"));

    return await AsyncStorage.multiGet(playerNames)
}

export async function DeletePlayer(name){

    let player =  await storage.getData(name);

    if(player)
        await storage.removeData(name);
    else
        console.error('Player doesnt exist '+ name, code);
}