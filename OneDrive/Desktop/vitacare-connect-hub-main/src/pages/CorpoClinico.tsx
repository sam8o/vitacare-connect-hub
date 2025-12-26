import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const doctors = [
  {
    name: "Dra. Maria Fernandes",
    specialty: "Cardiologia",
    crm: "CRM/SP 123456",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
    bio: "Especialista em cardiologia com mais de 15 anos de experiência.",
  },
  {
    name: "Dr. Carlos Santos",
    specialty: "Clínica Geral",
    crm: "CRM/SP 234567",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
    bio: "Médico generalista focado em medicina preventiva.",
  },
  {
    name: "Dra. Ana Paula Lima",
    specialty: "Pediatria",
    crm: "CRM/SP 345678",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&crop=face",
    bio: "Pediatra com especialização em desenvolvimento infantil.",
  },
  {
    name: "Dr. Roberto Oliveira",
    specialty: "Ortopedia",
    crm: "CRM/SP 456789",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&crop=face",
    bio: "Especialista em cirurgia ortopédica e traumatologia.",
  },
  {
    name: "Dra. Juliana Costa",
    specialty: "Psicologia",
    crm: "CRP/SP 567890",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=400&fit=crop&crop=face",
    bio: "Psicóloga clínica com abordagem cognitivo-comportamental.",
  },
  {
    name: "Dr. André Martins",
    specialty: "Neurologia",
    crm: "CRM/SP 678901",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop&crop=face",
    bio: "Neurologista especializado em doenças neurodegenerativas.",
  },
  {
    name: "Dra. Patrícia Souza",
    specialty: "Dermatologia",
    crm: "CRM/SP 789012",
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=400&h=400&fit=crop&crop=face",
    bio: "Dermatologista com expertise em procedimentos estéticos.",
  },
  {
    name: "Dr. Lucas Ferreira",
    specialty: "Oftalmologia",
    crm: "CRM/SP 890123",
    image: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=400&h=400&fit=crop&crop=face",
    bio: "Oftalmologista especializado em cirurgia refrativa.",
  },
];

const CorpoClinico = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Corpo Clínico</h1>
            <p className="text-lg text-primary-foreground/80">
              Conheça nossa equipe de profissionais altamente qualificados, 
              dedicados a oferecer o melhor atendimento para você.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doctor, index) => (
              <motion.div
                key={doctor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-1">{doctor.name}</h3>
                  <p className="text-secondary font-medium text-sm mb-1">{doctor.specialty}</p>
                  <p className="text-xs text-muted-foreground mb-3">{doctor.crm}</p>
                  <p className="text-sm text-muted-foreground mb-4">{doctor.bio}</p>
                  <Link
                    to={`/agendamento?medico=${encodeURIComponent(doctor.name)}`}
                    className="inline-flex items-center gap-2 text-secondary text-sm font-medium hover:gap-3 transition-all"
                  >
                    <Calendar className="w-4 h-4" />
                    Agendar
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16 bg-muted/30 rounded-2xl p-12"
          >
            <h3 className="text-2xl font-bold text-primary mb-4">
              Agende sua consulta com nossos especialistas
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Nossa equipe está pronta para atendê-lo com todo o carinho e profissionalismo 
              que você merece.
            </p>
            <Button variant="vitacare" size="lg" asChild>
              <Link to="/agendamento">
                Agendar Consulta
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default CorpoClinico;
