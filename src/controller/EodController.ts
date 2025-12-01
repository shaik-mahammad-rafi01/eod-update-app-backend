import type { Request, Response } from "express";
import { getAllEods } from "../services/EodService.js";

export const getAllEodUpdates = async(req:Request , res : Response)=>{
    try{
        const allEods = await getAllEods();
        res.status(200).json(allEods)
    }
    catch(error){
        res.status(500).json({error : "failed to fetch Eod Updates"})
    }
}