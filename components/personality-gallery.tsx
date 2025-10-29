"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, Sparkles, Grid3x3, ArrowLeft, ArrowRight } from "lucide-react"

interface GalleryItem {
  id: number
  src: string
  alt: string
  caption?: string
}

interface PersonalityGalleryProps {
  images?: GalleryItem[]
}

const defaultImages: GalleryItem[] = [
  { id: 1, src: "/timeline/thijnvooraanzicht.jpg", alt: "Thijn", caption: "My journey" },
  { id: 2, src: "/timeline/thijnwerk.jpg", alt: "Working", caption: "At work" },
  { id: 3, src: "/timeline/havodiploma.jpg", alt: "Diploma", caption: "Achievement" },
  { id: 4, src: "/timeline/propedeuse.JPG", alt: "Propedeuse", caption: "Progress" },
  { id: 5, src: "/thijnberg.png", alt: "Nature", caption: "Outside" },
  { id: 6, src: "/aboutme.png", alt: "Portrait", caption: "Me" },
]

export function PersonalityGallery({ images = defaultImages }: PersonalityGalleryProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const previewImages = images.slice(0, 4)
  const totalImages = images.length

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % totalImages)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages)
  }

  const openGallery = (index?: number) => {
    if (index !== undefined) setCurrentIndex(index)
    setIsOpen(true)
  }

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => (prev + 1) % totalImages)
      }
      if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages)
      }
      if (e.key === "Escape") setIsOpen(false)
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, totalImages])

  return (
    <>
      {/* Compact Preview Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <motion.h2
              className="text-3xl lg:text-5xl font-black mb-3"
              style={{
                color: "#4ecb71",
                textShadow: "0 0 30px rgba(78, 203, 113, 0.3)",
                letterSpacing: "2px",
              }}
            >
              PERSONALITY GALLERY
            </motion.h2>
            <p className="text-white/70 text-sm md:text-base">
              A glimpse into who I am
            </p>
          </motion.div>

          {/* Compact Grid - 4 thumbnails */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6 max-w-4xl mx-auto">
            {previewImages.map((item, index) => (
              <PreviewThumbnail
                key={item.id}
                item={item}
                index={index}
                onClick={() => openGallery(index)}
              />
            ))}
          </div>

          {/* View All Button */}
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => openGallery(0)}
            className="mx-auto flex items-center gap-3 px-6 py-3 rounded-full bg-primary/20 hover:bg-primary/30 border-2 border-primary/50 text-primary font-semibold transition-all duration-300 backdrop-blur-sm group"
          >
            <Grid3x3 size={20} className="group-hover:rotate-90 transition-transform duration-300" />
            <span>View All {totalImages} Photos</span>
            <Sparkles size={18} className="opacity-70" />
          </motion.button>
        </div>
      </section>

      {/* Full-Screen Modal Gallery */}
      <AnimatePresence>
        {isOpen && (
      <FullScreenGallery
        images={images}
        currentIndex={currentIndex}
        onClose={() => setIsOpen(false)}
        onNext={nextImage}
        onPrev={prevImage}
        onSelectImage={setCurrentIndex}
      />
        )}
      </AnimatePresence>
    </>
  )
}

interface PreviewThumbnailProps {
  item: GalleryItem
  index: number
  onClick: () => void
}

