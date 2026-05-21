import { useEffect, useRef } from "react";
import { Eye } from "./Eye";
import { useTheme } from "styled-components";


export const CursorBlob = () => {
  const size = '100%';
  const radius = 50;
  const pointCount = 100;

  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  const raf = useRef<number>(null);

  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  const leftEyeRef = useRef<SVGCircleElement>(null);
  const rightEyeRef = useRef<SVGCircleElement>(null);
  const leftPupilRef = useRef<SVGCircleElement>(null);
  const rightPupilRef = useRef<SVGCircleElement>(null);


  const scrollOffsetGroupRef = useRef<SVGGElement>(null);

  /**
   * Takes the unit direction vector from the blob center to the cursor
   * @param ux 
   * @param uy 
   * @param bulgeAmount 
   */
  const makeBlobPoints = (ux: number, uy: number, bulgeAmount: number) => {

    const points = [];

    for (let i = 0; i < pointCount; i++) {
      // angle of this point
      const angle = (i / pointCount) * 2 * Math.PI;

      const baseX = Math.cos(angle) * radius;
      const baseY = Math.sin(angle) * radius;


      // Direction from center to this point
      const nx = Math.cos(angle);
      const ny = Math.sin(angle);

      // How much this point faces the cursor;
      const dot = nx * ux + ny * uy;

      const influence = Math.max(0, dot) ** 2;
      const stretch = bulgeAmount * influence;

      points.push({
        x: baseX + ux * stretch,
        y: baseY + uy * stretch,
      });
    };

    return points;

  };

  const buildPath = (points: { x: number, y: number }[]) => {
    let d = "";
    
    for (let i = 0; i < points.length; i++) {
      const currentPoint = points[i];
      const nextPoint = points[(i + 1) % points.length];


      // Our endpoint of this Quadratic Bézier curve is the midpoint
      // from this point (in the points list) to the next point
      const midPointX = (currentPoint.x + nextPoint.x) / 2;
      const midPointY = (currentPoint.y + nextPoint.y) / 2;

      if (i === 0) {
        // On the first iteration, skip the control point / curve and set the start point for the path
        d += `M ${midPointX},${midPointY}`;
      } else {
        d += ` Q ${currentPoint.x},${currentPoint.y} ${midPointX},${midPointY}`;
      }
      
    }  
    // After iteration, the start point for the path will be correct
    // such that we can go back and add the control point / curve for the first point
    const firstPoint = points[0];
    const secondPoint = points[1];
    const firstMidPointX = (firstPoint.x + secondPoint.x) / 2;
    const firstMidPointY = (firstPoint.y + secondPoint.y) / 2;

    d += ` Q ${firstPoint.x},${firstPoint.y} ${firstMidPointX},${firstMidPointY}`;
    d += " Z";

    
    return d;
  }

  const leftEye = { x: -15, y: -10 };
  const rightEye = { x: 15, y: -10 };

  const draw = () => {

    const rect = svgRef.current?.getBoundingClientRect();
    if (rect) {
      const screenOffsetY = Math.max(0, -(rect.top + rect.height / 1.5));
      const svgUnitsPerPx = 240 / rect.height;
      const offset = screenOffsetY * svgUnitsPerPx;
      scrollOffsetGroupRef.current?.setAttribute('transform', `translate(0 ${offset})`)
    }

    current.current.x += (target.current.x - current.current.x) * 0.05;
    current.current.y += (target.current.y - current.current.y) * 0.05;

    // difference in x of cursor to center of blob
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
    const leftEyeX = leftEye.x + ux * eyeOffset;
    const leftEyeY = leftEye.y + uy * eyeOffset;
    const rightEyeX = rightEye.x + ux * eyeOffset;
    const rightEyeY = rightEye.y + uy * eyeOffset;

    const leftPupilX = leftEyeX + ux * pupilOffset;
    const leftPupilY = leftEyeY + uy * pupilOffset;
    const rightPupilX = rightEyeX + ux * pupilOffset;
    const rightPupilY = rightEyeY + uy * pupilOffset;

    leftPupilRef.current?.setAttribute('cx', `${leftPupilX}`);
    leftPupilRef.current?.setAttribute('cy', `${leftPupilY}`);

    rightPupilRef.current?.setAttribute('cx', `${rightPupilX}`);
    rightPupilRef.current?.setAttribute('cy', `${rightPupilY}`);


    rightEyeRef.current?.setAttribute('cx', `${rightEyeX}`);
    rightEyeRef.current?.setAttribute('cy', `${rightEyeY}`);

    leftEyeRef.current?.setAttribute('cx', `${leftEyeX}`);
    leftEyeRef.current?.setAttribute('cy', `${leftEyeY}`);

    const maxBulge = 15;
    // How far the blob should bulge based on distance
    const distanceBulgeFactor = Math.min(distance / 180, 1);
    const bulgeAmount = maxBulge * distanceBulgeFactor;

    const points = makeBlobPoints(ux, uy, bulgeAmount);
    const d = buildPath(points);
    
    pathRef.current?.setAttribute("d", d);
  
    raf.current = requestAnimationFrame(draw);
  };


  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (!svgRef.current) return;
      const rect = svgRef.current.getBoundingClientRect();
      const centerX = rect.left + (rect.width / 2);
      const centerY = rect.top + (rect.height / 2);


      // set the target x and y to the position of the cursor relative to the center of the blob
      target.current.x = e.clientX - centerX;
      target.current.y = e.clientY - centerY;
    };

    const handlePointerLeave = () => {
      target.current.x = 0;
      target.current.y = 0;
    }

    raf.current = requestAnimationFrame(draw);

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerleave', handlePointerLeave);
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
      cancelAnimationFrame(raf.current!);
    }

  }, []);

  const theme = useTheme();

  return (
    <svg
      ref={svgRef}
      width={size}
      height={size}
      viewBox="-120 -120 240 240"
      style={{ overflow: 'visible', zIndex: '1' }}
    >
      <g ref={scrollOffsetGroupRef} >
        <path
          ref={pathRef}
          fill={theme.cursorBlob.fill}
          stroke={theme.cursorBlob.stroke}
          strokeWidth="2"
        />
        {/* <circle ref={leftEyeRef} r={'8px'} cx={leftEye.x} cy={leftEye.y} fill="white" />
        <circle ref={leftPupilRef} r={'2px'} cx={leftEye.x} cy={leftEye.y} fill="black" /> */}
        <Eye eyePos={leftEye} />
        <Eye eyePos={rightEye} />
      </g>

    </svg>
  )
}
