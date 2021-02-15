export const cartAdd = (id,title,rating,cost,img) => ({
    type : 'Add',
    item : {
        id    : id,
        title : title,
        rating: rating,
        cost  : cost,
        img   : img,
     }  
})

export const cartDel = (id) => ({
    type : 'Del',
    item : {
        id    : id,
    }
})