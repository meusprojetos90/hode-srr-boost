import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X, ZoomIn } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// Import portfolio images
import port01 from "@/assets/WhatsApp Image 2025-09-15 at 11.09.24.jpeg";
import port02 from "@/assets/493225387_999521952361741_3544196573852622498_n.jpg";
import port03 from "@/assets/WhatsApp Image 2025-09-15 at 11.10.05.jpeg";
import port04 from "@/assets/524313383_1330513898642270_3518510657312413185_n.jpeg";

const portfolioItems = [
  {
    id: 1,
    image: port01,
    alt: "Fotografia Profissional - Bistrô Gourmet",
    height: "h-80", // Different heights for masonry effect
  },
  {
    id: 2,
    image: port02,
    alt: "Fotografia Profissional - Bistrô Gourmet",
    height: "h-64", // Different heights for masonry effect
  },
  {
    id: 3,
    image: port03,
    alt: "Fotografia Profissional - Bistrô Gourmet",
    height: "h-72", // Different heights for masonry effect
  },
  {
    id: 4,
    image: port04,
    alt: "Fotografia Profissional - Bistrô Gourmet",
    height: "h-64", // Different heights for masonry effect
  }
];

export const PortfolioSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-gold text-gold">
            Nosso Portfólio
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Trabalhos que
            <span className="text-gold block">Transformam Marcas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos para nossos clientes. 
            Cada trabalho é único e focado em resultados reais.
          </p>
        </div>

        {/* Masonry Gallery */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {portfolioItems.map((item) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <div 
                  className={`group relative overflow-hidden rounded-lg cursor-pointer break-inside-avoid mb-6 ${item.height}`}
                >
                  <img 
                    src={item.image} 
                    alt={item.alt}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-gold/20 backdrop-blur-sm rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <ZoomIn className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              
              <DialogContent className="max-w-4xl w-[90vw] h-[90vh] p-0 bg-primary/95 border-gold/20">
                <div className="relative w-full h-full flex items-center justify-center">
                  <img 
                    src={item.image} 
                    alt={item.alt}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gold rounded-lg p-8 max-w-4xl mx-auto shadow-gold">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Seu Restaurante Pode Ser o Próximo Case de Sucesso
            </h3>
            <p className="text-lg text-primary/80 mb-6">
              Vamos criar um portfólio único que posicione sua marca como referência no mercado gastronômico
            </p>
            <Button variant="premium" size="lg">
              <a 
                href="https://wa.me/5545984295124?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20minha%20consultoria%20gratuita" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full"
              >
              Solicitar Orçamento Personalizado
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};