const content = ["It was supposed to be a dream vacation. They had planned it over a year in advance so that it would be perfect in every way. It had been what they had been looking forward to through all the turmoil and negativity around them. It had been the light at the end of both their tunnels.",
                 "She wondered if the note had reached him. She scolded herself for not handing it to him in person. She trusted her friend, but so much could happen. She waited impatiently for word",
                 "The river slowly meandered through the open space. It had hidden secrets that it didn't want to reveal. It had a well-planned strategy to appear calm, inviting, and appealing. That's how the river lured her unknowing victims to her water's edge.",
                 "There was little doubt that the bridge was unsafe. All one had to do was look at it to know that with certainty. Yet Bob didn't see another option. He may have been able to work one out if he had a bit of time to think things through, but time was something he didn't have. A choice needed to be made, and it needed to be made quickly."
                ];


const randIdx  = Math.floor(Math.random()*content.length);
const btn = document.getElementById('btn');
const con = document.getElementById('container');
const cont = document.getElementById('content');
const timer  = document.querySelector('.timer');
const overlap = document.querySelector('.overlap');
let ch = document.createElement('span');

let btnmsg = 'Start';   

let stime, etime, timerf;

let string1 , string2;

let count = 0, idx = 0, array=[];


function start(){


    console.log(typeof string1);
     for(let i=0; i<string1.length; i++)
     {
        array.push(string1[i]);
     }
    
    console.log(array);


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

    con.value= '';
    timer.innerHTML = `00 : 60`
    
    clearInterval(timerf);  

     etime = new Date();

    cont.innerHTML = 'Start Now!';
    con.innerText = '';

}

function keyHandler(e){
    // console.log(e);
  
   
    if(idx==array.length-1)
    {
        end();
    }
    
    if(e.inputType=='deleteContentBackward')
    {
        console.log('backspace');
        idx--;
        return;
    }
   
   
    if(e.data==array[idx])
    {
       
        ch.append(e.data);
        ch.classList.remove('wrong');
        ch.classList.add('correct');
        overlap.append(ch);

    }
    else{
        ch.append(e.data);
        ch.classList.remove('correct');
        ch.classList.add('wrong');
        overlap.append(ch);
        console.log('incorrect');
    }
    idx++;


}

function clickHandler(){

    const randIdx  = Math.floor(Math.random()*content.length);
    string1 = content[randIdx];
    cont.innerHTML = string1;
    
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