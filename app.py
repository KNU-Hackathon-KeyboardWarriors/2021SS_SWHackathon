from flask import Flask
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from flask import jsonify, request



cred = credentials.Certificate("./path/to/serviceAccountKey.json")
firebase_admin.initialize_app(cred)

db = firestore.client()


app = Flask(__name__)

@app.route("/api", methods=['GET'])
def index():
    return {
        "name" : "Hello World"
        }

@app.route("/getProjects", methods=['GET'])
def getData():
    resultDict = list()
    users_ref = db.collection(u'projects')
    docs = users_ref.stream()
    for doc in docs:
        tempDict = doc.to_dict()
        tempDict['id'] = doc.id
        resultDict.append(tempDict)
    return jsonify(resultDict)


@app.route('/makeProject', methods=['POST'])
def post():
    value = request.get_json(silent=True)
    value['comments'] = list()
    value['image'] = ""
    print(value)
    db.collection(u'projects').document().set(value)

    return value

if __name__ == "__main__":
    app.run(debug=True)

