"use client";

import React, { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentImage: {
    id: number;
    title: string;
    image: string;
    category: string;
    description: string;
  } | null;
  images: Array<{
    id: number;
    title: string;
    image: string;
    category: string;
    description: string;
  }>;
  onNavigate: (direction: "prev" | "next") => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  currentImage,
  images,
  onNavigate,
}) => {
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          onNavigate("prev");
          break;
        case "ArrowRight":
          onNavigate("next");
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onNavigate]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !currentImage) return null;

  const currentIndex = images.findIndex((img) => img.id === currentImage.id);
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === images.length - 1;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center p-4 md:p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors duration-200"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {/* Navigation Buttons */}
        {!isFirst && (
          <button
            onClick={() => onNavigate("prev")}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors duration-200"
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>
        )}

        {!isLast && (
          <button
            onClick={() => onNavigate("next")}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors duration-200"
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>
        )}

        {/* Image Container */}
        <div className="w-full h-full flex items-center justify-center">
          <div className="relative max-w-7xl max-h-full w-full h-full flex flex-col lg:flex-row items-center justify-center gap-6">
            {/* Image */}
            <div className="flex-1 flex items-center justify-center max-h-full">
              <img
                src={currentImage.image}
                alt={currentImage.title}
                className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg shadow-2xl"
                style={{ maxHeight: "calc(100vh - 160px)" }}
              />
            </div>

            {/* Image Info */}
            <div className="lg:w-80 w-full max-w-md bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-lg p-6 shadow-xl">
              <div className="space-y-4">
                {/* Category Badge */}
                <span className="inline-block px-3 py-1 bg-[#fcb11b] text-white text-sm font-medium rounded-full">
                  {currentImage.category}
                </span>

                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {currentImage.title}
                </h2>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {currentImage.description}
                </p>

                {/* Image Counter */}
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {currentIndex + 1} of {images.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Loading indicator for image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-[#fcb11b] border-t-transparent rounded-full animate-spin opacity-50"></div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
