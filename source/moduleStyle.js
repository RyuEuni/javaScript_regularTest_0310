/*===============함수 영역==============*/
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
//============================================================

const root = document.getElementById('root');
const memberCount = 5 //팀 인원수 
document.body.style.width = _EXAMDATA.designInformation.breakPoint[0];
document.body.style.height = _EXAMDATA.designInformation.breakPoint[1];

//머리, 가슴, 배 부분의 태그 생성
createEle("header", "id", "header", "", root);
createEle("main", "id", "main", "", root);
createEle("footer", "id", "footer", "", root)

createEle("div", "", "", "", root.children[0]); //제목 들어갈 부분, header > div
for(let i = 0; i < memberCount; i++){
  createEle("div", "", "", "", root.children[1]); //팀 인원 정보카드 부분, main > div
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
const main = document.getElementById('main');
const footer = document.getElementById('footer');

//제목 스타일링
styleMaker(header,"100%", "10%", _EXAMDATA.designInformation.colorSet[2], "", "", "50px", "0 0 10px 100px", "0 0 0 10px", "96pt", "900", _EXAMDATA.designInformation.colorSet[3]);
header.textContent = "I z o n e";

//중간 팀원 이름 스타일링
styleMaker(main, "100%", "50%", "", "flex", "", "", "20px", "", "", "", "");
flexProperty(main, "column", "", "");

for(let i = 0; i < main.children.length; i++){
  styleMaker(main.children[i], "235px", "90px", _EXAMDATA.designInformation.colorSet[0], "", "1px solid _EXAMDATA.designInformation.colorSet[0]", "10px", "25px 65px", "10px", "20pt", "700", _EXAMDATA.designInformation.colorSet[4]);
  main.children[i].textContent = _EXAMDATA.teamInformation.teamAllMember[i].name;
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
