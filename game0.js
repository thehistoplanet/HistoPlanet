var story=document.getElementById("story");
var part_1=document.getElementById("part_1");
var part_2=document.getElementById("part_2");
var wrong=document.getElementById("wrong")
var next_button=document.getElementById("next-button");
var question_0_1=document.getElementById("question_0_1")
var input_0_1=document.getElementById("input_answer_0_1");
var answer_0_1='OK';
part_2.remove();
wrong.remove();

function showPart2(){
    story.appendChild(part_2);
    next_button.remove();
    question_0_1.remove();
    input_0_1.remove();
    wrong.remove();
}



function answerClick(){
    if(input_0_1.value === answer_0_1)
    {
        showPart2();
    }else{
        
        story.appendChild(wrong);
        input_0_1.value="";
    }
}



next_button.addEventListener("click",answerClick);

input_0_1.addEventListener("keypress", function(event){
    if(event.keyCode === 13)
    {
        answerClick();
    }
})
