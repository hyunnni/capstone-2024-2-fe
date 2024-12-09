import React from "react";

// const testImageBase64 = ""

function TreeResult({ resultImageBase64 }) {
  // 조건부 렌더링: 결과 이미지가 존재하는지 확인
  if (!resultImageBase64) {
    return (
      <div className="text-center p-5 mt-10">
        <h2 className="text-xl font-bold mb-4">결과 이미지</h2>
        <p>이미지가 아직 준비되지 않았습니다.</p>
      </div>
    );
  }

  const imageSrc = resultImageBase64.startsWith("data:image/")
  ? resultImageBase64
  : `data:image/png;base64,${resultImageBase64}`;
  
  return (
    <div className="text-center p-5 mt-10">
      <h2 className="text-xl font-bold mb-4">결과 이미지</h2>
      <div className="flex justify-center">
        <img
          src={imageSrc}
          alt="결과 이미지"
          className="max-w-full h-auto rounded-sm"
          style={{ aspectRatio: "2 / 3", objectFit: "cover" }}
        />
      </div>
    </div>
  );
}

export default TreeResult;
