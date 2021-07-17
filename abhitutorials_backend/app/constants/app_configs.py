from app import app
import os

app.config['BOOKS'] = os.path.abspath(os.path.join(os.getcwd(), 'app/books'))
app.config['QUESTIONS'] = os.path.abspath(os.path.join(os.getcwd(), 'app/questions'))