import React from "react";
import 두번째꽃 from "../images/두번째꽃.png";
import 두번째풀 from "../images/두번째풀.jpg";
import 두번째포장지 from "../images/두번째포장지3.webp";

const MainSecondHeader = () => {
  return (
    <div className="MainSecondHeaderItems">
      <h1>ABOUT CAERULEA</h1>
      <div className="MainSecondHeaderItemsPics">
        <div className="MainSecondHeaderItemsFlower">
          <img src={두번째꽃} />
          <span>40여종 이상의 꽃</span>
        </div>
        <div className="MainSecondHeaderItemsGrass">
          <img src={두번째풀} />
          <span>꽃의 가치를 올려줄 그린소재</span>
        </div>
        <div className="MainSecondHeaderItemsPackage">
          <img src={두번째포장지} />
          <span>크룰리아의 포장</span>
        </div>
      </div>
    </div>
  );
};

export default MainSecondHeader;
