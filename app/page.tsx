import LotteryCard from "./components/LotteryCard";


export default function Home() {
  return (
    <div className="custom-container mx-auto">
      <div className="d-flex align-items-center justify-content-center position-relative">
        <i style={{ fontSize: '1.8rem' }} className="fa-solid fa-bars position-absolute start-0"></i>
        <h2>Lottery</h2>
      </div>
      <h2 className="my-3">Latest Results</h2>
      <LotteryCard LotteryName="COSMIC"></LotteryCard>
      <LotteryCard LotteryName="CLASSIC"></LotteryCard>
      <LotteryCard LotteryName="ATOMIC"></LotteryCard>
    </div>
  );
}
