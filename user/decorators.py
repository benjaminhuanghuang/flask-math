from functools import wraps
from flask import session, request, redirect, url_for,jsonify
import jwt
import settings
from user.models import User

def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if session.get('username') is None:
            return redirect(url_for('user_routes.login', next=request.url))
        return f(*args, **kwargs)
    return decorated_function



def token_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        # http://localhost/route?token=XXXXX
        token = request.args.get('token')
        # from header
        if 'auth-token' in request.headers:
            token = request.headers['auth-token']

        if not token:
            return jsonify({'message': 'Auth token is missing.'}), 401

        try:
            data = jwt.decode(token, settings.SECRET_KEY)
            current_user = User.objects.filter(username=data['username']).first()
        except:
            return jsonify({'message': 'Auth token is invalid.'}), 401

        return f(current_user, *args, **kwargs)
    return decorated_function