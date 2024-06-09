const NextDraw = ({data}:{data:number}) => {
    let nextDraw = new Date(data * 1000).toISOString().slice(11, 19);
    return (
        <div className="px-4 py-2 d-flex align-items-center justify-content-between text-light" style={{ backgroundColor: 'var(--accent)' }}>
            <div className="d-flex align-items-center">
                <p className="m-0" style={{ lineHeight: '1rem' }}>Next <br /> Draw</p>
                <div className="mx-4">
                    <i className="fa-regular fa-clock me-2"></i>
                    <strong>{nextDraw}</strong>
                </div>
            </div>
            <button className="border-0 rounded" style={{ width: 100, color: 'var(--accent)' }}>Play</button>
        </div>
    );
}

export default NextDraw;