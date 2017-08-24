## Unit Testing
    - Automated
    - Independent
    - Consistent and repeatable
    - Maintainable
    
## Implements
    create main tests.py to call other tests.py
    
## Overwrite coning in Unit test
    ```
     return create_app(
            MONGODB_SETTINGS={'DB': self.db_name},
            TESTING=True,
            WTF_CSRF_ENABLED=False,
            SECRET_KEY='mySecret'
        )
     
     def setUp(self):
        self.app_factory = self.create_app()
        # Creates a test client for this application
        self.app = self.app_factory.test_client()
        
       
        
     rv = self.app.post('/register', data=self.user_dict(), follow_redirects=True)
     ```
     
     