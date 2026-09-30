'use client';

import { useCallback, useEffect, useState } from 'react';

import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

type LineCycle = {
  lineIndex: number;
  isPaused: boolean;
  isAnimated: boolean;
  canAnimate: boolean;
  togglePause: () => void;
};

export const useLineCycle = (lineCount: number, durationMs: number): LineCycle => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [lineIndex, setLineIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const canAnimate = !prefersReducedMotion && lineCount > 1;
  const isAnimated = canAnimate && !isPaused;

  useEffect(() => {
    if (!isAnimated) return;

    const intervalId = window.setInterval(() => {
      setLineIndex((currentIndex) => (currentIndex + 1) % lineCount);
    }, durationMs);

    return () => window.clearInterval(intervalId);
  }, [isAnimated, lineCount, durationMs]);

  const togglePause = useCallback(() => setIsPaused((paused) => !paused), []);

  return { lineIndex, isPaused, isAnimated, canAnimate, togglePause };
};
