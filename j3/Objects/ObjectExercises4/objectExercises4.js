/**
 * Write a getNext prototype function for arrays that returns the next element of the array.
 **/
 Array.prototype.getNext = function () {
   const index = this.indexCounter || 0 
   this.indexCounter = index + 1 
   if(this.indexCounter === this.length) this.indexCounter = 0
   return this[index]
 }

 /**
  * Write an Array setMaxSize prototype function that gives arrays a max length beyond which 
  * new elements can no longer be pushed.
  * const a = ['Edna', 'Optimus', 'Minion']
  a.setMaxSize(4)

  a.push('Groot') // push returns 4.
  // Array is ["Edna", "Optimus", "Minion", "Groot"]

  a.push('hello') // Nothing happens. push returns 4, array stays the same.
  */
 Array.prototype.setMaxSize = function (maxSize) {
   this.oldPush = this.push
   this.push = newElement => {
     if(this.length < maxSize) this.oldPush(newElement)
     return this.length
   }
 }

 /**
  * Write a tiredForEach prototype function that runs a function on each element of an array,
  *  but makes the user wait a specified amount of time before calling it again.
  */
 Array.prototype.tiredForEach = function (cb, time) {
   this.callCounter = (this.callCounter || 0)
   if(this.callCounter > 0){
     console.log(`Too tired. Please wait ${time}ms`)
     
      this.forEach((e,i,arr)=>{
        setTimeout(()=>{cb(e,i,arr)},time)
      })
    this.callCounter = 0
   }
   else{
   this.forEach((e,i,arr)=>{
     cb(e,i,arr)
   })
   this.callCounter = 1
  }
 }

