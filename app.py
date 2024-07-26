from flask import Flask, request, jsonify
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/fetch-flights', methods=['POST'])
def fetch_flights():
    user_input = request.json
    origin = user_input.get('origin')
    destination = user_input.get('destination')
    cabin_selection = user_input.get('cabinSelection')
    
    headers = {
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.9,hi;q=0.8',
        'cache-control': 'no-cache',
        'content-type': 'application/json',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
    }
    
    json_data = {
        'origin': origin,
        'destination': destination,
        'partnerPrograms': [
            'Air Canada',
            'United Airlines',
            'KLM',
            'Qantas',
            'American Airlines',
            'Etihad Airways',
            'Alaska Airlines',
            'Qatar Airways',
            'LifeMiles',
        ],
        'stops': 2,
        'departureTimeFrom': '2024-07-09T00:00:00Z',
        'departureTimeTo': '2024-10-07T00:00:00Z',
        'isOldData': False,
        'limit': 302,
        'offset': 0,
        'cabinSelection': [cabin_selection],
        'date': '2024-07-09T12:00:17.796Z',
    }
    
    response = requests.post('https://cardgpt.in/apitest', headers=headers, json=json_data)
    return jsonify(response.json())

if __name__ == '__main__':
    app.run(debug=True)
