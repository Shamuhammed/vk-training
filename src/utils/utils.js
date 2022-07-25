export const funcPagination = (totalCount, pageSize, currentPage, paginationLength ) => {
   let arr = [];
   let num;
   let pages = Math.ceil(totalCount / pageSize); 
   let halfPaginationLenght = Math.ceil(paginationLength / 2);

   if (currentPage < halfPaginationLenght) {
      num = 1;         
   } else if (currentPage > halfPaginationLenght && currentPage < (pages - halfPaginationLenght)) {
      num = currentPage - halfPaginationLenght;
   } else if (currentPage > pages - halfPaginationLenght) {
      num = pages - paginationLength;
   }

   for (let i = 1; i < paginationLength; i++) {
      arr.push(num);
      num++;
      if (arr.length === paginationLength - 1 && currentPage < (pages - halfPaginationLenght)) arr.push(pages);
      if (arr.length === paginationLength - 1 && currentPage > (pages - halfPaginationLenght)) arr.unshift(1);
   }
   return arr;
}

export const statusLenght = (status, maxLength) => {
   
   return (status.slice(0, maxLength) + '...');
}