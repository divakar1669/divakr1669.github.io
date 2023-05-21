
function myFunctionOn()
{
   
   document.getElementById("myImage").src = "pic_bulbon.gif";
}

function myFunctionOff()
{
   
   document.getElementById("myImage").src = "pic_bulboff.gif";

}


function darkMode()  
{
    var cb = document.getElementById('darkmode-toggle');  
    if(cb.checked)
        {   document.body.style.backgroundColor = "black";
        document.getElementsByTagName("h1")[0].style.color = "white";
        //$('h1').css({'color' : 'white'});
          }
    else    
        {   document.body.style.backgroundColor = "white"; 
            document.getElementsByTagName("h1")[0].style.color = "black";
         }
}

