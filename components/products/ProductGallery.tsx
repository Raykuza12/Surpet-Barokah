import Image from "next/image";

interface ProductGalleryProps {
  images: string[];
}

export default function ProductGallery({ images }: ProductGalleryProps) {
  return (
    <div className="flex flex-col">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`Gambar produk ${index + 1}`}
          width={500}
          height={500}
          className="w-full h-auto mb-4 object-cover"
        />
      ))}
    </div>
  );
}
