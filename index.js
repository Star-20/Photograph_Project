/*I want for the heade(studios), once I scroll up the page, I want to change the color of the 
 Header. */

//  step1. give id to the header html id="header_js"

/*this one will give me a scroll value/count when i start to scroll the page. we cansee the result on the 
inspect >>console part */
window.onscroll=function(){
//    console.log(window.pageYOffset)  /* will give me a scroll value  */

let header = document.getElementById('header_js');   /*lets use var to make it easy to use */
let logo = document.getElementById("logo_js");
let nav = document.getElementById("nav_js");

/*1.if the value goes beyond 500,then the background color will have the footer background color
else I want the color to be normal header background color */

 /*Note 1.1.=but for better to see the change plz use the blue color one */

/*2. once it is be >500, i want to change the height of the logo and header
       from 100px to 70px */

/*3. the height of the nav and the li is the same as the height of the header and it was 
height=100px */

/*4. to make the size works for the nav, */

/*5. to change the font size  of the logo */



/*in my case i set the max-width=800px, that why i used 900 for the now */
   if(window.pageYOffset>900){
       header.style.backgroundColor="rgb(209, 199, 199)"; /*1*/
      

       header.style.height="40px"
       logo.style.height="40"; /*2*/
       logo.style.lineHeight="40px";  /*4*/
       nav.style.height="40px"; /*3*/
        nav.style.lineHeight="40px"; /*4*/
        logo.style.fontSize="25px";  /*5*/
       
       
   } else {  //if it is below 700
       header.style.backgroundColor="rgba(0, 0,0, 0.4) ";
        logo.style.height="120px"; /*2*/
        nav.style.height="120px";  /*3*/
        logo.style.lineHeight="50px"; /*4*/ 
        nav.style.lineHeight="50px"; /*4*/
        logo.style.fontSize="30px";  /*5*/
        
        
        

   
   }
}







     
