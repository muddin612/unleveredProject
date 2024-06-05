import React, { useState, useEffect } from "react";
import axios from "axios";
import Ticker from "./Ticker";
import StockInfo from "./StockInfo";
import CandlestickChart from "./CandleStickChart";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";

export default function GetData() {
  const [financialData, setFinancialData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/financials");
        setFinancialData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching financial data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : financialData ? (
        <>
          <Ticker
            ticker={financialData.ticker}
            outstandingshares={financialData.shares_outstanding}
            marketcap={financialData.market_ap}
          />
          <Stack direction="horizontal" gap={3}>
            <Row>
              <Col>
                <CandlestickChart data={financialData} />
              </Col>
              <Col>
                <StockInfo />
              </Col>
            </Row>
          </Stack>
        </>
      ) : (
        <p>Error fetching financial data.</p>
      )}
    </div>
  );
}
