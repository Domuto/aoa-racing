import Image from "next/image";

/**
 * Real-photo counterpart to <ImagePlaceholder>. Renders a
 * next/image (fill) inside an aspect-ratio box, so swapping a
 * placeholder for a real photo is a near drop-in: `label` -> `alt`,
 * `file` -> `src`. Photos are served from /public.
 */
export default function Media({
  src,
  alt = "",
  ratio = "aspect-[16/9]",
  className = "",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  priority = false,
  imgClassName = "object-cover",
}) {
  return (
    <div className={`relative overflow-hidden bg-panel ${ratio} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={imgClassName}
      />
    </div>
  );
}
