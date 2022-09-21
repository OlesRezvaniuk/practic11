const refs = {
  prevBtn: document.querySelector('#prev-button'),
  nextBrn: document.querySelector('#next-button'),
  paginationNumbers: document.querySelector('#pagination-numbers'),
  paginationList: document.querySelector('#paginated-list'),
};
const listItems = refs.paginationList.querySelectorAll('li');

let currentpage;
const paginationLimit = 0;
const pageCount = Math.ceil(listItems.length / paginationLimit);

function appendPageNumber() {
  const pageNumber = document.createElement('button');
  pageNumber.className = 'pagination-number';
}
