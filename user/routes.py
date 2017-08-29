from flask import Blueprint, request, redirect, session, url_for, jsonify, make_response
from flask_bcrypt import Bcrypt
import jwt
from datetime import datetime, timedelta

from user.models import User
import settings

user_routes = Blueprint('user_routes', __name__)

bcrypt = Bcrypt()


@user_routes.route('/test')
def test():
    return "test"


# login user and return a token
@user_routes.route('/api/login', methods=['POST'])
def login():
    username = request.json.get('username')
    password = request.json.get('password')

    user = User.objects.filter(username=username).first()
    if user:
        if bcrypt.check_password_hash(user.password, password):
            session['username'] = username
            token_str = generate_token(user).decode('UTF-8')
            return jsonify({'token': token_str}), 200
        else:
            return jsonify({'token': ''}), 401


@user_routes.route('/api/logout')
def logout():
    session.pop('username')
    return redirect(url_for('user_routes.login'))


def generate_token(user):
    # Expiration time is automatically verified in jwt.decode() and raises jwt.ExpiredSignatureError
    token_payload = {'user_name': user['username'],
                     'exp': (datetime.utcnow() + timedelta(minutes=60))}

    token = jwt.encode(token_payload, settings.SECRET_KEY, algorithm='HS256')
    return token


def token_auth(token_str):
    try:
        token = str.encode(token_str)
        token_payload = jwt.decode(token, settings.SECRET_KEY, algorithm='HS256')
        user_name = token_payload['user_name']
        user = User.objects.filter(username=user_name).first()
    except jwt.ExpiredSignatureError:
        user = None
    except Exception as e:
        user = None

    return user


if __name__ == "__main__":
    user = {
        "username": "ben",
    }
    token_str = generate_token(user).decode()
    auth_user = token_auth(token_str)
    print(auth_user)
