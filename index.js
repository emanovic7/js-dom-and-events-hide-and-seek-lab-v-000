function getFirstSelector(selector){
  const element = document.querySelector(selector);
  return element;

}


function nestedTarget(){
    const main = document.getElementById('app');
    const target = main.querySelector('#nested');
    return target;
}


function increaseRankBy(n){
  const list = document.querySelectorAll('.ranked-list');

  for(let i=0; i<list.length; i++){
    let children = list[i].children

    for(let j=0; j<children.length; j++){
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}


function deepestChild(){
  //const main = document.getElementById('app');
  let node = document.getElementById('grand-node');

  let firstChild = node.children[0]

  while(firstChild){
    node = firstChild
    firstChild = node.children[0]
  }

  return node
}
