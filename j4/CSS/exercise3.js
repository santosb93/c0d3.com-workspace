const container = document.querySelector('.container')
const createRow = ()=>{
 
  const row = document.createElement('div');
  row.classList.add('row');
  

  for(let i=0; i < 20; i++){
    const gridItem = document.createElement('div')
    gridItem.classList.add('gridItem')
    row.append(gridItem)
  }
 container.append(row)
}

const createGrid = (num, i = 0) =>{

 if(i === num) return

 createRow(container)

 return createGrid(num, i + 1)


}

createGrid(20)