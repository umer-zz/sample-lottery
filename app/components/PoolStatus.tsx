import { useState } from "react";
import { poolAmount } from "../hooks/useLotterydata";

const PoolStatus = ({ data }: { data: poolAmount[] }) => {
    let [showPool, setshowPool] = useState(true)
    return (
        <div className="px-4">
            {showPool && <>
                <p className="m-0 py-3">Current Pool Status</p>
                {data.map((ele) => <div key={ele.coinId} className="d-flex justify-content-between align-items-center">
                    <img style={{ width: 16, height: 16, aspectRatio: '1 / 1' }} src="/bitcoin.png" alt="" srcSet="" />
                    <p data-testid="symname">{ele.poolAmount} {ele.coinSymbol}</p>
                </div>)}
                <hr />
                <div className="d-flex justify-content-end">
                    <span className="me-4" style={{ fontSize: '1.5rem',color:'grey ' }}>≈</span>
                    <div className="d-flex align-items-baseline">
                        <h2>989,908,893,172</h2>
                        <small className="ms-2">LUCK!</small>
                    </div>
                </div>
            </>}
            <div data-testid="show-btn" className="text-center" onClick={() => setshowPool(!showPool)}>
                <i className={`fa-solid fa-caret-${showPool ? 'up' : 'down'}`}></i> {showPool ? 'Close' : 'Current Pool Status'}
            </div>
        </div>
    );
}

export default PoolStatus;