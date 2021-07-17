import os
from flask import jsonify,render_template
from app import app
from app.constants import app_configs

def get_questions():
    try:
        questions_path = app.config['QUESTIONS']
        result = []
        for file_name in os.listdir(questions_path):
            questions = []
            file = open(questions_path + "//" + file_name, "r")
            line_count = 0
            question = dict()
            for line in file:
                print(line)
                line_count = line_count + 1
                if line_count % 2 == 1:
                    question['name'] = line
                else:
                    question['link'] = line
                    questions.append(question)
                    question = dict()
            topic_name, file_extension = file_name.split('.')
            topic = dict()
            topic['topic_name'] = topic_name
            topic['questions'] = questions
            result.append(topic)
        return jsonify(result), 200
    except Exception as exc:
        return jsonify(str(exc))


def get_book_data():
    try:
        books_path = app.config['BOOKS']
        result = []
        for file_name in os.listdir(books_path):
            books = []
            file = open(books_path + "//" + file_name, "r")
            line_count = 0
            book = dict()
            for line in file:
                line_count = line_count + 1
                if line_count % 2 == 1:
                    book['name'] = line
                else:
                    book['link'] = line
                    books.append(book)
                    book = dict()
            topic_name, file_extension = file_name.split('.')
            topic = dict()
            topic['topic_name'] = topic_name
            topic['books'] = books
            result.append(topic)
        return jsonify(result), 200
    except Exception as exc:
        return jsonify(str(exc))