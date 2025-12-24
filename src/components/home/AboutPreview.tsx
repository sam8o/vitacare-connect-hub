import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Award, Users, Building, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  "Equipamentos de última geração",
  "Equipe multidisciplinar",
  "Atendimento 24 horas",
  "Ambiente acolhedor",
];

export const AboutPreview = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 rounded-2xl bg-gradient-to-br from-secondary/30 to-accent overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <Building className="w-16 h-16 text-secondary/60" />
                  </div>
                </div>
                <div className="h-64 rounded-2xl bg-gradient-to-br from-primary/10 to-accent overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <Users className="w-16 h-16 text-primary/40" />
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-64 rounded-2xl bg-gradient-to-br from-accent to-secondary/20 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <Award className="w-16 h-16 text-secondary/50" />
                  </div>
                </div>
                <div className="h-48 rounded-2xl bg-gradient-to-br from-primary/20 to-accent overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <CheckCircle className="w-16 h-16 text-primary/40" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground rounded-2xl p-6 shadow-glow"
            >
              <div className="text-3xl font-bold">20+</div>
              <div className="text-sm opacity-90">Anos cuidando de você</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Sobre o VitaCare
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Uma história de cuidado e excelência em saúde
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Desde 2004, o VitaCare Hospital & Clínica se dedica a oferecer atendimento médico de qualidade, 
              combinando tecnologia avançada com um tratamento humanizado e acolhedor.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Nossa missão é proporcionar cuidados de saúde excepcionais, baseados em respeito, ética e 
              comprometimento com o bem-estar de cada paciente.
            </p>

            <ul className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>

            <Button variant="default" size="lg" asChild>
              <Link to="/sobre">
                Conheça nossa história
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
