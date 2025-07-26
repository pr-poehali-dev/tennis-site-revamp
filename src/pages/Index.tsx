import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [gameScore, setGameScore] = useState(0);
  const [gameActive, setGameActive] = useState(false);
  const [ballPosition, setBallPosition] = useState({ x: 50, y: 50 });
  const [gameTime, setGameTime] = useState(30);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Game logic
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (gameActive && gameTime > 0) {
      timer = setTimeout(() => setGameTime(gameTime - 1), 1000);
    } else if (gameTime === 0) {
      setGameActive(false);
    }
    return () => clearTimeout(timer);
  }, [gameActive, gameTime]);

  const startGame = () => {
    setGameActive(true);
    setGameScore(0);
    setGameTime(30);
    moveBall();
  };

  const moveBall = useCallback(() => {
    if (gameActive && gameTime > 0) {
      setBallPosition({
        x: Math.random() * 80 + 10,
        y: Math.random() * 60 + 20
      });
      setTimeout(moveBall, 1500);
    }
  }, [gameActive, gameTime]);

  const hitBall = () => {
    if (gameActive) {
      setGameScore(prev => prev + 1);
      setBallPosition({
        x: Math.random() * 80 + 10,
        y: Math.random() * 60 + 20
      });
    }
  };

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
            <a href="#game" className="text-gray-700 hover:text-green-600 transition-colors">Игра</a>
            <a href="#trainers" className="text-gray-700 hover:text-green-600 transition-colors">Тренеры</a>
            <a href="#location" className="text-gray-700 hover:text-green-600 transition-colors">Локация</a>
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

      {/* Tennis Game Section */}
      <section id="game" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Теннисный тренажёр</h2>
            <p className="text-xl text-gray-600">Проверьте свою реакцию! Попадите по мячу как можно больше раз за 30 секунд</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <div className="text-center mb-6">
                <div className="flex justify-center space-x-8 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">{gameScore}</div>
                    <div className="text-sm text-gray-600">Очки</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">{gameTime}</div>
                    <div className="text-sm text-gray-600">Секунд</div>
                  </div>
                </div>
                {!gameActive ? (
                  <Button 
                    onClick={startGame} 
                    size="lg" 
                    className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3"
                  >
                    🎾 Начать игру
                  </Button>
                ) : (
                  <div className="text-lg text-green-600 font-semibold">
                    Кликайте по мячу! 🎯
                  </div>
                )}
              </div>
              
              {gameActive && (
                <div className="relative bg-green-100 rounded-lg h-80 overflow-hidden border-4 border-green-200">
                  <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-green-100">
                    <div 
                      className="absolute w-12 h-12 bg-yellow-400 rounded-full cursor-pointer transform hover:scale-110 transition-transform duration-150 flex items-center justify-center text-2xl animate-bounce"
                      style={{
                        left: `${ballPosition.x}%`,
                        top: `${ballPosition.y}%`,
                        transform: `translate(-50%, -50%) scale(${gameActive ? 1 : 0})`
                      }}
                      onClick={hitBall}
                    >
                      🎾
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 text-sm text-gray-600">
                    Теннисный корт STAR TENNIS
                  </div>
                </div>
              )}
              
              {gameTime === 0 && gameScore > 0 && (
                <div className="text-center mt-6 p-4 bg-green-50 rounded-lg">
                  <h3 className="text-xl font-bold text-green-600 mb-2">Игра окончена! 🏆</h3>
                  <p className="text-gray-700">
                    Ваш результат: <span className="font-bold text-green-600">{gameScore} попаданий</span>
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    {gameScore >= 15 ? "Отличная реакция! 🌟" : 
                     gameScore >= 10 ? "Хороший результат! 👍" : 
                     "Тренируйтесь больше! 💪"}
                  </p>
                </div>
              )}
            </Card>
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

      {/* Location Section with Yandex Maps */}
      <section id="location" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Наши корты</h2>
            <p className="text-xl text-gray-600">Современные теннисные корты в Новогорске</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Информация о кортах</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" className="text-green-600" />
                  <span>г. Новогорск, ул. Теннисная, 1</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" className="text-green-600" />
                  <span>Работаем ежедневно с 8:00 до 22:00</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Zap" className="text-green-600" />
                  <span>4 профессиональных корта</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Umbrella" className="text-green-600" />
                  <span>Крытые и открытые площадки</span>
                </div>
              </div>
              <div className="mt-8 space-y-3">
                <h4 className="text-lg font-semibold">Особенности кортов:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Покрытие Hard Court (твёрдое)</li>
                  <li>• Профессиональное освещение</li>
                  <li>• Система подогрева для зимы</li>
                  <li>• Раздевалки и душевые</li>
                  <li>• Прокат инвентаря</li>
                </ul>
              </div>
            </div>
            <div className="lg:h-96">
              <iframe
                src="https://yandex.ru/map-widget/v1/?from=mapframe&ll=37.357892%2C55.894215&source=mapframe&um=constructor%3A1de57a8b197375fee760fceb27afc07ede1a6fa75c75d4c4c58633141914c512&utm_source=mapframe&z=14"
                width="100%"
                height="100%"
                className="rounded-lg border-0"
                allowFullScreen
                title="Теннисные корты STAR TENNIS"
              />
            </div>
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
          <div className="max-w-2xl mx-auto">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Записаться на занятие</h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Имя</label>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input placeholder="+7 (916) 878-66-99" />
                  </div>
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
              
              <div className="mt-8 pt-8 border-t text-center space-y-4">
                <div className="flex justify-center items-center space-x-3">
                  <Icon name="Phone" className="text-green-600" />
                  <span className="text-lg font-semibold">+7 (916) 878-66-99</span>
                </div>
                <div className="flex justify-center items-center space-x-3">
                  <Icon name="Mail" className="text-green-600" />
                  <span>info@star-tennis.ru</span>
                </div>
              </div>
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