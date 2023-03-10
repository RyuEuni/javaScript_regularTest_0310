
const root = document.getElementById('root');
const memberCount = 5 //팀 인원수 
let headerTogle = true;
let mainTogle = true;

const memberInfoKey = Object.keys(_EXAMDATA.teamInformation.teamAllMember[0]);
let memberInfoValue; 

document.body.style.width = _EXAMDATA.designInformation.breakPoint[0];
document.body.style.height = _EXAMDATA.designInformation.breakPoint[1];

/*================================함수 영역=================================*/
function createEle(elementVal, nameVal, value, textVal, parent){
  //앨리먼트 생성 함수
  const ele = document.createElement(elementVal);
  if(nameVal !== ""){
    ele.setAttribute(nameVal, value);
  }
  ele.textContent = textVal;
  parent.appendChild(ele);
};
function styleMaker(target, widthVal, heightVal, bgColorVal, displayVal, borderVal, borderRdisVal, paddingVal, marginVal, ftSizeVal, ftWeightVal, ftColorVal){
  //스타일 변경 함수
  target.style.width = widthVal;
  target.style.height = heightVal;
  target.style.backgroundColor = bgColorVal;
  target.style.display = displayVal;
  target.style.border = borderVal;
  target.style.borderRadius = borderRdisVal;
  target.style.padding = paddingVal;
  target.style.margin = marginVal;
  target.style.fontSize = ftSizeVal;
  target.style.fontWeight = ftWeightVal;
  target.style.color = ftColorVal;
}
function flexProperty(target, direcVal, justiVal, alignVal){
  //플렉스 속성 함수
  target.style.flexDirection = direcVal;
  target.style.justifyContent = justiVal;
  target.style.alignItems = alignVal;
}
function positionMaker(target, positionVal, top, left, bottom, right){
  //포지션 설정 함수
  target.style.position = positionVal;
  target.style.top = top;
  target.style.left = left;
  target.style.bottom = bottom;
  target.style.right = right;
}

function headerStyle(){
  //제목 스타일링 해주는 함수 (기본 값)
  styleMaker(header,"100%", "10%", _EXAMDATA.designInformation.colorSet[2], "", "", "50px", "0 0 10px 100px", "0 0 0 10px", "96pt", "900", _EXAMDATA.designInformation.colorSet[3]);
  header.textContent = _EXAMDATA.teamInformation.teamName;
  headerTogle = true;
}
function changeTitle(){
  //제목 클릭 시 바뀌는 함수
  styleMaker(header,"100%", "170px", _EXAMDATA.designInformation.colorSet[3], "", "", "20px", "50px 0 0 10px", "0 0 0 10px", "32pt", "800", _EXAMDATA.designInformation.colorSet[2]);
  header.textContent = _EXAMDATA.teamInformation.teamNameStory;
  headerTogle = false;
}
//============================================================

//머리, 가슴, 배 부분의 태그 생성
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

//중간 팀원 이름 스타일링
styleMaker(main, "50%", "100%", "", "flex", "", "", "20px", "", "", "", "");
flexProperty(main, "column", "", "");

for(let i = 0; i < main.children.length; i++){
  styleMaker(main.children[i], "235px", "90px", _EXAMDATA.designInformation.colorSet[0], "", "1px solid _EXAMDATA.designInformation.colorSet[0]", "10px", "25px 65px", "10px", "20pt", "700", _EXAMDATA.designInformation.colorSet[4]);
  main.children[i].textContent = _EXAMDATA.teamInformation.teamAllMember[i].name;
  main.children[i].style.cursor = "pointer";
}

//팀원 이름 선택 시 나오는 정보 창 스타일링
styleMaker(mainSide, "100%", "100%", "", "", "", "", "", "", "", "", "")
mainSide.children[0].style.width = "400px";
mainSide.children[0].style.height = "250px";
mainSide.children[0].style.display = "flex";
flexProperty(mainSide.children[0], "column", "", "");

//팀원 정보창 제목 스타일
styleMaker(mainSide.children[0].children[0], "100%", "25%", _EXAMDATA.designInformation.colorSet[3], "", "", "", "10px 0 10px 60px", "", "20pt", "500", _EXAMDATA.designInformation.colorSet[4]);

//팀원 정보창 내용 스타일
for(let i = 1; i < mainSide.children[0].children.length; i++){
  //팀원 정보창 리스트
  styleMaker(mainSide.children[0].children[i], "100%", "20%", _EXAMDATA.designInformation.colorSet[4], "flex", "1px solid black", "", "5px", "3px 0", "", "", "")
  flexProperty(mainSide.children[0].children[i], "", "center", "center");

  //정보창 리스트에 키값과 벨류값 구분
  for(let j = 0; j < mainSide.children[0].children[i].children.length; j++){
    styleMaker(mainSide.children[0].children[i].children[j], "50%", "100%", "", "", "", "", "2px 0 5px 15px", "", "15pt", "800", _EXAMDATA.designInformation.colorSet[3])

    root.children[1].children[1].children[0].children[i].children[0].textContent = memberInfoKey[i] + " : "; //팀 정보의 메뉴이름 넣어줌
  }
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

/*========================이벤트 함수 부르는 영역========================*/
header.style.cursor = "pointer";
header.addEventListener('click', function(){
  if(headerTogle === true){
    changeTitle();
  }
  else{
    headerStyle();
  }
})

mainSide.style.visibility = "hidden";

main.children[0].addEventListener('click', function(){
  const num = 0;
  mainSide.style.visibility = "";
  memberInfoValue = Object.values(_EXAMDATA.teamInformation.teamAllMember[num]);

  positionMaker(mainSide.children[num], "absolute", "200px", "350px", "", "");

  for(let i = 1; i < memberInfoKey.length; i++){
    mainSide.children[num].children[i].children[num+1].textContent = memberInfoValue[i]
  }
});
main.children[1].addEventListener('click', function(){
  positionMaker(mainSide.children[0], "absolute", "300px", "350px", "", "");


});
main.children[2].addEventListener('click', function(){
  positionMaker(mainSide.children[0], "absolute", "400px", "350px", "", "");


});
main.children[3].addEventListener('click', function(){
  positionMaker(mainSide.children[0], "absolute", "510px", "350px", "", "");


});
main.children[4].addEventListener('click', function(){
  positionMaker(mainSide.children[0], "absolute", "630px", "350px", "", "");


});

//! 금일까지, 또는 주말동안 명세에 적은 트레이닝 리스트에 빨간색으로 표시되는 것 까지 완성을 하고 싶습니다.
//! 그러기 위해선 오늘 저녁. 늦어지면 주말 이틀 동안의 시간을 할애해서 코딩 작업을 해야합니다. 