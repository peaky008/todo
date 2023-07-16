var bt=document.getElementById("btn");
bt.addEventListener("click",(e)=>{
e.preventDefault();
change();
clear();

})
var box=document.getElementById("box");
function change(){
    var name=document.getElementById("name").value;
    var span=document.createElement("span").innerHTML=name;
    if(span===""){
        alert("enter data");
    }
    else {
    var btn=document.createElement("input");
    btn.type="button";
    btn.value="delete";
    //  var span=document.createElement("span").innerHTML=name;

     
   
    // var edit=document.createElement("input");
    // edit.type="button";
    // edit.value="edit";
    var li=document.createElement("li");
    li.append(span,btn);
     
    box.appendChild(li);
btn.addEventListener("click",()=>{
    li.remove();
})
 

}
}
function clear(){
    document.getElementById("name").value="";
}