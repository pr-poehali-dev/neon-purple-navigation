import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen pt-16 bg-[#121212] bg-gradient-to-b from-background to-[#1a1a24]">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-1/2">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-6xl font-bold mb-6 neon-text"
            >
              Неоновый Дизайн
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-white/80 mb-8"
            >
              Современные веб-решения с уникальным неоновым стилем, который выделит ваш проект среди конкурентов.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <button className="neon-button">Узнать больше</button>
              <button className="neon-button bg-neon-purple/20">Наши работы</button>
            </motion.div>
          </div>
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="w-full h-80 md:h-96 rounded-2xl bg-gradient-to-r from-neon-purple/30 to-neon-pink/30 p-1">
                <div className="w-full h-full rounded-xl overflow-hidden flex items-center justify-center bg-[#1a1a24]">
                  <img 
                    src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80" 
                    alt="Неоновые огни"
                    className="w-full h-full object-cover opacity-80" 
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-neon-purple/20 rounded-full filter blur-xl"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-neon-pink/20 rounded-full filter blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center neon-text">Наши преимущества</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Уникальный дизайн",
              desc: "Создаем неповторимые неоновые интерфейсы, которые запомнятся пользователям",
              icon: "✨"
            },
            {
              title: "Высокая производительность",
              desc: "Оптимизируем каждый аспект приложения для молниеносной скорости работы",
              icon: "⚡"
            },
            {
              title: "Адаптивность",
              desc: "Идеальное отображение на любых устройствах от смартфонов до больших экранов",
              icon: "📱"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="neo-card p-6"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-white/70">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
