from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api')
def home():
    return jsonify({"message": "مرحبًا بكم في API منصة سوق الفلاح!"})

@app.route('/api/products')
def get_products():
    products = [
        {"id": 1, "name": "طماطم طازجة", "price": "40 دج/كغ", "seller": "مزرعة الخير"},
        {"id": 2, "name": "بطاطا", "price": "30 دج/كغ", "seller": "تاجر الجملة أحمد"},
        {"id": 3, "name": "بصل أحمر", "price": "35 دج/كغ", "seller": "cooperative الزهراء"},
    ]
    return jsonify(products)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
