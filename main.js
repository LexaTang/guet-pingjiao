const {app, BrowserWindow, Menu} = require('electron')

function createWindow () {   
    Menu.setApplicationMenu(null)
    // 关闭安全设置
    win = new BrowserWindow({webPreferences: {webSecurity: false}, width: 1440, height: 900})
  
    win.loadFile('index.html')
  }
  
  app.on('ready', createWindow)

  app.on('window-all-closed', () => {

    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
  
  app.on('activate', () => {

    if (win === null) {
      createWindow()
    }
  })