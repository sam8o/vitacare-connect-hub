import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Target, Eye, Heart, Award, Users, Building, CheckCircle } from "lucide-react";

const values = [
  { icon: Heart, title: "Humanização", description: "Tratamos cada paciente como gostaríamos de ser tratados." },
  { icon: Award, title: "Excelência", description: "Buscamos sempre a melhor qualidade em nossos serviços." },
  { icon: Users, title: "Respeito", description: "Valorizamos a dignidade e individualidade de cada pessoa." },
  { icon: CheckCircle, title: "Ética", description: "Agimos com integridade e transparência em todas as relações." },
];

const milestones = [
  { year: "2004", title: "Fundação", description: "VitaCare é fundado com uma pequena clínica no centro de São Paulo." },
  { year: "2008", title: "Expansão", description: "Inauguração do primeiro hospital com 50 leitos." },
  { year: "2012", title: "Tecnologia", description: "Implementação de equipamentos de diagnóstico de última geração." },
  { year: "2016", title: "Reconhecimento", description: "Certificação de excelência hospitalar pela ONA." },
  { year: "2020", title: "Inovação", description: "Lançamento da telemedicina e agendamento online." },
  { year: "2024", title: "Presente", description: "Mais de 100 mil pacientes atendidos com excelência." },
];

const Sobre = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary to-vitacare-blue py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-primary-foreground max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre o VitaCare</h1>
            <p className="text-lg text-primary-foreground/80">
              Desde 2004, dedicamos nossa expertise e paixão para oferecer cuidados de saúde 
              de excelência, combinando tecnologia avançada com atendimento humanizado.
            </p>
          </motion.div>
        </div>
      </section>

      {/* History */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
                Nossa História
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Uma trajetória de cuidado e inovação
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                O VitaCare nasceu do sonho de criar um espaço onde a medicina de excelência 
                pudesse ser praticada com humanidade e acolhimento. Fundado por um grupo de 
                médicos visionários, começamos como uma pequena clínica e crescemos até nos 
                tornarmos referência em saúde.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Hoje, contamos com uma infraestrutura completa, equipamentos de última geração 
                e uma equipe multidisciplinar comprometida com a saúde e o bem-estar de cada 
                paciente que passa por nossas portas.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Building, label: "Hospital Moderno" },
                  { icon: Users, label: "Equipe Qualificada" },
                  { icon: Award, label: "Certificação ONA" },
                  { icon: Heart, label: "Cuidado Humanizado" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="h-40 rounded-2xl bg-gradient-to-br from-accent to-secondary/10 flex flex-col items-center justify-center p-4 text-center"
                  >
                    <item.icon className="w-10 h-10 text-secondary mb-3" />
                    <span className="text-sm font-medium text-primary">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Missão, Visão e Valores
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 shadow-card text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary mx-auto mb-6 flex items-center justify-center">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Missão</h3>
              <p className="text-muted-foreground">
                Proporcionar cuidados de saúde de excelência, com atendimento humanizado, 
                ético e comprometido com o bem-estar de cada paciente.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-card text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-secondary mx-auto mb-6 flex items-center justify-center">
                <Eye className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Visão</h3>
              <p className="text-muted-foreground">
                Ser referência em saúde no Brasil, reconhecidos pela qualidade dos serviços, 
                inovação tecnológica e excelência no atendimento.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card rounded-2xl p-8 shadow-card text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary mx-auto mb-6 flex items-center justify-center">
                <Heart className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Valores</h3>
              <p className="text-muted-foreground">
                Humanização, Excelência, Ética, Respeito, Inovação e Responsabilidade Social 
                guiam todas as nossas ações.
              </p>
            </motion.div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-soft hover-lift"
              >
                <value.icon className="w-8 h-8 text-secondary mb-4" />
                <h4 className="text-lg font-semibold text-primary mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Nossa Trajetória
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Marcos importantes
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex items-center gap-8 mb-8 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                  <div className="bg-card rounded-xl p-6 shadow-soft hover-lift inline-block">
                    <span className="text-2xl font-bold text-secondary">{milestone.year}</span>
                    <h4 className="text-lg font-semibold text-primary mt-1">{milestone.title}</h4>
                    <p className="text-sm text-muted-foreground mt-2">{milestone.description}</p>
                  </div>
                </div>
                <div className="w-4 h-4 rounded-full bg-secondary shrink-0" />
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sobre;
