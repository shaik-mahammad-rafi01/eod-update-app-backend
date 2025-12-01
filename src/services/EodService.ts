import { db } from "../config/db_config.js";
import { EodUpdatesData } from "../Data/EodUpdatesData.js";
const EodUpdatesCollection = db.collection("Eods");

export const getAllEods = async()=>{
    const EodUpdates = await EodUpdatesCollection.get();
    return EodUpdatesData;
}