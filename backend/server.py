from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api')
def home():
    return jsonify({"message": "مرحبًا بكم في API منصة سوق الفلاح!"})

@app.route('/api/stores')
def get_stores():
    stores = [
        {"id": 1, "name": "مزرعة الخير", "type": "فلاح", "products": 24, "rating": 4.8},
        {"id": 2, "name": "تاجر الجملة أحمد", "type": "جملة", "products": 89, "rating": 4.6},
        {"id": 3, "name": "محل التجزئة - وهران", "type": "تجزئة", "products": 56, "rating": 4.9},
        {"id": 4, "name": "نقل سريع - الجزائر", "type": "نقل", "products": 0, "rating": 4.7},
    ]
    return jsonify(stores)

@app.route('/api/stores/<int:store_id>')
def get_store(store_id):
    store = {
        "id": store_id,
        "name": "مزرعة الخير",
        "type": "فلاح",
        "description": "نقدم أفضل المنتجات الزراعية الطازجة من قلب الأرض.",
        "rating": 4.8,
        "contact": "+213 12 345 6789"
    }
    return jsonify(store)

@app.route('/api/stores/<int:store_id>/products')
def get_products(store_id):
    products = [
        {"id": 1, "name": "طماطم طازجة", "price": "40 دج/كغ", "image": "https://via.placeholder.com/400x300", "store_id": store_id},
        {"id": 2, "name": "بطاطا", "price": "30 دج/كغ", "image": "https://via.placeholder.com/400x300", "store_id": store_id},
        {"id": 3, "name": "بصل أحمر", "price": "35 دج/كغ", "image": "https://via.placeholder.com/400x300", "store_id": store_id},
    ]
    return jsonify(products)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
