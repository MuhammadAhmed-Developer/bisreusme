import React, { useState, useEffect } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";
import equal from "deep-equal";
import { Tooltip, TooltipProps } from "react-tippy";
import "react-tippy/dist/tippy.css";

import styles from "../../style/dnd/dnd.module.css";
import { useAppSelector } from "@/redux/store";
import { useParams } from "next/navigation";

interface Props {
  data: any[];
  coverLetter?: boolean;
  direction?: "horizontal" | "vertical";
  renderItem: (item: any, index: number) => JSX.Element;
  reorder: (data: any[]) => void;
  additem: (index: number) => void;
  removeitem: (index: number) => void;
}

interface State {
  data: any[];
  isCoverLetter?: boolean;
}

const getDragIconStyle = () => {
  return {
    userSelect: "none",
    width: "26px",
    height: "26px",
    position: "absolute",
    borderRadius: "100%",
    top: -13,
    right: 30,
  } as React.CSSProperties;
};

const getAddIconStyle = () => {
  return {
    userSelect: "none",
    width: "26px",
    height: "26px",
    position: "absolute",
    borderRadius: "100%",
    top: -13,
    right: 0,
    cursor: "pointer",
  } as React.CSSProperties;
};

const getRemoveIconStyle = () => {
  return {
    userSelect: "none",
    width: "26px",
    height: "26px",
    position: "absolute",
    borderRadius: "100%",
    top: -13,
    right: 60,
    cursor: "pointer",
  } as React.CSSProperties;
};

const getdragedStyle = (isDragging: boolean) => {
  return {
    position: "relative",
    "-webkit-box-shadow": isDragging
      ? "0px 0px 24px 0px rgba(0,0,0,0.16)"
      : "none",
    "-moz-box-shadow": isDragging
      ? "0px 0px 24px 0px rgba(0,0,0,0.16)"
      : "none",
    "box-shadow": isDragging ? "0px 0px 24px 0px rgba(0,0,0,0.16)" : "none",
    paddingTop: 10,
  } as React.CSSProperties;
};

const getListStyle = (isDraggingOver: boolean) => {
  return {
    "-webkit-box-shadow": isDraggingOver
      ? "inset 0px 0px 18px 0px rgba(0,0,0,0.08)"
      : "none",
    "-moz-box-shadow": isDraggingOver
      ? "inset 0px 0px 18px 0px rgba(0,0,0,0.08)"
      : "none",
    "box-shadow": isDraggingOver
      ? "inset 0px 0px 18px 0px rgba(0,0,0,0.08)"
      : "none",
    background: isDraggingOver ? "none" : "none",
  } as React.CSSProperties;
};

const getListStyleHorizontal = (isDraggingOver: boolean) => {
  return {
    "-webkit-box-shadow": isDraggingOver
      ? "inset 0px 0px 18px 0px rgba(0,0,0,0.08)"
      : "none",
    "-moz-box-shadow": isDraggingOver
      ? "inset 0px 0px 18px 0px rgba(0,0,0,0.08)"
      : "none",
    "box-shadow": isDraggingOver
      ? "inset 0px 0px 18px 0px rgba(0,0,0,0.08)"
      : "none",
    background: isDraggingOver ? "none" : "none",
    flexDirection: "row",
    flexWrap: "wrap",
  } as React.CSSProperties;
};

const CustomTooltip = (
  props: TooltipProps & {
    children?: React.ReactNode;
  }
) => {
  return <Tooltip {...props} distance={20} duration={0} size="small" arrow />;
};

const Dnd: React.FC<Props> = ({
  data,
  coverLetter,
  direction,
  renderItem,
  reorder,
  additem,
  removeitem,
}: Props) => {
  const [state, setState] = useState<State>({
    data,
    isCoverLetter: coverLetter,
  });
  const templateId: { slug: string } = useParams();
  useEffect(() => {
    if (!equal(data, state.data)) {
      setState((prevState) => ({
        ...prevState,
        data,
      }));
    }
  }, [data, state.data]);

  const reorderList = (list: any[], startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    const updatedData = reorderList(
      state.data,
      result.source.index,
      result.destination.index
    );

    if (!equal(state.data, updatedData)) {
      reorder(updatedData);
    }

    setState((prevState) => ({
      ...prevState,
      data: updatedData,
    }));
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      const focusedElement = document.activeElement as HTMLElement;
      const draggableElement = focusedElement.closest(
        ".react-beautiful-dnd-draggable"
      );

      if (draggableElement) {
        const draggableId = draggableElement.getAttribute(
          "data-rbd-draggable-id"
        );
        if (draggableId) {
          onDragStart(Number(draggableId));
        }
      }
    }
  };

  const onDragStart = (draggableId: number) => {};
  const updateData = useAppSelector((state) => state.templateTheme);
  const primaryColor = updateData.themeConfiguration.themeColor.primaryColor;
