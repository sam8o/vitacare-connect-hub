import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary to-vitacare-blue relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-primary-foreground"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Pronto para cuidar da sua saúde?
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            Agende sua consulta agora mesmo ou entre em contato conosco. 
            Estamos prontos para atendê-lo com todo o carinho e profissionalismo.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button variant="hero" size="lg" asChild>
              <Link to="/agendamento">
                <Calendar className="w-5 h-5" />
                Agendar Consulta Online
              </Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="tel:+551134567890">
                <Phone className="w-5 h-5" />
                (11) 3456-7890
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-8 text-primary-foreground/60 text-sm"
          >
            <span>✓ Atendimento humanizado</span>
            <span>✓ Equipamentos modernos</span>
            <span>✓ Equipe especializada</span>
            <span>✓ Ambiente acolhedor</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
