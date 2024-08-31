from flask import Flask, request, jsonify
import joblib

app = Flask(__name__)

# Load the trained model
model = joblib.load('MHRF')

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        features = [
            data['age'],
            data['systolicBP'],
            data['diastolicBP'],
            data['bs'],
            data['bodyTemperature'],
            data['heartRate']
        ]
    
    # Ensure features are in the correct shape/format
        features = [features]  # Adjust based on your model's requirements
    
        prediction = model.predict(features)
        return jsonify({'prediction': prediction.tolist()[0]})
    except Exception as e:
        return jsonify({'error': str(e)})
if __name__ == '_main_':
    app.run(debug=True)