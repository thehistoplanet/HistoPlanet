var story=document.getElementById("story");
var end=document.getElementById("end");
var thanks=document.getElementById("thanks");

var part_1=document.getElementById("part_1");
var part_2=document.getElementById("part_2");
var part_3=document.getElementById("part_3");
var part_2_1=document.getElementById("part_2_1");
var part_2_2=document.getElementById("part_2_2");
var part_2_3=document.getElementById("part_2_3");
var part_3_1=document.getElementById("part_3_1");
var part_3_2=document.getElementById("part_3_2");

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
var button_2_0=document.getElementById("button_2_0");

var question_2_=document.getElementById("question_2_");
var answer_2_=document.getElementById("answer_2_");
var button_2_=document.getElementById("button_2_");
var hint_2_=document.getElementById("hint_2_");
var wrong_2_=document.getElementById("wrong_2_");
var correct_2_=document.getElementById("correct_2_");
var check_2_=document.getElementById("check_2_");
var button_2_0_=document.getElementById("button_2_0_");

var question_2__=document.getElementById("question_2__");
var answer_2__=document.getElementById("answer_2__");
var button_2__=document.getElementById("button_2__");
var hint_2__=document.getElementById("hint_2__");
var wrong_2__=document.getElementById("wrong_2__");
var correct_2__=document.getElementById("correct_2__");
var check_2__=document.getElementById("check_2__");
var button_2_0__=document.getElementById("button_2_0__");


var question_3=document.getElementById("question_3");
var answer_3=document.getElementById("answer_3");
var button_3=document.getElementById("button_3");
var wrong_3=document.getElementById("wrong_3");
var correct_3=document.getElementById("correct_3");
var check_3=document.getElementById("check_3");
var button_3_0=document.getElementById("button_3_0");

var question_3_=document.getElementById("question_3_");
var answer_3_=document.getElementById("answer_3_");
var button_3_=document.getElementById("button_3_");
var wrong_3_=document.getElementById("wrong_3_");
var correct_3_=document.getElementById("correct_3_");
var check_3_=document.getElementById("check_3_");
var button_3_0_=document.getElementById("button_3_0_");

//story part 3 select
var select_1=document.getElementById("select_1");
var button_select_1=document.getElementById("button_select_1");
var button_part_2_1=document.getElementById("button_part_2_1");
var button_part_2_2=document.getElementById("button_part_2_2");
var button_part_2_3=document.getElementById("button_part_2_3");


var select_2=document.getElementById("select_2");
var button_select_2=document.getElementById("button_select_2");
var button_part_3_1=document.getElementById("button_part_3_1");
var button_part_3_2=document.getElementById("button_part_3_2");

var reset_button=document.getElementById("reset_button");
var reset_true=document.getElementById("reset_true");
var reset_false=document.getElementById("reset_false");

var limitWrong=2;
var output_text=0;
var count_help=0
var countWrong=0;
var answer=["LÊ THỊ DINH","1","162439875"]

part_2.remove();
part_3.remove();

// test
// part_3_1.remove();
// part_3_2.remove();

hint_1.remove();
correct_1.remove();
wrong_1.remove();

function showPart2(){
    story.appendChild(part_2);
    part_2_1.remove();
    part_2_2.remove();
    part_2_3.remove();
    hint_2.remove();
    correct_2.remove();
    wrong_2.remove();
}

