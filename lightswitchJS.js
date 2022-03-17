var btn = document.createElement('button');
btn.style.margin = '10px';
btn.innerHTML = '........';
document.body.appendChild(btn);

// schijf hier tussen je code

light = '';

function lightswitch(light){
    if (light != 'ON'){
        btn.innerHTML = 'Turn on';
        btn.onclick = function(){
            document.body.style.backgroundColor = "Yellow";
            light = 'ON';
            lightswitch(light);
        }   
    }
    else{
        btn.innerHTML = 'Turn off';
        btn.onclick = function(){
            document.body.style.backgroundColor = "Black";
            light = 'OFF';
            lightswitch(light);
        }
    }
}
lightswitch(light);

// schijf hier tussen je code

// MEME
//
// function lightswitch(light){
//     if (light != 'ON'){
//         btn.innerHTML = 'Turn on';
//         btn.onclick = function(){
//             document.body.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/881657359594815521/953948080963739648/unknown.png ')";
//             light = 'ON';
//             lightswitch(light);
//         }   
//     }
//     else{
//         btn.innerHTML = 'Turn off';
//         btn.onclick = function(){
//             document.body.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/881657359594815521/953948143966363648/unknown.png ')";
//             light = 'OFF';
//             lightswitch(light);
//         }
//     }
// }
// lightswitch(light);