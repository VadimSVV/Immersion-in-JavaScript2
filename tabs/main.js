const tabs = document.getElementById('tabs');
const content = document.querySelectorAll('#contents > .content');


const changeClass = (el, tabs) => {
    for(let i = 0; i < tabs.children.length; i++) {
       tabs.children[i].classList.remove('active');
    }
    el.classList.add('active');
}


// console.log(tabs);
// console.log(content);

tabs.addEventListener('click',e => {
    const currTab = e.target.dataset.btn;
    changeClass(e.target, tabs);
    for(let i = 0; i < content.length; i++) {
        content[i].classList.remove('active');
        if(content[i].dataset.content === currTab) {
            content[i].classList.add('active');
        }
    }
});

const tabsIn = document.getElementById('tabs-in');
const contentIn = document.querySelectorAll('#contents-in .content');

tabsIn.addEventListener('click', e => {
    const currTab = e.target.dataset.btn;
    changeClass(e.target, tabsIn);
    for (let i = 0; i < contentIn.length; i++) {
        contentIn[i].classList.remove('active');
        if (contentIn[i].dataset.content === currTab) {
            contentIn[i].classList.add('active');
        }
    }
});