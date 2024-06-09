const WinningPot = ({ data }: { data: number }) => {
    return (
        <>
            <div className="d-flex px-4 pt-3 pb-2 text-light" style={{ gap: '1rem' }}>
                <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: 35, height: 'auto', backgroundColor: '#595857', aspectRatio: '1 / 1' }}>15</div>
                <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: 35, height: 'auto', backgroundColor: '#595857', aspectRatio: '1 / 1' }}>26</div>
                <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: 35, height: 'auto', backgroundColor: '#595857', aspectRatio: '1 / 1' }}>20</div>
                <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: 35, height: 'auto', backgroundColor: 'var(--accent)', aspectRatio: '1 / 1' }}>19</div>
            </div>
            <div className="px-4 align-items-baseline d-flex justify-content-between pb-2">
                <p>Winning Pot</p>
                <div className="d-flex align-items-baseline">
                    <h2>{data}</h2>
                    <small className="ms-2">LUCK!</small>
                </div>
            </div>
        </>
    );
}

export default WinningPot;