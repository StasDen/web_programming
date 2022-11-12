# REST API
# Using Flask


from flask import Flask, request
from flask_cors import CORS
import uuid
import json

app = Flask("__name__")
CORS(app)

hamsters = [
    {"id": uuid.uuid1(), "title": "John", "description": "cool handsome boy", "cost": "100"},
    {"id": uuid.uuid1(), "title": "Uma", "description": "naughty boy", "cost": "230"}
]


@app.route('/')
def index():
    return "Welcome to this page"


# GET(all hamsters)
@app.route('/hamsters', methods=['GET'])
def get():
    return hamsters


# GET(one hamster)
@app.route('/hamsters/<int:id>', methods=['GET'])
def get_hamster(id):
    return hamsters[id]


# POST
@app.route("/hamsters", methods=['POST'])
def create():
    if request.method == "POST":
        # Creating hamster obj
        hamster_json = request.get_json()
        hamster_json["id"] = uuid.uuid1()

        hamsters.append(hamster_json)
        return hamsters


# UPDATE
@app.route("/hamsters", methods=['PATCH'])
def update():
    pass


# DELETE
@app.route("/hamsters/<int:id>", methods=['DELETE'])
def delete():
    if request.method == 'DELETE':
        hamsters.remove(hamsters[0])

        return hamsters


if __name__ == '__main__':
    app.run(debug=True)
