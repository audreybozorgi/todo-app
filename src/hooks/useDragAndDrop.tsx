interface IDraggableStyles {
    [key: string]: string | number
}
type IListStyleType = () =>  {
    background: string;
    width: string;
}
type IGetItemStyleType = (draggableStyle: any) =>  {
    [key: string]: string
}
type IOnDragEndType = (result: any, state: any, setState: any) =>  void

export const useDragAndDrop = (): [IListStyleType, IGetItemStyleType, IOnDragEndType] => {
    const reorder = (list: any, startIndex: number, endIndex: number) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    };

    const getListStyle = () => ({
        background: "transparent",
        width: '100%',
    })

    const getItemStyle = (draggableStyle: IDraggableStyles) => ({
        userSelect: "none",
        padding: '10px',
        margin: `0 0 0 0`,
        height: '180px',
        background: "transparent",
        ...draggableStyle
    })

    function onDragEnd(result: any, state: any, setState: any) {
        if (!result.destination) {
            return;
        }

        const items: any = reorder(
            state,
            result.source.index,
            result.destination.index
        );
        setState(
            items
        );
    }

    return [
        getListStyle,
        getItemStyle,
        onDragEnd
    ]
}
