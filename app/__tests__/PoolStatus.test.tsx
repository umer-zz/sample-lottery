import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom/vitest"
import PoolStatus from '../components/PoolStatus'
import { userEvent } from '@testing-library/user-event'
import { poolAmount } from '../hooks/useLotterydata'

test('show pool status', async () => {
    let data: poolAmount[] = [{
        "poolId": "bcaa9217-1b20-11ee-959b-0242ac110004",
        "lotteryId": "bcaa21f1-1b20-11ee-959b-0242ac110004",
        "coinId": "bc9cc4f7-1b20-11ee-959b-0242ac110004",
        "coinSymbol": "INAE",
        "coinName": "iNAE",
        "roundId": "bcaa6d53-1b20-11ee-959b-0242ac110004",
        "poolAmount": "0.00000000",
        "createdAt": "2023-07-05T15:43:11.326262+05:00"
    }]
    render(<PoolStatus data={data}></PoolStatus>)
    let div = screen.queryByTestId('show-btn')
    if (div) {
        expect(div).toBeInTheDocument()
        expect(div).toHaveTextContent('Close')
        const user = userEvent.setup()
        await user.click(div)
        expect(div).toHaveTextContent('Current Pool Status')
    }
})