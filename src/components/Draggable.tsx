import { useDraggable } from "@dnd-kit/core";
import { CSS } from '@dnd-kit/utilities';

type DraggableProps = {
  children: React.ReactNode;
}

export const Draggable: React.FC<DraggableProps> = ({
  children,
}) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: 'draggable',
  });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;


  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </button>
  );
}