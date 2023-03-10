
const root = document.getElementById('root');
const memberCount = 5 //팀 인원수 
let headerTogle = true;
let mainTogle = true;

//멤버의 key 값과 value값 가져오기
const memberInfo = Object.keys(_EXAMDATA.teamInformation.teamAllMember[0]);
const memberInfoVar = Object.values(_EXAMDATA.teamInformation.teamAllMember[0]);

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
for(let i = 0; i < memberCount; i++){
  createEle("div", "", "", "", root.children[1].children[i]);
}

  //멤버 이름 클릭할 때 나오는 정보 창 생성
/*for(let i = 0; i < memberCount; i++){
  console.log(i)
  createEle("div", "id", "profileWin", "", root.children[1].children[i]); //main > div > div
  console.dir(root.children[1].children[i]);

  for(let num = 0; num <  memberInfo.length; num++){
    //main > div > div > div*4
    createEle("div", "", "", "", root.children[1].children[i].children[0]); 

    if(num === 0){
      //0번째는 멤버 프로필 제목이 들어감
      root.children[1].children[i].children[0].children[num].textContent = "Member Information";
    }
    else{
      for(let j = 0; j < 2; j++){ 
        //프로필의 내용 입력
        if(j === 0){
          //정보의 분류 이름
          createEle("div", "", "", memberInfo[num]+ ": ", root.children[1].children[i].children[0].children[num]);
        }
        else{
          //멤버 정보
          createEle("div", "", "", memberInfoVar[num], root.children[1].children[i].children[0].children[num]);
        }
      }
    }
  }
}*/
console.dir(root.children[1]);

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
const profileWin = document.getElementById('profileWin');

//제목 스타일링
headerStyle();

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

//멤버 정보 창 스타일링
/*styleMaker(profileWin, "300px", "500px", "", "flex", "ipx solid red", "", "", "", "", "", _EXAMDATA.designInformation.colorSet[3]);
profileWin.style.position = "absolute";*/

/*================이벤트 함수 부르는 영역===================*/
header.style.cursor = "pointer";
header.addEventListener('click', function(){
  if(headerTogle === true){
    changeTitle();
  }
  else{
    headerStyle();
  }
})

main.children[0].addEventListener('click', function(){
  if(mainTogle === true){

  }
  mainProfile(0)
})
/*
main.children[1].addEventListener('click', mainProfile(1));
main.children[2].addEventListener('click', mainProfile(2));
main.children[3].addEventListener('click', mainProfile(3));
main.children[4].addEventListener('click', mainProfile(4));
*/