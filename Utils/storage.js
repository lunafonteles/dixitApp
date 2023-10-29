import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key,value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error("error saving data" + key, e)
  }
};

export const editData = async (key,value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.mergeItem(key, jsonValue);
  } catch (e) {
    console.error("error saving data" + key, e)
  }
};

export const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error("error getting data " + key, e)
  }
};

export const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.error("error removing data " + key, e)
  }
};

export const getAllKeys = async () => {
  try {
    const arr = await AsyncStorage.getAllKeys()
    const filteredArr = arr.filter((nome) => !nome.includes("EXPO"));
    return filteredArr
  } catch(e) {
    console.error("error no data", e)
  }
}
