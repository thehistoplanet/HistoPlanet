var story=document.getElementById("story");

var part_1=document.getElementById("part_1");
var part_2=document.getElementById("part_2");
var part_3=document.getElementById("part_3");
var part_4=document.getElementById("part_4");

var question_1=document.getElementById("question_1");
var answer_1=document.getElementById("answer_1");
var button_1=document.getElementById("button_1");
var hint_1=document.getElementById("hint_1");
var wrong_1=document.getElementById("wrong_1");
var correct_1=document.getElementById("correct_1")
var check_1=document.getElementById("check_1");
var button_1_0=document.getElementById("button_1_0");

var question_2=document.getElementById("question_2");
var answer_2=document.getElementById("answer_2");
var button_2=document.getElementById("button_2");
var hint_2=document.getElementById("hint_2");
var wrong_2=document.getElementById("wrong_2");
var correct_2=document.getElementById("correct_2");
var check_2=document.getElementById("check_2");
var button_2_0=document.getElementById("button_2_0")

var question_3=document.getElementById("question_3");
var answer_3=document.getElementById("answer_3");
var button_3=document.getElementById("button_3");
var hint_3=document.getElementById("hint_3");
var wrong_3=document.getElementById("wrong_3");
var correct_3=document.getElementById("correct_3");
var check_3=document.getElementById("check_3");
var button_3_0=document.getElementById("button_3_0")

var question_4=document.getElementById("question_4");
var answer_4=document.getElementById("answer_4");
var button_4=document.getElementById("button_4");
var hint_4=document.getElementById("hint_4");
var wrong_4=document.getElementById("wrong_4");
var correct_4=document.getElementById("correct_4");
var check_4=document.getElementById("check_4");
var button_4_0=document.getElementById("button_4_0")

var next_part=document.getElementById("next_part");

var limitWrong=2;
var output_text=0;
var count_help=0
var countWrong=0;
var answer=["KHÔNG THỂ CÙNG NHAU SUỐT KIẾP","HOÀNG THÁI HẬU","PHƯỢNG KHẤU","NGÔ ĐỒNG"];


part_2.remove();
part_3.remove();
part_4.remove();
next_part.remove();
hint_1.remove();
correct_1.remove();
wrong_1.remove();

function showPart2(){
    story.appendChild(part_2);
    hint_2.remove();
    correct_2.remove();
    wrong_2.remove();
}

function showPart3(){
    story.appendChild(part_3);
    hint_3.remove();
    correct_3.remove();
    wrong_3.remove();
}
function showPart4(){
    story.appendChild(part_4);
    hint_4.remove();
    correct_4.remove();
    wrong_4.remove();
}
function checkAnswer_1(){
    if(answer_1.value==answer[0])
    {
        if(output_text==0)
	    {button_1_0.appendChild(document.createTextNode(" - HOÀN THÀNH"));
        output_text++;
        }
        wrong_1.remove();
        check_1.appendChild(correct_1);
        countWrong=0;
        showPart2();
    }
    else if(output_text==0)
    {
        if(countWrong>=limitWrong)
        {
        check_1.appendChild(wrong_1);
        part_1.appendChild(hint_1);
        answer_1.value="";
        }
        else
        {
        check_1.appendChild(wrong_1);
        answer_1.value="";
        countWrong++;
        }
    }
}

button_1.addEventListener("click",checkAnswer_1);

answer_1.addEventListener("keypress", function(event){
    if(event.keyCode === 13)
    {
        checkAnswer_1();
    }
})


function checkAnswer_2(){
    if(answer_2.value==answer[1])
    {
        if(output_text==1)
	    {button_2_0.appendChild(document.createTextNode(" - HOÀN THÀNH"));
        output_text++;
        }
        wrong_2.remove();
        check_2.appendChild(correct_2);
        countWrong=0;
        showPart3();
    }
    else if(output_text==1)
    {
        if(countWrong>=limitWrong)
        {
        check_2.appendChild(wrong_2);
        part_2.appendChild(hint_2);
        answer_2.value="";
        }
        else
        {
        check_2.appendChild(wrong_2);
        answer_2.value="";
        countWrong++;
        }
    }
}

button_2.addEventListener("click",checkAnswer_2);

answer_2.addEventListener("keypress", function(event){
    if(event.keyCode === 13)
    {
        checkAnswer_2();
    }
})


function checkAnswer_3(){
    if(answer_3.value==answer[2])
    {
        if(output_text==2)
	    {button_3_0.appendChild(document.createTextNode(" - HOÀN THÀNH"));
        output_text++;
        }
        wrong_3.remove();
        check_3.appendChild(correct_3);    
        countWrong=0;
        showPart4();
    }
    else if(output_text==2)
    {
        if(countWrong>=limitWrong)
        {
        check_3.appendChild(wrong_3);
        part_3.appendChild(hint_3);
        answer_3.value="";

        }
        else
        {
        check_3.appendChild(wrong_3);
        answer_3.value="";
        countWrong++;
        }
    }
}

button_3.addEventListener("click",checkAnswer_3);

answer_3.addEventListener("keypress", function(event){
    if(event.keyCode === 13)
    {
        checkAnswer_3();
    }
})

function checkAnswer_4(){
    if(answer_4.value==answer[3])
    {
        if(output_text==3)
	    {button_4_0.appendChild(document.createTextNode(" - HOÀN THÀNH"));
        output_text++;
        }
        wrong_4.remove();
        check_4.appendChild(correct_4);
        countWrong=0;
        story.appendChild(next_part);
    }
    else if(output_text==3)
    {
        if(countWrong>=limitWrong)
        {
        check_4.appendChild(wrong_4);
        part_4.appendChild(hint_4);
        answer_4.value="";
        }   
        else
        {
        check_4.appendChild(wrong_4);
        answer_4.value="";
        countWrong++;
        }
    }
}
button_4.addEventListener("click",checkAnswer_4);

answer_4.addEventListener("keypress", function(event){
    if(event.keyCode === 13)
    {
        checkAnswer_4();
    }
})