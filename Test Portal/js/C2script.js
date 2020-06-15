//let TestName = $("#testname").val();
//let Theme = $("theme").val();
//let Time = $("time").val();
//let Score = $("score").val();

//$(".next").click(function(e){

//if( TestName === "" || Theme === "" || Time === "" ||  Score ===""){
//	alert("Please fill all fields.");
//}

//});

//hides/unhides a blank node
$("#node-blank").toggle();
$(".fa-plus").click(function(){
	$("#node-blank").fadeToggle();
});

//resets the whole node-blank
$("#node-blank").on("click",".delete-blank",function(event){
	
	$("#question").val("");
	$("#opt1").val("");
	$("#opt2").val("");
	$("#opt3").val("");
	$("#opt4").val("");
  });

//deletes already filled node
$("#node-list").on("click",".delete",function(event){
	//fades out the parent of span(i.e. li)
	$("#node").fadeOut(300,function(){ 
		//removes entry from code
		$(this).remove();
	});
	//stops from bubbling up(going from span to li to ul to conatiner)
	event.stopPropagation();
});

//selects the correct answer
$("ul").on("click",".fa-check-circle",function(){
	//if()
	$(this).toggleClass("correct");
});




//pushes the ques typed in(save)
var nodelist = $(".node-list");

$(".save").click(function(e){

	let q = $("#question");
	let o1 = $("#opt1");
	let o2 = $("#opt2");
	let o3 = $("#opt3");
	let o4 = $("#opt4");

	let que = q.val();
	let opt1 = o1.val();
	let opt2 = o2.val();
	let opt3 = o3.val();
	let opt4 = o4.val();

	if( que === "" || opt1 === "" || opt2 === "" || opt3 ==="" || opt4 ===""){
		alert("Please fill all fields.");
	}else{
		//let node ="<div id='node'><div class='ques'>"+ que + "</div><br><div class='options'><ol><li>"+ opt1 +"</li><br><li>"+ opt2 +"</li><br><li>"+ opt3 +"</li><br><li>"+ opt4 +"</li><br></ol></div><div class='footer'><button type='button' class='delete'><i class='fa fa-trash'></i> DEL</button></div></div>";

		let node = '<li><div id="node"><div class="ques"><input type="text" value="que"></div><div class="options"><ul class="optns"><li><input type="text" value="opt1"></li><br><li><input type="text" value="opt2"></li><br><li><input type="text"   value="opt3"></li><br><li><input type="text"  value="opt4"></li><br></ul></div><div class="footer"><button type="button" class="delete"><i class="fa fa-trash"></i> DEL</button></div></div></li>';

		nodelist.append(node);
		q.val("");
		o1.val("");
		o2.val("");
		o3.val("");
		o4.val("");
	}
	

});


$(".savetest").click(function(e){
	var viewlist = $("#view-list");

	let TestName = $("#testname").val();
		let view = '<li><div class="vcard"><div class="vcard-bg"></div><div class="vcard-content"><h2>'+TestName+'</h2><p>*test description*</p><a href="#"><button type="button" id="btn" class="viewtest"><i class="fa fa-eye"></i> View</button></a><button type="button" id="btn"><span><i class="fa fa-trash"></i></span></button></div></li>';
		
		viewlist.append(view);
	

});




//add an option
//$(".add").click(function(){
//	$(".optns").append("<li><span><i class='fa fa-check-circle'></i></span> <input type='text' placeholder='Answer another option'> <span id='trash'><i class='fa trash fa-trash'></i></span></li><br>")
//});

//deletes option
//$("ol").on("click","#trash",function(event){
	//fades out the parent of span(i.e. li)
//	$(this).parent().fadeOut(500,function(){ 
//		//removes entry from code
//		$(this).remove();
//	});
	//stops from bubbling up(going from span to li to ul to conatiner)
//	event.stopPropagation();
//});


