"use client";

import { useState, useEffect } from 'react';

import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import styles from './CTAButton.module.scss';

export default function CTAButton({ href, children }) {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setHasBeenVisible(true);
    }
  }, [inView]);

  return (
    <Link href={href} ref={ref} className={`${styles.btn} ${hasBeenVisible ? styles.visible : ''}`}>
      {children}
    </Link>
  );
}