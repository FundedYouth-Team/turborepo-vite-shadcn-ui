// src/components/TaglineBanner.tsx

interface TaglineBannerProps {
  backgroundImage?: string;
  overlayColor?: string; // Now accepts hex color or rgba
  children: React.ReactNode;
}

export function TaglineBanner({
  backgroundImage,
  overlayColor = "rgba(37, 99, 235, 0.8)", // Default blue
  children,
}: TaglineBannerProps) {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image or Color */}
      {backgroundImage ? (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          {/* Overlay with custom color */}
          <div
            className="absolute inset-0"
            style={{ backgroundColor: overlayColor }}
          />
        </div>
      ) : (
        <div
          className="absolute inset-0"
          style={{ backgroundColor: overlayColor }}
        />
      )}

      {/* Content */}
      <div className="relative container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center text-white">
          {children}
        </div>
      </div>
    </section>
  );
}