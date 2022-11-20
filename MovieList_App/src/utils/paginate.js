import _ from 'lodash';

export function paginate(items, pageNumber, pageSize){
    const startIndex = (pageNumber - 1) * pageSize;

    return _(items) // in order to chain some methods we need to wrap our "items" array in lodash object
    .slice(startIndex) // then we slice the array at the given index
    .take(pageSize) // we take whatever number of pages is declared for page size
    .value() // to convert the "lodash wrapper object" to a regular array
}