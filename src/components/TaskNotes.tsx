// src/components/TaskNotes.tsx
// Renders structured lesson notes attached to a task.
// Called from TaskCard when task.notes exists and the task is expanded.
// Each note is a collapsible lesson card.

import { useState } from 'react';
import type { TaskNote } from '../types';

interface TaskNotesProps {
  notes: TaskNote[];
}

export default function TaskNotes({ notes }: TaskNotesProps) {
  return (
    <div style={{
      marginTop: 16,
      borderTop: '1px solid var(--border)',
      paddingTop: 14,
    }}>
      <p style={{
        fontFamily: 'Courier New, monospace',
        fontSize: 9,
        color: 'var(--accent)',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        marginBottom: 10,
      }}>
        📝 Takeaways — {notes.length} Lesson{notes.length !== 1 ? 's' : ''}
      </p>

      {notes.map((note, i) => (
        <NoteCard key={i} note={note} index={i} />
      ))}
    </div>
  );
}

function NoteCard({ note, index }: { note: TaskNote; index: number }) {
  const [open, setOpen] = useState(index === 0); // first note open by default

  return (
    <div style={{
      background: 'var(--bg-base)',
      border: '1px solid var(--accent-border)',
      borderRadius: 6,
      overflow: 'hidden',
      marginBottom: 8,
    }}>

      {/* ── Note header ── */}
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 12,
          padding: '11px 14px',
          background: open ? 'var(--accent-faint)' : 'transparent',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flex: 1, minWidth: 0 }}>
          {/* Lesson index pill */}
          <span style={{
            fontFamily: 'Courier New, monospace',
            fontSize: 9,
            color: 'var(--accent)',
            background: 'var(--accent-subtle)',
            border: '1px solid var(--accent-border)',
            padding: '2px 7px',
            borderRadius: 10,
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}>
            Lesson {index + 1}
          </span>
          <span style={{
            fontSize: 13,
            fontWeight: 600,
            color: 'var(--text-primary)',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}>
            {note.lessonTitle}
          </span>
        </div>
        <span style={{
          fontSize: 13,
          color: open ? 'var(--accent)' : 'var(--text-dim)',
          transform: open ? 'rotate(180deg)' : 'none',
          flexShrink: 0,
          lineHeight: 1,
        }}>
          ▾
        </span>
      </button>

      {/* ── Note body ── */}
      {open && (
        <div style={{ padding: '0 14px 16px' }}>

          {/* Source link */}
          {note.source && (
            <div style={{ marginBottom: 16, paddingTop: 12 }}>
              <span style={{
                fontFamily: 'Courier New, monospace',
                fontSize: 9,
                color: 'var(--text-dim)',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginRight: 8,
              }}>
                Source
              </span>
              <a
                href={note.source.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'Courier New, monospace',
                  fontSize: 11,
                  color: 'var(--accent)',
                  textDecoration: 'none',
                }}
              >
                ↗ {note.source.label}
              </a>
            </div>
          )}

          {/* Key takeaway */}
          <div style={{
            background: 'var(--accent-faint)',
            border: '1px solid var(--accent-border)',
            borderLeft: '3px solid var(--accent)',
            borderRadius: 4,
            padding: '12px 14px',
            marginBottom: 16,
          }}>
            <p style={{
              fontFamily: 'Courier New, monospace',
              fontSize: 9,
              color: 'var(--accent)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: 6,
            }}>
              Key Takeaway
            </p>
            <p style={{
              fontSize: 14,
              fontWeight: 600,
              color: 'var(--text-primary)',
              margin: 0,
              lineHeight: 1.5,
              fontStyle: 'italic',
            }}>
              "{note.keyTakeaway}"
            </p>
          </div>

          {/* Pipeline */}
          {note.pipeline && note.pipeline.length > 0 && (
            <div style={{ marginBottom: 20 }}>
              <p style={{
                fontFamily: 'Courier New, monospace',
                fontSize: 9,
                color: 'var(--text-dim)',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: 10,
              }}>
                {note.pipelineLabel ?? 'Pipeline'}
              </p>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 4,
                flexWrap: 'wrap',
              }}>
                {note.pipeline.map((step, si) => (
                  <div key={si} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <span style={{
                      fontFamily: 'Courier New, monospace',
                      fontSize: 11,
                      color: 'var(--accent)',
                      background: 'var(--accent-subtle)',
                      border: '1px solid var(--accent-border)',
                      borderRadius: 4,
                      padding: '4px 10px',
                      whiteSpace: 'nowrap',
                    }}>
                      {step}
                    </span>
                    {si < note.pipeline!.length - 1 && (
                      <span style={{
                        color: 'var(--text-dim)',
                        fontSize: 12,
                        fontFamily: 'monospace',
                      }}>→</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Numbered points */}
          {note.points.length > 0 && (
            <div style={{ marginBottom: note.flashcard ? 20 : 0 }}>
              <p style={{
                fontFamily: 'Courier New, monospace',
                fontSize: 9,
                color: 'var(--text-dim)',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: 10,
              }}>
                {note.points.length} Things to Internalize
              </p>

              {note.points.map((point, pi) => (
                <div key={pi} style={{
                  display: 'flex',
                  gap: 12,
                  marginBottom: pi < note.points.length - 1 ? 14 : 0,
                  alignItems: 'flex-start',
                }}>
                  {/* Number badge */}
                  <div style={{
                    width: 22,
                    height: 22,
                    borderRadius: '50%',
                    background: 'var(--accent-subtle)',
                    border: '1px solid var(--accent-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: 2,
                  }}>
                    <span style={{
                      fontFamily: 'Courier New, monospace',
                      fontSize: 10,
                      color: 'var(--accent)',
                      fontWeight: 700,
                    }}>
                      {pi + 1}
                    </span>
                  </div>

                  <div style={{ flex: 1 }}>
                    <p style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      margin: '0 0 6px',
                      lineHeight: 1.4,
                    }}>
                      {point.title}
                    </p>
                    {point.bullets.map((bullet, bi) => {
                      // Detect example lines (start with "Bad:" or "Good:")
                      const isBad  = bullet.startsWith('Bad:');
                      const isGood = bullet.startsWith('Good:');
                      const isExample = isBad || isGood;

                      return (
                        <div key={bi} style={{
                          display: 'flex',
                          gap: 8,
                          alignItems: 'flex-start',
                          marginBottom: 4,
                          ...(isExample ? {
                            background: isBad
                              ? 'rgba(239,68,68,0.06)'
                              : 'rgba(52,211,153,0.06)',
                            border: `1px solid ${isBad ? 'rgba(239,68,68,0.18)' : 'rgba(52,211,153,0.18)'}`,
                            borderRadius: 4,
                            padding: '4px 10px 4px 8px',
                            marginLeft: 8,
                          } : {}),
                        }}>
                          {!isExample && (
                            <div style={{
                              width: 4, height: 4,
                              background: 'var(--accent)',
                              borderRadius: '50%',
                              marginTop: 7,
                              flexShrink: 0,
                              opacity: 0.6,
                            }} />
                          )}
                          <span style={{
                            fontSize: 12,
                            color: isExample
                              ? (isBad ? '#F87171' : '#34D399')
                              : 'var(--text-muted)',
                            lineHeight: 1.65,
                            fontFamily: isExample ? 'Courier New, monospace' : 'inherit',
                          }}>
                            {bullet}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Flashcard */}
          {note.flashcard && (
            <div style={{
              background: 'var(--bg-raised)',
              border: '1px solid var(--border)',
              borderRadius: 6,
              overflow: 'hidden',
            }}>
              <div style={{
                background: 'var(--accent-faint)',
                borderBottom: '1px solid var(--border)',
                padding: '8px 14px',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}>
                <span style={{ fontSize: 13 }}>🃏</span>
                <span style={{
                  fontFamily: 'Courier New, monospace',
                  fontSize: 9,
                  color: 'var(--accent)',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                }}>
                  Interview Flashcard
                </span>
              </div>
              <div style={{ padding: '12px 14px' }}>
                <p style={{
                  fontFamily: 'Courier New, monospace',
                  fontSize: 11,
                  color: 'var(--text-dim)',
                  marginBottom: 6,
                  letterSpacing: '0.05em',
                }}>
                  Q: {note.flashcard.question}
                </p>
                <div style={{
                  borderTop: '1px solid var(--border)',
                  paddingTop: 8,
                }}>
                  <p style={{
                    fontSize: 12,
                    color: 'var(--text-muted)',
                    lineHeight: 1.75,
                    margin: 0,
                  }}>
                    <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>A:</strong>{' '}
                    {note.flashcard.answer}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
