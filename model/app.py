from flask import Flask, request, jsonify
import pandas as pd
import joblib
from datetime import datetime, timedelta
import calendar

app = Flask(__name__)

# Load model, transformer, and max_price
model = joblib.load('model.pkl')
poly = joblib.load('poly.pkl')
with open('max_price.txt', 'r') as f:
    max_price = float(f.read())

@app.route('/predict-next-month-price', methods=['POST'])
def predict_price():
    data = request.get_json()

    release_year = data['release_year']
    release_price = data['release_price']
    purchase_date = datetime.strptime(data['purchase_date'], "%Y-%m-%d")
    today = datetime.today()

    # Calculate days_used
    days_used = (today - purchase_date).days
    normalized_new_price = release_price / max_price

    predictions = {}
    base_date = today.replace(day=1)

    for i in range(6):
        # Update days_used by adding 30 per future month
        future_days_used = days_used + (i * 30)
        input_df = pd.DataFrame([[release_year, future_days_used, normalized_new_price]],
                                columns=['release_year', 'days_used', 'normalized_new_price'])
        input_poly = poly.transform(input_df)
        predicted_norm = model.predict(input_poly)[0]
        predicted_price = predicted_norm * max_price

        # Enforce 30% of original price as minimum
        predicted_price = max(predicted_price, release_price * 0.3)

        # Get future month name
        future_month = (base_date + timedelta(days=30 * i)).strftime("%B")
        predictions[future_month] = round(predicted_price, 2)

    return jsonify(predictions)

if __name__ == '__main__':
    app.run(port=5002)
