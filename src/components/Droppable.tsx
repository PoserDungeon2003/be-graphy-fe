import { useDroppable } from "@dnd-kit/core";

type DroppableProps = {
  children: React.ReactNode;
}

export const Droppable: React.FC<DroppableProps> = ({
  children,
}) => {
  const { isOver, setNodeRef } = useDroppable({
    id: 'droppable',
  });
  const style = {
    color: isOver ? 'green' : undefined,
  };


  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
}