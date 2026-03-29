import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Product } from './product-card';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductModalProps {
  product: Product | null;
  open: boolean;
  onClose: () => void;
}

export function ProductModal({ product, open, onClose }: ProductModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) return null;

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const whatsappUrl = `https://wa.me/59167519672?text=Hola,%20me%20interesa%20el%20producto:%20${encodeURIComponent(product.name)}`;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            {product.name}
            {product.outOfStock && (
              <Badge className="bg-red-500 ml-2">AGOTADO</Badge>
            )}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Galería de imágenes */}
          <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <ImageWithFallback
              src={product.images[currentImageIndex]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            
            {product.images.length > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                  aria-label="Imagen anterior"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                  aria-label="Imagen siguiente"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {product.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                      aria-label={`Ir a imagen ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Miniaturas */}
          {product.images.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    index === currentImageIndex 
                      ? 'border-green-600' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <ImageWithFallback
                    src={image}
                    alt={`${product.name} - Vista ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Precio */}
          <div className="text-3xl font-bold text-green-600">
            {product.price} Bs
          </div>

          {/* Descripción completa */}
          <div>
            <h4 className="font-semibold mb-2">Descripción</h4>
            <p className="text-gray-700 whitespace-pre-line">
              {product.fullDescription}
            </p>
          </div>

          {/* Especificaciones */}
          {product.specifications && product.specifications.length > 0 && (
            <div>
              <h4 className="font-semibold mb-2">Características</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {product.specifications.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Botón de contacto */}
          {product.outOfStock ? (
            <Button className="w-full" disabled>
              No disponible
            </Button>
          ) : (
            
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block text-center bg-gray-900 text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-700 transition-colors"
            >
              Contactar para comprar
            </a>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}