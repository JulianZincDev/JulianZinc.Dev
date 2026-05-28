
const isClickedOverElement = (e: MouseEvent, element: HTMLElement | null ) => {
  return element && e.target instanceof Node && element.contains(e.target);
}

export default isClickedOverElement;
