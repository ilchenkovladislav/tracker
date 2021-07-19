// Модули для управления приложением и создания окна
const {app, BrowserWindow} = require('electron');
const path = require ('path');
const url = require ('url');

function createWindow () {
  // Создаем окно браузера.
  const mainWindow = new BrowserWindow({
    width: 800,
    maxWidth: 800,
    minWidth: 800,
    height: 600,
    maxHeight:600,
    minHeight: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  const startUrl = process.env.ELECTRON_START_URL || url.format({
    pathname: path.join(__dirname, '../index.html'),
    protocol: 'file:',
    slashes: true
  });
  
  mainWindow.loadURL(startUrl);
}

// Этот метод вызывается когда приложение инициализируется
// и будет готово для создания окон.
// Некоторые API могут использоваться только после возникновения этого события.
app.whenReady().then(() => {
  createWindow()
  
  app.on('activate', function () {
    // На MacOS обычно пересоздают окно в приложении,
    // после того, как на иконку в доке нажали и других открытых окон нету.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Выйти когда все окна закрыты
app.on('window-all-closed', function () {
  // Для приложений и строки меню в macOS является обычным делом оставаться
  // активными до тех пор, пока пользователь не выйдет окончательно используя Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

// В этом файле вы можете включить остальную часть основного процесса вашего приложения
//  Вы также можете поместить их в отдельные файлы и подключить через require.