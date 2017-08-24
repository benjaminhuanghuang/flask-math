from app import db
from utilities.common import utc_now_str


class User(db.Document):
    username = db.StringField(db_field="username", required=True)
    first_name = db.StringField(db_field="firstname", max_length=50)
    last_name = db.StringField(db_field="lastname", max_length=50)
    passtmp = db.StringField(db_field="passtmp", required=True)
    password = db.StringField(db_field="password", required=True)
    starting_date = db.StringField(db_field="starting_date", default=utc_now_str())
    expiration_date = db.StringField(db_field="expiration_date", default=utc_now_str())
    role = db.StringField(db_field="role", default='student')
    address = db.DictField()
    contact = db.DictField()
    parent_info = db.DictField()

    meta = {'collection': 'users'}
