import { useState } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, User, Phone, Mail, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const specialties = [
  "Clínica Geral",
  "Pediatria",
  "Cardiologia",
  "Ortopedia",
  "Psicologia",
  "Oftalmologia",
  "Neurologia",
  "Dermatologia",
  "Endocrinologia",
];

const timeSlots = [
  "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
  "11:00", "11:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30", "18:00", "18:30",
];

const Agendamento = () => {
  const [searchParams] = useSearchParams();
  const initialSpecialty = searchParams.get("especialidade") || "";
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    specialty: initialSpecialty,
    date: "",
    time: "",
    message: "",
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Agendamento realizado!",
      description: "Você receberá um e-mail de confirmação em breve.",
    });
  };

  if (isSubmitted) {
    return (
      <Layout>
        <section className="py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-lg mx-auto text-center"
            >
              <div className="w-20 h-20 rounded-full bg-secondary/20 mx-auto mb-6 flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-secondary" />
              </div>
              <h1 className="text-3xl font-bold text-primary mb-4">
                Agendamento Confirmado!
              </h1>
              <p className="text-muted-foreground mb-6">
                Sua consulta foi agendada com sucesso. Você receberá um e-mail de confirmação 
                com todos os detalhes em breve.
              </p>
              <div className="bg-muted/50 rounded-2xl p-6 text-left mb-8">
                <h3 className="font-semibold text-primary mb-4">Detalhes do agendamento:</h3>
                <ul className="space-y-2 text-sm">
                  <li><strong>Paciente:</strong> {formData.name}</li>
                  <li><strong>Especialidade:</strong> {formData.specialty}</li>
                  <li><strong>Data:</strong> {new Date(formData.date).toLocaleDateString('pt-BR')}</li>
                  <li><strong>Horário:</strong> {formData.time}</li>
                </ul>
              </div>
              <Button variant="vitacare" onClick={() => setIsSubmitted(false)}>
                Agendar nova consulta
              </Button>
            </motion.div>
          </div>
        </section>
      </Layout>
    );
  }

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Agendamento Online</h1>
            <p className="text-lg text-primary-foreground/80">
              Agende sua consulta de forma rápida e prática. 
              Escolha a especialidade, data e horário de sua preferência.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2"
            >
              <div className="bg-card rounded-2xl p-8 shadow-card">
                <h2 className="text-2xl font-bold text-primary mb-8">
                  Preencha seus dados
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="flex items-center gap-2">
                        <User className="w-4 h-4 text-secondary" />
                        Nome completo
                      </Label>
                      <Input
                        id="name"
                        placeholder="Seu nome completo"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-secondary" />
                        E-mail
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-secondary" />
                        Telefone
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(11) 99999-9999"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="specialty" className="flex items-center gap-2">
                        Especialidade
                      </Label>
                      <Select
                        value={formData.specialty}
                        onValueChange={(value) => setFormData({ ...formData, specialty: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione a especialidade" />
                        </SelectTrigger>
                        <SelectContent>
                          {specialties.map((specialty) => (
                            <SelectItem key={specialty} value={specialty}>
                              {specialty}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="date" className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-secondary" />
                        Data preferencial
                      </Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        min={new Date().toISOString().split('T')[0]}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="time" className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-secondary" />
                        Horário preferencial
                      </Label>
                      <Select
                        value={formData.time}
                        onValueChange={(value) => setFormData({ ...formData, time: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o horário" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Observações (opcional)</Label>
                    <Textarea
                      id="message"
                      placeholder="Descreva o motivo da consulta ou informações adicionais..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="vitacare"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Agendando..." : "Confirmar Agendamento"}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Info Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="bg-muted/30 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-primary mb-4">
                  Informações importantes
                </h3>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span>Chegue com 15 minutos de antecedência</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span>Traga documento de identidade e cartão do convênio</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span>Traga exames anteriores relacionados à consulta</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span>Em caso de cancelamento, avise com 24h de antecedência</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary/10 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-primary mb-4">
                  Precisa de ajuda?
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Nossa equipe está disponível para ajudá-lo com seu agendamento.
                </p>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-secondary" />
                    (11) 3456-7890
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-secondary" />
                    agendamento@vitacare.com.br
                  </p>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-soft">
                <h3 className="text-lg font-semibold text-primary mb-4">
                  Horários de atendimento
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Segunda a Sexta</span>
                    <span className="font-medium">07h - 20h</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Sábado</span>
                    <span className="font-medium">08h - 14h</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Domingo</span>
                    <span className="text-muted-foreground">Fechado</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Agendamento;
