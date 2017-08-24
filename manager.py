import os, sys

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from flask.ext.script import Manager, Server

from app import create_app

app = create_app()
manager = Manager(app)

manager.add_command("run", Server(
    use_debugger=True,
    use_reloader=True,
    host=os.getenv('IP', '0.0.0.0'),
    port=9527
))

if __name__ == '__main__':
    manager.run()
