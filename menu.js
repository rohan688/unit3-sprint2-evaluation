let url="https://www.themealdb.com/api/json/v1/1/search.php?s="
async function getdishes(){
    try{
        let response=await fetch(url);
        let data=await response.json();
        data=data.meals;
        datashow(data)
        console.log(data);
    }
    catch(err){
     console.log(err);
    }
}
getdishes();
function  datashow(data){
    data.forEach(function(data){
    let d1=document.createElement("div");
    d1.setAttribute("class","div1")
     let img=document.createElement("img");
     img.src=data.strMealThumb;
     let name=document.createElement('h2');
     name.textContent=data.strMeal;
     let but=document.createElement("button");
     but.textContent="ADD CART"
    
     let price=document.createElement("p");
   let x=Math.floor((Math.random())*500);
     if(x<100){
         price.textContent=x+100+"₹";
     }
     else{
        price.textContent=x+"₹";
     }
    
     let d2=document.getElementById('pro');
     d1.append(img,name,but,price);
     d2.append(d1)
    })
}

