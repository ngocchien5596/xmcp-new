'use client';

import { useEffect, useRef } from 'react';
import { DISTRIBUTORS, Distributor } from '@/data/distribution';

interface VietnamMapProps {
  hoveredDistributor: Distributor | null;
  onHoverDistributor: (dist: Distributor | null) => void;
}

export function VietnamMap({ hoveredDistributor, onHoverDistributor }: VietnamMapProps) {
  const svgContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load the full SVG file and inject it into the container
    fetch('/assets/design/vietnam_map_split_new_01_07.svg')
      .then(res => res.text())
      .then(svgText => {
        if (!svgContainerRef.current) return;

        // Parse the SVG and modify styles for our UI
        const parser = new DOMParser();
        const doc = parser.parseFromString(svgText, 'image/svg+xml');
        const svgEl = doc.querySelector('svg');
        if (!svgEl) return;

        // Set responsive attributes
        svgEl.removeAttribute('width');
        svgEl.removeAttribute('height');
        svgEl.setAttribute('class', 'w-full h-full');
        svgEl.style.maxWidth = '840px';

        // Style all paths for a clean, modern look
        const allPaths = svgEl.querySelectorAll('path');
        allPaths.forEach(path => {
          // Override the original red fill with our styled fill
          path.setAttribute('fill', '#e2e8f0'); // slate-200
          path.setAttribute('fill-opacity', '1');
          path.setAttribute('stroke', '#94a3b8'); // slate-400
          path.setAttribute('stroke-width', '0.3');
          path.style.transition = 'fill 0.3s ease, fill-opacity 0.3s ease';
        });

        // Remove all mask elements (they cause rendering issues when we override styles)
        const masks = svgEl.querySelectorAll('mask');
        masks.forEach(mask => mask.remove());

        // Remove mask attributes from paths
        const maskedPaths = svgEl.querySelectorAll('[mask]');
        maskedPaths.forEach(p => p.removeAttribute('mask'));

        // Create an SVG namespace for markers
        const svgNS = 'http://www.w3.org/2000/svg';

        // Add distributor markers
        DISTRIBUTORS.forEach(dist => {
          // Outer pulse ring
          const pulseCircle = document.createElementNS(svgNS, 'circle');
          pulseCircle.setAttribute('cx', String(dist.lng));
          pulseCircle.setAttribute('cy', String(dist.lat));
          pulseCircle.setAttribute('r', '14');
          pulseCircle.setAttribute('fill', '#ED1C24');
          pulseCircle.setAttribute('fill-opacity', '0.15');
          pulseCircle.setAttribute('data-distributor-id', dist.id);
          pulseCircle.setAttribute('class', 'distributor-pulse');
          pulseCircle.style.transition = 'fill-opacity 0.3s ease, r 0.3s ease';

          // White background circle  
          const bgCircle = document.createElementNS(svgNS, 'circle');
          bgCircle.setAttribute('cx', String(dist.lng));
          bgCircle.setAttribute('cy', String(dist.lat));
          bgCircle.setAttribute('r', '8');
          bgCircle.setAttribute('fill', 'white');
          bgCircle.setAttribute('stroke', '#ED1C24');
          bgCircle.setAttribute('stroke-width', '2');
          bgCircle.setAttribute('data-distributor-id', dist.id);
          bgCircle.setAttribute('class', 'distributor-bg');
          bgCircle.style.transition = 'all 0.3s ease';
          bgCircle.style.filter = 'drop-shadow(0 2px 4px rgba(0,0,0,0.15))';
          bgCircle.style.cursor = 'pointer';

          // Red dot center
          const dotCircle = document.createElementNS(svgNS, 'circle');
          dotCircle.setAttribute('cx', String(dist.lng));
          dotCircle.setAttribute('cy', String(dist.lat));
          dotCircle.setAttribute('r', '4.5');
          dotCircle.setAttribute('fill', '#ED1C24');
          dotCircle.setAttribute('data-distributor-id', dist.id);
          dotCircle.setAttribute('class', 'distributor-dot');
          dotCircle.style.transition = 'all 0.3s ease';
          dotCircle.style.cursor = 'pointer';

          // Hover events - attach to all 3 circles
          [pulseCircle, bgCircle, dotCircle].forEach(circle => {
            circle.addEventListener('mouseenter', () => onHoverDistributor(dist));
            circle.addEventListener('mouseleave', () => onHoverDistributor(null));
          });

          svgEl.appendChild(pulseCircle);
          svgEl.appendChild(bgCircle);
          svgEl.appendChild(dotCircle);
        });

        // Clear and inject
        svgContainerRef.current.innerHTML = '';
        svgContainerRef.current.appendChild(svgEl);
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Update marker styles when hovered distributor changes
  useEffect(() => {
    if (!svgContainerRef.current) return;

    const pulses = svgContainerRef.current.querySelectorAll('.distributor-pulse');
    const bgs = svgContainerRef.current.querySelectorAll('.distributor-bg');
    const dots = svgContainerRef.current.querySelectorAll('.distributor-dot');

    pulses.forEach(el => {
      const id = el.getAttribute('data-distributor-id');
      if (hoveredDistributor?.id === id) {
        (el as SVGCircleElement).setAttribute('fill-opacity', '0.35');
        (el as SVGCircleElement).setAttribute('r', '18');
      } else {
        (el as SVGCircleElement).setAttribute('fill-opacity', '0.15');
        (el as SVGCircleElement).setAttribute('r', '14');
      }
    });

    bgs.forEach(el => {
      const id = el.getAttribute('data-distributor-id');
      if (hoveredDistributor?.id === id) {
        (el as SVGCircleElement).setAttribute('r', '10');
        (el as SVGCircleElement).setAttribute('stroke-width', '2.5');
      } else {
        (el as SVGCircleElement).setAttribute('r', '8');
        (el as SVGCircleElement).setAttribute('stroke-width', '2');
      }
    });

    dots.forEach(el => {
      const id = el.getAttribute('data-distributor-id');
      if (hoveredDistributor?.id === id) {
        (el as SVGCircleElement).setAttribute('r', '5.5');
      } else {
        (el as SVGCircleElement).setAttribute('r', '4.5');
      }
    });
  }, [hoveredDistributor]);

  return (
    <div className="relative w-full h-full flex items-center justify-center p-4">
      <div 
        ref={svgContainerRef} 
        className="w-full h-full flex items-center justify-center"
      >
        {/* SVG will be injected here */}
        <div className="text-gray-400 text-sm animate-pulse">Đang tải bản đồ...</div>
      </div>
    </div>
  );
}
