import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export async function storeData(key,value) {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error("error saving data" + key, e)
  }
};

export async function editData(key,value) {
  try {
    if(!key) {
      Alert.alert("Não pode alterar o nome do jogador")
    } else {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.mergeItem(key, jsonValue);
    }
  } catch (e) {
    console.error("error saving data" + key, e)
  }
};

export async function getData(key) {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error("error getting data " + key, e)
  }
};

export async function removeData(key) {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.error("error removing data " + key, e)
  }
};

export async function getAllKeys() {
  try {
    const arr = await AsyncStorage.getAllKeys()
    const filteredArr = arr.filter((nome) => !nome.includes("EXPO"));
    return filteredArr
  } catch(e) {
    console.error("error no data", e)
  }
}
