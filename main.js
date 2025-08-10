//create style file
var styleSheet =document.createElement("style");
document.head.appendChild(styleSheet);
// added style to body
let stylebody='body{height:100vh; margin:0px;font-family: sans-serif; font-size:15px; color: #333;background-color:#fff;';
styleSheet.innerHTML +=stylebody;

//  section HEAD
var myHead = document.createElement("div");
myHead.className= "head";
myHead.style.padding="15px 0px";
myHead.style.margin="auto";
myHead.style.width="90%";
// myHead.style.cssText='dispaly:flex; align-items:baseline';
document.body.appendChild(myHead);

// create LOGO 
var myLogo=document.createElement("span");
myLogo.innerText = "Soudani";
myLogo.className= "logo";
myLogo.style.cssText='font-size: 20px ; color: rebeccapurple; font-weight: 700; cursor:pointer';
myHead.appendChild(myLogo);

// create NavBar
var myNavbar=document.createElement("ul");
myNavbar.className="navbar";
myNavbar.style.listStyleType= "none";
myNavbar.style.cssText= 'display:flex; align-items: anchor-center'
    // added  listes to navbar
var itemNav = ['Home','About','Service'];
var lists= "";
for(let i=0; i<itemNav.length; i++){
    lists= document.createElement("li");
    lists.id="items";
    lists.innerText= `${itemNav[i]}`
    lists.style.cssText=`display:inline; margin:0px 15px; cursor:pointer`
    lists.style.fontWeight= "600"
    myNavbar.appendChild(lists);
}
myHead.appendChild(myNavbar);

let getItem = document.querySelector("#items");
console.log(getItem)
// style CSS
let styleElements='*{margin:0px; padding:0px}';
styleSheet.innerHTML +=styleElements;
let styleHead= `.head{display:flex; justify-content:space-between}`
styleSheet.innerHTML +=styleHead;

//  section CONTENT
let myContent = document.createElement("div");
myContent.className = "content";
myContent.style.cssText = `background-color: #ededed; height: -webkit-fill-available; padding:10px; display:grid; grid-template-columns:repeat(auto-fill, minmax(250px, 1fr)); gap:10px`;
document.body.appendChild(myContent);
// create box
let quantity = 15;
for (let ele= 0; ele <= quantity; ele++){

    let box = document.createElement("div");
    box.setAttribute("class", "box");
    box.style.cssText = `display: flex; flex-direction: column; align-items: center; justify-content: center; padding:10px; background-color:#fff;`;
    box.innerHTML = `<h3 id="num"></h3>
    <span id="product">Product</span> `
    // style number element
    let number_product = box.children[0];
    number_product.innerText = ele + 1
    number_product.style.cssText= `font-size:1.5rem; margin-bottom:3px;color:#333`;
    // style product element
    let product = box.children[1];
    product.style.cssText= `font-size:13px;color:gray`;
    
    myContent.appendChild(box);
}
//  section Footer
let myFooter = document.createElement("div");
let textFooter= document.createTextNode("CopyRight 2025") ;
myFooter.style.cssText = `background-color: #363938de; color: #fff; padding: 20px 0px; text-align:center; font-size: 15px; font-weight: 600;`
myFooter.appendChild(textFooter);
document.body.appendChild(myFooter);


