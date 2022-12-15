const content = ["It was supposed to be a dream vacation. They had planned it over a year in advance so that it would be perfect in every way. It had been what they had been looking forward to through all the turmoil and negativity around them. It had been the light at the end of both their tunnels. Now that the dream vacation was only a week away, the virus had stopped all air travel.",
                 "She wondered if the note had reached him. She scolded herself for not handing it to him in person. She trusted her friend, but so much could happen. She waited impatiently for word",
                 "The river slowly meandered through the open space. It had hidden secrets that it didn't want to reveal. It had a well-planned strategy to appear calm, inviting, and appealing. That's how the river lured her unknowing victims to her water's edge.",
                 "There was little doubt that the bridge was unsafe. All one had to do was look at it to know that with certainty. Yet Bob didn't see another option. He may have been able to work one out if he had a bit of time to think things through, but time was something he didn't have. A choice needed to be made, and it needed to be made quickly."
                ];


const randIdx  = Math.floor(Math.random()*content.length);
const btn = document.getElementById('btn');
const con = document.getElementById('container');
const cont = document.getElementById('content');
let btnmsg = 'Start';   

function start(){
    let stime = new Date();
}

function clickHandler(){

    const randIdx  = Math.floor(Math.random()*content.length);
    cont.innerHTML = content[randIdx];
    if(btn.innerText=='Start')
    {
       btn.innerText = 'End';
       start();
    }
    else{
        btn.innerText = 'Start'
    }
    

}




btn.addEventListener('click', clickHandler);