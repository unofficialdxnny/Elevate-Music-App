 
$( document ).ready(function() {
  //change 2500 to better value or remove delay
   $(".loader").delay(2500).fadeOut("slow"); 
});
	
'use strict';
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
let mainWindow = null;
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
app.on('ready', () => {
  mainWindow = new BrowserWindow({ width: 400, height: 200 });
  mainWindow.loadURL(`file://${__dirname}/index.html`);
  mainWindow.on('closed', () => { mainWindow = null; });
  mainWindow = new BrowserWindow({fullscreen: true});

});