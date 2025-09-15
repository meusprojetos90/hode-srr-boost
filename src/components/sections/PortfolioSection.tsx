import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, ExternalLink } from "lucide-react";

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
    title: "Fotografia Profissional - Bistrô Gourmet",
    category: "Fotografia",
    image: pastaImage,
    description: "Sessão fotográfica completa com 50+ imagens profissionais para cardápio e redes sociais",
    results: "+180% engajamento",
    tags: ["Food Photography", "Cardápio Digital", "Instagram"],
  },
  {
    id: 2,
    title: "Gestão Instagram - Cantina Italiana",
    category: "Redes Sociais",
    image: instagramImage,
    description: "Transformação completa do perfil com feed estratégico e conteúdo que converte",
    results: "+300% seguidores",
    tags: ["Instagram", "Feed Strategy", "Content Creation"],
  },
  {
    id: 3,
    title: "Campanha Tráfego Pago - Burger House",
    category: "Tráfego Pago",
    image: burgerImage,
    description: "Campanhas Facebook e Instagram Ads com foco em conversão e ROI otimizado",
    results: "+250% pedidos",
    tags: ["Facebook Ads", "Instagram Ads", "ROI"],
  },
  {
    id: 4,
    title: "Identidade Visual - Sushi Premium",
    category: "Branding",
    image: brandingImage,
    description: "Desenvolvimento completo de marca: logo, cartões, cardápio e materiais gráficos",
    results: "Rebranding completo",
    tags: ["Logo Design", "Brand Identity", "Print Design"],
  },
  {
    id: 5,
    title: "Produção de Conteúdo - Zen Sushi",
    category: "Conteúdo",
    image: sushiImage,
    description: "Banco de imagens exclusivo e conteúdo para redes sociais durante 6 meses",
    results: "+400% alcance",
    tags: ["Content Creation", "Photography", "Social Media"],
  },
  {
    id: 6,
    title: "Campanhas Publicitárias - Rede de Restaurantes",
    category: "Publicidade",
    image: adsImage,
    description: "Múltiplas campanhas integradas para abertura de nova unidade",
    results: "+500% awareness",
    tags: ["Multi-platform", "Brand Awareness", "Launch Campaign"],
  },
];

const categories = ["Todos", "Fotografia", "Redes Sociais", "Tráfego Pago", "Branding", "Conteúdo", "Publicidade"];

export const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filteredItems = activeCategory === "Todos" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

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

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "gold" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Card 
              key={item.id}
              className="group relative overflow-hidden hover:shadow-luxury transition-all duration-500 cursor-pointer"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-overlay transition-opacity duration-300 ${
                  hoveredItem === item.id ? 'opacity-90' : 'opacity-0'
                }`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex gap-3">
                      <Button size="icon" variant="gold" className="rounded-full">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button size="icon" variant="premium" className="rounded-full">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <Badge variant="gold" className="text-xs">
                    {item.category}
                  </Badge>
                </div>

                {/* Results Badge */}
                <div className="absolute top-4 right-4">
                  <Badge variant="outline" className="bg-primary-foreground/90 text-primary border-gold">
                    {item.results}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-gold transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="outline" 
                      className="text-xs bg-muted hover:bg-gold/10 hover:border-gold transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
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