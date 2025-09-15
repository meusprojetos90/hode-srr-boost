import { Button } from "@/components/ui/button";
import { Instagram, MessageCircle, Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
                <span className="font-bold text-primary text-lg">H</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gold">Hode</h3>
                <p className="text-sm text-primary-foreground/70">Soluções & Inovações</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Transformamos restaurantes em marcas irresistíveis e rentáveis através 
              do nosso exclusivo Método SRR.
            </p>
            
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-gold hover:bg-gold/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-gold hover:bg-gold/10">
                <MessageCircle className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-gold hover:bg-gold/10">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gold">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-gold" />
                <div>
                  <span className="block text-primary-foreground/90">WhatsApp</span>
                  <span className="text-sm text-primary-foreground/70">(11) 99999-9999</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold" />
                <div>
                  <span className="block text-primary-foreground/90">Email</span>
                  <span className="text-sm text-primary-foreground/70">contato@hode.com.br</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Instagram className="w-5 h-5 text-gold" />
                <div>
                  <span className="block text-primary-foreground/90">Instagram</span>
                  <span className="text-sm text-primary-foreground/70">@hode.solucoes</span>
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
              <MessageCircle className="w-4 h-4 mr-2" />
              Chamar no WhatsApp
            </Button>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/70 text-sm">
              © 2024 Hode Soluções e Inovações Tecnológicas. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6 text-sm text-primary-foreground/70">
              <a href="#" className="hover:text-gold transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-gold transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};