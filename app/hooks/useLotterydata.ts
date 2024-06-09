import { useQuery } from "@tanstack/react-query";
import GetLotterData from "../utils/GetLotterData";

type lotteryRes = {
    "result": boolean,
    "code": number,
    "message": string,
    "data": lottery
}

export type poolAmount = {
    "poolId": string,
    "lotteryId": string,
    "coinId": string,
    "coinSymbol": string,
    "coinName": string,
    "roundId": string,
    "poolAmount": string,
    "createdAt": string
}

type lottery = {
    "lotteryName": string,
    "lotteryPrice": number,
    "roundNumber": number,
    "previousWinningticket": number[],
    "poolAmount": poolAmount[],
    "winningPot": number,
    "currentPool": number,
    "nextDraw": number,
    "ticketCount": number,
    "prevTicketCount": number,
    "showPoolDetail": boolean
}

export const data: lotteryRes = {
    "result": true,
    "code": 1000,
    "message": "Successfully got Lottery Info",
    data: {
        "lotteryName": "COSMIC",
        "lotteryPrice": 1,
        "roundNumber": 0,
        "previousWinningticket": [
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "poolAmount": [
            {
                "poolId": "bcaa9217-1b20-11ee-959b-0242ac110004",
                "lotteryId": "bcaa21f1-1b20-11ee-959b-0242ac110004",
                "coinId": "bc9cc4f7-1b20-11ee-959b-0242ac110004",
                "coinSymbol": "INAE",
                "coinName": "iNAE",
                "roundId": "bcaa6d53-1b20-11ee-959b-0242ac110004",
                "poolAmount": "0.00000000",
                "createdAt": "2023-07-05T15:43:11.326262+05:00"
            },
            {
                "poolId": "bcaa9217-1b20-11ee-959b-0242ac110005",
                "lotteryId": "bcaa21f1-1b20-11ee-959b-0242ac110005",
                "coinId": "bc9cc4f7-1b20-11ee-959b-0242ac110005",
                "coinSymbol": "BTC",
                "coinName": "BTC",
                "roundId": "bcaa6d53-1b20-11ee-959b-0242ac110005",
                "poolAmount": "0.00000000",
                "createdAt": "2023-07-05T15:43:11.326262+05:00"
            }
        ],
        "winningPot": 989908893172,
        "currentPool": 0,
        "nextDraw": 421,
        "ticketCount": 0,
        "prevTicketCount": 0,
        "showPoolDetail": false
    }
}
export function useLotteryData(lotteryname: string) {
    const LotterData = useQuery<lotteryRes>({
        queryKey: ['lottery'],
        queryFn: () => GetLotterData.getData(lotteryname),
        initialData: data,
    })
    return LotterData
}