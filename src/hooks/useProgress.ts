// src/hooks/useProgress.ts
// Manages all progress state — startDate + completedTasks — in localStorage.
// Key: 'roadmap-v2'  (distinct from old 'roadmap-progress' key — no collision)

import { useState, useCallback } from 'react';
import type { ProgressState } from '../types';

const STORAGE_KEY = 'roadmap-v2';

function load(): ProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { startDate: null, completedTasks: {} };
    const parsed = JSON.parse(raw);
    return {
      startDate: parsed.startDate ?? null,
      completedTasks: parsed.completedTasks ?? {},
    };
  } catch {
    return { startDate: null, completedTasks: {} };
  }
}

function save(state: ProgressState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // storage quota exceeded — fail silently
  }
}

export function useProgress() {
  const [progress, setProgress] = useState<ProgressState>(load);

  const setStartDate = useCallback((date: string) => {
    setProgress((prev: ProgressState) => {
      const next = { ...prev, startDate: date };
      save(next);
      return next;
    });
  }, []);

  const toggleTask = useCallback((taskId: string) => {
    setProgress((prev: ProgressState) => {
      const next = {
        ...prev,
        completedTasks: {
          ...prev.completedTasks,
          [taskId]: !prev.completedTasks[taskId],
        },
      };
      save(next);
      return next;
    });
  }, []);

  const resetProgress = useCallback(() => {
    const next: ProgressState = { startDate: progress.startDate, completedTasks: {} };
    save(next);
    setProgress(next);
  }, [progress.startDate]);

  const resetAll = useCallback(() => {
    const next: ProgressState = { startDate: null, completedTasks: {} };
    save(next);
    setProgress(next);
  }, []);

  return { progress, setStartDate, toggleTask, resetProgress, resetAll };
}
