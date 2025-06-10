import json
from flask import Flask,request,jsonify
from flask_restful import Api,Resource
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

api = Api(app)


class GetLocations(Resource):
    def get(self):
        with(open('pos.json','r')) as fh:
            data = json.load(fh)
            if data:
                return jsonify({
                    'latitude': data.get('location').get('latitude'),
                    'longitude': data.get('location').get('longitude')
                })
        return jsonify({'message':'value returned'})
    def post(self):
        data = request.get_json()
        print(data)
        with(open('pos.json','w')) as fh:
            json.dump(data,fh)

        return jsonify({'latitude': data.get('location').get('latitude'),'longitude':data.get('location').get('longitude')})
    
api.add_resource(GetLocations,'/getLocations')

if __name__ == '__main__':
    app.run()