const listItem1= document.querySelector('#listItem1')
const listItem2= document.querySelector('#listItem2')

const subContainer2 = document.querySelector('.subContainer2')
const subContainer3 = document.querySelector('.subContainer3')
const Btn1 = document.querySelector('.Btn1')
const Btn2 = document.querySelector('.Btn2')
const Btn3 = document.querySelector('.Btn3')
const Btn4 = document.querySelector('.Btn4')

listItem1.addEventListener('click',()=>{

    if(subContainer2.classList.contains('subContainer')){
        subContainer2.classList.remove('subContainer')
        subContainer3.classList.add('subContainer')

        Btn1.classList.remove('BtnAnti')
        Btn2.classList.remove('BtnClock')

    }


})

listItem2.addEventListener('click',()=>{
    if(subContainer3.classList.contains('subContainer')){
        subContainer3.classList.remove('subContainer')
        subContainer2.classList.add('subContainer')

        Btn2.classList.add('BtnClock')


        Btn1.classList.add('BtnAnti')

    }
    
})

// alert box
const selection = document.querySelector('#selection')
const selection1 =document.querySelector('#selection1')


const alert1 = document.querySelector('#alert1')
const alert2 = document.querySelector('#alert2')


const okBtn = document.querySelector('#ok')
const okBtn2 = document.querySelector('#ok2')


const cancelBtn = document.querySelector('#cancel')
const cancelBtn2 = document.querySelector('#cancel2')





selection.addEventListener('mouseover',()=>{
    if(alert1.classList.contains('alertPop')){
     alert1.classList.remove('alertPop')
    }else{
        alert1.classList.add('alertPop')
    }
    okBtn.addEventListener('click',()=>{
        if(alert1.classList.contains('alertOut')){
         alert1.classList.remove('alertOut')
            
        }else{
            alert1.classList.add('alertOut')
            console.log('YES, I WANT TO BOOK AN APPOINTMENT IN APOLLO REACH HOSPITAL')
        }
    })


    cancelBtn.addEventListener('click',()=>{
        if(alert1.classList.contains('alertOut')){
         alert1.classList.remove('alertOut')
            
        }else{
            alert1.classList.add('alertOut')
            console.log('NO,  I DO NOT WANT TO BOOK AN APPOINTMENT IN APOLLO REACH HOSPITAL')
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
            console.log('YES, I WANT TO BOOK AN APPOINTMENT IN MEDICOVER HOSPITAL')
        }
    })

    cancelBtn2.addEventListener('click',()=>{
        if(alert2.classList.contains('alertOut')){
            alert2.classList.remove('alertOut')
        
        }else{
            alert2.classList.add('alertOut')
            console.log('NO,  I DO NOT WANT TO BOOK AN APPOINTMENT IN MEDICOVER HOSPITAL')
        }
    })

    
})


