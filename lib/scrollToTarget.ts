export function scrollToTarget(
  targetId: string,
  {
    headerOffset = 0,
    duration = 1200,
    updateHash = true,
  }: {
    headerOffset?: number;
    duration?: number;
    updateHash?: boolean;
  } = {},
) {
  const element = document.getElementById(targetId);
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion) {
    window.scrollTo(0, offsetPosition);
    if (updateHash) {
      window.history.pushState(null, "", `#${targetId}`);
    }
    return;
  }

  const startPosition = window.pageYOffset;
  const distance = offsetPosition - startPosition;
  let start: number | null = null;

  const easeInOutCubic = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const step = (timestamp: number) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const ease = easeInOutCubic(progress);

    window.scrollTo(0, startPosition + distance * ease);

    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else if (updateHash) {
      window.history.pushState(null, "", `#${targetId}`);
    }
  };

  window.requestAnimationFrame(step);
}
