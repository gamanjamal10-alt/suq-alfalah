import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Link } from 'react-router-dom'
import { Users, Store, ShoppingBag, Truck, Star, ArrowLeft } from 'lucide-react'

const HomePage = () => {
  const userTypes = [
    {
      title: 'الفلاحون',
      description: 'بيع منتجاتك الزراعية مباشرة للمستهلكين',
      icon: <Users className="h-12 w-12 text-primary" />,
      link: '/register?type=farmer'
    },
    {
      title: 'تجار الجملة',
      description: 'عرض المنتجات بكميات كبيرة وأسعار الجملة',
      icon: <Store className="h-12 w-12 text-primary" />,
      link: '/register?type=wholesale'
    },
    {
      title: 'تجار التجزئة',
      description: 'بيع المنتجات للمستهلك النهائي',
      icon: <ShoppingBag className="h-12 w-12 text-primary" />,
      link: '/register?type=retail'
    },
    {
      title: 'النقل العمومي',
      description: 'تقديم خدمات النقل للمنتجات الزراعية',
      icon: <Truck className="h-12 w-12 text-primary" />,
      link: '/register?type=transport'
    }
  ]

  const featuredProducts = [
    { name: 'طماطم', price: '8 دج/كيلو', image: '🍅', rating: 5 },
    { name: 'خيار', price: '3 دج/كيلو', image: '🥒', rating: 5 },
    { name: 'بطاطس', price: '2 دج/كيلو', image: '🥔', rating: 4 },
    { name: 'ذرة', price: '5 دج/كيلو', image: '🌽', rating: 5 }
  ]

  const popularStores = [
    { name: 'مزرعة الخيرات', products: 45, rating: 4.8 },
    { name: 'البركة الخضراء', products: 32, rating: 4.9 },
    { name: 'الواحة الطبيعية', products: 28, rating: 4.7 },
    { name: 'ساحة الراحة', products: 56, rating: 4.6 }
  ]

  return (
    <div className="min-h-screen">
      {/* قسم البطل الرئيسي */}
      <section className="bg-gradient-to-l from-green-50 to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                مرحباً بكم في
                <span className="text-primary block">سوق الفلاح</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                المنصة الجزائرية الرائدة للتجارة الإلكترونية الزراعية. اربط بين المنتجين والمستهلكين مباشرة
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/register">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
                    إنشاء متجر
                    <ArrowLeft className="mr-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/products">
                  <Button variant="outline" size="lg" className="px-8 py-3">
                    تصفح المنتجات
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="text-6xl mb-4 text-center">🧺</div>
                <h3 className="text-2xl font-bold text-center text-gray-800 mb-2">
                  منتجات طازجة يومياً
                </h3>
                <p className="text-gray-600 text-center">
                  من المزرعة إلى بيتك مباشرة
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* قسم فئات المستخدمين */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              من يمكنه الانضمام؟
            </h2>
            <p className="text-xl text-gray-600">
              منصة شاملة لجميع أطراف السلسلة الزراعية
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {userTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    {type.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {type.description}
                  </p>
                  <Link to={type.link}>
                    <Button variant="outline" className="w-full">
                      ابدأ الآن
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* قسم المنتجات المميزة */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              منتجات مميزة
            </h2>
            <p className="text-xl text-gray-600">
              أفضل المنتجات الزراعية الطازجة
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="text-6xl text-center mb-4">{product.image}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                    {product.name}
                  </h3>
                  <p className="text-primary font-bold text-center mb-4">
                    {product.price}
                  </p>
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < product.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    أضف للسلة
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* قسم المتاجر الشائعة */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              متاجر شائعة
            </h2>
            <p className="text-xl text-gray-600">
              أفضل المتاجر على منصتنا
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularStores.map((store, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Store className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {store.name}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    {store.products} منتج
                  </p>
                  <div className="flex justify-center items-center mb-4">
                    <Star className="h-4 w-4 text-yellow-400 fill-current ml-1" />
                    <span className="text-gray-600">{store.rating}</span>
                  </div>
                  <Button variant="outline" className="w-full">
                    زيارة المتجر
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* قسم الاشتراك */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            ابدأ متجرك الإلكتروني اليوم
          </h2>
          <p className="text-xl mb-8 opacity-90">
            اشتراك سنوي بـ 6500 دج فقط - الشهر الأول مجاناً
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" variant="secondary" className="px-8 py-3">
                ابدأ التجربة المجانية
              </Button>
            </Link>
            <Link to="/payment">
              <Button size="lg" variant="outline" className="px-8 py-3 text-white border-white hover:bg-white hover:text-primary">
                اشترك الآن
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* الفوتر */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">سوق الفلاح</h3>
              <p className="text-gray-400">
                المنصة الجزائرية الرائدة للتجارة الإلكترونية الزراعية
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">روابط سريعة</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/" className="hover:text-white">الرئيسية</Link></li>
                <li><Link to="/products" className="hover:text-white">المنتجات</Link></li>
                <li><Link to="/dashboard" className="hover:text-white">المتاجر</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">الدعم</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">مركز المساعدة</a></li>
                <li><a href="#" className="hover:text-white">اتصل بنا</a></li>
                <li><a href="#" className="hover:text-white">الأسئلة الشائعة</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">تواصل معنا</h4>
              <p className="text-gray-400">
                البريد الإلكتروني: info@souqfellah.dz<br />
                الهاتف: +213 123 456 789
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 سوق الفلاح. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage

