import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X, ZoomIn } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// Import portfolio images
import pastaImage from "@/assets/portfolio-pasta.jpg";
import instagramImage from "@/assets/portfolio-instagram.jpg";
import burgerImage from "@/assets/portfolio-burger.jpg";
import brandingImage from "@/assets/portfolio-branding.jpg";
import sushiImage from "@/assets/portfolio-sushi.jpg";
import adsImage from "@/assets/portfolio-ads.jpg";

const portfolioItems = [
  {
    id: 1,
    image: pastaImage,
    alt: "Fotografia Profissional - Bistrô Gourmet",
    height: "h-80", // Different heights for masonry effect
  },
  {
    id: 2,
    image: instagramImage,
    alt: "Gestão Instagram - Cantina Italiana",
    height: "h-96",
  },
  {
    id: 3,
    image: burgerImage,
    alt: "Campanha Tráfego Pago - Burger House",
    height: "h-72",
  },
  {
    id: 4,
    image: brandingImage,
    alt: "Identidade Visual - Sushi Premium",
    height: "h-88",
  },
  {
    id: 5,
    image: sushiImage,
    alt: "Produção de Conteúdo - Zen Sushi",
    height: "h-80",
  },
  {
    id: 6,
    image: adsImage,
    alt: "Campanhas Publicitárias - Rede de Restaurantes",
    height: "h-96",
  },
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
          <div className="bg-gradient-gold rounded-lg p-8 max-w-4xl mx-auto shadow-gold">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Seu Restaurante Pode Ser o Próximo Case de Sucesso
            </h3>
            <p className="text-lg text-primary/80 mb-6">
              Vamos criar um portfólio único que posicione sua marca como referência no mercado gastronômico
            </p>
            <Button variant="premium" size="lg">
              Solicitar Orçamento Personalizado
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};