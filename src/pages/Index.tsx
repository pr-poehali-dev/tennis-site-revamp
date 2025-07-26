import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showWelcomeModal, setShowWelcomeModal] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const programs = [
    {
      title: "Детские группы",
      age: "6-12 лет",
      description: "Обучение основам тенниса в игровой форме. Развитие координации и техники.",
      price: "3,000₽/месяц",
      features: ["Групповые занятия", "2 раза в неделю", "Игровая методика", "Безопасность"]
    },
    {
      title: "Подростковые группы", 
      age: "13-17 лет",
      description: "Углубленное изучение техники и тактики игры. Подготовка к соревнованиям.",
      price: "4,000₽/месяц",
      features: ["Групповые занятия", "3 раза в неделю", "Соревновательная подготовка", "Физподготовка"]
    },
    {
      title: "Взрослые группы",
      age: "18+ лет",
      description: "Обучение теннису для взрослых любого уровня подготовки.",
      price: "5,000₽/месяц",
      features: ["Групповые занятия", "2-3 раза в неделю", "Гибкий график", "Разные уровни"]
    },
    {
      title: "Индивидуальные занятия",
      age: "Любой возраст",
      description: "Персональные тренировки с опытным тренером для быстрого прогресса.",
      price: "2,500₽/занятие",
      features: ["Один на один", "Гибкий график", "Индивидуальная программа", "Быстрый результат"]
    }
  ];

  const trainers = [
    {
      name: "Анна Смирнова",
      experience: "8 лет",
      specialization: "Детский теннис",
      achievements: "КМС, тренер года 2023",
      image: "👩‍🏫"
    },
    {
      name: "Михаил Петров",
      experience: "12 лет",
      specialization: "Взрослые группы",
      achievements: "Мастер спорта, участник ATP",
      image: "👨‍🏫"
    },
    {
      name: "Елена Кузнецова",
      experience: "6 лет",
      specialization: "Индивидуальные занятия",
      achievements: "КМС, специалист по технике",
      image: "👩‍💼"
    }
  ];

  const reviews = [
    {
      name: "Мария К.",
      rating: 5,
      text: "Отличная школа! Дочка занимается уже полгода, очень довольны прогрессом."
    },
    {
      name: "Александр П.",
      rating: 5,
      text: "Профессиональные тренеры, хорошие корты, удобное расписание."
    },
    {
      name: "Светлана М.",
      rating: 5,
      text: "Начала заниматься с нуля в 35 лет - теперь играю в турнирах клуба!"
    }
  ];

  const faqItems = [
    {
      question: "Нужна ли специальная экипировка для начала занятий?",
      answer: "Для первых занятий достаточно спортивной одежды и кроссовок. Ракетку предоставляем бесплатно."
    },
    {
      question: "Можно ли заниматься без опыта игры в теннис?",
      answer: "Конечно! У нас есть группы для начинающих любого возраста. Наши тренеры научат всему с нуля."
    },
    {
      question: "Какая продолжительность одного занятия?",
      answer: "Групповые занятия длятся 60 минут, индивидуальные - 60 или 90 минут по выбору."
    },
    {
      question: "Есть ли пропуски занятий?",
      answer: "Да, можно отрабатывать пропущенные занятия в других группах или индивидуально."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Welcome Modal */}
      <Dialog open={showWelcomeModal} onOpenChange={setShowWelcomeModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-bold text-green-600">
              🎾 Добро пожаловать!
            </DialogTitle>
          </DialogHeader>
          <div className="text-center space-y-4">
            <div className="text-6xl">🎁</div>
            <h3 className="text-xl font-semibold">Первая тренировка БЕСПЛАТНО!</h3>
            <p className="text-gray-600">
              Запишитесь на пробное занятие и ощутите атмосферу нашей теннисной школы
            </p>
            <Button onClick={() => setShowWelcomeModal(false)} className="w-full bg-green-600 hover:bg-green-700">
              Записаться на пробную тренировку
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Fixed Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
      }`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl">🎾</div>
            <span className="text-xl font-bold text-green-600">STAR TENNIS</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-700 hover:text-green-600 transition-colors">Главная</a>
            <a href="#programs" className="text-gray-700 hover:text-green-600 transition-colors">Программы</a>
            <a href="#trainers" className="text-gray-700 hover:text-green-600 transition-colors">Тренеры</a>
            <a href="#reviews" className="text-gray-700 hover:text-green-600 transition-colors">Отзывы</a>
            <a href="#contacts" className="text-gray-700 hover:text-green-600 transition-colors">Контакты</a>
          </nav>
          <Button className="bg-green-600 hover:bg-green-700">
            Записаться
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/img/01ac37c0-f620-49ad-947c-af22c4a75234.jpg')`
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            ТЕННИСНАЯ ШКОЛА
            <span className="block text-green-400">STAR TENNIS</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in">
            Профессиональное обучение теннису для детей и взрослых в Новогорске
          </p>
          <div className="space-x-4 animate-fade-in">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3">
              Записаться на пробную тренировку
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900 text-lg px-8 py-3">
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Программы обучения</h2>
            <p className="text-xl text-gray-600">Выберите подходящую программу для любого возраста и уровня</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in">
                <div className="text-center mb-4">
                  <Badge className="bg-green-100 text-green-700 mb-2">{program.age}</Badge>
                  <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <div className="text-2xl font-bold text-green-600 mb-4">{program.price}</div>
                </div>
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <Icon name="Check" className="text-green-600 w-4 h-4 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Записаться
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section id="trainers" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Наши тренеры</h2>
            <p className="text-xl text-gray-600">Опытные специалисты с международными сертификатами</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-lg transition-all duration-300 animate-fade-in">
                <div className="text-6xl mb-4">{trainer.image}</div>
                <h3 className="text-xl font-bold mb-2">{trainer.name}</h3>
                <p className="text-green-600 font-semibold mb-2">Опыт: {trainer.experience}</p>
                <p className="text-gray-600 mb-2">{trainer.specialization}</p>
                <Badge variant="outline" className="text-sm">{trainer.achievements}</Badge>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Отзывы учеников</h2>
            <p className="text-xl text-gray-600">Что говорят о нашей школе</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="p-6 animate-fade-in">
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                <p className="font-semibold text-gray-900">- {review.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Часто задаваемые вопросы</h2>
            <p className="text-xl text-gray-600">Ответы на популярные вопросы о наших занятиях</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Контакты и запись</h2>
            <p className="text-xl text-gray-600">Свяжитесь с нами для записи на занятия</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Информация о школе</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" className="text-green-600" />
                  <span>г. Новогорск, ул. Теннисная, 1</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" className="text-green-600" />
                  <span>+7 (916) 878-66-99</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" className="text-green-600" />
                  <span>info@star-tennis.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" className="text-green-600" />
                  <span>Ежедневно с 8:00 до 22:00</span>
                </div>
              </div>
              <div className="mt-8 bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <Icon name="MapPin" className="w-12 h-12 mx-auto mb-2" />
                  <p>Интерактивная карта</p>
                </div>
              </div>
            </div>
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Записаться на занятие</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <Input placeholder="Ваше имя" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input placeholder="+7 (___) ___-__-__" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Программа</label>
                  <select className="w-full p-3 border rounded-md">
                    <option>Выберите программу</option>
                    <option>Детские группы (6-12 лет)</option>
                    <option>Подростковые группы (13-17 лет)</option>
                    <option>Взрослые группы (18+ лет)</option>
                    <option>Индивидуальные занятия</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Комментарий</label>
                  <Textarea placeholder="Дополнительная информация" />
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-lg py-3">
                  Отправить заявку
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* WhatsApp Widget */}
      <a
        href="https://wa.me/79168786699"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
      >
        <Icon name="MessageCircle" className="w-6 h-6" />
      </a>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="text-2xl">🎾</div>
            <span className="text-xl font-bold">STAR TENNIS</span>
          </div>
          <p className="text-gray-400 mb-4">Теннисная школа в Новогорске</p>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Icon name="Instagram" className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Icon name="Facebook" className="w-6 h-6" />
            </a>
            <a href="https://wa.me/79168786699" className="text-gray-400 hover:text-white transition-colors">
              <Icon name="MessageCircle" className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-500 text-sm">© 2024 Star Tennis. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;