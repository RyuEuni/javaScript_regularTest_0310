
const root = document.getElementById('root');
const memberCount = 5 //팀 인원수 
let headerTogle = true;
let mainTogle = true;

const memberInfoKey = Object.keys(_EXAMDATA.teamInformation.teamAllMember[0]);
let memberInfoValue; 

document.body.style.width = _EXAMDATA.designInformation.breakPoint[0];
document.body.style.height = _EXAMDATA.designInformation.breakPoint[1];
document.body.style.margin = "10px 0 0 10px";


//----------머리, 가슴, 배 부분의 태그 생성-----------------
createEle("header", "id", "header", "", root);

createEle("div", "id", "mainWrap", "", root);
createEle("main", "id", "main", "", root.children[1]);
createEle("div", "id", "mainSide", "", root.children[1]);

createEle("footer", "id", "footer", "", root)
//--------------------------------------------------------------

createEle("div", "", "", "", root.children[0]); //제목 들어갈 부분, header > div
for(let i = 0; i < memberCount; i++){
  createEle("div", "", "", "", root.children[1].children[0]); //팀 인원 정보카드 부분, main > div
}

//팀원 이름 누르면 나올 정보 창 생성
createEle("div", "", "", "", root.children[1].children[1]);
for(let i = 0; i < memberInfoKey.length; i++){
  createEle("div", "", "", "", root.children[1].children[1].children[0])

  if(i === 0){
    root.children[1].children[1].children[0].children[i].textContent = "Member Infomation";
  }
  else{
    for(let j = 0; j < 2; j++){
      createEle("div", "", "", "", root.children[1].children[1].children[0].children[i]);
    }
  }
}

createEle("div", "", "","Training Information", root.children[2]); // 트레이닝 제목 부분, footer > div
createEle("ul", "", "", "", root.children[2]); //현재 진행중인 트레이닝 표시 부분, footer > ul
root.children[2].children[1].style.listStyleType = "none";
    
//트레이닝 리스트 출력, footer > ul > li
for(let i = 0; i < _EXAMDATA.trainingInformation.subject.length; i++){
  createEle("li", "", "", _EXAMDATA.trainingInformation.subject[i], root.children[2].children[1]);
}

/*==========================스타일 적용 영역==============================*/
const header = document.getElementById('header');
const mainWrap = document.getElementById('mainWrap');
const main = document.getElementById('main');
const mainSide = document.getElementById('mainSide');
const footer = document.getElementById('footer');


styleMaker(mainWrap, "100%", "50%", "", "flex", "", "", "", "", "", "", "")
flexProperty(mainWrap, "", "center", "");

//제목 스타일링
headerStyle();

//중간, 팀원 이름 스타일링
styleMaker(main, "50%", "100%", "", "flex", "", "", "20px", "", "", "", "");
flexProperty(main, "column", "", "");

for(let i = 0; i < main.children.length; i++){
  styleMaker(main.children[i], "235px", "90px", _EXAMDATA.designInformation.colorSet[0], "", "1px solid _EXAMDATA.designInformation.colorSet[0]", "10px", "25px 70px", "10px", "20pt", "700", _EXAMDATA.designInformation.colorSet[4]);
  main.children[i].textContent = _EXAMDATA.teamInformation.teamAllMember[i].name;
  main.children[i].style.cursor = "pointer";
}

//팀원 정보 창 스타일링
styleMaker(mainSide, "100%", "100%", "", "", "", "", "", "", "", "", "")
mainSide.children[0].style.width = "500px";
mainSide.children[0].style.height = "250px";
mainSide.children[0].style.display = "flex";
flexProperty(mainSide.children[0], "column", "", "");

//팀원 정보창 제목 스타일
styleMaker(mainSide.children[0].children[0], "100%", "25%", _EXAMDATA.designInformation.colorSet[3], "", "", "", "10px 0 10px 60px", "", "20pt", "800", _EXAMDATA.designInformation.colorSet[4]);

//팀원 정보창 내용 스타일
for(let i = 1; i < mainSide.children[0].children.length; i++){
  //팀원 정보창 리스트
  styleMaker(mainSide.children[0].children[i], "100%", "20%", _EXAMDATA.designInformation.colorSet[4], "flex", "1px solid black", "", "5px", "3px 0", "", "", "")
  flexProperty(mainSide.children[0].children[i], "", "center", "center");

  //정보창 리스트에 키값과 벨류값 구분
    styleMaker(mainSide.children[0].children[i].children[0], "35%", "100%", "", "", "", "", "2px 0 5px 15px", "", "15pt", "800", _EXAMDATA.designInformation.colorSet[3]) //메뉴 이름 스타일링
    root.children[1].children[1].children[0].children[i].children[0].textContent = memberInfoKey[i] + " :"; //팀 정보의 메뉴이름 넣어줌

    styleMaker(mainSide.children[0].children[i].children[1], "65%", "100%", "", "", "", "", "5px 0 5px 10px", "", "13pt", "600", _EXAMDATA.designInformation.colorSet[3]) //팀원 정보 스타일링

}

//하단 트레이닝 정보 스타일링
styleMaker(footer, "100%", "40%", "", "flex", "", "", "", "", "", "", "");
flexProperty(footer, "column", "", "");

//트레이닝 제목 부분
styleMaker(footer.children[0], "100%", "15%", _EXAMDATA.designInformation.colorSet[3], "", "", "", "0 0 0 15px", "", "30pt", "600", _EXAMDATA.designInformation.colorSet[4]);

//트레이닝 리스트 부분
styleMaker(footer.children[1], "100%", "85%", _EXAMDATA.designInformation.colorSet[4], "flex", "", "", "","5px 0 0 10px", "", "", "")
flexProperty(footer.children[1], "column", "", "");

for(let i = 0; i < footer.children[1].children.length; i++){
  styleMaker(footer.children[1].children[i], "55%", "10%", "", "", "", "", "10px", "", "15pt", "800", _EXAMDATA.designInformation.colorSet[3]);
}

//커서 모양 변경
header.style.cursor = "pointer";
main.style.cursor = "pointer";
mainSide.style.cursor = "pointer";
footer.children[0].style.cursor = "pointer";



