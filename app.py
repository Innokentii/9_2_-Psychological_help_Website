from flask import Flask, render_template, request, jsonify, Response
import sqlite3 as SQL
from flask import Flask, render_template, request, jsonify, Response
import sqlite3 as SQL

# Функция запуска сайта
app = Flask(__name__)
def create_app():
    return app


#===============================================================#
#                    Глобальные переменные                      #
#VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV#


#===============================================================#
#                Работа_с_базой_данных_SQLite3                  #
#VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV#


#===============================================================#
#                     Работа с запросами                        #
#VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV#

# Запрос "POST";
@app.route('/post_request_1', methods=['POST'])
def post_request_1_f():
    post_request = request.get_json(force=True)
    post_request = [post_request['name_basket']]
    if request.method == 'GET':
        return None
    return post_request

# Запрос "GET";
@app.route('/get_request_1', methods=['GET'])
def get_request_1_f():
    data = 1
    search_object = ''
    if request.method == 'POST':
        return Response(search_object, content_type='application/octet-stream')
    
    return jsonify(data)


#===============================================================#
#                      Функции и классы                         #
#VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV#


#===============================================================#
#                    Работа со страницами                       #
#VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV#


# Рендер тела сайта (запуск сайта);
@app.route('/')
@app.route('/main')
def main_f():
    render_template('main.html')
    return render_template('1_main.html')
# Рендер страницы "ГЛАВНАЯ";
@app.route("/1_main")
def _1_main_f():
    return render_template("1_main.html")

# Рендер страницы "block_1";
@app.route("/block_1")
def _block_1_f():
    return render_template("block_1.html")

# Рендер страницы "block_2";
@app.route("/block_2")
def _block_2_f():
    return render_template("block_2.html")

# Рендер страницы "block_3";
@app.route("/block_3")
def _block_3_f():
    return render_template("block_3.html")

# Рендер страницы "block_4";
@app.route("/block_4")
def _block_4_f():
    return render_template("block_4.html")

# Рендер страницы "block_5";
@app.route("/block_5")
def _block_5_f():
    return render_template("block_5.html")

# Рендер страницы "block_6";
@app.route("/block_6")
def _block_6_f():
    return render_template("block_6.html")

# Рендер страницы "block_7";
@app.route("/block_7")
def _block_7_f():
    return render_template("block_7.html")

# Рендер страницы "block_8";
@app.route("/block_8")
def _block_8_f():
    return render_template("block_8.html")
