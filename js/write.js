// 폼 테두리 CSS 변경
function focusOn(obj) {
  obj.style.outline='rgba(135, 206, 235, 0.8) solid 2px';
}
function focusOut(obj) {
  obj.style.outline="none";
}

//폼 초기화 여부 확인 및 초기화 실행
function resetCheck() {
   var ret = confirm("폼을 초기화시키겠습니까?");
   return ret;
}

//onreset되면 실행할 함수
function alertFunction() {
    alert("폼이 초기화되었습니다");
}

//글 작성이 완료되었는지 확인하고 조건에 따라 실행되는 함수(onsubmit)
function submitCheck(){
   var content = document.getElementById("content");
   var head = document.getElementById("head");
   var writer = document.getElementById("writer");
   if(content.value =="" || head.value =="" || writer.value ==""){
   alert("글을 작성하세요");
   return false;
   }
   alert("글 작성이 완료되었습니다.");
   store();
   return true;
}

//입력한 폼을 로컬 스토리지에 저장하는 함수
function store() {
	if(!window.localStorage){
		alert("");
		return;
	}
  var today = new Date();
  var date =  today.getFullYear() + "." + (today.getMonth()+1) + "." + today.getDate() + "." + today.getHours() + "." + today.getMinutes() + "." + today.getSeconds();
  var head = document.getElementById("head").value;
  var content = document.getElementById("content").value;
  var writer = document.getElementById("writer").value;
  var contents = [head, writer, content];
  localStorage.setItem(date, JSON.stringify(contents));
  localStorage.todoItems.sort();
}
