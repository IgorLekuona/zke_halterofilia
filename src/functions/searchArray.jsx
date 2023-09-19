
export function searchArray(arr, key) {

    return arr.find(obj => {
        return obj.id === key;
    });

}