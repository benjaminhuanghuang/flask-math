from flask import Blueprint, render_template, request, redirect, session, url_for, abort
import bcrypt
import uuid
import os
from werkzeug.utils import secure_filename
from mongoengine import Q

from user.models import User


user_routes = Blueprint('user_routes', __name__)

@user_routes.route('/login', methods=('POST'))
def login():
    form = LoginForm()
    error = None

    if request.method == 'GET' and request.args.get('next'):
        session['next'] = request.args.get('next')

    if form.validate_on_submit():
        user = User.objects.filter(
            username=form.username.data
            ).first()
        if user:
            if bcrypt.hashpw(form.password.data, user.password) == user.password:
                session['username'] = form.username.data
                if 'next' in session:
                    next = session.get('next')
                    session.pop('next')
                    return redirect(next)
                else:
                    return redirect(url_for('home_routes.home'))
            else:
                user = None
        if not user:
            error = 'Incorrect credentials'
    return render_template('user/login.html', form=form, error=error)

@user_routes.route('/logout')
def logout():
    session.pop('username')
    return redirect(url_for('user_routes.login'))

