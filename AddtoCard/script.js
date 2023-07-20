var imgList = document.querySelector('.img-list');

var img=['1','2','3','4','5'];


img.forEach((i)=>{
  var list = document.createElement('li');

  var img = document.createElement('img');

  img.src = `${i}.jpg`
  list.appendChild(img);
  imgList.appendChild(list);

  list.addEventListener('click',()=>{
   document.getElementById('banner-img').src=`${i}.jpg`
  })
})
  var cardData=0;
function increment(){
   cardData++;
   document.getElementById('card-value').textContent=cardData;
  
}
function decrement(){
    cardData--;
    if(cardData <=0){
        cardData=0
    }
    document.getElementById('card-value').textContent=cardData;
 }


 var AddCard = document.getElementById('btn');

 AddCard.addEventListener('click',()=>{
    document.getElementById('card-num').textContent = cardData;
   
 })