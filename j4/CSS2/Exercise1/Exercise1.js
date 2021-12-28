const video = document.querySelector('.videoElement')
const inputCaption = document.querySelector('.input--caption')
const inputStartTime = document.querySelector('.input--startTime')
const inputEndTime = document.querySelector('.input--endTime')
const btnSave = document.querySelector('.btn--save')
const captionsContainer = document.querySelector('.container--captions')
const subtitle = document.querySelector('.subtitle')

let captionList = [{
  txt: "A beautiful Typewriter",
  start: 0,
  end: 3000
},{
  txt: "On to a big piece of paper",
  start: 3000,
  end: 7000
},
{
  txt: "Transitioning to Video!",
  start: 7000,
  end: 8000
},
{
    txt: "Video of horse, then magazine",
    start: 8000,
    end: 13000
}]


/**
 * 
 */
btnSave.addEventListener('click', ()=>{
  const currentCaption = inputCaption.value
  const currentStartTime = inputStartTime.value
  const currentEndTime = inputEndTime.value

  if(inputCaption.value === ""){
    alert("Please enter a valid caption")
    return
  }
  if(!parseInt(currentStartTime) || !parseInt(currentEndTime)){
    alert("Please enter a valid start/end time")
    return
  }
  const checkCaptionList = captionList.filter(e=>(currentStartTime > e.start && currentEndTime < e.end))
  if(checkCaptionList.length != 0){
    alert("Please enter a valid time range. There is an existing caption in this time range")
    return
  }

  const newCaption = {
    txt: currentCaption,
    start: currentStartTime,
    end: currentEndTime
  }

  captionList.push(newCaption)

  renderCaptionBlock(newCaption)
  inputCaption.value = ""
  inputStartTime.value = ""
  inputEndTime.value = ""

})

/**
 * This function renders the caption block object to the caption list
 * @param {obj} thisCaption 
 */
const renderCaptionBlock = (thisCaption)=>{

  //create the elements
  const newCaptionBlock = document.createElement('div')
  const newCaption = document.createElement('p')
  const newStartTime = document.createElement('p')
  const newEndTime = document.createElement('p')
  //add the classes
  newEndTime.classList.add('container--captions__endTime')
  newStartTime.classList.add('container--captions__startTime')
  newCaption.classList.add('container--captions__caption')
  newCaptionBlock.classList.add('container--captions__block')
  //display the text
  newCaption.innerText = thisCaption.txt
  newStartTime.innerText = thisCaption.start
  newEndTime.innerText = thisCaption.end


  //append all elements to the newCaption block
  newCaptionBlock.append(newCaption,newStartTime,newEndTime)

  //create an eventListener
  newCaptionBlock.addEventListener("click", ()=>{
    if(confirm(`Remove caption:${newCaption.innerText}`)){
    newCaptionBlock.remove()
    captionList = captionList.filter(e => e.txt != thisCaption.txt)
    }

  })
  

  //append the block to the container
  captionsContainer.append(newCaptionBlock)

}


  video.addEventListener('timeupdate', () => {
    const currentTime = video.currentTime * 1000
    let currentCaption = captionList.filter(e=>(e.start < currentTime && e.end > currentTime))
    if(currentCaption.length) {
      subtitle.innerText = currentCaption[0].txt
    }
    else{
      subtitle.innerText = ''
    }
  })


const startApp = ()=>{
  captionList.forEach((caption)=>{
    renderCaptionBlock(caption)
  })
  

} 

startApp()


