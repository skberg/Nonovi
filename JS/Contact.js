function MyButton(){
    var x = document.getElementById("mylinks");
    if(x.style.display === "block"){
        x.style.display = "none";
    }else{
        x.style.display = "block"
    }
}



function Turnmeof(){
    var c = document.getElementById("frameHidding");
    if(c.style.display === "block"){
        c.style.display = "none";
     
       
    }else{
        c.style.display = "block";
  
    }
}



fetch("./Test.json")
.then(function (response){
    return response.json();
})
.then(function (data) {
    appendData(data);
  })
.catch(function (err){
    console.log(err);
});



function appendData(data){
    var mainContainer = document.getElementById("mydata");
    for( var i = 0; i < data.length; i++){
        var div = document.createElement("div");
        var span = document.createElement("span")

       
       
        var age = document.createElement("p");
        var Tittle = document.createElement("p");
        
        Tittle.innerHTML = "Title:" + ' ' + data[i].title;
        age.innerHTML = "Age:" + ' ' + data[i].age;
        span.innerHTML = "Experience" + ' ' + data[i].worksAtcompany;
        div.innerHTML = "Name:" + ' ' + data[i].name + ' ' + data[i].lasName;
        mainContainer.appendChild(div);
  

 
        div.appendChild(age);
        div.appendChild(Tittle)
        div.appendChild(span)

      
        div.setAttribute('class','works');
      
        age.setAttribute('class', 'works__list');
        Tittle.setAttribute('class', 'works__list');
        span.setAttribute('class', 'works__list');
        

    }
}