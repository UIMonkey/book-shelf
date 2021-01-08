
/**
 * Function to convert string to titlecase
 * @param str 
 */
export const titleCase = (str: string) => {

    if (!str) {
        return '';
    }

    let strArry = str.toLowerCase().split(' ');
 
    let final = [ ];
 
     for(let  word of strArry){
       final.push(word.charAt(0).toUpperCase()+ word.slice(1));
     }
 
   return final.join(' ')
 }