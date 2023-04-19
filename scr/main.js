const electron =require("electron");

const {app,BrowserWindow,ipcMain:ipc}=electron;
let mainwindow,childwindow;

app.on('ready',_=>{
    mainwindow=new BrowserWindow({
        width:642,
        height:482,
        resizable:false,
        frame:false,
        webPreferences:{
            nodeIntegration:true,
            contextIsolation:false
        },
        scrollbars:false
    });
    mainwindow.loadURL(`file://${__dirname}/index.html`); 

    childwindow=new BrowserWindow({
        width:642,
        height:482,
        resizable:false,
        frame:false,
        webPreferences:{
            nodeIntegration:true,
            contextIsolation:false
        },
        scrollbars:false,
        show:false
    });
    //Handled IPC communication i.e receiving response from UI/Renderer Process in this IPC.on
    ipc.on("OpenNextPage",(event,args)=>{
        if(args=="true")
        {
            childwindow.loadURL(`file://${__dirname}/Child.html`);  
            childwindow.show();
            mainwindow.hide();
        }
    });

    //mainwindow.loadFile() we can use instead loadURL.
    mainwindow.on('closed',_=>{
        console.log('Closed');
    }); 
});


