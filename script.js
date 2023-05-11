function threeSum(arr, target) {
// write your code here 
	 arr.sort();
	let dist = 1000000000;
	let ans;
	for(let i=0;i<arr.length;i++){
		let j=i+1;
		let k = arr.length-1;
		while(j<k){
			let temp = arr[i]+arr[j]+arr[k];
			let currDist = Math.abs(temp-target);
            if(currDist<dist){
				ans = temp;
				dist = currDist;
			}
			
			if(temp<target){
				j++;
			}
			else if (temp>target) {
				k--;
			}
			else{
				j++;
				k--;
			}
		}
	}
  return ans;
}
// console.log(threeSum([-1,2,1,-4], 1));
			module.exports = threeSum;