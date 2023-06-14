import AsyncStorage from '@react-native-async-storage/async-storage';

import { GROUP_COLLECTION } from '@storage/storageConfig';
import { groupsGetAll } from './groupGetAll';

export async function groupCreate(newGroup: string) {
  try {
    const storedGroups = await groupsGetAll();
                              // Chave, valor => Precisa ser uma string
    await AsyncStorage.setItem(GROUP_COLLECTION, newGroup);
  } catch (error) {
    throw error;
  }
}