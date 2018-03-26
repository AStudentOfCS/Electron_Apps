const electron = require('electron');
const { Tray, Menu, app } = electron;

class TasksTray extends Tray {
  constructor(iconPath, mainWindow) {
    super(iconPath);

    this.mainWindow = mainWindow;

    this.setToolTip('Tasks App');
    this.on('click', this.onClick);
    this.on('right-click', this.onRightClick);
  }

  onClick(event, bounds) {
    // Icon click bounds
    const { x, y } = bounds;

    // Get window height and width
    const { height, width } = this.mainWindow.getBounds();

    if (this.mainWindow.isVisible()) {
      this.mainWindow.hide();
    } else {
      const yPosition = process.platform === 'darwin' ? y : y - height;

      this.mainWindow.setBounds({
        x: x - width / 2,
        y: yPosition,
        height,
        width
      });

      this.mainWindow.show();
    }
  }

  onRightClick() {
    const menuConfig = Menu.buildFromTemplate([
      {
        label: 'Quit',
        click: () => app.quit()
      }
    ]);

    this.popUpContextMenu(menuConfig);
  }
}

module.exports = TasksTray;
