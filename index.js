const  btnE1=document.getElementById("btn");

const emojiNameE1=document.getElementById("emoji-name");

const emoji=[];



async function getEmoji(){
    let response=await fetch("https://emoji-api.com/emojis?access_key=cdea498a584ce40816aecd259421d8bcced6b990");

    data=await response.json();
 
    for(let i=0;i<1500;i++){
        emoji.push({
            emojiName:data[i].character,
            emojiCode:data[i].unicodeName,


        })
    }


}
getEmoji();
// console.log(emoji); 

btnE1.addEventListener("click",()=>{
   const randomNum=Math.floor(Math.random()* emoji.length);
   btnE1.innerText=emoji[randomNum].emojiName;
   emojiNameE1.innerText=emoji[randomNum].emojiCode;

});