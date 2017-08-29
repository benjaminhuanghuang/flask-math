# Flask + MongoEngine + React + Redux + Webpack web application


## Dev
    - client side is served by webpack-dev-server running at 3010. All api call call with be redirected to server(localhost:5010) 
      this approach can avoid cros issue.
      
    - server side is a flask app running at 5010

## Prod
    Only one server is running 
    - webpack all client side code into client/public
    - server use client/public as static folder to load the client side code.
    

 ## Auth
    Server side api /api/login returns a token
    
    Client side save the token into local storage and set authed = trun in react the store



   

  