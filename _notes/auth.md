## Server side auth
    
### token generation
    pyjwt
    
    ```
     def generate_token(self, user):
        token_payload = {'user_name': user['username'],
                         'role': user['role'],
                         'utc_exp': (datetime.utcnow() + timedelta(minutes=60)).isoformat(),
                         'utc_now': datetime.utcnow().isoformat()}
        token = jwt.encode(token_payload, SECRET_KEY)
        return token

    def is_token_valid(self, token):
        try:
            token_payload = jwt.decode(token, SECRET_KEY)
            account_name = token_payload['user_name']
            if self.is_account_existed(account_name):
                return True
            return False
        except:
            return False
    ```


## Client side auth