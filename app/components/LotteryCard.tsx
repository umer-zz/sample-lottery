"use client"
import { useState } from "react";
import { useLotteryData } from "../hooks/useLotterydata";
import PoolStatus from "./PoolStatus";
import WinningPot from "./WiningPot";
import PastResult from "./PastResult";
import NextDraw from "./NextDraw";

const LotteryCard = ({ LotteryName }: { LotteryName: string }) => {
    const LotteryData = useLotteryData(LotteryName)
    let [zoom, setzoom] = useState(true)

    return (
        <div className={`pt-3 mb-3 rounded ${LotteryName}`} style={{ backgroundColor: 'var(--accent-light)' }}>
            <div className="px-4 d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                    <h2 className="me-4 " style={{ color: 'var(--accent)' }}>{LotteryName}</h2>
                    <span style={{ color: 'var(--accent)' }}>{zoom ? 'No. 23456' : 'Past 5 results'}</span>
                </div>
                <i onClick={() => setzoom(!zoom)} style={{ fontSize: '1.5rem', color: 'var(--accent)' }} className={`fa-solid fa-magnifying-glass-${zoom ? 'plus' : 'minus'}`}></i>
            </div>
            {
                zoom ?
                    <WinningPot data={LotteryData.data.data.winningPot}></WinningPot>
                    :
                    <PastResult></PastResult>
            }
            <NextDraw data={LotteryData.data.data.nextDraw}></NextDraw>
            <PoolStatus data={LotteryData.data.data.poolAmount}></PoolStatus>
        </div>
    );
}

export default LotteryCard;