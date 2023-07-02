import sys
from PyQt5.QtCore import QUrl # pip install PyQt5
from PyQt5.QtWidgets import *
from PyQt5.QtWebEngineWidgets import QWebEngineView
from PyQt5.QtGui import *

# Create an instance of QApplication
app = QApplication(sys.argv)

# Create a QWebEngineView object
web_view = QWebEngineView()

# Load a local HTML file
html_file = sys.path[0] +'/'+ 'index.html'
url = QUrl.fromLocalFile(html_file)
web_view.load(url)

# Set the window title
web_view.setWindowTitle('Hunt And Peck: Please find and press the indicated key')

# Set the minimum size
web_view.setMinimumSize(800, 600)

# Set the window icon
web_view.setWindowIcon(QIcon( sys.path[0] +'/'+'icon.png'))
# Make sure there is a taskbar icon on Windows
if sys.platform == "win32":
    import ctypes
    myappid = 'FIND_THE_KEY_GAME'
    ctypes.windll.shell32.SetCurrentProcessExplicitAppUserModelID(myappid)

# Show the browser window
web_view.show()

# Start the application event loop
sys.exit(app.exec_())