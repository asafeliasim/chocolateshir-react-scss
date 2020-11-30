export const setItemsToMessage = (arr) => {
    const items = arr.map(item=>{
        const type = item.type === 2? "קקאו" : "";
        const fill = !item.myFill? "ללא מילוי" : item.myFill === 1 ? "מריר" : item.myFill === 2 ? "חלב" : item.myFill === 3 ? "לבן" : "ללא מילוי"
        return  item['sum'] + " " + item['name'] + " " + type + " " + fill + ".  ";
    })
    return items;
}

export const setFinishItemsToMessage = (arr) => {
    const items = arr.map(s=>`${s}`);
    const result = items.join().replace(/,/g,'');
    return result;
}