## Create python 3 venv
    $ virtualenv -p python3 venv3
    
    or
    
    $ pyvenv venv3
    
## Start venv
   $ source venv3/bin/activate
   
   
## Install package
   $ pip install -r requirements.txt
   
## Dependencies
    - Flask==0.10.1
    - Flask-Script==2.0.5
    - flask-mongoengine==0.9.3
    - Flask-WTF==0.12
    - py-bcrypt==0.4         # encrypt the password
    - blinker==1.4           # Blinker provides fast & simple object-to-object and broadcast signaling for Python objects
    - boto3==1.3.0           # AWS sdk for python (common.py)
    - Wand==0.4.2            # Image processing  
    - Arrow==0.8.0           # datetime formatting and converting   
    - bleach==1.4.3          # HTML sanitizing library that escapes or strips markup and attributes. (commpon.py)
    
    
 ## Trouble shooting
    - FlaskWTFDeprecationWarning: The "FileField" subclass is no longer necessary and will be removed in 1.0. 
    Use Flask-WTF==0.14.1
    
    - ImportError: MagickWand shared library not found.
    
    brew install freetype imagemagick  # for MagickWand
    
    brew unlink imagemagick            # Wand doesn't support imagemagick 7
    
    brew link imagemagick@6 --force    # fix error ImportError: MagickWand shared library not found.
    
    - unrecognized write concern field: write_concern
    - pymongo.errors.OperationFailure: cannot use 'w' > 1 when a host is not replicated
     rm and recreate venv and re pip install    