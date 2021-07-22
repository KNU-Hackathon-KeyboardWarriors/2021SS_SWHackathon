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

@app.route("/projects", methods=['GET', 'POST'])
def getData():
    if request.method == 'GET':
        resultDict = list()
        users_ref = db.collection(u'projects')
        docs = users_ref.stream()
        for doc in docs:
            tempDict = doc.to_dict()
            tempDict['id'] = doc.id
            resultDict.append(tempDict)
        return jsonify(resultDict)
    else:
        value = request.get_json(silent=True)
        value['comments'] = list()
        value['image'] = ""
        print(value)
        db.collection(u'projects').document().set(value)

        return value    

@app.route("/buildups", methods=['GET', 'POST'])
def getBuildsUps():
    if request.method == 'GET':
        resultDict = list()
        users_ref = db.collection(u'buildups')
        docs = users_ref.stream()
        for doc in docs:
            tempDict = doc.to_dict()
            tempDict['id'] = doc.id
            resultDict.append(tempDict)
        return jsonify(resultDict)
    else:
        value = request.get_json(silent=True)
        value['comments'] = list()
        
        print(value)
        db.collection(u'buildups').document().set(value)

        return value

@app.route("/teams", methods=['GET', 'POST'])
def teams():
    if request.method == 'GET':
        resultDict = list()
        users_ref = db.collection(u'teams')
        docs = users_ref.stream()
        for doc in docs:
            tempDict = doc.to_dict()
            tempDict['id'] = doc.id
            resultDict.append(tempDict)
        return jsonify(resultDict)
    else:
        value = request.get_json(silent=True)
        value['comments'] = list()
        value['image'] = ""
        print(value)
        db.collection(u'teams').document().set(value)

        return value

if __name__ == "__main__":
    app.run(debug=True)