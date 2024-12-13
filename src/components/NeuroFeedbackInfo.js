import React from "react"; 

function NeuroFeedbackInfo() {
  return (
    <div className = "text-center p-5 mt-10">
      <h2 className="text-xl font-bold">뉴로피드백이란?</h2>
      <div className="flex justify-center p-5">
        <p classNAme = " text-sm leading-relaxed text-gray-600 max-w-2xl">
            뉴로피드백이란 자신의 뇌에서 발생한 뇌파정보를 활용하여 
             유용한 
            <span classNmae = "font-bold"> 특정 뇌파를 훈련</span>
            하는 방법입니다. 
            예를 들면 집중할 때 나타나는 특수한 뇌파를 두피에서 측정하여 
            그 신호를 실시간으로 화면이나 소리를 통해 모니터링하고, 
            훈련을 통해 그 신호를 늘려 집중력에 도움이 되도록 할 수 있습니다.
        </p>
      </div>

      <div className="mt-10 flex justify-center">
        <table className="table-auto text-center border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">집중도</th>
              <th className="border border-gray-300 px-4 py-2">설명</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2 text-sm">1~20</td>
              <td className="border border-gray-300 px-4 py-2 text-sm">집중도가 "강하게 낮아진" 수준</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 text-sm">20~40</td>
              <td className="border border-gray-300 px-4 py-2 text-sm">집중도가 "감소된" 수준</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 text-sm">40~60</td>
              <td className="border border-gray-300 px-4 py-2 text-sm">
                집중도가 "중립"인 수준
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 text-sm">60~80</td>
              <td className="border border-gray-300 px-4 py-2 text-sm">
                집중도가 "약간 높음"수준
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 text-sm">80~100</td>
              <td className="border border-gray-300 px-4 py-2 text-sm">집중도가 "높음" 수준</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default NeuroFeedbackInfo;
