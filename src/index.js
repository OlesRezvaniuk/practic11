const refs = {
  prevBtn: document.querySelector('#prev-button'),
  nextBrn: document.querySelector('#next-button'),
  paginationNumbers: document.querySelector('#pagination-numbers'),
  paginationList: document.querySelector('#paginated-list'),
};
const listItems = refs.paginationList.querySelectorAll('li');

let currentPage;
const paginationLimit = 10;
const pageCount = Math.ceil(listItems.length / paginationLimit);
console.log(pageCount);

function appendPageNumber(index) {
  const pageNumber = document.createElement('button');
  pageNumber.className = 'pagination-number';
  pageNumber.setAttribute('page-index', index);
  pageNumber.innerHTML = index;
  pageNumber.setAttribute('arial-label', 'page' + index);
  refs.paginationNumbers.appendChild(pageNumber);
}

function getPaginationNumber() {
  for (let i = 1; i <= pageCount; i++) {
    appendPageNumber(i);
  }
}

window.addEventListener('load', () => {
  getPaginationNumber();
  setCurrentPage(1);
  document.querySelectorAll('.pagintion-numbers').forEach(btn => {
    const pageIndex = Number(btn.getAttribute('page-index'));
    if (pageIndex) {
      btn.addEventListener('click', () => {
        setCurrentPage(pageIndex);
        console.log('hi');
      });
    }
  });
});

function setCurrentPage(numberPage) {
  currentPage = numberPage;
  const prevRange = (numberPage - 1) * paginationLimit;
  const currentRange = numberPage * paginationLimit;
  listItems.forEach((item, index) => {
    item.classList.add('hidden');
    if (index >= prevRange && index < currentRange) {
      item.classList.remove('hidden');
    }
  });
}
