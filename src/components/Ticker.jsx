import "./Ticker.css";
import Stack from "react-bootstrap/Stack";
import { Container } from "react-bootstrap";

export default function Ticker({ ticker, outstandingshares, marketcap }) {
  return (
    <div className="row align-items-center">
      <Stack direction="horizontal" gap={3} className="flex-wrap">
        <div className="col-12 col-md-auto mb-2 mb-md-0">
          <h2 className="text-primary">NASDQ: {ticker}</h2>
        </div>
        <div className="col-12 col-md-auto mb-2 mb-md-0">
          <h3 className="text-secondary">
            Shares Outstanding: {outstandingshares}
          </h3>
        </div>
        <div className="col-12 col-md-auto">
          <h3 className="text-success">Market Cap: {marketcap}</h3>
        </div>
      </Stack>
    </div>
  );
}
