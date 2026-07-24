'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, ChevronLeft, ChevronRight, Maximize2, Minimize2, Download, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PDFFlipbookProps {
  pdfUrl: string;
  title?: string;
}

// Rule 7.4: Cache for rendered PDF pages (pageNumber -> dataURL)
const renderedPagesCache = new Map<string, string>();
// Rule 7.4: Cache for PDF aspect ratios
const pdfAspectCache = new Map<string, number>();

// Slide animation variants for Framer Motion
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    zIndex: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    zIndex: 0,
  }),
};

export function PDFFlipbook({ pdfUrl, title }: PDFFlipbookProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [numPages, setNumPages] = useState(0);
  
  // pageState is a tuple of [currentPageNumber, slideDirection (-1 for left, 1 for right)]
  const [[currentPage, direction], setPageState] = useState([1, 0]);
  const [aspectRatio, setAspectRatio] = useState<number>(0.707); // Default A4 ratio
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  const [renderedPages, setRenderedPages] = useState<Record<number, string>>({});
  
  const containerRef = useRef<HTMLDivElement>(null);
  const pdfDocRef = useRef<any>(null);

  // Check if file is an image
  const isImage = useMemo(() => {
    return !!pdfUrl.match(/\.(jpg|jpeg|png|webp|gif)$/i);
  }, [pdfUrl]);

  // Load PDF.js or Image dynamically
  useEffect(() => {
    let active = true;
    
    if (isImage) {
      const img = new Image();
      img.src = pdfUrl;
      img.onload = () => {
        if (!active) return;
        setAspectRatio(img.naturalWidth / img.naturalHeight);
        setNumPages(1);
        setLoading(false);
      };
      img.onerror = () => {
        if (!active) return;
        setError('Không thể tải hình ảnh đính kèm.');
        setLoading(false);
      };
      return () => {
        active = false;
      };
    }

    const loadPdfJs = async () => {
      try {
        if (!(window as any).pdfjsLib) {
          const script = document.createElement('script');
          script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.min.js';
          script.async = true;
          document.body.appendChild(script);
          
          await new Promise((resolve, reject) => {
            script.onload = resolve;
            script.onerror = () => reject(new Error('Failed to load PDF.js engine.'));
          });
        }
        
        const pdfjsLib = (window as any).pdfjsLib;
        pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js';
        
        if (!active) return;
        
        const loadingTask = pdfjsLib.getDocument(pdfUrl);
        const pdf = await loadingTask.promise;
        
        if (!active) return;
        pdfDocRef.current = pdf;
        setNumPages(pdf.numPages);
        
        // Get Aspect Ratio of first page
        const firstPage = await pdf.getPage(1);
        const viewport = firstPage.getViewport({ scale: 1 });
        const ratio = viewport.width / viewport.height;
        
        // Save to Aspect Ratio cache (Rule 7.4)
        pdfAspectCache.set(pdfUrl, ratio);
        setAspectRatio(ratio);
        
        setLoading(false);
        
        // Start rendering pages
        renderAllPages(pdf);
      } catch (err: any) {
        console.error('Error loading PDF:', err);
        if (active) {
          setError(err.message || 'Không thể tải tệp PDF.');
          setLoading(false);
        }
      }
    };

    // Check aspect cache first (Rule 7.4)
    if (pdfAspectCache.has(pdfUrl)) {
      setAspectRatio(pdfAspectCache.get(pdfUrl)!);
    }

    loadPdfJs();

    return () => {
      active = false;
    };
  }, [pdfUrl, isImage]);

  // Render all pages in background and cache them
  const renderAllPages = async (pdf: any) => {
    const pageDataUrls: Record<number, string> = {};
    
    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      const cacheKey = `${pdfUrl}_page_${pageNum}`;
      
      // Rule 7.4 Check Cache first
      if (renderedPagesCache.has(cacheKey)) {
        pageDataUrls[pageNum] = renderedPagesCache.get(cacheKey)!;
        setRenderedPages(prev => ({ ...prev, [pageNum]: pageDataUrls[pageNum] }));
        continue;
      }
      
      try {
        const page = await pdf.getPage(pageNum);
        const viewport = page.getViewport({ scale: 1.5 });
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        
        if (context) {
          await page.render({ canvasContext: context, viewport }).promise;
          const dataUrl = canvas.toDataURL('image/webp', 0.85);
          
          // Save to Rule 7.4 cache
          renderedPagesCache.set(cacheKey, dataUrl);
          
          pageDataUrls[pageNum] = dataUrl;
          setRenderedPages(prev => ({ ...prev, [pageNum]: dataUrl }));
        }
      } catch (err) {
        console.error(`Error rendering page ${pageNum}:`, err);
      }
    }
  };

  // Toggle fullscreen mode
  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    
    if (!isFullscreen) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const handlePrev = () => {
    if (currentPage > 1) {
      setPageState([currentPage - 1, -1]);
    }
  };

  const handleNext = () => {
    if (currentPage < numPages) {
      setPageState([currentPage + 1, 1]);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    if (isImage) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [numPages, currentPage, isImage]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center p-16 bg-slate-50 border border-slate-100 rounded-3xl min-h-[500px]">
        <Loader2 className="w-10 h-10 text-viettel-red animate-spin mb-4" />
        <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Đang tải và dựng trang tài liệu...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center p-12 bg-slate-50 border border-red-150 rounded-3xl min-h-[400px]">
        <AlertTriangle className="w-12 h-12 text-red-500 mb-4" />
        <h4 className="text-sm font-bold text-viettel-dark mb-2">Lỗi tải tài liệu</h4>
        <p className="text-xs text-gray-400 text-center max-w-sm mb-6">{error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="px-6 py-3 bg-viettel-red hover:bg-red-700 text-white font-bold rounded-xl text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg"
        >
          Thử tải lại trang
        </button>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      className={cn(
        "flex flex-col items-center justify-between w-full max-w-[850px] mx-auto bg-slate-50 rounded-3xl transition-all duration-300 select-none overflow-hidden border border-slate-200/60 p-2 md:p-3 shadow-sm",
        isFullscreen && "fixed inset-0 z-50 rounded-none h-screen py-4 px-6 bg-slate-100 max-w-full"
      )}
    >
      {/* Top minimal bar controls */}
      <div className="w-full flex items-center justify-between border-b border-slate-200/60 pb-2 mb-2 flex-shrink-0">
        <h3 className="text-xs font-bold truncate pr-4 max-w-xs md:max-w-md uppercase tracking-wider text-slate-700">
          {title || 'Tài liệu thông báo'}
        </h3>
        <div className="flex items-center gap-3">
          <a
            href={pdfUrl}
            download
            title="Tải xuống tài liệu"
            className="p-1.5 hover:bg-slate-200/80 rounded-lg transition-colors text-slate-500 hover:text-slate-900"
          >
            <Download className="w-4 h-4" />
          </a>
          <button
            onClick={toggleFullscreen}
            title={isFullscreen ? "Thoát toàn màn hình" : "Toàn màn hình"}
            className="p-1.5 hover:bg-slate-200/80 rounded-lg transition-colors text-slate-500 hover:text-slate-900"
          >
            {isFullscreen ? <Minimize2 className="w-4.5 h-4.5" /> : <Maximize2 className="w-4.5 h-4.5" />}
          </button>
        </div>
      </div>

      {/* Main viewport - 100% borderless PDF/Image sheet container */}
      <div className="flex-grow w-full flex items-center justify-center relative overflow-hidden my-1">
        <div 
          className="relative shadow-xl rounded-xl bg-white border border-slate-200/80 w-full overflow-hidden"
          style={{ 
            maxWidth: isFullscreen ? '90vh' : '100%',
            aspectRatio: `${aspectRatio}`,
          }}
        >
          {isImage ? (
            <div className="absolute inset-0 w-full h-full bg-white flex items-center justify-center p-1">
              <img
                src={pdfUrl}
                alt={title || 'Hình ảnh đính kèm'}
                className="w-full h-full object-contain"
              />
            </div>
          ) : (
            /* Animated Page Slider */
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={currentPage}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute inset-0 w-full h-full bg-white flex items-center justify-center"
              >
                {renderedPages[currentPage] ? (
                  <img
                    src={renderedPages[currentPage]}
                    alt={`Page ${currentPage}`}
                    className="w-full h-full object-contain pointer-events-none"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center gap-2 text-xs text-slate-400 font-bold bg-white">
                    <Loader2 className="w-4.5 h-4.5 animate-spin text-viettel-red" />
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>

      {/* Footer controls minimal layout */}
      {!isImage && numPages > 1 && (
        <div className="w-full flex items-center justify-center gap-6 mt-3 flex-shrink-0 border-t border-slate-200/60 pt-2">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="p-2 bg-white hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none rounded-xl text-slate-700 transition-colors border border-slate-200"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <span className="text-[10px] font-bold font-sans uppercase tracking-widest text-slate-500">
            Trang {currentPage} / {numPages}
          </span>

          <button
            onClick={handleNext}
            disabled={currentPage === numPages}
            className="p-2 bg-white hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none rounded-xl text-slate-700 transition-colors border border-slate-200"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
