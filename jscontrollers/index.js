const {app,BrowserWindow}=require('electron')
const path=require('path')
const url=require('url')
const { ipcMain,Menu } = require('electron')
const {remote}=require('electron')
const {ipcRender}=require('electron')  
let win
var max_height=process.env.height;
var max_width=process.env.width;

app.on('ready',function(){
    win=new BrowserWindow({width:1100,height:700,webPreferences: {
        nodeIntegration: true
    }})
    win.loadURL(url.format({
        pathname:path.join(__dirname,'../html/index.html'),
        protocol:'file',
        slashes:true
    }))
    win.maximize()
    win.removeMenu()
    win.openDevTools()
   win.on('closed',()=>{
     win=null
 })
 win.on("window-all-closed",()=>{
    app.quit()
    if(process.platform!="darwin"){
        app.quit()
    }
})
})
