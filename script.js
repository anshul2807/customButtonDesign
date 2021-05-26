const buttons = document.querySelector(".btn-custon");
const colors = document.querySelector(".section2__color input");
const fontcolor = document.querySelector(".section3__fontcolor input");
const text = document.querySelector(".section3__text input");
let rad = 20;
let font_w = 100;
let borders = 1;




function handlecolor()
{
    buttons.style.backgroundColor = colors.value;
}
function handletext()
{
    if(text.value!= "")
         buttons.innerHTML = text.value;
}
function handleradius(hand)
{
    if(hand=='+')
        {
            if(rad <=100)
                rad+=4;
        }
    else    
        {
            if(rad >0)
                 rad-=4;
        } 
    buttons.style.borderRadius = String(rad+"px");
}
function handleFontweight(hand)
{
    if(hand=='+')
        font_w=font_w+50;
    else    
        font_w=font_w-50;   
    buttons.style.fontWeight = String(font_w);
}
function handleborder(hand)
{
    if(hand=='+')
        {
            if(borders <=10)
                borders++;
        }
    else    
        {
            if(borders >0)
                borders--;
        }
    buttons.style.border = String(borders+"px solid black");
}
function handlefontcolor()
{
    buttons.style.color = fontcolor.value;
}
function handleReset(){

}
function handleReset(){
    rad = 20;
    font_w = 100;
    borders = 1;
    buttons.style.backgroundColor ="palevioletred" ;
    buttons.innerHTML = "TEXT";
    buttons.style.borderRadius = String(rad+"px");
    buttons.style.fontWeight =String(font_w);
    buttons.style.border = String(borders+"px solid black");
    buttons.style.color = "black" ;
}

function handlecode(){

    let code = `<button style="background-color:${colors.value};border-radius:${rad}px;font-weight:${font_w};color:${fontcolor.value};border:${borders} solid black;">${text.value}</button>`;
    document.querySelector("textarea").innerHTML=code;
    // console.log(code);
}