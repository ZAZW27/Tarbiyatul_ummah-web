import { Request, Response} from 'express'; 

import * as marketService from '../services/market.service.js'; 

export const fetchCatalog = async (req: Request, res: Response) => {
    try {
        const items = await marketService.getMarketItems(); 
        res.status(200).json(items); 
    }catch (error){
        res.status(500).json({error: "Failed to fetch market items"}); 
    }
}; 

export const buyItem = async (req: Request, res: Response)=> {
    try{
        const { itemId, quantity} = req.body; 

        const errors: string[] = []; 

        if(!itemId) errors.push("Invalid item ID"); 
        if(!quantity) errors.push("Invalid item Quantity"); 
        if(quantity <= 0) errors.push("Quantity should be more than 0!"); 

        if(errors.length > 0){
            return res.status(400).json({
                error: errors
            }); 
        }
    }
}