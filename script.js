trocarImagem = () => { 
const api = fetch('https://dog.ceo/api/breeds/image/random');
api.then((result) =>{
  return result.json();
})
.then((resData) =>{
  let img = resData.message;
  pictures(img);

})
.catch((error)=>{
  console.log(error);
})
pictures = (fotos) =>{
  document.getElementById('fotos').src = fotos;
}
document.getElementById('text').remove();
document.querySelector(".blur").style.filter = "blur(0px)";
document.querySelector(".blur2").style.filter = "blur(0px)";
}
