const {app,BrowserWindow}=require('electron')
const path=require('path')
const url=require('url')
const { ipcMain,Menu } = require('electron')

let win
let levelTwoWindow
let values
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
 win.on("ready-to-show",()=>{
    win.show()
 })
 //win.hide()
 /*win.on("window-all-closed",()=>{
    app.quit()
    if(process.platform!="darwin"){
        app.quit()
    }
})*/
ipcMain.on('nextLevel',(err,args)=>{
    CreateLevelTwoWindow()
    values=args
    win.close()
})
})

function CreateLevelTwoWindow(){
    levelTwoWindow=new BrowserWindow({width:880,height:680,webPreferences: {
        nodeIntegration: true
    }})
    levelTwoWindow.loadURL(url.format({
        pathname:path.join(__dirname,'../html/level_two.html'),
        protocol:'file',
        slashes:true
    }))

    levelTwoWindow.removeMenu()
    levelTwoWindow.openDevTools()
    levelTwoWindow.maximize()
    
ipcMain.on('loaded',(err,args)=>{
    levelTwoWindow.webContents.send("values",values)
})


    levelTwoWindow.webContents.send('data',values)

    levelTwoWindow.on("window-all-closed",()=>{
        app.quit()
        if(process.platform!="darwin"){
            app.quit()
        }
    })

    
    levelTwoWindow.on('closed',()=>{
     levelTwoWindow=null
 })
}
