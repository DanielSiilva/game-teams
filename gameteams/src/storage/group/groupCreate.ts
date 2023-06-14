import AsyncStorage from '@react-native-async-storage/async-storage';

import { GROUP_COLLECTION } from '@storage/storageConfig';
import { groupsGetAll } from './groupGetAll';

export async function groupCreate(newGroup: string) {
  try {
    const storedGroups = await groupsGetAll();
    const storage = JSON.stringify([...storedGroups, newGroup])
    
                              // Chave, valor => Precisa ser uma string
    await AsyncStorage.setItem(GROUP_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}