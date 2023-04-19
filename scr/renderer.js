const electron=require('electron');

const {ipcRenderer:ipc}=electron;


function fillPrg()
{
    let prg=document.getElementById('divprgbar'); 
    var width=0;  
    var id = setInterval(_=>{
        if (width >= 230) 
        {
            clearInterval(id);  
            ipc.send("OpenNextPage","true");    //One way communication using IPC
        } 
        else 
        {
            width += 23; 
            prg.style.width = width + 'px'; 
        }
    }, 1000);
}



