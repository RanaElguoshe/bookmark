
let siteItemDoc=document.getElementById('siteItem');
let urlItemDoc=document.getElementById('urlItem');
console.log(siteItemDoc.value);
//console.log(urlItemDoc);
var a = document.createElement('a');
var regax=/^(http|https):\/\/(www)?.[a-zA-Z0-9=%_]{2,265}.com$/
let allProduct=[];
if(localStorage.getItem('itemName')!=null){
    console.log('doneeeeeeeeeeeeeeeeeeeeeeeeeee')
    allProduct=JSON.parse(localStorage.getItem('itemName'))
    display()

}
function visit(i){
}
function clearIn() {
    siteItemDoc.value = "";
    urlItemDoc.value = "";
  }

function addSite(){
    let product={
        name:siteItemDoc.value,
        url:urlItemDoc.value
    }
    
    console.log('doneeeeeeeeeeeee')
    if(regax.test(urlItemDoc.value)){
        allProduct.unshift(product);
        console.log(allProduct)
        localStorage.setItem('itemName',JSON.stringify(allProduct))
        display()
        }else{
            alert('url must be in the correct format such as(http|https://www.@example.com)')
        }

}
function deleteItem(u){
    allProduct.splice(u,1);
    display()
    localStorage.setItem('itemName',JSON.stringify(allProduct));


}
function display(){
    cartona='';
for(let i=0;i<allProduct.length;i++){
    cartona+=`<tbody>
            <tr >
                <th class="trstyle text-capitalize">${i+1}</th>
                <th class="trstyle text-capitalize">${allProduct[i].name}</th>
                <th ><button onclick="visit(${i})" class=" text-capitalizevisit btn btn-primaryyy"><a class="list_non"href="${allProduct[i].url}" target=-blank><i class="pe-2 fa-solid fa-eye"></i>visit</button></th>
                <th><button id="del"onclick="deleteItem(${i})" class=" text-capitalize b btn "><i class="pe-2 fa-solid fa-trash"></i>delete</button></th>
           </tr>

        </tbody>`
}
document.getElementById('tableItem').innerHTML=cartona;
clearIn() ;
}