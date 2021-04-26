import React, { useEffect, useRef, useState } from 'react';
import cn from 'classnames';

import { ReactAnimatedHeadlineProps } from '../../types';

import '../../style.scss';

const ReactAnimatedHeadline: React.FC<ReactAnimatedHeadlineProps> = ({
  type,
  text,
  headline,
}) => {
  const [currentWord, setCurrentWord] = useState(0);
  const wordRef = useRef<HTMLElement[]>([]);
  const wrapperRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (wrapperRef.current && wordRef.current) {
      let width = 0;
      if (type === 'loading-bar') {
        setTimeout(() => {
          wrapperRef.current?.classList.add('loading-bar');
        }, 800);
      } else if (type === 'clip') {
        width = wrapperRef.current.offsetWidth + 10;
      } else if (type !== 'type') {
        wordRef.current.forEach(word => {
          if (word.offsetWidth > width) {
            width = word.offsetWidth;
          }
        });
      }

      if (width > 0) {
        wrapperRef.current.style.width = `${width}px`;
      }
    }
  }, [wordRef, wrapperRef, type]);

  function switchWord(current: number, next: number) {
    wordRef.current[current].classList.remove('is-visible');
    wordRef.current[current].classList.add('is-hidden');
    wordRef.current[next].classList.remove('is-hidden');
    wordRef.current[next].classList.add('is-visible');
  }

  useEffect(() => {
    const nextWord = currentWord + 1 === text.length ? 0 : currentWord + 1;
    switchWord(currentWord, nextWord);

    const handler = setTimeout(() => {
      setCurrentWord(nextWord);
    }, 3000);

    return () => {
      clearTimeout(handler);
    };
  }, [currentWord, text]);

  function renderWord(word: string, indexWord: number) {
    if (['type', 'rotate2', 'rotate3', 'scale'].includes(type)) {
      const characters = word.split('');
      const selected = wordRef.current[indexWord]?.classList.contains(
        'is-visible',
      );

      return characters.map((character, index) => {
        if (type === 'rotate-2') {
          return (
            <em key={index} className={cn({ in: selected })}>
              <i>{character}</i>
            </em>
          );
        }
        return (
          <i key={index} className={cn({ in: selected })}>
            {character}
          </i>
        );
      });
    }

    return word;
  }

  return (
    <h1 className={`cd-headline ${type}`}>
      <span>{headline}&nbsp;</span>
      <span className="cd-words-wrapper" ref={wrapperRef}>
        {text.map((word, index) => (
          <b
            key={index}
            ref={(el: HTMLElement) => (wordRef.current[index] = el)}
          >
            {renderWord(word, index)}
          </b>
        ))}
      </span>
    </h1>
  );
};

export default ReactAnimatedHeadline;
