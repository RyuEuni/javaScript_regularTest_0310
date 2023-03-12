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
  styleMaker(header,"100%", "10%", _EXAMDATA.designInformation.colorSet[2], "", "", "50px", "0 0 10px 100px", "", "96pt", "900", _EXAMDATA.designInformation.colorSet[3]);
  header.textContent = _EXAMDATA.teamInformation.teamName;
  headerTogle = true;
}
function changeTitle(){
  //제목 클릭 시 바뀌는 함수
  styleMaker(header,"100%", "200px", _EXAMDATA.designInformation.colorSet[3], "", "", "30px", "70px 0 0 10px", "", "34pt", "900", _EXAMDATA.designInformation.colorSet[2]);
  header.textContent = _EXAMDATA.teamInformation.teamNameStory;
  headerTogle = false;
}

function memberInfo(num, pTarget, pVal,  pTop, pleft, pBottom, pRight){
  //팀원 정보창 정보 불러서 띄우는 함수
  mainSide.style.visibility = "";
  memberInfoValue = Object.values(_EXAMDATA.teamInformation.teamAllMember[num]);

  positionMaker(pTarget, pVal, pTop, pleft, pBottom, pRight);

  for(let i = 1; i < memberInfoKey.length; i++){
    mainSide.children[0].children[i].children[1].textContent = memberInfoValue[i]
  }
}

function trainingMark(target){
  //진행중인 트레이닝 표시 함수
  target.animate([
    {opacity: 0, borderColor: "red"},
    {opacity: 1, borderColor: ""},
  ], {
    duration: 900,
    iterations: 10
  });
}