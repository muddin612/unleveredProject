import { Container } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";

export default function StockInfo() {
  return (
    <>
      <Stack gap={3}>
        <div className="col-12 col-md-auto mb-2 mb-md-0">
          <h4>Price to Book (P/B):</h4>
        </div>
        <div className="col-12 col-md-auto mb-2 mb-md-0">
          <h4>Debt to Equity Ratio:</h4>
        </div>
        <div className="col-12 col-md-auto mb-2 mb-md-0">
          <h4>Earning Per Share:</h4>
        </div>
        <div className="col-12 col-md-auto mb-2 mb-md-0">
          <h4>Current Ratio:</h4>
        </div>
        <div className="col-12 col-md-auto mb-2 mb-md-0">
          <h4>Price Earning Ratio:</h4>
        </div>
        <div className="col-12 col-md-auto mb-2 mb-md-0">
          <h4>Price/Earning to Growth Ratio:</h4>
        </div>
        <div className="col-12 col-md-auto mb-2 mb-md-0">
          <h4>Price to Sale Ratio:</h4>
        </div>
      </Stack>
    </>
  );
}
