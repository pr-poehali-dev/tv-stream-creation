import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeChannel, setActiveChannel] = useState('Первый канал');

  const programData = [
    {
      time: '18:00',
      title: 'Новости',
      channel: 'Первый канал',
      duration: '30 мин',
      genre: 'Информационная программа'
    },
    {
      time: '18:30',
      title: 'Поле чудес',
      channel: 'Первый канал',
      duration: '60 мин',
      genre: 'Развлекательная программа'
    },
    {
      time: '19:30',
      title: 'Время',
      channel: 'Первый канал',
      duration: '30 мин',
      genre: 'Новости'
    },
    {
      time: '18:00',
      title: 'Вести',
      channel: 'Россия 1',
      duration: '40 мин',
      genre: 'Новости'
    },
    {
      time: '18:40',
      title: 'Андрей Малахов. Прямой эфир',
      channel: 'Россия 1',
      duration: '50 мин',
      genre: 'Ток-шоу'
    },
    {
      time: '18:00',
      title: 'Сегодня',
      channel: 'НТВ',
      duration: '30 мин',
      genre: 'Новости'
    }
  ];

  const channels = ['Первый канал', 'Россия 1', 'НТВ', 'ТНТ', 'СТС'];

  const getChannelPrograms = (channel: string) => {
    return programData.filter(program => program.channel === channel);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Tv" size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">TV Stream</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Главная</a>
              <a href="#player" className="text-gray-700 hover:text-primary transition-colors">Плеер</a>
              <a href="#schedule" className="text-gray-700 hover:text-primary transition-colors">Программа</a>
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors">О проекте</a>
            </nav>
            <Button variant="outline" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Интернет Телевидение</h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Смотрите любимые каналы в прямом эфире
          </p>
          <Button size="lg" className="bg-white text-blue-800 hover:bg-gray-100">
            <Icon name="Play" size={20} className="mr-2" />
            Начать просмотр
          </Button>
        </div>
      </section>

      {/* Video Player Section */}
      <section id="player" className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Прямой эфир</span>
                  <Badge variant="secondary" className="bg-red-100 text-red-700">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                    LIVE
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative bg-black aspect-video">
                  <video 
                    className="w-full h-full"
                    controls
                    autoPlay
                    muted
                    poster="/placeholder.svg"
                  >
                    <source src="http://192.168.1.133:8080" type="application/x-mpegURL" />
                    <p className="text-white text-center p-8">
                      Ваш браузер не поддерживает воспроизведение видео.
                      <br />
                      <a href="http://192.168.1.133:8080" className="text-blue-400 underline">
                        Открыть поток напрямую
                      </a>
                    </p>
                  </video>
                  <div className="absolute bottom-4 left-4 bg-black bg-opacity-75 text-white px-3 py-1 rounded">
                    {activeChannel}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Channel Selector */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4">Выберите канал</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {channels.map((channel) => (
                  <Button
                    key={channel}
                    variant={activeChannel === channel ? "default" : "outline"}
                    className="h-12"
                    onClick={() => setActiveChannel(channel)}
                  >
                    <Icon name="Tv" size={16} className="mr-2" />
                    {channel}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Программа передач</h2>
            <p className="text-gray-600">Расписание на сегодня</p>
          </div>

          <Tabs defaultValue="Первый канал" className="max-w-6xl mx-auto">
            <TabsList className="grid grid-cols-3 md:grid-cols-5 mb-8">
              {channels.map((channel) => (
                <TabsTrigger key={channel} value={channel} className="text-xs md:text-sm">
                  {channel}
                </TabsTrigger>
              ))}
            </TabsList>

            {channels.map((channel) => (
              <TabsContent key={channel} value={channel}>
                <div className="grid gap-4">
                  {getChannelPrograms(channel).map((program, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="text-center">
                              <div className="text-lg font-bold text-primary">{program.time}</div>
                              <div className="text-xs text-gray-500">{program.duration}</div>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900">{program.title}</h4>
                              <p className="text-sm text-gray-600">{program.genre}</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            <Icon name="Play" size={16} className="mr-1" />
                            Смотреть
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">О проекте</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name="Monitor" size={24} className="text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Высокое качество</h3>
                  <p className="text-gray-600 text-sm">Трансляция в HD качестве без задержек</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name="Globe" size={24} className="text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Доступность</h3>
                  <p className="text-gray-600 text-sm">Смотрите с любого устройства в любое время</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name="Calendar" size={24} className="text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Программа передач</h3>
                  <p className="text-gray-600 text-sm">Полное расписание всех каналов</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 p-8 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">TV Stream Platform</h3>
              <p className="text-gray-600 leading-relaxed">
                Наша платформа предоставляет доступ к прямым трансляциям телевизионных каналов 
                через интернет. Мы используем современные технологии для обеспечения стабильного 
                и качественного вещания. Платформа поддерживает различные форматы трансляций 
                и адаптируется под любые устройства.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Tv" size={20} className="text-white" />
              </div>
              <span className="text-lg font-semibold">TV Stream</span>
            </div>
            <div className="text-sm text-gray-400">
              © 2024 TV Stream Platform. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;