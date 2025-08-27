import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  const templates = [
    {
      id: 1,
      name: "Business Pro",
      category: "Бизнес",
      price: "2,999₽",
      image: "/img/1e1513a9-d8a2-4198-8365-59711662b961.jpg",
      description: "Профессиональный шаблон для корпоративных сайтов",
      features: ["Адаптивный дизайн", "SEO-оптимизация", "Поддержка WooCommerce"]
    },
    {
      id: 2,
      name: "Shop Master",
      category: "E-commerce",
      price: "4,999₽",
      image: "/img/d38458a7-158c-4eba-a4d3-f22cde4ee515.jpg",
      description: "Мощный шаблон для интернет-магазинов",
      features: ["Интеграция с WooCommerce", "Система отзывов", "Мульти-валютность"]
    },
    {
      id: 3,
      name: "Creative Studio",
      category: "Портфолио",
      price: "1,999₽",
      image: "/img/30ae846b-d7cd-4607-ba26-3c8698e7726b.jpg",
      description: "Стильный шаблон для творческих профессионалов",
      features: ["Галерея работ", "Анимации", "Темная тема"]
    }
  ];

  const pricingPlans = [
    {
      name: "Базовый",
      price: "1,999₽",
      period: "за шаблон",
      features: ["1 шаблон", "Техподдержка 3 месяца", "Обновления", "Базовая документация"],
      popular: false
    },
    {
      name: "Профессиональный",
      price: "4,999₽",
      period: "за 3 шаблона",
      features: ["3 шаблона на выбор", "Техподдержка 1 год", "Приоритетные обновления", "Расширенная документация", "Индивидуальная настройка"],
      popular: true
    },
    {
      name: "Безлимитный",
      price: "9,999₽",
      period: "весь каталог",
      features: ["Все шаблоны", "Пожизненная поддержка", "Эксклюзивные шаблоны", "Персональный менеджер", "Консультации по дизайну"],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Layers" className="text-primary" size={28} />
            <span className="text-xl font-bold">WordPress Templates</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#catalog" className="text-muted-foreground hover:text-primary transition-colors">Каталог</a>
            <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Тарифы</a>
            <a href="#support" className="text-muted-foreground hover:text-primary transition-colors">Поддержка</a>
          </nav>
          <Button>Скачать шаблон</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <Badge variant="secondary" className="mb-4">Новая коллекция 2024</Badge>
            <h1 className="text-5xl font-bold mb-6 text-gray-900">
              Премиум шаблоны WordPress<br />
              <span className="text-primary">для вашего бизнеса</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Создавайте профессиональные сайты с нашими тщательно разработанными шаблонами. 
              Минималистичный дизайн, чистый код и полная адаптивность.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-3">
                <Icon name="Download" className="mr-2" size={20} />
                Посмотреть каталог
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                <Icon name="Play" className="mr-2" size={20} />
                Посмотреть демо
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Template Catalog */}
      <section id="catalog" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Каталог шаблонов</h2>
            <p className="text-xl text-muted-foreground">Выберите идеальный шаблон для вашего проекта</p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4 max-w-md mx-auto mb-12">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="business">Бизнес</TabsTrigger>
              <TabsTrigger value="ecommerce">E-commerce</TabsTrigger>
              <TabsTrigger value="portfolio">Портфолио</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {templates.map((template) => (
                <Card key={template.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 animate-scale-in">
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={template.image} 
                      alt={template.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4">{template.category}</Badge>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{template.name}</CardTitle>
                      <span className="text-2xl font-bold text-primary">{template.price}</span>
                    </div>
                    <CardDescription className="text-base">{template.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {template.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <Icon name="Check" size={16} className="text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-3">
                      <Button className="flex-1">
                        <Icon name="Download" className="mr-2" size={16} />
                        Скачать
                      </Button>
                      <Button variant="outline" size="icon">
                        <Icon name="Eye" size={16} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Тарифы и цены</h2>
            <p className="text-xl text-muted-foreground">Выберите подходящий план для ваших задач</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    Популярный
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Icon name="Check" size={16} className="text-green-500 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                  >
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support & Documentation */}
      <section id="support" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Документация и поддержка</h2>
            <p className="text-xl text-muted-foreground">Получите максимум от наших шаблонов</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-md transition-shadow">
              <CardHeader>
                <Icon name="BookOpen" size={32} className="mx-auto text-primary mb-4" />
                <CardTitle>Документация</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Подробные инструкции по установке и настройке</p>
                <Button variant="outline">Читать</Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-md transition-shadow">
              <CardHeader>
                <Icon name="MessageCircle" size={32} className="mx-auto text-primary mb-4" />
                <CardTitle>Техподдержка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Квалифицированная помощь 24/7</p>
                <Button variant="outline">Написать</Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-md transition-shadow">
              <CardHeader>
                <Icon name="Video" size={32} className="mx-auto text-primary mb-4" />
                <CardTitle>Видеоуроки</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Пошаговые видео по работе с шаблонами</p>
                <Button variant="outline">Смотреть</Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-md transition-shadow">
              <CardHeader>
                <Icon name="Users" size={32} className="mx-auto text-primary mb-4" />
                <CardTitle>Сообщество</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Общайтесь с другими пользователями</p>
                <Button variant="outline">Присоединиться</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Layers" size={24} />
                <span className="text-lg font-bold">WordPress Templates</span>
              </div>
              <p className="text-gray-400 mb-4">
                Профессиональные шаблоны WordPress для создания современных сайтов
              </p>
              <div className="flex space-x-4">
                <Icon name="Twitter" size={20} className="text-gray-400 hover:text-white cursor-pointer" />
                <Icon name="Facebook" size={20} className="text-gray-400 hover:text-white cursor-pointer" />
                <Icon name="Instagram" size={20} className="text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Продукты</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Шаблоны WordPress</a></li>
                <li><a href="#" className="hover:text-white">Плагины</a></li>
                <li><a href="#" className="hover:text-white">Графические элементы</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Документация</a></li>
                <li><a href="#" className="hover:text-white">Техподдержка</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">О нас</a></li>
                <li><a href="#" className="hover:text-white">Контакты</a></li>
                <li><a href="#" className="hover:text-white">Политика конфиденциальности</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 WordPress Templates. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;