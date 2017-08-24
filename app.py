from flask import Flask
from flask_mongoengine import MongoEngine

db = MongoEngine()


def create_app(**config_overrides):
    app = Flask(__name__)

    ''' Use app.config
    app.config['MONGODB_SETTINGS'] = {
        'db': 'test',
        'host': '127.0.0.1',
        'port': 27017
    }

    or

    app.config['MONGODB_DB'] = 'test'
    app.config['MONGODB_HOST'] = '127.0.0.1'
    app.config['MONGODB_PORT'] = 27017
    app.config['MONGODB_USERNAME'] = 'admin'
    app.config['MONGODB_PASSWORD'] = '12345'

    '''
    app.config.from_pyfile('settings.py')

    app.config.update(config_overrides)

    db.init_app(app)

    from user.routes import user_routes
    app.register_blueprint(user_routes)

    from home.routes import home_routes
    app.register_blueprint(home_routes)

    return app