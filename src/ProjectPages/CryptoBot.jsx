import React from "react";
import { useEffect } from "react";
import ProjectTemplate from "./ProjectTemplate";

function CryptoBot() {
  useEffect(() => {
    document.title = "Crypto Trading Bot | Python, Pandas, NumPy, AWS EC2";
  }, []);

  return (
    <>
      <ProjectTemplate
        ProjectTitle="Crypto Trading Bot"
        Year={2025}
        TechStack={["Python", "Pandas", "NumPy", "Matplotlib", "AWS EC2", "Kraken API"]}
        description="I built this automated crypto trading system around a long-only pullback strategy with
        multi-timeframe analysis. At its core is an eight-stage data pipeline that loads, validates, and processes
        raw OHLCV data across multiple timeframes, enforcing clean inputs before any strategy logic runs and keeping
        a clear separation between trend analysis and execution. The strategy uses a daily EMA-200 for trend filtering
        and 4H ATR for volatility regime detection, so trades only fire when conditions line up. I validated it over a
        two-year historical dataset—reaching a 52% win rate—and wrote structured CSV and JSON reports to compare
        performance across parameter configurations. I'm currently extending the pipeline with the Kraken API for live
        market data and order execution to run end-to-end forward testing. Check out the GitHub repo above for the full
        codebase and documentation."
        githubLink="https://github.com/SMIT-1803/Crypto-Trading-Bot"
      />
    </>
  );
}

export default CryptoBot;
