const content = ["It was supposed to be a dream vacation. They had planned it over a year in advance so that it would be perfect in every way. It had been what they had been looking forward to through all the turmoil and negativity around them. It had been the light at the end of both their tunnels.",
                 "She wondered if the note had reached him. She scolded herself for not handing it to him in person. She trusted her friend, but so much could happen. She waited impatiently for word",
                 "The river slowly meandered through the open space. It had hidden secrets that it didn't want to reveal. It had a well-planned strategy to appear calm, inviting, and appealing. That's how the river lured her unknowing victims to her water's edge.",
                 "There was little doubt that the bridge was unsafe. All one had to do was look at it to know that with certainty. Yet Bob didn't see another option. He may have been able to work one out if he had a bit of time to think things through, but time was something he didn't have. A choice needed to be made, and it needed to be made quickly.",
                 "April seriously wondered about her sleeping partner choices. She looked at her bed and what a mess it had become. How did she get to the point in her life where she had two dogs, three cats, and a raccoon sleeping with her every night?",
                 "There was no time. He ran out of the door without half the stuff he needed for work, but it didn't matter. He was late and if he didn't make this meeting on time, someone's life may be in danger."

                ];


const randIdx  = Math.floor(Math.random()*content.length);
const btn = document.getElementById('btn');
const con = document.getElementById('container');
const cont = document.getElementById('content');
const timer  = document.querySelector('.timer');
const display = document.querySelector('.disp');
let wrong;


let btnmsg = 'Start';   

let stime, etime, timerf;

let string1 , string2;

let count = 0, idx = 0, array=[];

let mistakes = 0;
let totalWords = 0, myWords =0, totalChar = 0;


function start(){


   
     for(let i=0; i<string1.length; i++)
     {
        array.push(string1[i]);
     }
    
 


    count = 0, idx = 0;
    
    con.value= '';
    container.focus();
    let timeC = 59;
     stime = new Date();
   
     timerf = setInterval(function(){

        if(timeC<10)
        {
            timer.innerHTML= `00 : 0${timeC--}`;
        }
        else
          {
            timer.innerHTML= `00 : ${timeC--}`;
          }

          if(timeC===-1)
          {
            end();
          }
    },1000)

    
}

function end(){
    clearInterval(timerf);

    etime = new Date();

    let totalTime = (etime-stime)/1000;

    
    let totalCharacters = display.childElementCount - wrong.length;
    let finalmsg = document.createElement('p');
   
    display.innerHTML = '';
    display.append(finalmsg);
    
    let words = Math.round((totalWords/totalChar)*totalCharacters);

   let speed = Math.round((words/totalTime)*60);
 
   finalmsg.innerHTML = `Your speed : ${speed} wpm`;
   


    con.value= '';
    timer.innerHTML = `00 : 60`
    
  


    

    cont.innerHTML = 'Play Again!';
    con.innerText = '';

}

function keyHandler(e){
    // console.log(e);
  
    wrong = document.querySelectorAll('.wrong');
   
   
    
    if(e.inputType=='deleteContentBackward')
    {
        display.removeChild(display.lastElementChild);
        // console.log('backspace');
        idx--;
        return;
    }
    let ch = document.createElement('span');
   
    ch.append(e.data);
   
    if(e.data==array[idx])
    {
       
        ch.classList.remove('wrong');
        ch.classList.add('correct');
        


    }
    else{
        
        ch.classList.remove('correct');
        ch.classList.add('wrong');
    }

    // console.log(ch);
    display.append(ch);
    

    idx++;


}

function clickHandler(){

    const randIdx  = Math.floor(Math.random()*content.length);
    string1 = content[randIdx];
    cont.innerHTML = string1;

    let tempString = string1.split(' ');

    let charString = string1.split('');
    totalChar = charString.filter(w => w!='').length;
    
    totalWords = tempString.filter(w=>w!==' ').length;

   
 
    
    if(btn.innerText=='Start')
    {
       btn.innerText = 'End';
       start();
    }
    else{

        btn.innerText = 'Start'
        end();
    }
    

}


con.addEventListener('input', keyHandler);


btn.addEventListener('click', clickHandler);