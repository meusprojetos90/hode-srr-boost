import { Button } from "@/components/ui/button";
import { Instagram, MessageCircle, Mail, MapPin, Phone } from "lucide-react";
import LogoHode from "@/assets/Logo-Hode.png";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img 
                  src={LogoHode} 
                  alt="Logo Hode - Soluções e Inovações Tecnológicas" 
                  className="w-40 h-full object-cover transition-all duration-500 group-hover:scale-105 rounded-2xl"
                />
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Transformamos restaurantes em marcas irresistíveis e rentáveis através 
              do nosso exclusivo Método SRR.
            </p>
            

          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gold">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-gold" />
                <div>
                  <span className="block text-primary-foreground/90">WhatsApp</span>
                  <span className="text-sm text-primary-foreground/70">(45) 9 8429-5124</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold" />
                <div>
                  <span className="block text-primary-foreground/90">Email</span>
                  <span className="text-sm text-primary-foreground/70">maiarafra@hode.com.br</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Instagram className="w-5 h-5 text-gold" />
                <div>
                  <span className="block text-primary-foreground/90">Instagram</span>
                  <span className="text-sm text-primary-foreground/70">@hodemkt</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gold">Pronto para começar?</h4>
            <p className="text-primary-foreground/80 mb-4">
              Transforme seu restaurante em uma marca de sucesso hoje mesmo.
            </p>
            <Button variant="gold" className="w-full">
              <a 
                href="https://wa.me/5545984295124?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20minha%20consultoria%20gratuita" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Chamar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/70 text-sm">
              © 2025 Hode Soluções e Inovações Tecnológicas. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};