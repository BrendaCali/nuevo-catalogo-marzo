import { useState } from 'react';
import { ProductCard, Product } from './components/product-card';
import { ProductModal } from './components/product-modal';

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const products: Product[] = [
    {
      id: 1,
      name: 'Reloj Plateado y Accesorios',
      price: 125,
      shortDescription: 'Set completo de reloj de metal con accesorios incluidos en caja de regalo',
      fullDescription: 'Set completo de reloj y accesorios plateados. Material de metal de alta calidad. Incluye reloj de pulsera, cadena estilo cubana, pulsera y collar. Perfecto como regalo. Viene en una elegante caja de presentación negra.',
      images: [
        '/fotos/foto1.jpg'
      ],
      specifications: [
        'Material: Metal',
        'Diámetro del dial: 40 mm',
        'Grosor del dial: 10 mm',
        'Ancho de la correa: 20 mm',
        'Largo de la correa: 17 cm (170 mm)',
        'Peso: 70 g',
        'Largo de la pulsera: 20cm',
        'Largo del collar: 59cm',
        'Incluye caja de regalo negra'
      ]
    },
    {
      id: 2,
      name: 'Reloj de Cuero y Pulseras',
      price: 55,
      shortDescription: 'Reloj elegante con correa de cuero PU y pulseras incluidas en caja de regalo',
      fullDescription: 'Elegante reloj con correa de cuero PU. Todos los modelos vienen en una cajita de regalo negra. Set completo con pulseras incluidas. Material: Metal+Cristal+Cuero PU.',
      images: [
        '/fotos/foto2.jpg'
      ],
      specifications: [
        'Material: Metal+Cristal+Cuero PU',
        'Diámetro del Dial: 41 mm',
        'Espesor del Dial: 9 mm',
        'Ancho de la Correa: 19 mm',
        'Longitud de la Correa: 245 mm',
        'Peso: 32 g',
        'Incluye caja de regalo negra',
        'Colores disponibles: A - B - C - D'
      ]
    },
    {
      id: 3,
      name: 'Organizador de Utensilios de Cocina',
      price: 65,
      shortDescription: 'Organizador de acero inoxidable con cubo para cuchillos, ganchos y toallero',
      fullDescription: 'Organizador versátil de acero inoxidable para mantener ordenada tu cocina. Incluye cubo para cuchillos, ganchos, orificios escurridores y toallero. Sistema de montaje en pared para ahorrar espacio.',
      images: [
        '/fotos/foto3.jpg'
      ],
      specifications: [
        'Material: Acero inoxidable',
        'Tamaño: 60*6*6.7cm',
        'Cubo para cuchillos',
        'Ganchos incluidos',
        'Orificios escurridores',
        'Toallero integrado',
        'Instalación en pared'
      ]
    },
    {
      id: 4,
      name: 'Compresor de Aire Portátil',
      price: 200,
      shortDescription: 'Compresor digital con batería recargable para auto, moto, bicicleta y más',
      fullDescription: 'Compresor de aire portátil con pantalla digital LCD y batería de litio recargable. Inflado rápido y preciso con apagado automático. Incluye múltiples adaptadores para diferentes usos. Perfecto para emergencias en el camino.',
      images: [
        '/fotos/foto4.jpg'
      ],
      specifications: [
        'Tamaño: 74*47*120 mm',
        'Batería: 2 baterías de litio (1500 mAh x 2)',
        'Voltaje: 7.4V',
        'Potencia: 48-60 W',
        'Rango de presión: 3-150 PSI',
        'Volumen de aire: 19 L/min',
        'Tiempo de funcionamiento: 8-10 minutos continuo',
        'Autonomía: ~20 minutos con carga completa',
        'Puerto de carga: Tipo C',
        'Tiempo de carga: 3-5 horas',
        'Pantalla LCD',
        'Manguera de aire: 150 mm'
      ]
    },
    {
      id: 5,
      name: 'Luz LED de Techo con Panel Solar',
      price: 115,
      shortDescription: 'Lámpara LED solar de 32 perlas con control remoto y temporizador',
      fullDescription: 'Lámpara LED de techo con panel solar integrado. 32 LEDs de alta luminosidad. Control remoto incluido con función de temporizador. Ideal para espacios sin electricidad o para ahorrar energía.',
      images: [
        '/fotos/foto5.jpg'
      ],
      specifications: [
        'Diámetro: 140 mm',
        'Número de LEDs: 32',
        'Dimensiones del cabezal: 140 x 140 x 55 mm',
        'Panel solar: 130 x 140 mm',
        'Potencia del panel: 6V, 2W',
        'Batería: 800 mAh',
        'Funciones: Luz constante, control remoto, temporizador',
        'Control remoto incluido',
        'Instalación fácil'
      ]
    },
    {
      id: 6,
      name: 'Multi Dispensador de Alimentos',
      price: 165,
      shortDescription: 'Dispensador de plástico con 6 compartimentos y capacidad de 10kg',
      fullDescription: 'Dispensador múltiple de alimentos con 6 compartimentos independientes. Capacidad total de 10kg. Perfecto para organizar cereales, granos, snacks y más. Mantiene los alimentos frescos y protegidos.',
      images: [
        '/fotos/foto6.jpg'
      ],
      specifications: [
        'Material: Plástico resistente',
        'Tamaño: 36.6*32.4*14.4cm',
        'Compartimentos: 6',
        'Capacidad total: 10kg',
        'Dispensador individual por compartimento',
        'Mantiene alimentos frescos',
        'Fácil de limpiar'
      ]
    },
    {
      id: 7,
      name: 'Mini Dron L28',
      price: 320,
      shortDescription: 'Dron con posicionamiento óptico, cámara HD y 15 minutos de vuelo',
      fullDescription: 'Mini Dron L28 con sistema de posicionamiento por flujo óptico para mayor estabilidad. Cámara de alta definición integrada. Batería de 1500 mAh con hasta 15 minutos de vuelo. Control remoto con múltiples funciones incluyendo retorno automático, modo sin cabeza y acrobacias. Incluye batería, cable de carga, destornillador, manual de uso y hélices de repuesto.',
      images: [
        '/fotos/foto7.jpg'
      ],
      specifications: [
        'Sistema de vuelo: Posicionamiento por flujo óptico',
        'Tamaño: 13.7*11.4*4.8cm',
        'Cámara: Alta definición',
        'Batería: 1500 mAh',
        'Altitud máxima: 100 m',
        'Distancia de control: 100 m',
        'Tiempo de vuelo: Aprox. 15 minutos',
        'Funciones: Retorno, Modo sin cabeza, Volteo/acrobacia',
        'Incluye: 1 Batería, Cable de carga, Destornillador, 2 Manuales, 4 Hélices y tornillos'
      ]
    },
    {
      id: 8,
      name: 'Mini Dron E4 con Gafas VR',
      price: 540,
      shortDescription: 'Dron plegable con cámara ajustable 90°, gafas VR y transmisión FPV',
      fullDescription: 'Mini Dron E4 profesional con diseño plegable y gafas VR incluidas. Cámara ajustable 90° con transmisión de imagen en tiempo real. Modo VR compatible para experiencia inmersiva. Cuerpo plegable para fácil transporte. Control remoto completo con múltiples funciones. Incluye gafas VR con pantalla integrada, control remoto, batería, hélices de repuesto, protectores, cable USB y manuales.',
      images: [
        '/fotos/foto8.jpg',
        '/fotos/foto8.1.jpg',
        '/fotos/foto8.2.jpg'
      ],
      specifications: [
        'Tamaño plegado: 13.5*8*5.5cm',
        'Tamaño desplegado: 26.5*22*5.5cm',
        'Cámara ajustable: 90°',
        'Definición: Estándar',
        'Transmisión de imagen estándar',
        'Vuelo estable con posicionamiento',
        'Modo VR compatible',
        'Despegue/aterrizaje con un clic',
        'Giros y maniobras 360°',
        'Cuerpo plegable',
        'Incluye: Dron E4, Control remoto, Gafas VR, Batería, 4 Hélices de repuesto, Destornillador, Cable USB, 4 Protectores, Manual APP, Manual de uso',
        'Colores disponibles: Negro - Gris'
      ]
    },
    {
      id: 9,
      name: 'Super Kit de Herramientas en Maletín',
      price: 1350,
      shortDescription: 'Kit profesional de 499 piezas en maletín de aluminio (38×19×50 cm)',
      fullDescription: 'Super kit profesional de herramientas con 499 piezas. Maletín de aluminio resistente. Incluye llaves combinadas, herramientas de corte y sujeción, destornilladores, pinzas, alicates, brocas, llaves Allen, medidor de presión, sierra, tijeras, martillo, nivel, cinta métrica, sockets, extensiones y mucho más. Ideal para profesionales y uso doméstico exigente.',
      images: [
        '/fotos/foto9.jpg'
      ],
      specifications: [
        'Maletín: Aluminio - 38×19×50 cm',
        'Total: 499 piezas',
        'Material: Acero al carbono',
        'Llaves combinadas: 9 piezas (8-17 mm)',
        'Destornilladores: 11 piezas en varios tamaños',
        'Pinzas y alicates profesionales',
        '48 brocas (insertos)',
        '16 llaves Allen (1.5-6mm)',
        '60 piezas de tornillos y clavos',
        '15 sockets (1/4"): 4-14mm',
        '14 sockets (1/2"): 8-30mm',
        '283 bridas plásticas',
        'Incluye: Martillo, nivel, cinta métrica, sierra, tijeras, cutter y mucho más'
      ],
      outOfStock: true
    },
    {
      id: 10,
      name: 'Verdulero Metálico de Cocina',
      price: 220,
      shortDescription: 'Organizador de acero al carbono con 5 canastas y repisa superior',
      fullDescription: 'Verdulero metálico de 5 niveles con canastas y repisa superior. Estructura de acero al carbono resistente. Perfecto para organizar frutas, verduras y otros alimentos en la cocina. Diseño vertical que ahorra espacio.',
      images: [
        '/fotos/foto10.jpg'
      ],
      specifications: [
        'Material: Acero al carbono',
        'Tamaño: 29*29*91cm',
        'Canastas: 5',
        'Repisa superior: 1',
        'Diseño vertical',
        'Ahorra espacio',
        'Estructura resistente',
        'Colores disponibles: Negro - Blanco'
      ]
    }
  ];

  const handleViewMore = (product: Product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 200);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Catálogo de Productos</h1>
          <p className="text-gray-600 mt-1">I</p>
          <p className="text-gray-600">Tel/WhatsApp: 67519672 - 67508791</p>
        </div>
      </header>

      {/* Products Grid */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewMore={handleViewMore}
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="space-y-4 text-sm text-gray-600">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2"></h3>
              <p className="mb-3"></p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2"></h3>
              <ul className="space-y-1">
                <li>• <strong></strong> </li>
                <li>• <strong></strong> </li>
                <li>• <strong></strong> </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2"></h3>
              <ul className="space-y-1">
                <li></li>
               
              </ul>
            </div>
            <div className="pt-4 border-t">
              <p className="text-center font-semibold text-gray-900">CONTACTO</p>
              <p className="text-center">Tel/WhatsApp: 67519672 - 67508791</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        open={modalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default App;