console.log(primaryColor)
  return (
    <DragDropContext
      onDragEnd={onDragEnd}
      {...({
        onKeyDown: handleKeyDown,
      } as any)}
    >
      <Droppable droppableId={"droppable"}>
        {(parentProvider, parentSnapshot) => (
          <div {...parentProvider.droppableProps}>
            <div
              ref={parentProvider.innerRef}
              style={
                direction
                  ? getListStyleHorizontal(parentSnapshot.isDraggingOver)
                  : getListStyle(parentSnapshot.isDraggingOver)
              }
              className={
                state.isCoverLetter
                  ? styles.unselectedCoverDragItems
                  : parentSnapshot.isDraggingOver
                  ? styles.selectedDragItems
                  : styles.unselectedDragItems
              }
            >
              {state.data?.map((item, index) => {
                const id = item.id;
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided, snapshot) => (
                      <div {...provided.draggableProps}>
                        <div
                          ref={provided.innerRef}
                          className={styles.dragBox}
                          style={getdragedStyle(snapshot.isDragging)}
                        >
                          {renderItem(item, index)}
                          {state.isCoverLetter ? null : (
                            <>
                              <div
                                style={getAddIconStyle()}
                                className={styles.dragBoxIcon}
                                onClick={() => additem(index)}
                              >
                                <CustomTooltip title="Add New Item" arrow>
                                  <div
                                    className="flex justify-center items-center   h-[25px] w-[25px] rounded-full"
                                    style={{ backgroundColor: primaryColor }}
                                  >
                                    <span
                                      className={`text-lg text-white font-bold ${
                                        templateId.slug === "457484" ||
                                        templateId.slug === "457481212" ||
                                        templateId.slug === "457481209"
                                        ? "mt-0"
                                          : "mt-[-3px]"
                                      }`}
                                    >
                                      +
                                    </span>
                                  </div>
                                </CustomTooltip>
                              </div>
                              {state.data.length > 1 && (
                                <div
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  style={getDragIconStyle()}
                                  className={styles.dragBoxIcon}
                                >
                                  <CustomTooltip title="Change Position">
                                    <div
                                      className="flex justify-center items-center h-[25px] w-[25px]  rounded-full"
                                      style={{ backgroundColor: primaryColor }}
                                    >
                                      <span
                                        className={`text-lg text-white font-bold ${
                                          templateId.slug === "457484" ||
                                          templateId.slug === "457481212" ||
                                          templateId.slug === "457481209"
                                            ? "mt-0"
                                            : "mt-[-3px]"
                                        }`}
                                      >
                                        =
                                      </span>
                                    </div>
                                  </CustomTooltip>
                                </div>
                              )}
                              {state.data.length > 1 && (
                                <div
                                  style={getRemoveIconStyle()}
                                  className={styles.dragBoxIcon}
                                  onClick={() => removeitem(index)}
                                >
                                  <CustomTooltip title="Remove">
                                    <div
                                      className="flex justify-center items-center h-[25px] w-[25px] rounded-full"
                                      style={{ backgroundColor: primaryColor }}
                                    >
                                      <span
                                        className={`text-lg text-white font-bold ${
                                          templateId.slug === "457484" ||
                                          templateId.slug === "457481212" ||
                                          templateId.slug === "457481209"
                                          ? "mt-0"
                                            : "mt-[-3px]"
                                        }`}
                                      >
                                        -
                                      </span>
                                    </div>
                                  </CustomTooltip>
                                </div>
                              )}
                            </>
                          )}
                        </div>
                      </div>
                    )}
                  </Draggable>
                );
              })}
            </div>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Dnd;
