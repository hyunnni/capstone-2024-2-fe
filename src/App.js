import React, { useState, useEffect } from "react";
import "./index.css";
import FocusGraph from "./components/FocusGraph";
import TreeResult from "./components/TreeResult";
import NeuroFeedbackInfo from "./components/NeuroFeedbackInfo";
import Snowfall from "react-snowfall";
import axios from "axios";

function App() {
  const [gameData, setGameData] = useState(null); // 데이터를 저장할 상태
  const [loading, setLoading] = useState(true); // 로딩 상태 관리

  useEffect(() => {
    // 서버에서 데이터 가져오기
    const fetchGameData = async () => {
      try {
        const response = await axios.get("https://port-0-capstone-2024-2-be-m4gy3o6w7b065e23.sel4.cloudtype.app/api/game-data");
        setGameData(response.data); // 데이터 상태 업데이트
        setLoading(false); // 로딩 완료
      } catch (error) {
        console.error("Error fetching game data:", error);
        setLoading(false); // 로딩 종료
      }
    };

    fetchGameData();
  }, []); // 컴포넌트가 처음 렌더링될 때만 실행

  if (loading) {
    return <div className="text-center text-2xl mt-10">Loading data...</div>;
  }

  if (!gameData) {
    return <div className="text-center text-2xl mt-10">No data available.</div>;
  }

  return (
    <div className="relative min-h-screen bg-gray-50 text-center p-5">
      <Snowfall snowflakeCount={150} /> {/*눈송이 개수 */}
      <h1 className="text-4xl font-bold text-gray-800">
        switch on/off 결과 화면
      </h1>
      <NeuroFeedbackInfo />
      <FocusGraph attentions={gameData.attentions} />
      <TreeResult resultImageBase64={gameData.game_result.image_base64} />
    </div>
  );
}

export default App;
