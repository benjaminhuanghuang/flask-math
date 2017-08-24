from flask import Blueprint, request, redirect, session, url_for
from flask_bcrypt import Bcrypt
import json

from user.models import User

user_routes = Blueprint('user_routes', __name__)

bcrypt = Bcrypt()


@user_routes.route('/test')
def test():
    return "test"


@user_routes.route('/login', methods=['POST'])
def login():
    username = request.json.get('username')
    password = request.json.get('password')

    user = User.objects.filter(username=username).first()
    if user:
        if bcrypt.check_password_hash(user.password, password):
            session['username'] = username
            user_info = {"user_id": str(user.id),
                         "user_name": user.username,
                         "first_name": user.first_name,
                         "last_name": user.last_name,
                         'role': user.role
                         }
        else:
            user_info = {}

    return json.JSONEncoder().encode(user_info)


@user_routes.route('/logout')
def logout():
    session.pop('username')
    return redirect(url_for('user_routes.login'))
