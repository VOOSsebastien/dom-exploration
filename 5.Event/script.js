const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
  console.log(e.target.classList[1])
  var art=e.target.classList[1];
  const div = document.createElement("div");
    document.querySelector('.displayedsquare-wrapper').appendChild(div);
    const div2 = document.createElement("div");

    document.querySelector('.displayedsquare-wrapper').appendChild(div2);

    const a = document.querySelector(".actionsquare");
    div.style.backgroundColor=art;
    //console.log(getElapsedTime())
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}

