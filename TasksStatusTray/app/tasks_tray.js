const electron = require('electron');
const { Tray } = electron;

class TasksTray extends Tray {
  constructor(iconPath, mainWindow) {
    super(iconPath);

    this.mainWindow = mainWindow;

    this.setToolTip('Tasks App');
    this.on('click', this.onClick);
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
}

module.exports = TasksTray;
