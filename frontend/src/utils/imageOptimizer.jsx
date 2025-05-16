/**
 * Image optimization utility for optimizing image loading
 */

// Check if WebP version of an image exists or create the path
export const getWebPPath = (src) => {
  if (!src || typeof src !== 'string') return null;
  
  // If already a WebP image, return as is
  if (src.toLowerCase().endsWith('.webp')) return src;
  
  // Find the last dot in the path to replace the extension
  const lastDotIndex = src.lastIndexOf('.');
  if (lastDotIndex === -1) return null;
  
  // Create the WebP path with a different filename to avoid conflicts
  const basePath = src.substring(0, lastDotIndex);
  return `${basePath}_webp.webp`;
};

// Generate srcset with both original format and WebP
export const generateSrcSet = (imagePath, sizes = [320, 640, 1024]) => {
  if (!imagePath || typeof imagePath !== 'string') return '';
  
  // Early return if no extension
  const lastDotIndex = imagePath.lastIndexOf('.');
  if (lastDotIndex === -1) return '';
  
  // Get base path and extension
  const baseImagePath = imagePath.substring(0, lastDotIndex);
  const extension = imagePath.substring(lastDotIndex);
  
  // Generate srcset string with responsive sizes
  return sizes.map(size => `${baseImagePath}_${size}${extension} ${size}w`).join(', ');
};

// Optimized image component with WebP support and responsive loading
export const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height,
  loading = 'lazy',
  sizes = '100vw',
  priority = false,
  objectFit = 'cover',
  onError,
  placeholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"%3E%3Crect width="40" height="40" fill="%23f0f0f0"/%3E%3Cpath d="M15,20 L25,20 M20,15 L20,25" stroke="%23cccccc" stroke-width="2"/%3E%3C/svg%3E'
}) => {
  // Check if src contains a file extension
  if (!src || typeof src !== 'string') {
    return null;
  }
  
  const hasExtension = src.includes('.');
  if (!hasExtension) return null;
  
  // Check if already WebP
  const isAlreadyWebP = src.toLowerCase().endsWith('.webp');
  
  // Generate WebP path for non-WebP images
  const webpSrc = isAlreadyWebP ? src : getWebPPath(src);
  
  // Generate responsive srcset if width and height are provided
  const generateSrcSets = width && height && !src.includes('data:image');
  const originalSrcSet = generateSrcSets ? generateSrcSet(src) : null;
  const webpSrcSet = generateSrcSets && webpSrc ? generateSrcSet(webpSrc) : null;
  
  // Default error handler
  const handleError = (e) => {
    if (onError) {
      onError(e);
    } else {
      // Use placeholder as fallback
      e.currentTarget.src = placeholder;
      e.currentTarget.srcset = '';
      e.currentTarget.className = `${className} opacity-60`;
    }
  };
  
  return (
    <picture>
      {/* WebP source */}
      {webpSrc && !isAlreadyWebP && (
        <source 
          srcSet={webpSrcSet || webpSrc} 
          sizes={sizes}
          type="image/webp" 
        />
      )}
      {/* Original format source */}
      <img 
        src={src}
        srcSet={originalSrcSet}
        sizes={sizes}
        alt={alt || ''}
        className={className}
        width={width}
        height={height}
        loading={priority ? 'eager' : loading}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        onError={handleError}
        style={objectFit ? { objectFit } : undefined}
      />
    </picture>
  );
};

// Utility to preload critical images
export const preloadCriticalImages = (imagePaths) => {
  if (typeof window === 'undefined' || 
      !imagePaths || 
      !Array.isArray(imagePaths) || 
      !imagePaths.length) return;
  
  imagePaths.forEach(path => {
    if (typeof path !== 'string') return;
    
    // Check if webp version should be used
    const webpPath = getWebPPath(path);
    const finalPath = webpPath || path;
    
    // Only create link if it doesn't exist already
    if (!document.querySelector(`link[rel="preload"][href="${finalPath}"]`)) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = finalPath;
      link.type = webpPath ? 'image/webp' : undefined;
      document.head.appendChild(link);
    }
  });
};

export default {
  getWebPPath,
  generateSrcSet,
  OptimizedImage,
  preloadCriticalImages
}; 