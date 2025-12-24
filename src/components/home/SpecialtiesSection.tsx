import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Stethoscope, Baby, Heart, Bone, Brain, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const specialties = [
  {
    icon: Stethoscope,
    title: "Clínica Geral",
    description: "Atendimento completo para todas as idades, com foco em prevenção e diagnóstico.",
  },
  {
    icon: Baby,
    title: "Pediatria",
    description: "Cuidado especializado para bebês, crianças e adolescentes.",
  },
  {
    icon: Heart,
    title: "Cardiologia",
    description: "Diagnóstico e tratamento de doenças cardiovasculares com tecnologia avançada.",
  },
  {
    icon: Bone,
    title: "Ortopedia",
    description: "Tratamento de problemas ósseos, articulares e musculares.",
  },
  {
    icon: Brain,
    title: "Psicologia",
    description: "Apoio à saúde mental com psicólogos experientes e acolhedores.",
  },
];

export const SpecialtiesSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Nossas Especialidades
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Cuidado completo para sua saúde
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma ampla gama de especialidades médicas para atender todas as suas necessidades de saúde.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((specialty, index) => (
            <motion.div
              key={specialty.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary/20 to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <specialty.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">{specialty.title}</h3>
              <p className="text-muted-foreground mb-4">{specialty.description}</p>
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
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" asChild>
            <Link to="/especialidades">
              Ver todas as especialidades
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