function showPart3(){
    story.appendChild(part_3);
    part_3_1.remove();
    part_3_2.remove();
    end.remove();
    thanks.remove();
    reset_button.remove();
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

button_part_2_1.addEventListener("click", function(){
    button_select_1.remove();
    select_1.appendChild(document.createTextNode("_ Đương nhiên theo tôi rồii."));
    part_2.appendChild(part_2_1);
    correct_2.remove();
    wrong_2.remove();
    answer[1]="1";
})

button_part_2_2.addEventListener("click", function(){
    button_select_1.remove();
    select_1.appendChild(document.createTextNode("_ Theo Duyên chứ còn phải hỏi."));
    part_2.appendChild(part_2_2);
    correct_2_.remove();
    wrong_2_.remove(); 
    answer[1]="3";
})

button_part_2_3.addEventListener("click", function(){
    button_select_1.remove();
    select_1.appendChild(document.createTextNode("_ Theo Khánh nào."));
    part_2.appendChild(part_2_2);
    correct_2__.remove();
    wrong_2__.remove(); 
    answer[1]="4";
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
        check_2.appendChild(wrong_2);
        answer_2.value="";
    }
}

button_2.addEventListener("click",checkAnswer_2);

answer_2.addEventListener("keypress", function(event){
    if(event.keyCode === 13)
    {
        checkAnswer_2();
    }
})



function checkAnswer_2_(){
    if(answer_2_.value==answer[1])
    {
        if(output_text==1)
	    {button_2_0_.appendChild(document.createTextNode(" - HOÀN THÀNH"));
        output_text++;
        }
        wrong_2_.remove();
        check_2_.appendChild(correct_2_);
        countWrong=0;
        showPart3();
    }
    else if(output_text==1)
    {
        check_2_.appendChild(wrong_2_);
        answer_2_.value="";
    }
}

button_2_.addEventListener("click",checkAnswer_2_);

answer_2_.addEventListener("keypress", function(event){
    if(event.keyCode === 13)
    {
        checkAnswer_2_();
    }
})

function checkAnswer_2__(){
    if(answer_2__.value==answer[1])
    {
        if(output_text==1)
	    {button_2_0__.appendChild(document.createTextNode(" - HOÀN THÀNH"));
        output_text++;
        }
        wrong_2__.remove();
        check_2__.appendChild(correct_2__);
        countWrong=0;
        showPart3();
    }
    else if(output_text==1)
    {
        check_2__.appendChild(wrong_2_);
        answer_2__.value="";
    }
}

button_2__.addEventListener("click",checkAnswer_2_);

answer_2__.addEventListener("keypress", function(event){
    if(event.keyCode === 13)
    {
        checkAnswer_2__();
    }
})


button_part_3_1.addEventListener("click", function(){
    button_select_2.remove();
    select_2.appendChild(document.createTextNode("_ Ending 1."));
    part_3.appendChild(part_3_1);
    correct_3.remove();
    wrong_3.remove();
    answer[2]="162439875";
})

button_part_3_2.addEventListener("click", function(){
    button_select_2.remove();
    select_2.appendChild(document.createTextNode("_ Ending 2."));
    part_3.appendChild(part_3_2);
    correct_3_.remove();
    wrong_3_.remove(); 
    answer[2]="162435798";
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
        story.appendChild(reset_button);
    }
    else{
        check_3.appendChild(wrong_3);
        answer_3.value="";
    }
}


function checkAnswer_3_(){
    if(answer_3_.value==answer[2])
    {
        if(output_text==2)
	    {button_3_0_.appendChild(document.createTextNode(" - HOÀN THÀNH"));
        output_text++;
        }
        wrong_3_.remove();
        check_3_.appendChild(correct_3_);  
        story.appendChild(reset_button);
    }
    else{
        check_3_.appendChild(wrong_3_);
        answer_3_.value="";
    }
}


button_3.addEventListener("click",checkAnswer_3);

answer_3.addEventListener("keypress", function(event){
    if(event.keyCode === 13)
    {
        checkAnswer_3();
    }
})

button_3_.addEventListener("click",checkAnswer_3_);

answer_3_.addEventListener("keypress", function(event){
    if(event.keyCode === 13)
    {
        checkAnswer_3_();
    }
})



reset_false.addEventListener("click", function(){
    reset_button.remove();
    part_3.appendChild(end);
    part_3.appendChild(thanks);

})


reset_true.addEventListener("click",function(){
    reset_button.remove();
    part_3.remove();
    part_2.remove();
    showPart2();
    output_text=1;
    select_1.lastChild.remove();
    
    part_2.appendChild(button_select_1);

    if(button_2_0.firstChild!=button_2_0.lastChild){
    button_2_0.lastChild.remove();
    }
    if(button_2_0_.firstChild!=button_2_0_.lastChild){
    button_2_0_.lastChild.remove();
    }
    if(button_2_0__.firstChild!=button_2_0__.lastChild){
        button_2_0__.lastChild.remove();
    }

   if(button_3_0.firstChild!=button_3_0.lastChild){
    button_3_0.lastChild.remove();
    }
    if(button_3_0_.firstChild!=button_3_0_.lastChild){
    button_3_0_.lastChild.remove();
    }
    select_2.lastChild.remove();

    part_3.appendChild(button_select_2);
})