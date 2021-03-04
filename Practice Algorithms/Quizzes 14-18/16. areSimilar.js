// 16. Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays. Given two arrays a and b, check whether they are similar.

function areSimilar(a, b) {
      if (a.length !== b.length) return false;

      let diff = [];
      
      for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) { 
          diff.push(i); 
          
          if (diff.length > 2) return false; 
          
          if (diff.length === 2) {
            
            if (a[diff[0]] !== b[diff[1]] || a[diff[1]] !== b[diff[0]]) {
              return false;
            }
          }
        }
      }
      return true; 
}
