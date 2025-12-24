import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { 
  Stethoscope, Baby, Heart, Bone, Brain, Eye, 
  Activity, Syringe, Pill, ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const specialties = [
  {
    icon: Stethoscope,
    title: "Clínica Geral",
    description: "Atendimento completo para todas as idades, com foco em prevenção, diagnóstico e tratamento de doenças comuns.",
    features: ["Check-up completo", "Acompanhamento preventivo", "Encaminhamento especializado"],
  },
  {
    icon: Baby,
    title: "Pediatria",
    description: "Cuidado especializado e acolhedor para bebês, crianças e adolescentes, acompanhando seu desenvolvimento.",
    features: ["Puericultura", "Vacinação", "Acompanhamento do crescimento"],
  },
  {
    icon: Heart,
    title: "Cardiologia",
    description: "Diagnóstico e tratamento de doenças cardiovasculares com equipamentos de última geração.",
    features: ["Eletrocardiograma", "Ecocardiograma", "Teste ergométrico"],
  },
  {
    icon: Bone,
    title: "Ortopedia",
    description: "Tratamento especializado de problemas ósseos, articulares e musculares.",
    features: ["Tratamento de fraturas", "Cirurgias ortopédicas", "Fisioterapia"],
  },
  {
    icon: Brain,
    title: "Psicologia",
    description: "Apoio à saúde mental com psicólogos experientes e abordagens terapêuticas modernas.",
    features: ["Terapia individual", "Terapia de casal", "Psicologia infantil"],
  },
  {
    icon: Eye,
    title: "Oftalmologia",
    description: "Cuidados completos com a saúde dos olhos, desde exames de rotina até cirurgias.",
    features: ["Exame de vista", "Tratamento de glaucoma", "Cirurgia refrativa"],
  },
  {
    icon: Activity,
    title: "Neurologia",
    description: "Diagnóstico e tratamento de doenças do sistema nervoso central e periférico.",
    features: ["Eletroencefalograma", "Tratamento de enxaqueca", "Doenças degenerativas"],
  },
  {
    icon: Syringe,
    title: "Dermatologia",
    description: "Cuidados com a pele, cabelos e unhas, incluindo tratamentos estéticos.",
    features: ["Tratamento de acne", "Dermatoscopia", "Procedimentos estéticos"],
  },
  {
    icon: Pill,
    title: "Endocrinologia",
    description: "Tratamento de doenças hormonais, metabólicas e de tireoide.",
    features: ["Diabetes", "Tireoide", "Obesidade"],
  },
];

const Especialidades = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nossas Especialidades</h1>
            <p className="text-lg text-primary-foreground/80">
              Contamos com uma equipe multidisciplinar de especialistas prontos para 
              oferecer o melhor cuidado para sua saúde.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Specialties Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => (
              <motion.div
                key={specialty.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <specialty.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">{specialty.title}</h3>
                <p className="text-muted-foreground mb-6">{specialty.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {specialty.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={`/agendamento?especialidade=${encodeURIComponent(specialty.title)}`}
                  className="inline-flex items-center gap-2 text-secondary font-medium hover:gap-3 transition-all"
                >
                  Agendar consulta
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-muted-foreground mb-6">
              Não encontrou a especialidade que procura? Entre em contato conosco.
            </p>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contato">
                Falar com a clínica
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Especialidades;
