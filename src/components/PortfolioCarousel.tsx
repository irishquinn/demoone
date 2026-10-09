import React, { useState, useRef, useEffect } from 'react';
import { portfolioItems } from '../data/portfolioData';
import { PortfolioItem } from '../types';
import { PortfolioThumbnail300 } from './PortfolioThumbnail300';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';

interface Props {
  onSelectItem: (item: PortfolioItem) => void;
}

export const PortfolioCarousel: React.FC<Props> = ({ onSelectItem }) => {
  // Current index pointing to the first visible card out of 9
  // Showing 3 at a time means index can range from 0 to 6 (so cards index, index+1, index+2 are visible)
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hoverDirection, setHoverDirection] = useState<'left' | 'right' | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const maxIndex = portfolioItems.length - 3; // 9 - 3 = 6

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  // Optional keyboard arrow navigation when carousel area is hovered/focused
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isHovered) return;
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isHovered, currentIndex]);

  return (
    <section id="portfolio" className="py-24 bg-neutral-950 relative border-t border-neutral-900 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-mono text-amber-400 tracking-wider uppercase mb-2">
              Verified Production Work
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Featured Portfolio Work
            </h2>
            <p className="mt-3 text-base text-neutral-400 leading-relaxed">
              Explore 9 recent production builds. Hover and click any project to view its full technical case study, challenge breakdown, architecture stack, and quantified ROI.
            </p>
          </div>

          {/* Carousel Arrow Controls */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-neutral-400 mr-2 tabular-nums">
              Showing {currentIndex + 1}–{currentIndex + 3} of {portfolioItems.length}
            </span>
            
            <button
              onClick={handlePrev}
              onMouseEnter={() => setHoverDirection('left')}
              onMouseLeave={() => setHoverDirection(null)}
              aria-label="Previous portfolio project"
              className="p-3 rounded-lg border border-neutral-800 bg-neutral-900/90 text-neutral-300 hover:text-white hover:border-amber-400/80 hover:bg-neutral-800 transition-all duration-200 cursor-pointer shadow-sm active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={handleNext}
              onMouseEnter={() => setHoverDirection('right')}
              onMouseLeave={() => setHoverDirection(null)}
              aria-label="Next portfolio project"
              className="p-3 rounded-lg border border-neutral-800 bg-neutral-900/90 text-neutral-300 hover:text-white hover:border-amber-400/80 hover:bg-neutral-800 transition-all duration-200 cursor-pointer shadow-sm active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 300x300 Carousel Frame showing 3 at a time */}
        <div
          ref={carouselRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setHoverDirection(null);
          }}
          className="relative py-4"
        >
          {/* Viewport Window for exactly three 300x300 cards side by side */}
          {/* Card size: 300px + gap: 24px (1.5rem). 3 cards = 300*3 + 24*2 = 948px */}
          <div className="overflow-hidden mx-auto max-w-[972px] px-3">
            <div
              className="flex gap-6 transition-transform duration-500 ease-out"
              style={{
                // Shift exactly one card width + gap (300px + 24px = 324px) per currentIndex
                transform: `translateX(-${currentIndex * 324}px)`,
                width: `${portfolioItems.length * 324}px`
              }}
            >
              {portfolioItems.map((item, idx) => (
                <div key={item.id} className="w-[300px] flex-shrink-0">
                  <PortfolioThumbnail300
                    item={item}
                    onClick={() => onSelectItem(item)}
                    isHovered={isHovered}
                  />
                  <div className="mt-3 flex items-center justify-between text-left px-1">
                    <div>
                      <div className="text-xs font-semibold text-white truncate max-w-[190px]">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-neutral-400 truncate max-w-[190px]">
                        {item.client}
                      </div>
                    </div>
                    <button
                      onClick={() => onSelectItem(item)}
                      className="text-[11px] font-mono text-amber-400 hover:text-amber-300 transition-colors inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>Study</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Navigation Floating Indicators on Hover */}
          {isHovered && (
            <div className="hidden lg:flex justify-between items-center pointer-events-none absolute inset-y-0 left-0 right-0">
              <button
                onClick={handlePrev}
                className="pointer-events-auto -ml-3 p-2 rounded-full bg-neutral-900/90 border border-neutral-700 text-amber-400 hover:bg-neutral-800 shadow-xl transition-transform active:scale-90"
                aria-label="Previous card"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="pointer-events-auto -mr-3 p-2 rounded-full bg-neutral-900/90 border border-neutral-700 text-amber-400 hover:bg-neutral-800 shadow-xl transition-transform active:scale-90"
                aria-label="Next card"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        {/* Carousel Pagination Progress Dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide frame ${idx + 1}`}
              className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                currentIndex === idx
                  ? 'w-8 bg-amber-400'
                  : 'w-2 bg-neutral-800 hover:bg-neutral-600'
              }`}
            />
          ))}
        </div>

        {/* Informational Callout Bar below carousel */}
        <div className="mt-12 p-6 rounded-xl border border-neutral-800 bg-neutral-900/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-amber-400/10 border border-amber-400/20 text-amber-400 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">
                All 9 platforms benchmarked at 95+ Core Web Vitals on real mobile networks
              </div>
              <div className="text-xs text-neutral-400">
                Custom WordPress codebases with zero page-builder overhead, zero license dependencies, and full client ownership.
              </div>
            </div>
          </div>
          <button
            onClick={() => onSelectItem(portfolioItems[0])}
            className="px-4 py-2 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Review Featured Case Study
          </button>
        </div>
      </div>
    </section>
  );
};
