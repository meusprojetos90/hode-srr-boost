import { Badge } from "@/components/ui/badge";
import { CheckCircle, Award, TrendingUp } from "lucide-react";

import MaiaraFra from "@/assets/maiara-fra.jpg";

export const AuthoritySection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo Placeholder */}
          <div className="relative">
            <div className="w-full max-w-md mx-auto aspect-square bg-gradient-gold rounded-2xl shadow-luxury p-1">
              <div className="w-full h-full bg-card rounded-xl flex items-center justify-center">
                <img 
                  src={MaiaraFra} 
                  alt="Maiara Fra" 
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 rounded-2xl"
                />
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-gold text-primary p-3 rounded-full shadow-gold">
              <TrendingUp className="w-6 h-6" />
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-6">
            <div>
              <Badge variant="outline" className="mb-4 border-gold text-gold">
                Fundadora & Especialista
              </Badge>
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Conheça a 
                <span className="text-gold"> Maiara Fra</span>
              </h2>
              <h3 className="text-xl font-semibold text-gold mb-6">
                Criadora do Método SRR
              </h3>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Com anos de experiência em marketing gastronômico, Maiara desenvolveu 
              o <strong className="text-foreground">Método SRR</strong> que já transformou 
              centenas de restaurantes em marcas reconhecidas e rentáveis.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-gold" />
                <span className="text-foreground">Especialista em Marketing Gastronômico</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-gold" />
                <span className="text-foreground">Mentoria com grandes nomes do setor</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-gold" />
                <span className="text-foreground">+500 restaurantes transformados</span>
              </div>
            </div>
            
            <div className="pt-4">
              <blockquote className="text-lg italic text-muted-foreground border-l-4 border-gold pl-4">
                "Cada restaurante tem um potencial único de se tornar uma marca irresistível. 
                Meu trabalho é desbloquear esse potencial."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};