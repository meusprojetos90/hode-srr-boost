import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote, Star, TrendingUp, Users, Target } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Silva",
    restaurant: "Bistrô Gourmet",
    content: "A Hode transformou completamente nosso restaurante. Em 3 meses, aumentamos 180% nas reservas e o faturamento cresceu 120%. O Método SRR realmente funciona!",
    rating: 5,
    results: "+180% reservas",
  },
  {
    name: "Ana Paula",
    restaurant: "Cantina Italiana", 
    content: "Nunca imaginei que marketing digital pudesse fazer tanta diferença. Nosso Instagram explodiu e hoje temos fila de espera todos os fins de semana!",
    rating: 5,
    results: "+300% seguidores",
  },
  {
    name: "Roberto Santos",
    restaurant: "Churrascaria Premium",
    content: "Profissionalismo e resultados excepcionais. A equipe da Hode entende de verdade o mercado gastronômico. Recomendo para qualquer restaurante que quer crescer.",
    rating: 5,
    results: "+250% alcance",
  },
];

const stats = [
  {
    icon: Users,
    number: "500+",
    label: "Restaurantes transformados",
  },
  {
    icon: TrendingUp,
    number: "300%",
    label: "Aumento médio no alcance",
  },
  {
    icon: Target,
    number: "150%",
    label: "Crescimento em vendas",
  },
  {
    icon: Star,
    number: "4.9/5",
    label: "Avaliação dos clientes",
  },
];

export const SocialProofSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Results Stats */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-gold text-gold">
            Resultados Comprovados
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossos clientes
            <span className="text-gold block">falam por nós</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Veja os resultados que obtivemos para restaurantes como o seu
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-gold" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative bg-card hover:shadow-luxury transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-gold" />
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.restaurant}</div>
                  </div>
                  <Badge variant="outline" className="border-gold text-gold bg-gold/10">
                    {testimonial.results}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Before/After Section */}
        <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">
              Transformações
              <span className="text-gold"> Reais</span>
            </h3>
            <p className="text-xl text-primary-foreground/80">
              Antes e depois do Método SRR
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center">
              <Badge variant="outline" className="mb-4 border-destructive text-destructive bg-destructive/10">
                Antes
              </Badge>
              <ul className="space-y-3 text-left">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full"></div>
                  <span>Poucos seguidores e baixo engajamento</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full"></div>
                  <span>Fotos amadoras que não despertam desejo</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full"></div>
                  <span>Marketing sem direção ou resultados</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full"></div>
                  <span>Faturamento instável e imprevisível</span>
                </li>
              </ul>
            </div>
            
            <div className="text-center">
              <Badge variant="outline" className="mb-4 border-gold text-gold bg-gold/10">
                Depois
              </Badge>
              <ul className="space-y-3 text-left">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span>Crescimento orgânico e engajamento real</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span>Banco de imagens profissional irresistível</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span>Estratégia clara com ROI comprovado</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span>Crescimento consistente e previsível</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};