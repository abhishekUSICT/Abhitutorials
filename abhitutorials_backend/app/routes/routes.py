from app import app
import os
from flask_cors import CORS, cross_origin
from app.services import services

CORS(app)

@app.route('/')
def start():
    return "Welcome to abhitutorials"

@app.route('/getBookData')
def get_book_data():
    return services.get_book_data()

@app.route('/getQuestions')
def get_questions():
    return services.get_questions()