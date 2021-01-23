addbtn=document.getElementById("addbtn");
txtarea=document.getElementById("txtarea").value;
function update(){
  console.log("hey")
  //txtarea=document.getElementById("txtarea").value;
  //var title="";
 //title=prompt("Please give a Title");
 // console.log(txtarea);
  //console.log(title);
  if(localStorage.getItem('myItem')==null){
   
    localStorage.setItem('myItem',JSON.stringify(myitemarray));
  }
  else{
    myitemarraystr=localStorage.getItem('myItem');
    myitemarray=JSON.parse(myitemarraystr);
   // myitemarray.push([title,txtarea]);
    localStorage.setItem('myItem',JSON.stringify(myitemarray));
  }
  let cardid=document.getElementById("cardid");
  let str="";
  myitemarray.forEach((element,index) => {
    str+=`
    <div class="card" style="width: 18rem; ">
  
    <div class="card-body">
      <h5 class="card-title">${index+1+" - "}${element[0]}</h5>
      <p class="card-text">${element[1]}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
    `
  });
  cardid.innerHTML=str;

}
function getandupdate(){
  txtarea=document.getElementById("txtarea").value;
  var title="";
 title=prompt("Please give a Title");
  console.log(txtarea);
  console.log(title);
  if(localStorage.getItem('myItem')==null){
    myitemarray=[];
    myitemarray.push([title,txtarea]);
    localStorage.setItem('myItem',JSON.stringify(myitemarray));
  }
  else{
    myitemarraystr=localStorage.getItem('myItem');
    myitemarray=JSON.parse(myitemarraystr);
    myitemarray.push([title,txtarea]);
    localStorage.setItem('myItem',JSON.stringify(myitemarray));
  }

  let cardid=document.getElementById("cardid");
  let str="";
  myitemarray.forEach((element,index) => {
    str+=`
    <div class="card" style="width: 18rem; ">
  
    <div class="card-body">
      <h5 class="card-title">${index+1+" - "}${element[0]}</h5>
      <p class="card-text">${element[1]}</p>
     
    </div>
  </div>
    `
  });
  cardid.innerHTML=str;
}
addbtn.addEventListener("click",getandupdate);
update();


//textid=document.getElementById("textid");
/*addbtn.addEventListener("click",function(e){
  
    var title
    console.log(title);
    textid=document.getElementById("textid");
    let notesElement=localStorage.getItem("notes");
    if(notes==null){
      notesobj=[];
    }
    else{
      notesobj=JSON.parse(notes)
    }
    if(localStorage.getItem('Items')==null){
        ItemArray=[];
        ItemArray.push([title,textid.value]);
        localStorage.setItem('Items',JSON.stringify(ItemArray))
       }
      else{
        ItemArraystr=localStorage.getItem('Items');
        ItemArray=JSON.parse(ItemArraystr);
        ItemArray.push(JSON.stringify(title),textid.value);
        localStorage.setItem('Items',JSON.stringify(ItemArray))
        }
     
 <div class="card" style="width: 18rem; ">
  
    <div class="card-body">
     
      <p>
      <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
       ${element[0]}
      </a>
    
    </p>
    <div class="collapse" id="collapseExample">
      <div class="card card-body">
      ${element[1]}
      </div>
    </div>


    </div>
  </div>

///
 <div class="card" style="width: 18rem; ">
  
    <div class="card-body">
      <h5 class="card-title">${index+1+" - "}${element[0]}</h5>
      <p class="card-text">${element[1]}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  ////

})*/

