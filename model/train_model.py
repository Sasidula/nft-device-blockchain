import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import PolynomialFeatures
from sklearn.linear_model import Ridge
from sklearn.metrics import mean_squared_error, r2_score
import joblib

# Load and prepare data
df = pd.read_excel("used_device_data.xlsx")
df = df[['release_year', 'days_used', 'normalized_new_price', 'normalized_used_price']]

# Filter out poor-quality records
df = df[(df['normalized_used_price'] >= 0.05) & (df['normalized_used_price'] <= df['normalized_new_price'])]

# Define features and target
X = df[['release_year', 'days_used', 'normalized_new_price']]
y = df['normalized_used_price']

# Polynomial features (can experiment with degree=2 if needed)
poly = PolynomialFeatures(degree=1)
X_poly = poly.fit_transform(X)

# Split data
X_train, X_test, y_train, y_test = train_test_split(X_poly, y, test_size=0.2, random_state=42)

# Train model
model = Ridge(alpha=1.0)
model.fit(X_train, y_train)

# Evaluate
y_pred = model.predict(X_test)
mse = mean_squared_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)
print(f"MSE: {mse:.2f} | R²: {r2:.2f}")

# Save model and preprocessor
joblib.dump(model, 'model.pkl')
joblib.dump(poly, 'poly.pkl')

# Save max price used for normalization
max_price = df['normalized_new_price'].max()
with open('max_price.txt', 'w') as f:
    f.write(str(max_price))

# ✅ Example Prediction
release_price = 1000  # original price
normalized_new_price = release_price / max_price

example = pd.DataFrame([[2023, 120, normalized_new_price]], columns=X.columns)
example_poly = poly.transform(example)
predicted_norm = model.predict(example_poly)[0]
predicted_price = predicted_norm * max_price

# Apply 30% floor
min_allowed_price = release_price * 0.3
final_price = max(min_allowed_price, predicted_price)

print(f"Predicted used price: {final_price:.2f}")

