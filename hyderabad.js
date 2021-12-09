const listItem1= document.querySelector('#listItem1')
const listItem2= document.querySelector('#listItem2')
const listItem3= document.querySelector('#listItem3')
const listItem4= document.querySelector('#listItem4')
const subContainer2 = document.querySelector('.subContainer2')
const subContainer3 = document.querySelector('.subContainer3')
const subContainer4 = document.querySelector('.subContainer4')
const subContainer5 = document.querySelector('.subContainer5')
const Btn1 = document.querySelector('.Btn1')
const Btn2 = document.querySelector('.Btn2')
const Btn3 = document.querySelector('.Btn3')
const Btn4 = document.querySelector('.Btn4')


listItem1.addEventListener('click',()=>{

    if(subContainer2.classList.contains('subContainer')){
        subContainer2.classList.remove('subContainer')
        subContainer3.classList.add('subContainer')
        subContainer4.classList.add('subContainer')
        subContainer5.classList.add('subContainer')

        Btn1.classList.remove('BtnAnti')
        Btn2.classList.remove('BtnClock')
        Btn3.classList.remove('BtnClock')
        Btn4.classList.remove('BtnClock')


        
        
    }


})
listItem2.addEventListener('click',()=>{
    if(subContainer3.classList.contains('subContainer')){
        subContainer3.classList.remove('subContainer')
        subContainer2.classList.add('subContainer')
        subContainer4.classList.add('subContainer')
        subContainer5.classList.add('subContainer')

        Btn2.classList.add('BtnClock')


        Btn1.classList.add('BtnAnti')
        Btn3.classList.remove('BtnClock')
        Btn4.classList.remove('BtnClock')

       
    }
})


listItem3.addEventListener('click',()=>{

    if(subContainer4.classList.contains('subContainer')){
        subContainer4.classList.remove('subContainer')
        subContainer3.classList.add('subContainer')
        subContainer2.classList.add('subContainer')
        subContainer5.classList.add('subContainer')

        Btn3.classList.add('BtnClock')

        Btn2.classList.remove('BtnClock')
        Btn4.classList.remove('BtnClock')
        Btn1.classList.add('BtnAnti')


        
       

    }

})
listItem4.addEventListener('click',()=>{

    if(subContainer5.classList.contains('subContainer')){
        subContainer5.classList.remove('subContainer')
        subContainer3.classList.add('subContainer')
        subContainer2.classList.add('subContainer')
        subContainer4.classList.add('subContainer')

        Btn4.classList.add('BtnClock')

        Btn3.classList.remove('BtnClock')
        Btn2.classList.remove('BtnClock')
        Btn1.classList.add('BtnAnti')

        
        

    }


})
// alert box
        const selection = document.querySelector('#selection')
        const selection1 =document.querySelector('#selection1')
        const selection2 =document.querySelector('#selection2')
        const selection3 =document.querySelector('#selection3')

        const alert1 = document.querySelector('#alert1')
        const alert2 = document.querySelector('#alert2')
        const alert3 = document.querySelector('#alert3')
        const alert4 = document.querySelector('#alert4')

        const okBtn = document.querySelector('#ok')
        const okBtn2 = document.querySelector('#ok2')
        const okBtn3 = document.querySelector('#ok3')
        const okBtn4 = document.querySelector('#ok4')

        const cancelBtn = document.querySelector('#cancel')
        const cancelBtn2 = document.querySelector('#cancel2')
        const cancelBtn3 = document.querySelector('#cancel3')
        const cancelBtn4 = document.querySelector('#cancel4')



        
        selection.addEventListener('mouseover',()=>{
            if(alert1.classList.contains('alertPop')){
             alert1.classList.remove('alertPop')
            }else{
                alert1.classList.add('alertPop')
                // alert('DO YOU WANT TO TAKE AN APPOINTMENT ')
            }
            okBtn.addEventListener('click',()=>{
                if(alert1.classList.contains('alertOut')){
                 alert1.classList.remove('alertOut')
                    
                }else{
                    alert1.classList.add('alertOut')
                    console.log('YES, I WANT TO BOOK AN APPOINTMENT IN APOLLO HOSPITAL')
                    

                }
            })
    
    
            cancelBtn.addEventListener('click',()=>{
                if(alert1.classList.contains('alertOut')){
                 alert1.classList.remove('alertOut')
                    
                }else{
                    alert1.classList.add('alertOut')
                    console.log('NO,  I DO NOT WANT TO BOOK AN APPOINTMENT IN APOLLO HOSPITAL')
                }
            })
    

        })



        selection1.addEventListener('mouseover',()=>{
            if(alert2.classList.contains('alertPop')){
             alert2.classList.remove('alertPop')
                
            }else{
                alert2.classList.add('alertPop')
            }
            okBtn2.addEventListener('click',()=>{
                if(alert2.classList.contains('alertOut')){
                 alert2.classList.remove('alertOut')
                    
                }else{
                    alert2.classList.add('alertOut')
                    console.log('YES, I WANT TO BOOK AN APPOINTMENT IN KIMS HOSPITAL')
                }
            })
    
            cancelBtn2.addEventListener('click',()=>{
                if(alert2.classList.contains('alertOut')){
                    alert2.classList.remove('alertOut')
                
                }else{
                    alert2.classList.add('alertOut')
                    console.log('NO,  I DO NOT WANT TO BOOK AN APPOINTMENT IN KIMS HOSPITAL')
                }
            })
            
            
        })
        

        selection2.addEventListener('mouseover',()=>{
            if(alert3.classList.contains('alertPop')){
             alert3.classList.remove('alertPop')
                
            }else{
                alert3.classList.add('alertPop')
            }
            
        })
        okBtn3.addEventListener('click',()=>{
            if(alert3.classList.contains('alertOut')){
             alert3.classList.remove('alertOut')
                
            }else{
                alert3.classList.add('alertOut')
                console.log('YES, I WANT TO BOOK AN APPOINTMENT IN YASHODA HOSPITAL')
            }
        })

        cancelBtn3.addEventListener('click',()=>{
            if(alert3.classList.contains('alertOut')){
             alert3.classList.remove('alertOut')
                
            }else{
                alert3.classList.add('alertOut')
                console.log('NO,  I DO NOT WANT TO BOOK AN APPOINTMENT IN YASHODA HOSPITAL')
            }
        })


        selection3.addEventListener('mouseover',()=>{
            if(alert4.classList.contains('alertPop')){
             alert4.classList.remove('alertPop')
              
            }else{
                alert4.classList.add('alertPop')
            }
            
        })
        okBtn4.addEventListener('click',()=>{
            if(alert4.classList.contains('alertOut')){
             alert4.classList.remove('alertOut')
               
            }else{
                alert4.classList.add('alertOut')
                console.log('YES, I WANT TO BOOK AN APPOINTMENT CARE HOSPITAL')
            }
        })

        cancelBtn4.addEventListener('click',()=>{
            if(alert4.classList.contains('alertOut')){
             alert4.classList.remove('alertOut')
              
            }else{
                alert4.classList.add('alertOut')
                console.log('NO,  I DO NOT WANT TO BOOK AN APPOINTMENT CARE HOSPITAL')
            }
        })