function PreviewThumbnail({ item, index, onClick }: PreviewThumbnailProps) {
  const ref = useRef<HTMLDivElement>(null)
  const rotateX = useSpring(0, { stiffness: 200, damping: 25 })
  const rotateY = useSpring(0, { stiffness: 200, damping: 25 })
  const scale = useSpring(1, { stiffness: 300, damping: 25 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const offsetX = (e.clientX - centerX) / (rect.width / 2)
    const offsetY = (e.clientY - centerY) / (rect.height / 2)

    rotateX.set(-offsetY * 5)
    rotateY.set(offsetX * 5)
    scale.set(1.05)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
    scale.set(1)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        type: "spring",
        stiffness: 150,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: "preserve-3d",
          width: "100%",
          height: "100%",
        }}
        className="relative h-full"
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 50vw, 25vw"
          quality={85}
        />

        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />

        {/* Glow on hover */}
        <motion.div
          className="absolute inset-0 rounded-xl pointer-events-none border-2 border-primary/0 group-hover:border-primary/60 transition-colors duration-300"
          style={{
            boxShadow: "0 0 0px rgba(78, 203, 113, 0)",
          }}
        />

        {/* Sparkle icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileHover={{ scale: 1, rotate: 0 }}
          className="absolute top-2 right-2 w-7 h-7 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Sparkles size={14} className="text-primary" />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

interface FullScreenGalleryProps {
  images: GalleryItem[]
  currentIndex: number
  onClose: () => void
  onNext: () => void
  onPrev: () => void
  onSelectImage: (index: number) => void
}

function FullScreenGallery({ images, currentIndex, onClose, onNext, onPrev, onSelectImage }: FullScreenGalleryProps) {
  const dragX = useMotionValue(0)
  const [isDragging, setIsDragging] = useState(false)

  const handleDragEnd = () => {
    const threshold = 50
    if (dragX.get() > threshold) {
      onPrev()
    } else if (dragX.get() < -threshold) {
      onNext()
    }
    dragX.set(0)
    setIsDragging(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md"
      onClick={onClose}
    >
      {/* Close Button */}
      <motion.button
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        exit={{ scale: 0, rotate: 180 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="absolute top-6 right-6 w-12 h-12 rounded-full bg-primary/20 hover:bg-primary/30 border-2 border-primary/50 flex items-center justify-center text-primary backdrop-blur-sm z-10 transition-colors"
        onClick={(e) => {
          e.stopPropagation()
          onClose()
        }}
      >
        <X size={24} />
      </motion.button>

      {/* Navigation Buttons */}
      <motion.button
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -50, opacity: 0 }}
        onClick={(e) => {
          e.stopPropagation()
          onPrev()
        }}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-primary/20 hover:bg-primary/30 border-2 border-primary/50 flex items-center justify-center text-primary backdrop-blur-sm z-10 transition-all hover:scale-110"
      >
        <ArrowLeft size={24} />
      </motion.button>

      <motion.button
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 50, opacity: 0 }}
        onClick={(e) => {
          e.stopPropagation()
          onNext()
        }}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-primary/20 hover:bg-primary/30 border-2 border-primary/50 flex items-center justify-center text-primary backdrop-blur-sm z-10 transition-all hover:scale-110"
      >
        <ArrowRight size={24} />
      </motion.button>

      {/* Image Display */}
      <div
        className="absolute inset-0 flex items-center justify-center p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <AnimatePresence mode="wait" custom={currentIndex}>
          <motion.div
            key={currentIndex}
            custom={currentIndex}
            initial={{ opacity: 0, scale: 0.9, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, x: -100 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={handleDragEnd}
            style={{ x: dragX }}
            className="relative max-w-5xl max-h-[85vh] w-full h-full rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl cursor-grab active:cursor-grabbing"
          >
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              fill
              className="object-contain"
              quality={95}
              priority
              draggable={false}
            />

            {/* Glow effect */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(circle at center, transparent 40%, rgba(78, 203, 113, 0.1) 100%)",
              }}
            />

            {/* Caption */}
            {images[currentIndex].caption && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent"
              >
                <p className="text-white text-xl font-semibold text-center">
                  {images[currentIndex].caption}
                </p>
              </motion.div>
            )}

            {/* Image Counter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute top-6 left-6 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/50 text-primary text-sm font-semibold"
            >
              {currentIndex + 1} / {images.length}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Thumbnail Strip at Bottom */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 max-w-4xl overflow-x-auto px-4 pb-2"
        onClick={(e) => e.stopPropagation()}
      >
        {images.map((item, index) => (
          <motion.button
            key={item.id}
            onClick={(e) => {
              e.stopPropagation()
              onSelectImage(index)
            }}
            className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
              index === currentIndex
                ? "border-primary scale-110 shadow-lg shadow-primary/50"
                : "border-primary/30 opacity-60 hover:opacity-100"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover"
              sizes="64px"
            />
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  )
}
