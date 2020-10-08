alert('By hovering subject you can know the teacher\'s name & gmail who will take this class');

var dateObject = new Date();

// console.log(dateObject.getDay());

f_day = dateObject.getDay();

f_hour = dateObject.getHours();
//console.log(f_hour);

if( f_day === 0 ){

    document.querySelector('.new_div') .setAttribute('style','display:none');
    document.querySelector('.new_div1') .setAttribute('style','display:none');
    document.querySelector('.new_div2') .setAttribute('style','display:none');

  if( f_day === 0 && f_hour >= 18){

    document.querySelector('.s_row') .setAttribute('style','display:block');
  
  document.querySelector('.s_row1') .setAttribute('style','display:block');

  document.querySelector('.s_row1').addEventListener('mouseover',function(){

      document.querySelector('.che').setAttribute('style','opacity:1');

      document.querySelector('.s_row1').addEventListener('mouseout',function(){

      document.querySelector('.che').setAttribute('style','opacity:0');
    
  });

  });

  document.querySelector('.s_row2') .setAttribute('style','display:block');

  document.querySelector('.s_row2').addEventListener('mouseover',function(){

      document.querySelector('.bio').setAttribute('style','opacity:1');

      document.querySelector('.s_row2').addEventListener('mouseout',function(){

      document.querySelector('.bio').setAttribute('style','opacity:0');
    
  });

  });

  document.querySelector('.s_row3') .setAttribute('style','display:block');

  document.querySelector('.s_row3').addEventListener('mouseover',function(){

      document.querySelector('.math').setAttribute('style','opacity:1');

      document.querySelector('.s_row3').addEventListener('mouseout',function(){

      document.querySelector('.math').setAttribute('style','opacity:0');
    
  });

  });

  document.querySelector('.s_row4') .setAttribute('style','display:block');

  document.querySelector('.s_row4').addEventListener('mouseover',function(){

      document.querySelector('.bang').setAttribute('style','opacity:1');

      document.querySelector('.s_row4').addEventListener('mouseout',function(){

      document.querySelector('.bang').setAttribute('style','opacity:0');
    
  });

  });

  document.querySelector('.s_row5') .setAttribute('style','display:block');

    document.querySelector('.s_row5').addEventListener('mouseover',function(){

      document.querySelector('.eng').setAttribute('style','opacity:1');

      document.querySelector('.s_row5').addEventListener('mouseout',function(){

      document.querySelector('.eng').setAttribute('style','opacity:0');
    
  });

  });

    document.querySelector('.t_row') .setAttribute('style','display:block');
  document.querySelector('.t_row1') .setAttribute('style','display:block');

  document.querySelector('.t_row1').addEventListener('mouseover',function(){

      document.querySelector('.math').setAttribute('style','opacity:1');

      document.querySelector('.t_row1').addEventListener('mouseout',function(){

      document.querySelector('.math').setAttribute('style','opacity:0');
    
  });

  });

  document.querySelector('.new_div3 h4').innerHTML = 'Your tommorow routine is : ';

  document.querySelector('.t_row2') .setAttribute('style','display:block');

  document.querySelector('.t_row2').addEventListener('mouseover',function(){

      document.querySelector('.bio').setAttribute('style','opacity:1');

      document.querySelector('.t_row2').addEventListener('mouseout',function(){

      document.querySelector('.bio').setAttribute('style','opacity:0');
    
  });

  });

  document.querySelector('.t_row3') .setAttribute('style','display:block');

  document.querySelector('.t_row3').addEventListener('mouseover',function(){

      document.querySelector('.phy').setAttribute('style','opacity:1');

      document.querySelector('.t_row3').addEventListener('mouseout',function(){

      document.querySelector('.phy').setAttribute('style','opacity:0');
    
  });

  });

  document.querySelector('.t_row4') .setAttribute('style','display:block');

  document.querySelector('.t_row4').addEventListener('mouseover',function(){

      document.querySelector('.che').setAttribute('style','opacity:1');

      document.querySelector('.t_row4').addEventListener('mouseout',function(){

      document.querySelector('.che').setAttribute('style','opacity:0');
    
  });

  });

  document.querySelector('.t_row5') .setAttribute('style','display:block');

    document.querySelector('.t_row5').addEventListener('mouseover',function(){

      document.querySelector('.eng').setAttribute('style','opacity:1');

      document.querySelector('.t_row5').addEventListener('mouseout',function(){

      document.querySelector('.eng').setAttribute('style','opacity:0');
    
  });

  });

  }else{

    document.querySelector('.s_row') .setAttribute('style','display:block');
  
  document.querySelector('.s_row1') .setAttribute('style','display:block');

  document.querySelector('.s_row1').addEventListener('mouseover',function(){

      document.querySelector('.che').setAttribute('style','opacity:1');

      document.querySelector('.s_row1').addEventListener('mouseout',function(){

      document.querySelector('.che').setAttribute('style','opacity:0');
    
  });

  });

  document.querySelector('.s_row2') .setAttribute('style','display:block');

  document.querySelector('.s_row2').addEventListener('mouseover',function(){

      document.querySelector('.bio').setAttribute('style','opacity:1');

      document.querySelector('.s_row2').addEventListener('mouseout',function(){

      document.querySelector('.bio').setAttribute('style','opacity:0');
    
  });

  });

  document.querySelector('.s_row3') .setAttribute('style','display:block');

  document.querySelector('.s_row3').addEventListener('mouseover',function(){

      document.querySelector('.math').setAttribute('style','opacity:1');

      document.querySelector('.s_row3').addEventListener('mouseout',function(){

      document.querySelector('.math').setAttribute('style','opacity:0');
    
  });

  });

  document.querySelector('.s_row4') .setAttribute('style','display:block');

  document.querySelector('.s_row4').addEventListener('mouseover',function(){

      document.querySelector('.bang').setAttribute('style','opacity:1');

      document.querySelector('.s_row4').addEventListener('mouseout',function(){

      document.querySelector('.bang').setAttribute('style','opacity:0');
    
  });

  });

  document.querySelector('.s_row5') .setAttribute('style','display:block');

    document.querySelector('.s_row5').addEventListener('mouseover',function(){

      document.querySelector('.eng').setAttribute('style','opacity:1');

      document.querySelector('.s_row5').addEventListener('mouseout',function(){

      document.querySelector('.eng').setAttribute('style','opacity:0');
    
  });

  });

  }

}else if( f_day === 1){

    document.querySelector('.new_div') .setAttribute('style','display:none');
    document.querySelector('.new_div1') .setAttribute('style','display:none');
    document.querySelector('.new_div2') .setAttribute('style','display:none');
    document.querySelector('.new_div3') .setAttribute('style','display:none');

  if( f_day === 1 && f_hour >= 18){

    document.querySelector('.t_row') .setAttribute('style','display:block');
  document.querySelector('.t_row1') .setAttribute('style','display:block');

  document.querySelector('.t_row1').addEventListener('mouseover',function(){

      document.querySelector('.math').setAttribute('style','opacity:1');

      document.querySelector('.t_row1').addEventListener('mouseout',function(){

      document.querySelector('.math').setAttribute('style','opacity:0');
    
  });

  });

  document.querySelector('.t_row2') .setAttribute('style','display:block');

  document.querySelector('.t_row2').addEventListener('mouseover',function(){

      document.querySelector('.bio').setAttribute('style','opacity:1');

      document.querySelector('.t_row2').addEventListener('mouseout',function(){

      document.querySelector('.bio').setAttribute('style','opacity:0');
    
  });

  });

 document.querySelector('.t_row3') .setAttribute('style','display:block');

  document.querySelector('.t_row3').addEventListener('mouseover',function(){

      document.querySelector('.phy').setAttribute('style','opacity:1');

      document.querySelector('.t_row3').addEventListener('mouseout',function(){

      document.querySelector('.phy').setAttribute('style','opacity:0');
    
  });

  });

  document.querySelector('.t_row4') .setAttribute('style','display:block');

  document.querySelector('.t_row4').addEventListener('mouseover',function(){

      document.querySelector('.che').setAttribute('style','opacity:1');

      document.querySelector('.t_row4').addEventListener('mouseout',function(){

      document.querySelector('.che').setAttribute('style','opacity:0');
    
  });

  });

  document.querySelector('.t_row5') .setAttribute('style','display:block');

    document.querySelector('.t_row5').addEventListener('mouseover',function(){

      document.querySelector('.eng').setAttribute('style','opacity:1');

      document.querySelector('.t_row5').addEventListener('mouseout',function(){

      document.querySelector('.eng').setAttribute('style','opacity:0');
    
  });

  });

      document.querySelector('.new_div4 h4').innerHTML = 'Your tommorow routine is : ';

      document.querySelector('.fo_row') .setAttribute('style', 'display:block');
  document.querySelector('.fo_row1') .setAttribute('style', 'display:block');

document.querySelector('.fo_row1').addEventListener('mouseover',function(){

      document.querySelector('.bio').setAttribute('style','opacity:1');

      document.querySelector('.fo_row1').addEventListener('mouseout',function(){

      document.querySelector('.bio').setAttribute('style','opacity:0');

  });

  });

  document.querySelector('.fo_row2') .setAttribute('style', 'display:block');

document.querySelector('.fo_row2').addEventListener('mouseover',function(){

      document.querySelector('.eng').setAttribute('style','opacity:1');

      document.querySelector('.fo_row2').addEventListener('mouseout',function(){

      document.querySelector('.eng').setAttribute('style','opacity:0');   

  });

  });

  document.querySelector('.fo_row3') .setAttribute('style', 'display:block');

document.querySelector('.fo_row3').addEventListener('mouseover',function(){

      document.querySelector('.che').setAttribute('style','opacity:1');

      document.querySelector('.fo_row3').addEventListener('mouseout',function(){

      document.querySelector('.che').setAttribute('style','opacity:0');
    
  });

  });

  document.querySelector('.fo_row4') .setAttribute('style', 'display:block');

document.querySelector('.fo_row4').addEventListener('mouseover',function(){

      document.querySelector('.math').setAttribute('style','opacity:1');

      document.querySelector('.fo_row4').addEventListener('mouseout',function(){

      document.querySelector('.math').setAttribute('style','opacity:0');
    
  });

  });

  document.querySelector('.fo_row5') .setAttribute('style', 'display:block');

  document.querySelector('.fo_row5').addEventListener('mouseover',function(){

      document.querySelector('.bang').setAttribute('style','opacity:1');

      document.querySelector('.fo_row5').addEventListener('mouseout',function(){

      document.querySelector('.bang').setAttribute('style','opacity:0');
    
  });

  });

  }else{

    document.querySelector('.t_row') .setAttribute('style','display:block');
  document.querySelector('.t_row1') .setAttribute('style','display:block');

  document.querySelector('.t_row1').addEventListener('mouseover',function(){

      document.querySelector('.math').setAttribute('style','opacity:1');

      document.querySelector('.t_row1').addEventListener('mouseout',function(){

      document.querySelector('.math').setAttribute('style','opacity:0');
    
  });

  });

  document.querySelector('.t_row2') .setAttribute('style','display:block');

  document.querySelector('.t_row2').addEventListener('mouseover',function(){

      document.querySelector('.bio').setAttribute('style','opacity:1');

      document.querySelector('.t_row2').addEventListener('mouseout',function(){

      document.querySelector('.bio').setAttribute('style','opacity:0');
    
  });

  });

  document.querySelector('.t_row3') .setAttribute('style','display:block');

  document.querySelector('.t_row3').addEventListener('mouseover',function(){

      document.querySelector('.phy').setAttribute('style','opacity:1');

      document.querySelector('.t_row3').addEventListener('mouseout',function(){

      document.querySelector('.phy').setAttribute('style','opacity:0');
    
  });

  });

  document.querySelector('.t_row4') .setAttribute('style','display:block');

  document.querySelector('.t_row4').addEventListener('mouseover',function(){

      document.querySelector('.che').setAttribute('style','opacity:1');

      document.querySelector('.t_row4').addEventListener('mouseout',function(){

      document.querySelector('.che').setAttribute('style','opacity:0');
    
  });

  });

  document.querySelector('.t_row5') .setAttribute('style','display:block');

    document.querySelector('.t_row5').addEventListener('mouseover',function(){

      document.querySelector('.eng').setAttribute('style','opacity:1');

      document.querySelector('.t_row5').addEventListener('mouseout',function(){

      document.querySelector('.eng').setAttribute('style','opacity:0');
    
  });

  });

  }
		
}else if( f_day === 2){

   document.querySelector('.new_div') .setAttribute('style','display:none');
    document.querySelector('.new_div1') .setAttribute('style','display:none');
    document.querySelector('.new_div2') .setAttribute('style','display:none');
    document.querySelector('.new_div3') .setAttribute('style','display:none');
    document.querySelector('.new_div4') .setAttribute('style','display:none');

  if(f_day === 2 && f_hour >= 18){

      document.querySelector('.fo_row') .setAttribute('style', 'display:block');
  document.querySelector('.fo_row1') .setAttribute('style', 'display:block');

document.querySelector('.fo_row1').addEventListener('mouseover',function(){

      document.querySelector('.bio').setAttribute('style','opacity:1');

      document.querySelector('.fo_row1').addEventListener('mouseout',function(){

      document.querySelector('.bio').setAttribute('style','opacity:0');

  });

  });

  document.querySelector('.fo_row2') .setAttribute('style', 'display:block');

document.querySelector('.fo_row2').addEventListener('mouseover',function(){

      document.querySelector('.eng').setAttribute('style','opacity:1');

      document.querySelector('.fo_row2').addEventListener('mouseout',function(){

      document.querySelector('.eng').setAttribute('style','opacity:0');   

  });

  });

  document.querySelector('.fo_row3') .setAttribute('style', 'display:block');

document.querySelector('.fo_row3').addEventListener('mouseover',function(){

      document.querySelector('.che').setAttribute('style','opacity:1');

      document.querySelector('.fo_row3').addEventListener('mouseout',function(){

      document.querySelector('.che').setAttribute('style','opacity:0');
    
  });

  });

  document.querySelector('.fo_row4') .setAttribute('style', 'display:block');

document.querySelector('.fo_row4').addEventListener('mouseover',function(){

      document.querySelector('.math').setAttribute('style','opacity:1');

      document.querySelector('.fo_row4').addEventListener('mouseout',function(){

      document.querySelector('.math').setAttribute('style','opacity:0');
    
  });

  });

  document.querySelector('.fo_row5') .setAttribute('style', 'display:block');

  document.querySelector('.fo_row5').addEventListener('mouseover',function(){

      document.querySelector('.bang').setAttribute('style','opacity:1');

      document.querySelector('.fo_row5').addEventListener('mouseout',function(){

      document.querySelector('.bang').setAttribute('style','opacity:0');
    
  });

  });

  document.querySelector('.new_div5 h4').innerHTML = 'Your tommorow routine is : ';

    document.querySelector('.fi_row') .setAttribute('style','display:block');

  document.querySelector('.fi_row1') .setAttribute('style','display:block');

  document.querySelector('.fi_row1').addEventListener('mouseover',function(){

      document.querySelector('.phy').setAttribute('style','opacity:1');

      document.querySelector('.fi_row1').addEventListener('mouseout',function(){

      document.querySelector('.phy').setAttribute('style','opacity:0');
    
  });

  });

  document.querySelector('.fi_row2') .setAttribute('style','display:block');

document.querySelector('.fi_row2').addEventListener('mouseover',function(){

      document.querySelector('.math').setAttribute('style','opacity:1');

      document.querySelector('.fi_row2').addEventListener('mouseout',function(){

      document.querySelector('.math').setAttribute('style','opacity:0');
    
  });

  });

  document.querySelector('.fi_row3') .setAttribute('style','display:block');

document.querySelector('.fi_row3').addEventListener('mouseover',function(){

      document.querySelector('.che').setAttribute('style','opacity:1');

      document.querySelector('.fi_row3').addEventListener('mouseout',function(){

      document.querySelector('.che').setAttribute('style','opacity:0');
    
  });

  });

  document.querySelector('.fi_row4') .setAttribute('style','display:block');

document.querySelector('.fi_row4').addEventListener('mouseover',function(){

      document.querySelector('.bio').setAttribute('style','opacity:1');

      document.querySelector('.fi_row4').addEventListener('mouseout',function(){

      document.querySelector('.bio').setAttribute('style','opacity:0');
    
  });

  });

  document.querySelector('.fi_row5') .setAttribute('style','display:block');

  document.querySelector('.fi_row5').addEventListener('mouseover',function(){

      document.querySelector('.bang').setAttribute('style','opacity:1');

      document.querySelector('.fi_row5').addEventListener('mouseout',function(){

      document.querySelector('.bang').setAttribute('style','opacity:0');
    
  });

  });

  }else{

      document.querySelector('.fo_row') .setAttribute('style', 'display:block');
  document.querySelector('.fo_row1') .setAttribute('style', 'display:block');

document.querySelector('.fo_row1').addEventListener('mouseover',function(){

      document.querySelector('.bio').setAttribute('style','opacity:1');

      document.querySelector('.fo_row1').addEventListener('mouseout',function(){

      document.querySelector('.bio').setAttribute('style','opacity:0');

  });

  });

  document.querySelector('.fo_row2') .setAttribute('style', 'display:block');

document.querySelector('.fo_row2').addEventListener('mouseover',function(){

      document.querySelector('.eng').setAttribute('style','opacity:1');

      document.querySelector('.fo_row2').addEventListener('mouseout',function(){

      document.querySelector('.eng').setAttribute('style','opacity:0');   

  });

  });

  document.querySelector('.fo_row3') .setAttribute('style', 'display:block');

document.querySelector('.fo_row3').addEventListener('mouseover',function(){

      document.querySelector('.che').setAttribute('style','opacity:1');

      document.querySelector('.fo_row3').addEventListener('mouseout',function(){

      document.querySelector('.che').setAttribute('style','opacity:0');
    
  });

  });

  document.querySelector('.fo_row4') .setAttribute('style', 'display:block');

document.querySelector('.fo_row4').addEventListener('mouseover',function(){

      document.querySelector('.math').setAttribute('style','opacity:1');

      document.querySelector('.fo_row4').addEventListener('mouseout',function(){

      document.querySelector('.math').setAttribute('style','opacity:0');
    
  });

  });

  document.querySelector('.fo_row5') .setAttribute('style', 'display:block');

  document.querySelector('.fo_row5').addEventListener('mouseover',function(){

      document.querySelector('.bang').setAttribute('style','opacity:1');

      document.querySelector('.fo_row5').addEventListener('mouseout',function(){

      document.querySelector('.bang').setAttribute('style','opacity:0');
    
  });

  });

  }

}else if ( f_day === 3){

  document.querySelector('.new_div') .setAttribute('style','display:none');
    document.querySelector('.new_div1') .setAttribute('style','display:none');
    document.querySelector('.new_div2') .setAttribute('style','display:none');
    document.querySelector('.new_div3') .setAttribute('style','display:none');
    document.querySelector('.new_div4') .setAttribute('style','display:none');
    document.querySelector('.new_div5') .setAttribute('style','display:none');

  if( f_day === 3 && f_hour >= 18){

    document.querySelector('.fi_row') .setAttribute('style','display:block');

  document.querySelector('.fi_row1') .setAttribute('style','display:block');

  document.querySelector('.fi_row1').addEventListener('mouseover',function(){

      document.querySelector('.phy').setAttribute('style','opacity:1');

      document.querySelector('.fi_row1').addEventListener('mouseout',function(){

      document.querySelector('.phy').setAttribute('style','opacity:0');
    
  });

  });

  document.querySelector('.fi_row2') .setAttribute('style','display:block');

document.querySelector('.fi_row2').addEventListener('mouseover',function(){

      document.querySelector('.math').setAttribute('style','opacity:1');

      document.querySelector('.fi_row2').addEventListener('mouseout',function(){

      document.querySelector('.math').setAttribute('style','opacity:0');
    
  });

  });

  document.querySelector('.fi_row3') .setAttribute('style','display:block');

document.querySelector('.fi_row3').addEventListener('mouseover',function(){

      document.querySelector('.che').setAttribute('style','opacity:1');

      document.querySelector('.fi_row3').addEventListener('mouseout',function(){

      document.querySelector('.che').setAttribute('style','opacity:0');
    
  });

  });

  document.querySelector('.fi_row4') .setAttribute('style','display:block');

document.querySelector('.fi_row4').addEventListener('mouseover',function(){

      document.querySelector('.bio').setAttribute('style','opacity:1');

      document.querySelector('.fi_row4').addEventListener('mouseout',function(){

      document.querySelector('.bio').setAttribute('style','opacity:0');
    
  });

  });

  document.querySelector('.fi_row5') .setAttribute('style','display:block');

  document.querySelector('.fi_row5').addEventListener('mouseover',function(){

      document.querySelector('.bang').setAttribute('style','opacity:1');

      document.querySelector('.fi_row5').addEventListener('mouseout',function(){

      document.querySelector('.bang').setAttribute('style','opacity:0');
    
  });

  });

  document.querySelector('.new_div6 h4').innerHTML = 'Your tommorow routine is : ';

  document.querySelector('.si_row') .setAttribute('style','display:block');

  }else{

    document.querySelector('.fi_row') .setAttribute('style','display:block');

  document.querySelector('.fi_row1') .setAttribute('style','display:block');

  document.querySelector('.fi_row1').addEventListener('mouseover',function(){

      document.querySelector('.phy').setAttribute('style','opacity:1');

      document.querySelector('.fi_row1').addEventListener('mouseout',function(){

      document.querySelector('.phy').setAttribute('style','opacity:0');
    
  });

  });

  document.querySelector('.fi_row2') .setAttribute('style','display:block');

document.querySelector('.fi_row2').addEventListener('mouseover',function(){

      document.querySelector('.math').setAttribute('style','opacity:1');

      document.querySelector('.fi_row2').addEventListener('mouseout',function(){

      document.querySelector('.math').setAttribute('style','opacity:0');
    
  });

  });

  document.querySelector('.fi_row3') .setAttribute('style','display:block');

document.querySelector('.fi_row3').addEventListener('mouseover',function(){

      document.querySelector('.che').setAttribute('style','opacity:1');

      document.querySelector('.fi_row3').addEventListener('mouseout',function(){

      document.querySelector('.che').setAttribute('style','opacity:0');
    
  });

  });

  document.querySelector('.fi_row4') .setAttribute('style','display:block');

document.querySelector('.fi_row4').addEventListener('mouseover',function(){

      document.querySelector('.bio').setAttribute('style','opacity:1');

      document.querySelector('.fi_row4').addEventListener('mouseout',function(){

      document.querySelector('.bio').setAttribute('style','opacity:0');
    
  });

  });

  document.querySelector('.fi_row5') .setAttribute('style','display:block');

  document.querySelector('.fi_row5').addEventListener('mouseover',function(){

      document.querySelector('.bang').setAttribute('style','opacity:1');

      document.querySelector('.fi_row5').addEventListener('mouseout',function(){

      document.querySelector('.bang').setAttribute('style','opacity:0');
    
  });

  });

  }

 }
  else if(f_day === 4 ){

    document.querySelector('.new_div1') .setAttribute('style','display:none');
    document.querySelector('.new_div2') .setAttribute('style','display:none');
    document.querySelector('.new_div3') .setAttribute('style','display:none');
    document.querySelector('.new_div4') .setAttribute('style','display:none');
    document.querySelector('.new_div5') .setAttribute('style','display:none');
    document.querySelector('.new_div6') .setAttribute('style','display:none');

   if(f_day === 4 && f_hour >= 18){

     document.querySelector('.si_row') .setAttribute('style','display:block');

     document.querySelector('.new_div h4').innerHTML = 'Your tommorow routine is : ';

    document.querySelector('.main_row') .setAttribute('style','display:block');

    document.querySelector('.sa_row') .setAttribute('style','display:block');

   }else{

   document.querySelector('.si_row') .setAttribute('style','display:block');

       }

 }else if( f_day === 5){

  document.querySelector('.new_div') .setAttribute('style','display:none');
    document.querySelector('.new_div2') .setAttribute('style','display:none');
    document.querySelector('.new_div3') .setAttribute('style','display:none');
    document.querySelector('.new_div4') .setAttribute('style','display:none');
    document.querySelector('.new_div5') .setAttribute('style','display:none');
    document.querySelector('.new_div6') .setAttribute('style','display:none');

    document.querySelector('.sa_row') .setAttribute('style','display:block');

  if( f_day === 5 && f_hour >= 18){

     document.querySelector('.sa_row') .setAttribute('style','display:none');

    document.querySelector('.new_div1 h4').innerHTML = 'It\'s FRIDAY dear! So Your tommorow routine is : ';

    document.querySelector('.f_row') .setAttribute('style','display:block');

  document.querySelector('.f_row1') .setAttribute('style','display:block');

  document.querySelector('.f_row1').addEventListener('mouseover',function(){

      document.querySelector('.eng').setAttribute('style','opacity:1');

      document.querySelector('.f_row1').addEventListener('mouseout',function(){

      document.querySelector('.eng').setAttribute('style','opacity:0');
    
  });

  });

  document.querySelector('.f_row2') .setAttribute('style','display:block');

  document.querySelector('.f_row2').addEventListener('mouseover',function(){

      document.querySelector('.phy').setAttribute('style','opacity:1');

      document.querySelector('.f_row2').addEventListener('mouseout',function(){

      document.querySelector('.phy').setAttribute('style','opacity:0');
    
  });

  });

  document.querySelector('.f_row3') .setAttribute('style','display:block');

  document.querySelector('.f_row3').addEventListener('mouseover',function(){

      document.querySelector('.math').setAttribute('style','opacity:1');

      document.querySelector('.f_row3').addEventListener('mouseout',function(){

      document.querySelector('.math').setAttribute('style','opacity:0');
    
  });

  });

  document.querySelector('.f_row4') .setAttribute('style','display:block');

  document.querySelector('.f_row4').addEventListener('mouseover',function(){

      document.querySelector('.che').setAttribute('style','opacity:1');

      document.querySelector('.f_row4').addEventListener('mouseout',function(){

      document.querySelector('.che').setAttribute('style','opacity:0');
    
  });

  });

  document.querySelector('.f_row5') .setAttribute('style','display:block');

  document.querySelector('.f_row5').addEventListener('mouseover',function(){

      document.querySelector('.bang').setAttribute('style','opacity:1');

      document.querySelector('.f_row5').addEventListener('mouseout',function(){

      document.querySelector('.bang').setAttribute('style','opacity:0');
    
  });

  });

  }else{

    document.querySelector('.sa_row') .setAttribute('style','display:block');

  }

}else if ( f_day === 6){

  document.querySelector('.new_div') .setAttribute('style','display:none');
  document.querySelector('.new_div1') .setAttribute('style','display:none');
    document.querySelector('.new_div3') .setAttribute('style','display:none');
    document.querySelector('.new_div4') .setAttribute('style','display:none');
    document.querySelector('.new_div5') .setAttribute('style','display:none');
    document.querySelector('.new_div6') .setAttribute('style','display:none');


  if(f_day === 6 && f_hour >= 18 ){

    document.querySelector('.f_row') .setAttribute('style','display:block');

  document.querySelector('.f_row1') .setAttribute('style','display:block');

  document.querySelector('.f_row1').addEventListener('mouseover',function(){

      document.querySelector('.eng').setAttribute('style','opacity:1');

      document.querySelector('.f_row1').addEventListener('mouseout',function(){

      document.querySelector('.eng').setAttribute('style','opacity:0');
    
  });

  });

  document.querySelector('.f_row2') .setAttribute('style','display:block');

  document.querySelector('.f_row2').addEventListener('mouseover',function(){

      document.querySelector('.phy').setAttribute('style','opacity:1');

      document.querySelector('.f_row2').addEventListener('mouseout',function(){

      document.querySelector('.phy').setAttribute('style','opacity:0');
    
  });

  });

  document.querySelector('.f_row3') .setAttribute('style','display:block');

  document.querySelector('.f_row3').addEventListener('mouseover',function(){

      document.querySelector('.math').setAttribute('style','opacity:1');

      document.querySelector('.f_row3').addEventListener('mouseout',function(){

      document.querySelector('.math').setAttribute('style','opacity:0');
    
  });

  });

  document.querySelector('.f_row4') .setAttribute('style','display:block');

  document.querySelector('.f_row4').addEventListener('mouseover',function(){

      document.querySelector('.che').setAttribute('style','opacity:1');

      document.querySelector('.f_row4').addEventListener('mouseout',function(){

      document.querySelector('.che').setAttribute('style','opacity:0');
    
  });

  });

  document.querySelector('.f_row5') .setAttribute('style','display:block');

  document.querySelector('.f_row5').addEventListener('mouseover',function(){

      document.querySelector('.bang').setAttribute('style','opacity:1');

      document.querySelector('.f_row5').addEventListener('mouseout',function(){

      document.querySelector('.bang').setAttribute('style','opacity:0');
    
  });

  });

   document.querySelector('.new_div2 h4').innerHTML = 'Your tommorow routine is : ';

	document.querySelector('.f_row') .setAttribute('style','display:block');

	document.querySelector('.f_row1') .setAttribute('style','display:block');

	document.querySelector('.f_row1').addEventListener('mouseover',function(){

  		document.querySelector('.eng').setAttribute('style','opacity:1');

  		document.querySelector('.f_row1').addEventListener('mouseout',function(){

  		document.querySelector('.eng').setAttribute('style','opacity:0');
 		
  });

  });

	document.querySelector('.f_row2') .setAttribute('style','display:block');

	document.querySelector('.f_row2').addEventListener('mouseover',function(){

  		document.querySelector('.phy').setAttribute('style','opacity:1');

  		document.querySelector('.f_row2').addEventListener('mouseout',function(){

  		document.querySelector('.phy').setAttribute('style','opacity:0');
 		
  });

  });

	document.querySelector('.f_row3') .setAttribute('style','display:block');

	document.querySelector('.f_row3').addEventListener('mouseover',function(){

  		document.querySelector('.math').setAttribute('style','opacity:1');

  		document.querySelector('.f_row3').addEventListener('mouseout',function(){

  		document.querySelector('.math').setAttribute('style','opacity:0');
 		
  });

  });

	document.querySelector('.f_row4') .setAttribute('style','display:block');

	document.querySelector('.f_row4').addEventListener('mouseover',function(){

  		document.querySelector('.che').setAttribute('style','opacity:1');

  		document.querySelector('.f_row4').addEventListener('mouseout',function(){

  		document.querySelector('.che').setAttribute('style','opacity:0');
 		
  });

  });

	document.querySelector('.f_row5') .setAttribute('style','display:block');

	document.querySelector('.f_row5').addEventListener('mouseover',function(){

  		document.querySelector('.bang').setAttribute('style','opacity:1');

  		document.querySelector('.f_row5').addEventListener('mouseout',function(){

  		document.querySelector('.bang').setAttribute('style','opacity:0');
 		
  });

  });

  document.querySelector('.s_row') .setAttribute('style','display:block');
  
  document.querySelector('.s_row1') .setAttribute('style','display:block');

  document.querySelector('.s_row1').addEventListener('mouseover',function(){

      document.querySelector('.che').setAttribute('style','opacity:1');

      document.querySelector('.s_row1').addEventListener('mouseout',function(){

      document.querySelector('.che').setAttribute('style','opacity:0');
    
  });

  });

  document.querySelector('.s_row2') .setAttribute('style','display:block');

  document.querySelector('.s_row2').addEventListener('mouseover',function(){

      document.querySelector('.bio').setAttribute('style','opacity:1');

      document.querySelector('.s_row2').addEventListener('mouseout',function(){

      document.querySelector('.bio').setAttribute('style','opacity:0');
    
  });

  });

  document.querySelector('.s_row3') .setAttribute('style','display:block');

  document.querySelector('.s_row3').addEventListener('mouseover',function(){

      document.querySelector('.math').setAttribute('style','opacity:1');

      document.querySelector('.s_row3').addEventListener('mouseout',function(){

      document.querySelector('.math').setAttribute('style','opacity:0');
    
  });

  });

  document.querySelector('.s_row4') .setAttribute('style','display:block');

  document.querySelector('.s_row4').addEventListener('mouseover',function(){

      document.querySelector('.bang').setAttribute('style','opacity:1');

      document.querySelector('.s_row4').addEventListener('mouseout',function(){

      document.querySelector('.bang').setAttribute('style','opacity:0');
    
  });

  });

  document.querySelector('.s_row5') .setAttribute('style','display:block');

    document.querySelector('.s_row5').addEventListener('mouseover',function(){

      document.querySelector('.eng').setAttribute('style','opacity:1');

      document.querySelector('.s_row5').addEventListener('mouseout',function(){

      document.querySelector('.eng').setAttribute('style','opacity:0');
    
  });

  });

}else{

    document.querySelector('.f_row') .setAttribute('style','display:block');

  document.querySelector('.f_row1') .setAttribute('style','display:block');

  document.querySelector('.f_row1').addEventListener('mouseover',function(){

      document.querySelector('.eng').setAttribute('style','opacity:1');

      document.querySelector('.f_row1').addEventListener('mouseout',function(){

      document.querySelector('.eng').setAttribute('style','opacity:0');
    
  });

  });

  document.querySelector('.f_row2') .setAttribute('style','display:block');

  document.querySelector('.f_row2').addEventListener('mouseover',function(){

      document.querySelector('.phy').setAttribute('style','opacity:1');

      document.querySelector('.f_row2').addEventListener('mouseout',function(){

      document.querySelector('.phy').setAttribute('style','opacity:0');
    
  });

  });

  document.querySelector('.f_row3') .setAttribute('style','display:block');

  document.querySelector('.f_row3').addEventListener('mouseover',function(){

      document.querySelector('.math').setAttribute('style','opacity:1');

      document.querySelector('.f_row3').addEventListener('mouseout',function(){

      document.querySelector('.math').setAttribute('style','opacity:0');
    
  });

  });

  document.querySelector('.f_row4') .setAttribute('style','display:block');

  document.querySelector('.f_row4').addEventListener('mouseover',function(){

      document.querySelector('.che').setAttribute('style','opacity:1');

      document.querySelector('.f_row4').addEventListener('mouseout',function(){

      document.querySelector('.che').setAttribute('style','opacity:0');
    
  });

  });

  document.querySelector('.f_row5') .setAttribute('style','display:block');

  document.querySelector('.f_row5').addEventListener('mouseover',function(){

      document.querySelector('.bang').setAttribute('style','opacity:1');

      document.querySelector('.f_row5').addEventListener('mouseout',function(){

      document.querySelector('.bang').setAttribute('style','opacity:0');
    
  });

  });

}

}



