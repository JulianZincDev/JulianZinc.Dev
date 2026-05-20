import { useEffect, useRef } from "react"



const getFitOffset = (el: Element) => {
  const rect = el.getBoundingClientRect();

  let x = 0;
  let y = 0;

  if (rect.left < 0) x = -rect.left;
  else if (rect.right > window.innerWidth) x = window.innerWidth - rect.right;

  if (rect.top < 0) y = -rect.top;
  else if (rect.bottom > window.innerHeight) y = window.innerHeight - rect.bottom;

  return { x, y };
}

export const Eye = ({eyePos}: {eyePos: { x: number, y: number }}) => {
  const eyeRef = useRef<SVGCircleElement>(null);
  const pupilRef = useRef<SVGCircleElement>(null);

  const current = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  const raf = useRef<number>(null);

  const fitCurrentOffset = useRef({ x: 0, y: 0 });
  const fitTargetOffset = useRef({ x: 0, y: 0 });

  const draw = () => {
    if (visibilityRef.current) {
      const fitOffset = getFitOffset(visibilityRef.current);
      fitTargetOffset.current = { x: Math.min(fitOffset.x, 40), y: Math.min(fitOffset.y, 40) };
    
    }

    current.current.x += (target.current.x - current.current.x) * 0.05;
    current.current.y += (target.current.y - current.current.y) * 0.05;

    fitCurrentOffset.current.x += (fitTargetOffset.current.x - fitCurrentOffset.current.x) * 0.05;
    fitCurrentOffset.current.y += (fitTargetOffset.current.y - fitCurrentOffset.current.y) * 0.05;

    const dx = current.current.x;
    const dy = current.current.y;

    const distance = Math.hypot(dx, dy) || 1;

    const ux = dx / distance;
    const uy = dy / distance;

    const pupilMaxOffset = 6;
    const eyeMaxOffset = 15;

    const pupilOffset = Math.min(distance * 0.08, pupilMaxOffset);

    const eyeStartDistance = pupilMaxOffset / 0.08;
    const eyeOffset = Math.min(Math.max(distance - eyeStartDistance, 0) * 0.08, eyeMaxOffset);
    const eyeX = eyePos.x + ux * eyeOffset;
    const eyeY = eyePos.y + uy * eyeOffset;

    const pupilX = eyeX + ux * pupilOffset;
    const pupilY = eyeY + uy * pupilOffset;

    pupilRef.current?.setAttribute('cx', `${pupilX + fitCurrentOffset.current.x}`);
    pupilRef.current?.setAttribute('cy', `${pupilY + fitCurrentOffset.current.y}`);
    eyeRef.current?.setAttribute('cx', `${eyeX + fitCurrentOffset.current.x}`);
    eyeRef.current?.setAttribute('cy', `${eyeY + fitCurrentOffset.current.y}`);

    visibilityRef.current?.setAttribute('cx', `${eyeX}`);
    visibilityRef.current?.setAttribute('cy', `${eyeY}`);

    raf.current = requestAnimationFrame(draw);

  };

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (!eyeRef.current?.ownerSVGElement) return;
      const rect = eyeRef.current.ownerSVGElement.getBoundingClientRect();
      const centerX = rect.left + (rect.width / 2);
      const centerY = rect.top + (rect.width / 2);
      target.current.x = e.clientX - centerX;
      target.current.y = e.clientY - centerY;
    };

    const handlePointerLeave = () => {
      target.current.x = 0;
      target.current.y = 0;
    };

    raf.current = requestAnimationFrame(draw);

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerleave', handlePointerLeave);
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
      cancelAnimationFrame(raf.current!);
    }

  }, []);

  const visibilityRef = useRef<SVGCircleElement>(null);

  return (
    <>
      <circle
        ref={visibilityRef}
        cx={eyePos.x}
        cy={eyePos.y}
        r="8px"
        fill="transparent"
      />

        <circle ref={eyeRef} r={'8px'} cx={eyePos.x} cy={eyePos.y} fill="white" />
        <circle ref={pupilRef} r={'2px'} cx={eyePos.x} cy={eyePos.y} fill="black" />
    </>
  )
}
